import { Component } from '@angular/core';
import {NavController, ViewController,ModalController } from 'ionic-angular';

import { ChartsPage } from './../../pages/charts/charts';
import { PersonalPage } from '../personal/personal';
import { MenuDatailPage } from '../menu-datail/menu-datail';

import {MenuServiceService} from './../../providers/menu-service.service';

/**
 * Generated class for the NewMenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-menus',
  templateUrl: 'new-menus.html',
  providers: [MenuServiceService]

})
export class NewMenusPage {
  Alllists:any;

  constructor(
    public navCtrl: NavController,
    private MenuD: MenuServiceService,
    public modalCtrl: ModalController,

    public viewCtrl: ViewController,
    // public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMenusPage');
  }
  back(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(ChartsPage);
  }
  ngOnInit() {
    const that = this;
    that.MenuD.getIndex(function(result){
      that.Alllists = result;
    });
  }

  toPersonal(id){
    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":id});
    modelPage.present();
  }
  toMenuDetail(id){
    console.log(id);
    const modelPage=this.modalCtrl.create(MenuDatailPage,{"menuId":id});
    modelPage.present();
  }
}
