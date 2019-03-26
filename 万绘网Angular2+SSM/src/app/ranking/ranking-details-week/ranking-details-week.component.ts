import { Component, OnInit } from '@angular/core';
import {RankingService} from '../../service/ranking.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-ranking-details-week',
  templateUrl: './ranking-details-week.component.html',
  styleUrls: ['./ranking-details-week.component.css'],
  providers:[RankingService]
})
export class RankingDetailsWeekComponent implements OnInit {
  photosWeek=[];
  photosWeekNow1=[];
  photosWeekNow2=[];
  photoUrls=[];
  date='';
  /*imgData={"data":[
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
  constructor(
    private route: ActivatedRoute,
    private rankService: RankingService
  ) { }

  ngOnInit() {
    /*处理时间*/
    this.Deta();

    /*只需要获取榜单的前五名*/
    /*请求周榜*/
    this.findPhotoRankWeek();

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
      for(var i=0;i<3;i++) {
        var photos=[];
        this.photosWeekNow1[i] = this.photosWeek[i];
        photos=this.photosWeekNow1[i].photoUrl.split(',');
        this.photoUrls[i]=photos[0];
      }
      for(var i=3;i<50;i++) {
        var photos2=[];
        this.photosWeekNow2[i-3] = this.photosWeek[i];
        photos2= this.photosWeekNow2[i-3].photoUrl.split(',');
        this.photoUrls[i]=photos2[0];
      }
    })
  }

}
