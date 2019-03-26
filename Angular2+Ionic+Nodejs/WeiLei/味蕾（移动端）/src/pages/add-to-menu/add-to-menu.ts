import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsersService } from '../../providers/users.service';
import { RecipeService } from '../../providers/recipe.service';
import { CreateMenuPage } from '../create-menu/create-menu';
/**
 * Generated class for the AddToMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-to-menu',
  templateUrl: 'add-to-menu.html',
})
export class AddToMenuPage {
  menus2: any;
  flag:boolean;
  details: any;
  _recipe:any;
  _name:any;
  _descripe:any;
  _collect_times:any;
  _creater_time:any;
  _creater:any;
  _creater_id:any;
  _usericon:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userSer: UsersService,
    private recipeSer: RecipeService,
    public toastCtrl: ToastController,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToMenuPage');
  }
  close(){
    this.navCtrl.pop();
  }
  ionViewWillEnter(){
    this.storage.ready().then(()=>{
      this.storage.get('userId').then((val) => {
        if (val) {
          this.userSer.getMenuGather(val).then((data) => {
            // if(data.length) {
            this.menus2 = data;
          })
        }
      })
    })
  }
  add(menuId){
    const val= this.navParams.get('recipeId');
    this.recipeSer.addMenu(val, menuId).then((data)=>{
      if (data.stageCode == '1') {
        this.flag=false;
        const toast = this.toastCtrl.create({
          message: '加入菜单成功',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
        });
        toast.present();
      }else {
        this.flag=false;
        const toast = this.toastCtrl.create({
          message: '加入菜单失败',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
        });
        toast.present();
      }
    });
  }
  del(menuId){
    const val= this.navParams.get('recipeId');
    this.recipeSer.delRfromL(val, menuId).then((data)=>{
      if(data.stageCode=='1'){
        this.recipeSer.getMenuDetails(val).then((data)=> {
          if(data.length){
            this._name = data[0].name;
            this._collect_times = data[0].collect_times;
            this._descripe = data[0].descripe;
            this._creater = data[0].creater;
            this.details = data.length;
            this._creater_time = data[0].creater_time.substring(0,10);
            this._creater_id = data[0].creater_id;
            this._usericon=data[0].user_icon;
            this._recipe=data;
          }
        })
        // console.log('删除成功');
        this.flag=true;
        const toast = this.toastCtrl.create({
          message: '删除成功',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
        });
        toast.present();
      }
      else {
        this.flag=true;
        const toast = this.toastCtrl.create({
          message: '删除失败',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
        });
        toast.present();
      }
    });
  }
  createMenu(){
    const modelPage = this.modalCtrl.create(CreateMenuPage);
    modelPage.present();
  }

}
