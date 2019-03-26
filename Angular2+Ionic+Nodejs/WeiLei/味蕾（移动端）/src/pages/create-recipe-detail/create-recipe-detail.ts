import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {MenuServiceService} from '../../providers/menu-service.service';
import { HomePage } from '../home/home';
/**
 * Generated class for the CreateRecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-recipe-detail',
  templateUrl: 'create-recipe-detail.html',
})
export class CreateRecipeDetailPage {
  material:any;
  StepStr:any;
  MaterialStr:any;
  Formdata:any;
  amount:any;
  material_amountStr:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuD:MenuServiceService,
    private viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CreateRecipeDetailPage');
  }
  cancle(){
    this.viewCtrl.dismiss();
    //this.navCtrl.push(HomePage);
  }
  add(){
/*    var row = document.createElement('ion-row');
    row.className='material';
    row.innerHTML='<ion-col col-6><ion-input style="font-size: 1.2em;width: 100%" placeholder="食材：如鸡蛋" clearInput></ion-input></ion-col>'+
      '<ion-col col-6 style="text-align: center"><ion-input style="font-size: 1.2em;width: 100%" placeholder="用量：如1只" clearInput></ion-input></ion-col>';*/
    var my_tr = document.querySelector('#my_tr').cloneNode(true);
    console.log(my_tr);
    var img = (<Element>my_tr).querySelector('img');
    img.addEventListener('click',function($event){
      // $event.target.parentElement.parentElement.remove();
    });
    var inputs = (<Element>my_tr).querySelectorAll('input');
    for(var i=0;i<inputs.length;i++){
      console.log(inputs[i]);
      inputs[i].value='';
     // my_tr.appendChild(inputs[i]);
    }
    document.getElementById('mytable').firstElementChild.appendChild(my_tr);
  }

  del(e){
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
  addstep(){
    const step=document.getElementById('my_li').cloneNode(true);
    var img = (<Element>step).querySelector('img');
    img.addEventListener('click',function($event){
      // $event.target.parentElement.parentElement.remove();
    });
    var textArea = (<Element>step).querySelector('textarea');
    textArea.value = '';
    document.getElementById('step').appendChild(step);
  }

  UploadMenu(e){
    const that = this;
    var steps = document.getElementsByClassName('recipe_step');
    var materials = document.getElementsByClassName('material');
    var material_amounts = document.getElementsByClassName('material_amount');
  /*  $('.recipe_step').each(function (n) {
      that.StepStr += $(this).val() + 'weilei.com';
    });
    $('.material').each(function (n) {
      that.MaterialStr += $(this).val() + 'weilei.com';
    });
    $('.material_amount').each(function (n) {
      that.material_amountStr += $(this).val() + 'weilei.com';
    });*/

    // console.log(that.StepStr);
    // console.log(that.MaterialStr);
    // console.log(that.material_amountStr);
    /*setTimeout(function () {that.Formdata = new FormData(e.target.parentElement.parentElement);
      that.menuD.uploadMenu(that.Formdata,function (result) {
        // console.log(result);
        that.StepStr = '';
        that.MaterialStr = '';
        that.material_amountStr = '';
        // location.reload();
        //that.router.navigate(['/menu-details/' + result.recipe_id]);
      });}, 1000);*/
  }

}
