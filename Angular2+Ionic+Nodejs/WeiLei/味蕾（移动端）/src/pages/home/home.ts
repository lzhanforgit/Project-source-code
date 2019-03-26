import {Component, ViewChild} from '@angular/core';
import {NavController, Slides,App, ViewController,ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {PostDetailPage} from '../post-detail/post-detail';
import { PersonalPage } from '../personal/personal';
import {PositionsService} from '../../providers/positions.service';
import {UsersService} from '../../providers/users.service';
import {MenuServiceService} from '../../providers/menu-service.service';
import { MenuDatailPage } from '../menu-datail/menu-datail';
import {Storage} from '@ionic/storage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { ChartsPage } from '../charts/charts';
import { MenuTypePage } from '../menu-type/menu-type';
import {CreateRecipePage} from "../create-recipe/create-recipe";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PositionsService]
})
export class HomePage {
  @ViewChild(Slides) mySlides: Slides;

  imgs = [
    {
      'img': 'carouse01.png',
      'links': 'www.baidu.com'
    }
    ,
    {
      'img': 'carouse02.png',
      'links': 'www.baidu.com'
    },
    {
      'img': 'carouse03.png',
      'links': 'www.baidu.com'
    }
  ];
  indexs:any =[1,2,3];
  items: any;
  all_items:any;
  UnfollowUsers:any;
  indexMenus:any;
  indexLists:any;

  constructor(
    private navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private storage: Storage,
    private userSer: UsersService,
    private menuSer:MenuServiceService,
    public modalCtrl: ModalController,
    public positionSer:PositionsService

  ) {
  }
  ionViewDidLoad(){
    this.storage.ready().then(()=>{
      this.storage.get('userId').then((val)=>{
        console.log(val);
        this.menuSer.getIndexMenus().then((data)=>{
          this.indexMenus = data.slice(20,26);
          //console.log(111);
          //console.log(this.indexMenus+'首页菜谱');
        });
        this.menuSer.getIndexList().then(data=>{
          if(data.length){
            this.indexLists=data.slice(0,12);
           // console.log(this.indexLists+'首页菜单');
          }
        });
        if(!val){
          // alert(1);
        }else{
          console.log("here");
          this.userSer.getUnfollowUsers(val).then(data=>{
            //console.log(data+'首页达人推荐');
            this.UnfollowUsers=data;
          });
        }
      })
    })
  }

  toPersonal(id){

    const modelPage =this.modalCtrl.create(PersonalPage,{"personalId":id});
    modelPage.present();
  }
  slideChanged() {
    // let activeIndex=this.mySlides.getActiveIndex();
    // console.log(activeIndex);
    this.mySlides.startAutoplay();
  }
  showImg(img) {
    // console.log(img);
  }
  itemSelected(item) {
    // this.viewCtrl.dismiss();
    // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});

    // this.appCtrl.getRootNav().push(PostDetailPage);

    // let modelPage=this.modalCtrl.create(PostDetailPage,{"post_id":item.id});
    // modelPage.onDidDismiss(data => {
    //   console.log(data);
    // });
    // modelPage.present();

  }
  toRecipeDetail(id){
    //console.log(id);
    const modelPage=this.modalCtrl.create(RecipeDetailPage,{"recipeId":id});
    modelPage.present();
  }

  toMenuDetail(id){
   /* console.log(id);*/
    const modelPage=this.modalCtrl.create(MenuDatailPage,{"menuId":id});
    modelPage.present();
  }
  toCreate(){
    const modelPage=this.modalCtrl.create(CreateRecipePage);
    modelPage.present();
  }
  toSearch(){
    //alert("here!");
    const modelPage=this.modalCtrl.create(SearchPage);
    modelPage.present();
  }

  MenuType() {
    const modelPage = this.modalCtrl.create(MenuTypePage);
    modelPage.present();
  }
  Charts(){
    const modelPage = this.modalCtrl.create(ChartsPage);
    modelPage.present();
  }

}
