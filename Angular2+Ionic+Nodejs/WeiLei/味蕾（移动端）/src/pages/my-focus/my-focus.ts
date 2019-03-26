import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { PersonalPage } from '../personal/personal';

/**
 * Generated class for the MyFocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-focus',
  templateUrl: 'my-focus.html',
})
export class MyFocusPage {
  allFocus: any;
  personal_id:any;
  personalId:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private userSer: UsersService,
              public modalCtrl: ModalController,

  ) {
    this.personalId = this.navParams.get('personalId')

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyFocusPage');
  }

  ionViewWillEnter(){
    this.storage.ready().then(() => {
      this.storage.get('userId').then((myid) => {
        if(myid) {
          let val=myid;
          if(this.personalId&&this.personalId!=myid){
            console.log(this.personalId);
            val=this.personalId;
          }else{
            val=myid;
          }
          console.log(val);
          this.userSer.getFocus(val).then((data) => {
            console.log(data);
            this.allFocus = data;
          })
        }
      })
    })
  }
  back() {
    this.navCtrl.pop();
  }
  toPersonal(index){
    console.log('hhh');
    this.personal_id=this.allFocus[index].id;
    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":this.personal_id});
    modelPage.present();
  }
}
