import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { PersonalPage } from '../personal/personal';

/**
 * Generated class for the MyFansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-fans',
  templateUrl: 'my-fans.html',
})
export class MyFansPage {

  allFans:any;
  personal_id:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userSer: UsersService,
    public modalCtrl: ModalController,
  ) {

  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyFansPage');
  }
  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        if(myid) {
          this.userSer.getFans(myid).then((data) => {
            console.log(data);
            this.allFans = data;
          })
        }
      })
    })
  }
  back(){
    this.navCtrl.pop();
  }
  toPersonal(index){
    this.personal_id=this.allFans[index].id;
    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":this.personal_id});
    modelPage.present();
  }
}
