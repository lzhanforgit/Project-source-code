import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController,ViewController, ToastController } from 'ionic-angular';
import { RecipeService } from '../../providers/recipe.service';
import {Storage} from '@ionic/storage';

import { AddToMenuPage } from '../add-to-menu/add-to-menu';
import { LoginOrRegisterPage } from '../login-or-register/login-or-register';
import { UploadWorkPage } from '../upload-work/upload-work';
/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {
  details: any;
  steps: any;
  _name: any;
  _cover_pic: any;
  _descripe: any;
  _cook_times: any;
  _collect_times: any;
  _create_time: any;
  _tips: any;
  _creater: any;
  _creater_id: any;
  MenuWorks: any;
  length: any;
  MenuLists: any;
  flag:boolean;

  @ViewChild(Slides) mySlides:Slides;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private recipeSer: RecipeService,
    private storage: Storage,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RecipeDetailPage');
  }
  ionViewWillEnter() {
    // console.log(this.navParams.get('recipeId'));
    const val = this.navParams.get('recipeId');//菜谱id
    if (val) {
      this.recipeSer.getDetails(val).then((data) => {
        // console.log(data);
        this.details = data;
        this._name = data[0].name;
        this._cover_pic = data[0].cover_pic;
        this._descripe = data[0].descripe;
        this._cook_times = data[0].cook_times;
        this._collect_times = data[0].collect_times;
        this._create_time = data[0].create_time;
        this._tips = data[0].tips;
        this._creater = data[0].creater;
        this._creater_id = data[0].creater_id;
      });

      this.recipeSer.getSteps(val).then((data) => {
        // console.log(data);
        if (data.length) {
          this.steps = data;
        }
      });

      this.recipeSer.getMenuWorks(val).then((data) => {
        if (data.length) {
          this.MenuWorks = data;
        }
        else {
          document.getElementById('work').style.display = 'none';
        }
        this.length = data.length;
      });

      this.recipeSer.getMenuLists(val).then((data) => {
        if (data.length) {
          this.MenuLists = data;
        }
        else {
          document.getElementById('menu').style.display = 'none';
        }
      });
      this.storage.ready().then(() => {
        this.storage.get('userId').then((userid) => {
          this.recipeSer.checkcollect(val, userid).then((data) => {
            console.log(data.stageCode+'stagecode');
            if (data.stageCode == 1) {
              this.flag = false;
            }
            else {
              this.flag = true;
            }
          })
        })
      })
    }
  }

  back(){
    this.navCtrl.pop();
  }
  addToMenu(){
    const val= this.navParams.get('recipeId');
    let modalPage = this.modalCtrl.create(AddToMenuPage,{"recipeId":val});
    modalPage.present();
  }
  toUpload(){
    const val= this.navParams.get('recipeId');
    let modalPage = this.modalCtrl.create(UploadWorkPage,{"recipeId":val});
    modalPage.present();
  }
  slideChanged() {
    let currentIndex = this.mySlides.getActiveIndex();
    this.mySlides.startAutoplay();
  }

  collect() {
    const val = this.navParams.get('recipeId');//菜谱id
    this.storage.ready().then(()=>{
      this.storage.get('userId').then(id=>{
        if(id){
          this.recipeSer.collectRecipe(val,id).then((data)=> {
            this.flag=false;
            return data;
          });
        }else{
          const toast = this.toastCtrl.create({
            message: '请先登录',
            duration: 3000,
            position: 'bottom'
          });
          toast.onDidDismiss(() => {
          });
          toast.present();
          this.viewCtrl.dismiss();
          this.navCtrl.push(LoginOrRegisterPage);
        }
      })
    })
  }
  uncollect() {
    const val = this.navParams.get('recipeId');//菜谱id
    this.storage.ready().then(()=>{
      this.storage.get('userId').then(id=>{
        if(id){
          this.recipeSer.uncollectRecipe(val,id).then((data)=> {
            this.flag=true;
            return data;
          });
        }else{
          const toast = this.toastCtrl.create({
            message: '请先登录',
            duration: 3000,
            position: 'bottom'
          });
          toast.onDidDismiss(() => {
          });
          toast.present();
          this.viewCtrl.dismiss();
          this.navCtrl.push(LoginOrRegisterPage);
        }
      })
    })
  }
}
