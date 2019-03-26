import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {AlertController} from 'ionic-angular';


// import {ModifyInfoPage} from '../modify-info/modify-info';
import {MyFocusPage} from '../my-focus/my-focus';
import {MyFansPage} from '../my-fans/my-fans';
// import {SettingPage} from '../setting/setting';
import {MessageBoardPage} from '../message-board/message-board';
import {UsersService} from '../../providers/users.service';
import {LoginOrRegisterPage} from "../login-or-register/login-or-register";
import {LoginPage} from "../login/login";
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  name: string;
  headpic: any;
  Sex: any;
  signature: string;
  FoucsNum: any;
  Fans: any;
  mycreate = 'recipe';
  products: any;
  menus2: any;
  recipes2: any;
  personalId: any;
  norecipsFlag1: any;
  nomenuFlag1: any;
  noproducttFlag1: any;
  followFlag: boolean;
  zanFlag: any = [];
  myid: any;
  workId:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private storage: Storage,
              private userSer: UsersService,
              public alertCtrl: AlertController,) {
    this.personalId = this.navParams.get('personalId');
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        this.myid = myid;
      })
    })
  }

  back() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

  ionViewWillEnter() {
    console.log(this.personalId);
    this.userSer.getMyInfo(this.personalId).then((data) => {
      this.headpic = data[0].user_icon;
      this.name = data[0].name;
      this.Sex = data[0].sex;
      this.signature = data[0].signature;
    })
    this.userSer.getFocus(this.personalId).then((data) => {
      this.FoucsNum = data.length;
    })
    this.userSer.getFans(this.personalId).then((data) => {
      this.Fans = data.length;
      // console.log(this.myFans+'个粉丝');
    })
    this.userSer.getMenu(this.personalId).then(data => {
      if (data.length > 0) {
        this.recipes2 = data;
        console.log(this.recipes2);
        this.norecipsFlag1 = false;
      } else {
        this.norecipsFlag1 = true;
      }
    })
    this.userSer.getMenuGather(this.personalId).then((data) => {
      if (data.length) {
        this.menus2 = data;
        console.log(this.menus2);
        this.nomenuFlag1 = false;
      } else {
        this.nomenuFlag1 = true;
      }
    })
    this.userSer.getPersonalWoks(this.personalId).then((data) => {
      if (data.length > 0) {
        this.products = data;
        // console.log(this.products);
        this.noproducttFlag1 = false;
        for (let i = 0; i < data.length; i++) {
          this.userSer.checkZan(data[i].id, this.myid).then((result) => {
            if (result.stageCode == 1) {
              this.zanFlag[i] = false;
            } else {
              this.zanFlag[i] = true;
            }
          })
        }
      } else {
        this.noproducttFlag1 = true;
      }
    })
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        if (myid) {
          this.userSer.checkFollow(this.personalId, myid).then((result) => {
            if (result.stageCode == 1) {
              this.followFlag = false;
            } else {
              this.followFlag = true;
            }
          })
        }
      })
    })
  }
  zan(index){
    this.workId=this.products[index].id;
    // console.log(this.workId+':作品的id');
    // console.log(this.myid+'：我的id');;
    if(this.myid){
      this.zanFlag[index]=false;
      // console.log(this.zanFlag[index]+'：赞的flag');
      this.userSer.zan(this.workId,this.myid).then((data)=>{
        console.log(data);
      })
      this.products[index].thumb_numbers+=1;
    }else{
      //去登陆
      const alert = this.alertCtrl.create({
        title: '你还没有登陆，要去登陆吗？',
        buttons: [
          {
            text: '取消',
            role: '取消',
            handler: () => {
            }
          },
          {
            text: '登陆',
            handler: () => {
              const modelPage = this.modalCtrl.create(LoginPage);
              modelPage.present();
            }
          }
        ]
      });
      alert.present();
    }
  }
  unzan(index){
    this.workId=this.products[index].id;
    // console.log(this.workId+':作品的id');
    // console.log(this.myid+'：我的id');;
    if(this.myid){
      this.zanFlag[index]=true;
      // console.log(this.zanFlag[index]+'：赞的flag');
      this.userSer.unzan(this.workId,this.myid).then((data)=>{
        // console.log(data);
      })
      this.products[index].thumb_numbers-=1;
    }
    else{
      //去登陆
      const alert = this.alertCtrl.create({
        title: '你还没有登陆，要去登陆吗？',
        buttons: [
          {
            text: '取消',
            role: '取消',
            handler: () => {
            }
          },
          {
            text: '登陆',
            handler: () => {
              const modelPage = this.modalCtrl.create(LoginPage);
              modelPage.present();
            }
          }
        ]
      });
      alert.present();
    }
  }

  follow() {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        if (myid) {
          this.followFlag = false;
          this.userSer.follow(this.personalId, myid).then((result) => {
            console.log(result);
          })
        } else {
          const alert = this.alertCtrl.create({
            title: '你还没有登陆，要去登陆吗？',
            buttons: [
              {
                text: '取消',
                role: '取消',
                handler: () => {
                }
              },
              {
                text: '登陆',
                handler: () => {
                  const modelPage = this.modalCtrl.create(LoginPage);
                  modelPage.present();
                }
              }
            ]
          });
          alert.present();
        }
      })
    })
  }

  unfollow() {
    this.followFlag = true;
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        this.userSer.unfollow(this.personalId, myid).then((result) => {
          console.log(result);
        })
      })
    })
  }

  toMyFocus() {
    const modelPage = this.modalCtrl.create(MyFocusPage, {"personalId": this.personalId});
    modelPage.present();
  }

  toMyFans() {
    const modelPage = this.modalCtrl.create(MyFansPage, {"personalId": this.personalId});
    modelPage.present();
  }

  toMessageboard() {
    this.personalId = this.navParams.get('personalId')
    const modelPage = this.modalCtrl.create(MessageBoardPage, {"personal_id": this.personalId});
    modelPage.present();
  }

  toRecipeDetail(id){
    console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }
}
