import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsersService } from '../../providers/users.service';
import { CreateRecipeDetailPage } from '../create-recipe-detail/create-recipe-detail';
import { LoginOrRegisterPage } from "../login-or-register/login-or-register";
import { CreateMenuPage } from '../create-menu/create-menu';
/**
 * Generated class for the CreateRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-recipe',
  templateUrl: 'create-recipe.html',
})
export class CreateRecipePage {
  user_head:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage,
    private userSer: UsersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRecipePage');
  }
  ionViewWillEnter() {
    // console.log('ionViewDidLoad PersonalPage');
    this.storage.ready().then(()=>{
      this.storage.get('userId').then((val) => {
        // console.log(user_id);
        if (!val) {
          const modelPage = this.modalCtrl.create(LoginOrRegisterPage);
          modelPage.present();
        } else {
          this.userSer.getMyInfo(val).then((data) => {
            // console.log(data);
            this.user_head=data[0].user_icon;
            // console.log(this.headpic);
          })
        }
      })
    })
  }
  close(){
    this.navCtrl.pop();
  }
  create_recipe_name(){
    const modelPage=this.modalCtrl.create(CreateRecipeDetailPage);
    modelPage.present();
  }
  createMenu(){
    const modelPage = this.modalCtrl.create(CreateMenuPage);
    modelPage.present();
  }


}
