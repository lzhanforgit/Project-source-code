import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import {SearchResultPage} from '../search-result/search-result';
import {GlobalPropertyService} from '../../providers/global-property.service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',

})
export class SearchPage {

  searchItem:any =['猪蹄','蛋糕','早餐','可乐鸡翅','蛋挞','家常菜','糖醋排骨','面包','豆腐','南瓜饼']
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private glo:GlobalPropertyService,
    public modalCtrl:ModalController) {
  }


  back(){
    this.viewCtrl.dismiss();
  }
  search(s){
    this.glo._searchText = s;
    const modelPage=this.modalCtrl.create(SearchResultPage);
    modelPage.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
