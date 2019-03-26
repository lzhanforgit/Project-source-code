import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
// import {UsersService} from '../../providers/users.service';
import {PersonalPage} from '../personal/personal';
import {MenuServiceService} from '../../providers/menu-service.service';
import {RecipeDetailPage} from '../recipe-detail/recipe-detail';
import {ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';


/**
 * Generated class for the MenuDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-datail',
  templateUrl: 'menu-datail.html',
})
export class MenuDatailPage {
  menuId: any;
  myid: any;
  menuDetails: any;

  menu_name: any;
  menu_collect_times: any;
  menu_descripe: any;
  menu_creater: any;
  details: any;
  menu_create_time: any;
  menu_creater_id: any;
  menu_usericon: any;
  menu_recipe: any;
  delFlag: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              // private userSer: UsersService,
              public modalCtrl: ModalController,
              public MenuD: MenuServiceService,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
    this.menuId = this.navParams.get('menuId');
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        this.myid = myid;
      })
    })
  }

  ionViewWillEnter() {
    this.MenuD.getMenudetail(this.menuId).then((data) => {
      console.log(data);
      if (data.length > 0) {
        // this.menuDetails=data;
        this.menu_name = data[0].name;
        this.menu_collect_times = data[0].collect_times;
        this.menu_descripe = data[0].descripe;
        this.menu_creater = data[0].creater;
        this.details = data.length;
        this.menu_create_time = data[0].creater_time.substring(0, 10);
        this.menu_creater_id = data[0].creater_id;
        this.menu_usericon = data[0].user_icon;
        this.menu_recipe = data;
        if (this.menu_creater_id == this.myid) {
          this.delFlag = true;
        } else {
          this.delFlag = false;
        }
      }
    })
  }

  toRecipeDetail1(id) {
    // console.log(id);
    const modelPage = this.modalCtrl.create(RecipeDetailPage, {"recipeId": id});
    modelPage.present();
  }

  toPersonal1(personalId) {
    const modelPage = this.modalCtrl.create(PersonalPage, {"personalId": personalId});
    modelPage.present();
  }

  delRecipeFromMenu(recipeid) {
    const alert = this.alertCtrl.create({
      title: '你确定要移除该菜谱吗?',
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
            this.MenuD.delRecipeFromMenu(recipeid, this.menuId).then((data) => {
              console.log(data);
              if (data.stageCode == 1) {
                //删除成功则重新获取一次菜单中的的菜谱
                this.MenuD.getMenudetail(this.menuId).then((data) => {
                    console.log(data);
                    if (data.length > 0) {
                      this.menu_recipe = data;
                      if (this.menu_creater_id == this.myid) {
                        this.delFlag = true;
                      } else {
                        this.delFlag = false;
                      }
                    } else {
                      //该菜单中没有菜谱的情况还没写。。。
                    }
                    const toast = this.toastCtrl.create({
                      message: '该菜谱已从这个菜单移除',
                      duration: 3000,
                      position: 'bottom'
                    });

                    toast.onDidDismiss(() => {
                      // console.log('删除成功');
                    });
                    toast.present();
                  }
                )
              }
              else {
                //删除失败
                const toast = this.toastCtrl.create({
                  message: '移除菜谱失败',
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDatailPage');
  }

  back() {
    this.navCtrl.pop();
  }
}
