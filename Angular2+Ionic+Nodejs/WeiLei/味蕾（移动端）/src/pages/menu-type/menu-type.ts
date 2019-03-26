import {Component} from '@angular/core';
import {ViewController, NavController, NavParams} from 'ionic-angular';
// import { SearchPage } from '../../pages/search/search';
import {SearchResultPage} from '../search-result/search-result';


import {MenuServiceService} from './../../providers/menu-service.service';
import {GlobalPropertyService} from './../../providers/global-property.service';


@Component({
  selector: 'page-menu-type',
  templateUrl: 'menu-type.html',
  providers: [MenuServiceService, GlobalPropertyService]
})
export class MenuTypePage {
  // imgs = [
  //   {
  //     'img': '下午茶.jpg',
  //   }
  //   ,
  //   {
  //     'img': '下饭菜.jpg',
  //   },
  //   {
  //     'img': '甜品.jpg',
  //   },
  //   {
  //     'img': '烘培.jpg',
  //   },
  // ];
  hot = [];
  sweet = [];
  meat = [];
  shoup = [];
  vagetable = [];
  i = 0;
  _stext: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private MenuD: MenuServiceService,
              // private glo: GlobalPropertyService,
  ) {

  }

  ionViewDidLoad() {
  }

  back() {
    this.viewCtrl.dismiss();
    // this.navCtrl.push(HomePage);
  }

  ngOnInit() {
    const that = this;
    that.MenuD.getclssify(function (result) {
      if (result) {
        for (that.i = 0; that.i < result.length; that.i++) {
          if (result[that.i].class_id == 1) {
            that.hot.push(result[that.i]);
            // console.log(that.hot);
          }
          else if (result[that.i].class_id == 2) {
            that.sweet.push(result[that.i]);
          }
          else if (result[that.i].class_id == 3) {
            that.meat.push(result[that.i]);

          } else if (result[that.i].class_id == 4) {
            that.shoup.push(result[that.i]);
          }
          else {
            that.vagetable.push(result[that.i]);
          }
        }
      }
    });

  }

  jumpsearch(text) {
    // sessionStorage.setItem('text', text);
   // console.log(text);
    this.navCtrl.push(SearchResultPage,{tosearch:text});

    // this.router.navigate(['/search/recipe']);
  }


}
