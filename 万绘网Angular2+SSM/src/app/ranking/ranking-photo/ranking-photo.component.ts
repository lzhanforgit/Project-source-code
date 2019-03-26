import { Component, OnInit } from '@angular/core';
import {RankingService} from '../../service/ranking.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ranking-photo',
  templateUrl: './ranking-photo.component.html',
  styleUrls: ['./ranking-photo.component.css'],
  providers:[RankingService]
})
export class RankingPhotoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rankService: RankingService
  ) {
    /*处理时间*/
    this.Deta();

    /*只需要获取榜单的前五名*/
    /*请求周榜*/
    this.findPhotoRankWeek();
    /*请求月榜*/
    this.findPhotoRankMonth();
    /*请求新人榜*/
    this.findPhotoRankDate();
  }

  photosWeek=[];
  photosWeekNow=[];
  photosMonth=[];
  photosMonthNow=[];
  photoNewcomer=[];
  photourls1=[];
  photourls2=[];
  photourls3=[];
  photoNewcomerNow=[];
  date='';
  items=[1,2,3,4];
 /* imgData={"data":[
      {'src':'../../../assets/images/zja/东京.jpg'},{'src':'../../../assets/images/zja/东京塔.jpg'},{'src':'../../../assets/images/zja/傍晚.jpg'},
      {'src':'../../../assets/images/zja/傻子.jpg'},{'src':'../../../assets/images/zja/军装.jpg'},{'src':'../../../assets/images/zja/冷.jpg'},
      {'src':'../../../assets/images/zja/凶.jpg'},{'src':'../../../assets/images/zja/半面妆.jpg'},{'src':'../../../assets/images/zja/叮当.jpg'},
      {'src':'../../../assets/images/zja/周末.jpg'},{'src':'../../../assets/images/zja/啊啊啊.jpg'},{'src':'../../../assets/images/zja/四川.jpg'},
      {'src':'../../../assets/images/zja/外星世界.jpg'},{'src':'../../../assets/images/zja/夜晚.jpg'},{'src':'../../../assets/images/zja/天空之境.jpg'},
      {'src':'../../../assets/images/zja/女孩.jpg'},{'src':'../../../assets/images/zja/姑娘.jpg'},{'src':'../../../assets/images/zja/定.jpg'},
      {'src':'../../../assets/images/zja/定.jpg'},{'src':'../../../assets/images/zja/实物照.jpg'},{'src':'../../../assets/images/zja/小猫.jpg'},
      {'src':'../../../assets/images/zja/烘焙.jpg'},{'src':'../../../assets/images/zja/牛排的诱惑.jpg'},{'src':'../../../assets/images/zja/玉米.jpg'},
      {'src':'../../../assets/images/zja/略略略.jpg'},{'src':'../../../assets/images/zja/花嫁.jpg'},{'src':'../../../assets/images/zja/草莓.jpg'},
      {'src':'../../../assets/images/zja/起帆.jpg'},{'src':'../../../assets/images/zja/车辆.jpg'},{'src':'../../../assets/images/zja/酒.jpg'},
      {'src':'../../../assets/images/zja/东京.jpg'},{'src':'../../../assets/images/zja/东京塔.jpg'},{'src':'../../../assets/images/zja/傍晚.jpg'},
      {'src':'../../../assets/images/zja/傻子.jpg'},{'src':'../../../assets/images/zja/军装.jpg'},{'src':'../../../assets/images/zja/冷.jpg'},
      {'src':'../../../assets/images/zja/凶.jpg'},{'src':'../../../assets/images/zja/半面妆.jpg'},{'src':'../../../assets/images/zja/叮当.jpg'},
      {'src':'../../../assets/images/zja/周末.jpg'},{'src':'../../../assets/images/zja/啊啊啊.jpg'},{'src':'../../../assets/images/zja/四川.jpg'},
      {'src':'../../../assets/images/zja/外星世界.jpg'},{'src':'../../../assets/images/zja/夜晚.jpg'},{'src':'../../../assets/images/zja/天空之境.jpg'},
      {'src':'../../../assets/images/zja/重庆.jpg'},{'src':'../../../assets/images/zja/零食.jpg'},{'src':'../../../assets/images/zja/黑白.jpg'}]};*/

  ngOnInit() {

  }

  /*生成当前时间*/
  Deta(){
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth();
    var day=now.getDate();
    this.date+=year+'/';
    if(month<10){
      this.date+='0';
      this.date+=month+'/';
    }else {
      this.date+=month+'/';
    }
    if(day<10){
      this.date+='0';
      this.date+=day;
    }else {
      this.date+=day;
    }
  }

  /*请求周榜*/
  findPhotoRankWeek(){
  var data3= new FormData();
  this.date='2017/11/18';
  data3.set("date",this.date);
    this.rankService.findPhotoRankWeek(data3,res=>
    {

        this.photosWeek=res.photoList;
        for(var i=0;i<5;i++) {
          var photos=[];
          this.photosWeekNow[i] = this.photosWeek[i];
          photos=this.photosWeekNow[i].photoUrl.split(',');
          this.photourls1[i]=photos[0];
        }
    })
  }

  /*请求月榜*/
  findPhotoRankMonth(){
    var data3= new FormData();
    this.date='2017/11/18';
    data3.set("date",this.date);
    this.rankService.findPhotoRankMonth(data3,res=>
    {
      this.photosMonth=res.photoList;
      for(var i=0;i<5;i++){
        var photos=[];
        this.photosMonthNow[i]=this.photosMonth[i];
        photos=this.photosMonthNow[i].photoUrl.split(',');
        this.photourls2[i]=photos[0];
      }
console.log(this.photosMonthNow);
      console.log("略略累");
      console.log(this.photourls2);
    })
  }
  /*请求新人榜*/
  findPhotoRankDate(){
    var data3= new FormData();
    this.date='2017/11/18';
    data3.set("date",this.date);
    this.rankService.findPhotoRankDate(data3,res=>
    {
      this.photoNewcomer=res.photoList;
      console.log(this.photoNewcomer);
      for(var i=0;i<5;i++){
        var photos=[];
        this.photoNewcomerNow[i]=this.photoNewcomerNow[i];
        photos=this.photoNewcomerNow[i].photoUrl.split(',');
        this.photourls3[i]=photos[0];
      }
    })
  }
}
