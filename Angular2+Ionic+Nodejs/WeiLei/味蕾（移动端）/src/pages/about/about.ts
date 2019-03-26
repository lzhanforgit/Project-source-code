import { Component } from '@angular/core';
import { NavController, NavParams,ModalController} from 'ionic-angular';

import {Storage} from '@ionic/storage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { MenuDatailPage } from '../menu-datail/menu-datail';
import {UsersService} from './../../providers/users.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  flag:any;
  PersonalMenu:any;
  favorite:any;
  pet: any = '收藏的菜谱';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userSer: UsersService,
    public modalCtrl: ModalController,) {

  }

  ionViewWillEnter(){
    const that=this;
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        if(myid){
          let val=myid;
          // console.log(val);
          that.userSer.getCollectRecipes(val).then((data) => {
            if(data.length > 0){
              this.PersonalMenu=data;
              this.flag=false;

            }else{
              this.flag=true;
            }
          });
          that.userSer.getFavorite(val).then((data) =>{
            // console.log(data);
            if(data.length){
              this.favorite=data;
              this.flag=false;

            }else{
              this.flag=true;
            }
          });
        }
      })
    })
  }

  toRecipeDetail(id){
    // console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }

  toMenuDetail(id){
 //   console.log(id);
    const modelPage=this.modalCtrl.create(MenuDatailPage,{"menuId":id});
    modelPage.present();
  }

}
