import { Component, } from '@angular/core';
import { ViewController, NavController,ModalController } from 'ionic-angular';

import { HomePage } from './../../pages/home/home';
import { HotMenuPage } from './../../pages/hot-menu/hot-menu';
import { HotMenusPage } from './../../pages/hot-menus/hot-menus';
import { NewMenuPage } from './../../pages/new-menu/new-menu';
import { NewMenusPage } from './../../pages/new-menus/new-menus';
import { RecipeDetailPage } from './../../pages/recipe-detail/recipe-detail';
import { MenuDatailPage } from './../../pages/menu-datail/menu-datail';

import { MenuServiceService } from './../../providers/menu-service.service';

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
  providers: [MenuServiceService]

})
export class ChartsPage {
  AllMenush:any;
  Alllistsh:any;
  AllMenus:any;
  Alllists:any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private MenuD: MenuServiceService,
    public viewCtrl: ViewController,) {
  }

  back(){
    this.viewCtrl.dismiss();
  }

  hotMenu() {
    const modelPage = this.modalCtrl.create(HotMenuPage);
    modelPage.present();
  }
  hotMenus() {
    const modelPage = this.modalCtrl.create(HotMenusPage);
    modelPage.present();
  }
  newMenu() {
    const modelPage = this.modalCtrl.create(NewMenuPage);
    modelPage.present();
  }
  newMenus() {
    const modelPage = this.modalCtrl.create(NewMenusPage);
    modelPage.present();
  }

  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenu(function(result){
      that.AllMenush = result;
    });
    that.MenuD.getIndex(function(result){
      that.Alllistsh = result;
    });
    that.MenuD.getIndexMenu(function(result){
      that.AllMenus = result;
    });
    that.MenuD.getIndex(function(result){
      that.Alllists = result;
    });
  }
  toRecipeDetail(id){
    // console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }
  toMenuDetail(id){
    console.log(id);
    const modelPage=this.modalCtrl.create(MenuDatailPage,{"menuId":id});
    modelPage.present();
  }
}
