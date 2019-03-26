import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecipeService } from '../../providers/recipe.service';
import {Storage} from '@ionic/storage';
import {MePage} from "../me/me";

/**
 * Generated class for the CreateMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-menu',
  templateUrl: 'create-menu.html',
})
export class CreateMenuPage {
  // menuInfoForm: FormGroup;
  // menu_title:any;
  // describe:any;
  // menu_cover:any;
  Formdata:any;
  creater_id:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private recipeSer: RecipeService,
    private toastCtrl: ToastController,
    private storage: Storage,
  ) {
    // this.menuInfoForm = formBuilder.group({
    //   Menu_title: ['', Validators.compose([Validators.required])],
    //   Describe:['', Validators.compose([Validators.required])],
    //   Menu_cover:['',Validators.compose([Validators.required])]
    // });
    // this.menu_title = this.menuInfoForm.controls['Menu_title'];
    // this.describe = this.menuInfoForm.controls['Describe'];
    // this.menu_cover=this.menuInfoForm.controls['Menu_cover'];
  }

  ionViewDidLoad() {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        console.log(val);
        this.creater_id=val;
      })
    })

  }

  close(){
    this.navCtrl.pop();
  }

  change(e) {
    const file = e.target.files[0];
    const path = file.type;
    const Path = path.substr(path.lastIndexOf('/')).toUpperCase();
    if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
      this.preview(file);
    } else {
      let toast = this.toastCtrl.create({
        message: '你上传的不是图片',
        duration: 3000
      });
      toast.present();
    }
  }
  preview(file) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    const url = img.src;
    img.onload = function () {
      URL.revokeObjectURL(url);
      img.setAttribute('class','fitcss');
      document.getElementById('intro').innerHTML='';
      document.getElementById('menu_cover').appendChild(img);
    }
  }
  //
  // createMenu(infoForm){
  //   console.log(infoForm);
  //   this.recipeSer.addList(infoForm).then((result)=> {
  //     // console.log('1111');
  //     console.log('111'+result);
  //     if(result) {
  //       if (result.stageCode == 1) {
  //         let toast = this.toastCtrl.create({
  //           message: '创建成功',
  //           duration: 3000
  //         });
  //         toast.present();
  //         // this.navCtrl.push(MePage);
  //       }
  //     }
  //   })
  // }

  UpdateInfo(e){
    const that=this;
    that.Formdata = new FormData(e.target.parentElement.parentElement);
    that.recipeSer.addList(that.Formdata).then((result)=> {
      console.log(result);
      if(result) {
        if (result.list_id) {
          let toast = this.toastCtrl.create({
            message: '创建成功',
            duration: 3000
          });
          toast.present();
          this.navCtrl.push(MePage);
        }
        else {
          let toast = this.toastCtrl.create({
            message: '创建失败',
            duration: 3000
          });
          toast.present();
        }
      }
    })
  }
}
