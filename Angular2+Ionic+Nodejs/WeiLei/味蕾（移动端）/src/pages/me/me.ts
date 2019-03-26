import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {ModifyInfoPage} from '../modify-info/modify-info';
import {MyFocusPage} from '../my-focus/my-focus';
import {MyFansPage} from '../my-fans/my-fans';
import {SettingPage} from '../setting/setting';
import {MessageBoardPage} from '../message-board/message-board';
import {UsersService} from '../../providers/users.service';
import {LoginOrRegisterPage} from "../login-or-register/login-or-register";
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { CreateRecipePage } from '../create-recipe/create-recipe';
import { MenuDatailPage } from '../menu-datail/menu-datail';
import { AboutPage } from '../about/about';

import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  myname: string;
  headpic: any;
  mySex: any;
  mysignature: string;
  myFoucsNum: any;
  myFans: any;
  mycreate = 'recipe';
  products: any;
  menus2: any;
  recipes2: any;
  norecipsFlag: any;
  nomenuFlag: any;
  noproducttFlag: any;
  workid: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private storage: Storage,
              private userSer: UsersService,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
  ) {
  }

  ionViewWillEnter() {
    // console.log('ionViewDidLoad PersonalPage');
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        // console.log(user_id);
        if (!val) {
          const modelPage = this.modalCtrl.create(LoginOrRegisterPage);
          modelPage.present();
        } else {
          this.userSer.getMyInfo(val).then((data) => {
            // console.log(data);
            if(data){
              this.headpic = data[0].user_icon;
              this.myname = data[0].name;
              this.mySex = data[0].name;
              this.mysignature = data[0].signature;
            }

            // console.log(this.headpic);

          })
          this.userSer.getFocus(val).then((data) => {
            this.myFoucsNum = data.length;
          })
          this.userSer.getFans(val).then((data) => {
            this.myFans = data.length;
            // console.log(this.myFans+'个粉丝');

          })
          this.userSer.getMenu(val).then(data => {
            if (data.length > 0) {
              this.recipes2 = data;
              // console.log(this.recipes2);
              this.norecipsFlag = false;
            } else {
              this.norecipsFlag = true;
            }
          })
          this.userSer.getMenuGather(val).then((data) => {
            if (data.length) {
              this.menus2 = data;
              // console.log(this.menus2);
              this.nomenuFlag = false;
            } else {
              this.nomenuFlag = true;
            }
          })
          this.userSer.getPersonalWoks(val).then((data) => {
            if (data.length > 0) {
              this.products = data;
              // console.log(this.products);
              this.noproducttFlag = false;
            } else {
              this.noproducttFlag = true;
            }
          })
        }
      })
    })
  }
  toCreate(){
    const modelPage=this.modalCtrl.create(CreateRecipePage);
    modelPage.present();
  }
  toAbout(id){

    const modelPage=this.modalCtrl.create(AboutPage,{"personalId":id});
    modelPage.present();
  }
  toRecipeDetail(id){
    // console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }
  toMenuDetail(id){
    // console.log(id);
    const modelPage=this.modalCtrl.create(MenuDatailPage,{"menuId":id});
    modelPage.present();
  }

  tomModifyInfo() {
    const modelPage = this.modalCtrl.create(ModifyInfoPage);
    modelPage.present();
  }

  toMyFocus() {
    const modelPage = this.modalCtrl.create(MyFocusPage);
    modelPage.present();
  }

  toMyFans() {
    const modelPage = this.modalCtrl.create(MyFansPage);
    modelPage.present();
  }

  toSetting() {
    const modelPage = this.modalCtrl.create(SettingPage);
    modelPage.present();
  }
  toMessageboard() {
    const modelPage = this.modalCtrl.create(MessageBoardPage);
    modelPage.present();
  }
  delWork(index) {
    this.workid = this.products[index].id;

    const alert = this.alertCtrl.create({
      title: '你确定要删除该作品吗?',
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
            this.userSer.delWork(this.workid).then((data) => {
              console.log(data);
              if(data.stageCode==1){
                //删除成功则重新获取一次所有作品
                this.storage.ready().then(()=> {
                  this.storage.get('userId').then((myid) => {
                    // console.log(myid);
                    if (myid) {
                      this.userSer.getPersonalWoks(myid).then((data) => {
                        if (data.length > 0) {
                          this.products = data;
                          // console.log(this.products);
                          this.noproducttFlag = false;
                        } else {
                          this.noproducttFlag = true;
                        }
                      })
                    }
                  })
                })
                const toast = this.toastCtrl.create({
                  message: '该作品删除成功',
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
}
