import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import {PositionsService} from '../../providers/positions.service';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
  providers:[PositionsService]
})
export class PostDetailPage {
  post:any;
  pet='kittens';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public positionSer:PositionsService
  ) {
  }
  ionViewDidEnter(){
    let id=this.navParams.get('post_id');
    this.positionSer.getPositionById(id).then(post=>{
      this.post=post;
      console.log(post);
    })

  }
  back(){
    this.navCtrl.pop();
    // this.navCtrl.push(TabsPage);
    // this.viewCtrl.dismiss({"newName":"lzhan"});

  }

  closeView(){
    this.viewCtrl.dismiss();
  }

  ionViewWillLeave(){
    console.log('detail----444444444');
  }
}
