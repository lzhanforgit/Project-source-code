import { Component, OnInit } from '@angular/core';
import {DetailsPhotoService} from "../../service/details-photo.service";
@Component({
  selector: 'app-recently-released',
  templateUrl: './recently-released.component.html',
  styleUrls: ['./recently-released.component.css'],
  providers:[DetailsPhotoService]
})
export class RecentlyReleasedComponent implements OnInit {

  navItems=[];
  navItems2=[];
  imgData2=[];
  photourls=[];
  photos2=[];
  photos=[];
  number=15;
  relations=[];
  imgData={"data":[
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
      {'src':'../../../assets/images/zja/重庆.jpg'},{'src':'../../../assets/images/zja/零食.jpg'},{'src':'../../../assets/images/zja/黑白.jpg'}]};


  constructor(
    private detailService: DetailsPhotoService
  ) {
    this.navItems=['index','search','recently','market','designer','help'];
    this.navItems2=['首页','搜索','最新发布','排行榜','绘师推荐','帮助'];
    this.findAllByTime();
    /*for(var i = 0;i<15;i++) {
      this.imgData2[this.imgData2.length] += this.imgData.data[i].src;
    }
    console.log(this.imgData2);*/

  }

  //是否加载
  checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = this.getChildElement(cparent,"box");
    //最后一张图片，距离顶部的高度
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    //滚动的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //页面的高度
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(lastContentHeight < scrollTop + pageHeight){
      return true;
    }
  }

  //获取图片个数，并且进行瀑布流
  imgLocation(parent,content){
    var cparent = document.getElementById(parent);
    var ccontent = this.getChildElement(cparent,content);
    //宽度是一样的，任意取一个就行
    var imgWidth = ccontent[0].offsetWidth;
    //根据父元素的宽度，判断能够排放几个图片
    var num = Math.floor(cparent.offsetWidth / imgWidth);

    //
    var BoxHeightArr = [];
    for(var i = 0 ;i < ccontent.length;i++ ){
      if(i<num){
        //得到第一排的所有高度
        BoxHeightArr[i] = ccontent[i].offsetHeight;
       /* console.log(BoxHeightArr[i]);*/
      }else{
        //通过得到第一排de所有高度，使用函数，得到最小的一个
        var minHeight = Math.min.apply(null,BoxHeightArr);
        //得到最小的一个下表
        var minIndex = this.getminHeightLocation(BoxHeightArr,minHeight);
        ccontent[i].style.position = "absolute";
        ccontent[i].style.top = minHeight+ "px";
        ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
       /* console.log(ccontent[i].offsetHeight);*/
        //更新最小的高度
        BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
      }
    }
  }

  //根据最小box的高度，找出次box在数组中的下表
  getminHeightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr){
      if(BoxHeightArr[i] == minHeight){
        return i;
      }
    }
  }

  //根据标签的class名称为 content 进行筛选放入到 contentArr 数组中 最后将其返回
  getChildElement(parent,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
      if(allcontent[i].className==content){

        allcontent[i].style.marginTop='30px';
        // allcontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
        contentArr.push(allcontent[i]);
      }
    }
    return contentArr;
  }

  ngOnInit() {
    var that=this;
    window.onscroll=function () {
      var boximg=document.getElementById('container');
      if(that.checkFlag()){
        var cparent = document.getElementById("container");

        /*再次请求数据*/
        that.number+=15;
        if(that.photos2.length>that.number){
          for(var i = 0;i<that.number;i++) {
            that.photos[i]=that.photos2[i];
            var a=[];
            a=that.photos[i].photoUrl.split(",");
            that.photourls[i]=a[0];
          }
        }
        that.imgLocation("container","box");
      }
    }

  }

  /*当把内容投影进组件之后调用*/
  ngAfterViewInit(){
    var boximg=document.getElementById('container');
    this.imgLocation("container","box");
  }

  ngAfterViewChecked(){
    var boximg=document.getElementById('container');
    this.imgLocation("container","box");
  }

  /*最新发布作品*/
  findAllByTime(){
    var data= new FormData();
    this.detailService.findAllByTime(data,res=>
    {
      this.photos2=res.result;
      console.log(this.photos);
      for(var i=0;i<15;i++){
        this.photos[i]=this.photos2[i];
        var a=[];
        a=this.photos[i].photoUrl.split(",");
        this.photourls[i]=a[0];
      }
    })
  }


}
