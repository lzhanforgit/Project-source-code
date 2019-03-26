import { Component } from '@angular/core';
import { NavController , NavParams, ModalController,ToastController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {InfoServiceService} from '../../providers/info-service.service';
import {LoginOrRegisterPage} from "../login-or-register/login-or-register";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Allupdate: any;
  Alldata:any;
  i:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private infoSer: InfoServiceService,
    private storage: Storage,
    public toastCtrl: ToastController,
  ) {

  }

  ionViewWillEnter() {
    this.i=1;
    // console.log('ionViewDidLoad PersonalPage');
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        // console.log(user_id);
        if (!val) {
          const modelPage = this.modalCtrl.create(LoginOrRegisterPage);
          modelPage.present();
        } else {
          console.log("1111");
          this.infoSer.getSocialUpdate(val).then(data=>{
            console.log(data);
            if(data && data.length){
              this.Allupdate=data.slice(0,4);
              this.Alldata=data;
            }else{
              this.Allupdate = null;
            }

            })
        }
      })
    })
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation', infiniteScroll);

    setTimeout(() => {

      if(this.Alldata.slice(4*this.i,4*this.i+4).length>0){
        this.Allupdate=this.Allupdate.concat(this.Alldata.slice(4*this.i,4*this.i+4));
        this.i++;
      }else{
        infiniteScroll.enabled=false;
        const toast = this.toastCtrl.create({
          message: '已经到底啦！',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          // console.log('删除成功');
        });
        toast.present();
      }

      infiniteScroll.complete();
    }, 1000);
  }

}
