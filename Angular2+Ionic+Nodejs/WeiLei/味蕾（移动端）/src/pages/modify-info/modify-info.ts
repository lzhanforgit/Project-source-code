import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {UsersService} from '../../providers/users.service';
import {Storage} from '@ionic/storage';
import {MePage} from "../me/me";

/**
 * Generated class for the ModifyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-info',
  templateUrl: 'modify-info.html',
})
export class ModifyInfoPage {
  updateInfoForm: FormGroup;
  nickName: any;
  city: any;
  introduce: any;
  myid: any;
  sex: any;
  gender = 'm';
  headpic: any;
  myname: any;
  mySex: any;
  mysignature: any;
  warn: string;
  Formdata:any;
  id: string;//城市id
  /*  cityData= [];//城市数据
   cityName:string = '广东省-广州市'; //初始化城市名*/
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private userSer: UsersService,
              private storage: Storage,
              private toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyInfoPage');
  }

  //城市选择器被改变时触发的事件
  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        // console.log(user_id);
        this.myid = val
        this.userSer.getMyInfo(val).then((data) => {
          console.log(data);
          if(data){
            this.headpic = data[0].user_icon;
          }
          console.log(this.headpic);
          this.myname = data[0].name;
          // this.mySex = data[0].name;
          this.mysignature = data[0].signature;
        })
      })
    })
  }

  change(e) {
    const file = e.target.files[0];
    // console.log(file);
    const path = file.type;
    const Path = path.substr(path.lastIndexOf('/')).toUpperCase();
    // console.log(Path);
    if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
      this.preview(file);
      this.warn = '';
    } else {
      this.warn = '你上传的不是图片~';
      // alert('你上传的不是图片');
    }
  }

  preview(file) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    const url = img.src;
    // const $img = document.getElementsByTagName(img);
    document.getElementById('preview').getElementsByTagName('img')[0].remove();
    img.onload = function () {
      URL.revokeObjectURL(url);
      // img.setAttribute('class','fitcss');
      document.getElementById('preview').appendChild(img);
    };
  }
  UpdateInfo(e) {
    console.log(e.target.parentElement);
    this.Formdata = new FormData(e.target.parentElement);
    console.log(this.Formdata);
    this.userSer.updateInfo(this.Formdata).then((result) => {
      console.log(result);
        if (result.stageCode == 1) {
          let toast = this.toastCtrl.create({
            message: '保存成功',
            duration: 3000
          });
          toast.present();
          this.navCtrl.push(MePage);
        }
    })
  }

  back() {
    this.navCtrl.pop();
  }
}
