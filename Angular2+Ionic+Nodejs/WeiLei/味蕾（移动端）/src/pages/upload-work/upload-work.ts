import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecipeService } from '../../providers/recipe.service';
import {Storage} from '@ionic/storage';
import {MePage} from "../me/me";
/**
 * Generated class for the UploadWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-work',
  templateUrl: 'upload-work.html',
})
export class UploadWorkPage {
  Formdata:any;
  creater_id:any;
  recipe_id:any;
  recipe_name:any;
  details: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private recipeSer: RecipeService,
    private toastCtrl: ToastController,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    const val= this.navParams.get('recipeId');
    this.recipe_id=val;

    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        console.log(val);
        this.creater_id=val;
      })
    })
  }
  ionViewWillEnter() {
    const val = this.navParams.get('recipeId');//菜谱id
    if (val) {
      this.recipeSer.getDetails(val).then((data) => {
        // console.log(data);
        this.details = data;
        this.recipe_name = data[0].name;
      });
    }
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
  UpdateInfo(e){
    const that=this;
    that.Formdata = new FormData(e.target.parentElement.parentElement);
    that.recipeSer.addPersonalWorks(that.Formdata).then((result)=> {
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
