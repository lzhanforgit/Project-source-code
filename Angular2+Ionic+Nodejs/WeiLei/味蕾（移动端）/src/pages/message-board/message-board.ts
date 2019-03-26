import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {LoginOrRegisterPage} from "../login-or-register/login-or-register";
import { PersonalPage } from '../personal/personal';
/**
 * Generated class for the MessageBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-board',
  templateUrl: 'message-board.html',
})
export class MessageBoardPage {
  // messageTxt:any;
  allMessage:any;
  message_id:number;
  personalId:any;
  shanchuFlag=false;
  personal_id:any;
  nomessageFlag=false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private userSer: UsersService,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
  ) {
    this.personalId=this.navParams.get('personal_id');
    console.log(this.personalId);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MessageBoardPage');
  }
  ionViewWillEnter(){
    this.storage.ready().then(()=> {
      this.storage.get('userId').then((myid) => {
        // console.log(myid);
        let Id=myid;
        if (myid) {
          if(this.personalId){
            if(this.personalId!=myid){
              this.shanchuFlag=false;
              Id=this.personalId;
            }else{
              this.shanchuFlag=true;
              Id=myid;
            }
          }else{
            this.shanchuFlag=true;
            Id=myid;
          }
          this.userSer.getAllmessages(Id).then((data)=>{
            if(data.length>0){
              this.allMessage=data.reverse();
              console.log(this.allMessage);
              this.nomessageFlag=false;
            }else{
              this.nomessageFlag=true;
            }
          })
        }
      })
    })
  }
  back() {
    this.navCtrl.pop();
  }
  toPersonal(index){
    console.log('hhh');
    this.personal_id=this.allMessage[index].commenter_id;
    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":this.personal_id});
    modelPage.present();
  }
  delMessage(index){
    // console.log(index);
    const alert = this.alertCtrl.create({
      title: '你确定要删除这条留言吗?',
      buttons: [
        {
          text: '取消',
          role: '取消',
          handler: () => {
            // console.log('取消删除');
          }
        },
        {
          text: '删除',
          handler: () => {
            // console.log('确定删除');
            this.message_id=this.allMessage[index].id;
            // console.log(this.message_id);
            this.userSer.delMessage(this.message_id).then((data)=>{
              // console.log(data);
              if(data.stageCode==1){
                //删除成功则重新获取一次所有留言
                this.storage.ready().then(()=> {
                  this.storage.get('userId').then((myid) => {
                    // console.log(myid);
                    if (myid) {
                      this.userSer.getAllmessages(myid).then((data)=>{
                        // console.log(data);
                        console.log(data.length);
                        if(data.length>0){
                          this.allMessage=data.reverse();
                          this.nomessageFlag=false;
                        }else{
                          this.allMessage=null;
                          this.nomessageFlag=true;
                        }
                      })
                    }
                  })
                })
                const toast = this.toastCtrl.create({
                  message: '该条留言删除成功',
                  duration: 3000,
                  position: 'bottom'
                });

                toast.onDidDismiss(() => {
                  // console.log('删除成功');
                });
                toast.present();
              }else{
                //删除失败
                const toast = this.toastCtrl.create({
                  message: '删除留言失败',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.onDidDismiss(() => {
                  // console.log('删除失败');
                });
                toast.present();
              }
            })
          }
        }
      ]
    });
    alert.present();
  }

  //别人的个人中心和我的个人中心留言不相同
  toSend(message) {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((id) => {
        // console.log(id);
        let val=id;
        if (id) {
          if(this.personalId){
            if(this.personalId==id){
              //有id和personalid但是两个相同，则是自己给自己留言
              val=id;
            }else{
              //有id也有personalid，但是不相同，则是给别人留言
              val=this.personalId
            }
          }else{
            //有id没有personalId，则是自己给自己留言
            val=id;
          }
          this.userSer.addComment(val,id,message).then((data)=>{
            // console.log(data);
            if(data.stageCode==1){
              //留言成功则重新获取一次所有留言
                    this.userSer.getAllmessages(val).then((data)=>{
                      // console.log(data);
                      if(data.length>0) {
                        this.allMessage=data.reverse();
                        console.log(this.allMessage);
                        this.nomessageFlag=false;
                      }else{
                        this.nomessageFlag=true;
                      }
                    })
              const toast = this.toastCtrl.create({
                message: '您的留言发表成功',
                duration: 3000,
                position: 'bottom'
              });
              toast.onDidDismiss(() => {
                // console.log('留言成功');
              });
              toast.present();
            }else{
              //留言失败
              const toast = this.toastCtrl.create({
                message: '您的留言发表失败',
                duration: 3000,
                position: 'bottom'
              });
              toast.onDidDismiss(() => {
                // console.log('留言失败');
              });
              toast.present();
            }
            // $('#message_textarea').val('');
          })
        }else{
          //连id都没有，则不能发布留言，去登录注册
          const modelPage = this.modalCtrl.create(LoginOrRegisterPage);
          modelPage.present();
        }
      })
    })
  }



}
