import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {MenuServiceService} from '../../providers/menu-service.service';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import {GlobalPropertyService} from '../../providers/global-property.service';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  pet:any='default';
  searchMenus:any;
  _searchText:any;
  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private MeniuSer:MenuServiceService,
    public modalCtrl: ModalController,
    private glo:GlobalPropertyService,
    public navParams: NavParams) {
  }
  back(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    let adsname=this.navParams.get('tosearch');
    if(adsname) {
      this.glo._searchText = adsname;
    }
    this._searchText = this.glo._searchText;
    this.MeniuSer.searchMenus().then(data=>{
      this.searchMenus=data;
      // console.log(data);
    });
  }

  toRecipeDetail(id){
    //console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }

}
