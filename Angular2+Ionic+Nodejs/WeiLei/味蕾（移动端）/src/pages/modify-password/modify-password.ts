import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ToastController,App,} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {UsersService} from '../../providers/users.service';

/**
 * Generated class for the ModifyPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-password',
  templateUrl: 'modify-password.html',
})
export class ModifyPasswordPage {

  modifywordForm: FormGroup;
  iTime= 59;
  private timer;
  flag: any= false;
  code_mes: any= '获取验证码' ;
  username: any;
  password: any;
  num:any;
  code_res:any='';
  code:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private storage:Storage,
    private userSer:UsersService,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,

  ) {

    this.modifywordForm = formBuilder.group({
      userId: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      code: ['']
    });
    this.username = this.modifywordForm.controls['userId'];
    this.password = this.modifywordForm.controls['userPassword'];
    this.code = this.modifywordForm.controls['code'];
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModifyPasswordPage');
  }
  ionViewWillEnter(){
  }
  back(){
    this.navCtrl.pop();
  }
  getreCode(user){
    // console.log(user);
    this.userSer.getReCodeByphone(user).then(result=>{
      // console.log(result+"111111dad");
      if (result.stageCode == '1') {
        this.code_res = ' 该手机号还没有注册过 ';
        // console.log(this.code_res);
      }else if (result.stageCode == 'e004'){
        this.code_res = '数据库错误！';
        // console.log(this.code_res);
      }else{
        if (result){
          // this.flag = true;
          //  console.log(result);
          this.num = result.stageCode;
          this.code_res = '';
          // console.log(this.num);
          this.RemainTime();
        }
      }
    });
  }

  RemainTime(){
    this.timer = setInterval(() => {
      this.code_mes = this.iTime + '秒后重新获取';
      this.iTime--;
      // console.log(this.flag);
      if (this.iTime < 0){
        clearInterval(this.timer);
        this.flag=false;
        this.code_mes='获取验证码'
      }
    }, 1000);
  }

  modifyword(user){
    if (this.num != user.code) {
      let toast = this.toastCtrl.create({
        message: '验证码错误',
        duration: 3000
      });
      toast.present();
    } else {
      //const that = this;
      this.userSer.retrieve(user).then(result=>{
        if (result.stageCode == '2') {
          let toast = this.toastCtrl.create({
            message: '发生错误了',
            duration: 3000
          });
          toast.present();
        } else if (result.stageCode == '1') {
          //修改密码成功
          let toast = this.toastCtrl.create({
            message: '修改密码成功！',
            duration: 3000
          });
          toast.present();
          clearInterval(this.timer);

/*          this.storage.ready().then(()=>{
            this.storage.set('isLogin',true);
            this.storage.set('userId',result.Id);
            this.storage.set('UserIcon','http://owkq4s9d1.bkt.clouddn.com/1506739929302.jpeg');
            this.storage.set('token',result.token);
          });*/
          // this.navCtrl.push(TabsPage);
          // this.navCtrl.pop();
        } else {
          let toast = this.toastCtrl.create({
            message: '数据库错误！',
            duration: 3000
          });
          toast.present();
        }
      })
    }
  }

}
