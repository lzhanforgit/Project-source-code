import { Component } from '@angular/core';
import {NavController, ViewController,ModalController } from 'ionic-angular';
import { ChartsPage } from './../../pages/charts/charts';
import { PersonalPage } from '../personal/personal';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

import {MenuServiceService} from './../../providers/menu-service.service';


@Component({
  selector: 'page-new-menu',
  templateUrl: 'new-menu.html',
  providers: [MenuServiceService]

})
export class NewMenuPage {
  AllMenus:any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private MenuD: MenuServiceService,
    public modalCtrl: ModalController,

    // public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMenuPage');
  }
  back(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(ChartsPage);
  }
  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenu(function(result){
      that.AllMenus = result;
    });
  }
  toPersonal(id){
    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":id});
    modelPage.present();
  }
  toRecipeDetaill(id){
    // console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }
}

