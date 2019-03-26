import { Component, OnInit } from '@angular/core';
import {DetailsPhotoService} from "../../service/details-photo.service";
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-publish-works',
  templateUrl: './publish-works.component.html',
  styleUrls: ['./publish-works.component.css'],
  providers:[DetailsPhotoService]
})

export class PublishWorksComponent implements OnInit {

  navItems=[];
  navItems2=[];
  addOneLabel='';
  labels=[];
  photoTypeId='1';
  photoStyleId='1';
  photoLabels;
  photoName;
  photoId;
  shyj=true;
  photoExplanation;
  j=0;
  d=0;
  e=0;
  files;
  constructor(
    private detailService: DetailsPhotoService,
    private router:Router
  ) {
    this.navItems=['index','search','recently','market','designer','help'];
    this.navItems2=['首页','搜索','最新发布','排行榜','绘师推荐','帮助'];

  }
  ul=document.getElementById('ul');
  aAll=document.getElementById('aAll');
  a=document.querySelectorAll('.a100');
  c=document.querySelectorAll('.p1');

  /*添加现有的标签*/
  aAllNew(a){
    for (var n=0;n<this.labels.length;n++){
      if(this.labels[n]==a){
        this.e=1;
      }
    }
    /*判断是否能够添加成功*/
    if (this.e!=1&&this.d<9){
      this.labels[this.labels.length]=a;
      this.d++;
      this.j++;
    }else {
      alert('添加标签无效');
    }
    this.e=0;
  }

  /*已添加标签的删除功能*/
  de(a) {
    for (var i = 0; i < this.labels.length; i++){
      if (this.labels[i]==a){
        this.labels.splice(i,1);
      }
    }
  }

  ngOnInit() {
    var that=this;
    /*已经添加的标签*/
    function re(a) {
      that.labels[that.labels.length]=a;
    }
    var add_new=document.getElementById('add_new');
    var dele=document.getElementById('dele');
    var add=document.getElementById('add');
    var addone=document.getElementById('addone');
    var text=document.getElementById('text');
    var addtwo=document.getElementById('addtwo');
    var that=this;

    /*点击图标显示添加标签*/
    dele.onclick=function () {
      addone.style.display='none';
      addtwo.style.display='block';
    }

    /*添加原创标签*/
    add.onclick=function () {
      console.log(that.addOneLabel);
      for (var n=0;n<that.labels.length;n++){
        if(that.labels[n]==that.addOneLabel){
          that.e=1;
        }
      }

      if (that.e!=1&&that.d<12&&that.addOneLabel!=null){
        re(that.addOneLabel);
        that.d++;
      }else {
        alert('添加标签无效');
      }
      that.addOneLabel='';
      that.j++;
      that.e=0;
      console.log(that.labels);
    }

    /*点击添加标签就会显示原创标签*/
    add_new.onclick=function () {
      addone.style.display='block';
      addtwo.style.display='none';
    }
/*
    if(this.photoLabels!=null&&this.photoName!=null&&this.photoExplanation!=null){
      var btn_login=document.getElementById('btn_login');

      btn_login.removeAttribute('disabled');
    }*/

  }

  result=document.getElementById("result");
  file=document.getElementById("file");
  imgclose=document.getElementById('img_close1');
  imgLi=document.getElementById('img_li');
  num=0;
  /*  photoStyleId=document.getElementsByName('photoStyleId');
    photoTypeId=document.getElementsByName('photoTypeId');*/

  /*风格的选择*/
  photoStyle(style){
    this.photoStyleId=style;
    console.log(this.photoStyleId);
  }

  /*类型的选择*/
  photoType(type){
    this.photoTypeId=type;
    console.log(this.photoTypeId);
  }

  /*发表作品*/
  checkAll() {
     var btn_login=document.getElementById('btn_login');
    for (var i=0;i<this.labels.length;i++){
      if (i==0){
        this.photoLabels=this.labels[i];
      }else{
        this.photoLabels+=',';
        this.photoLabels+=this.labels[i];
      }
    }
    console.log(this.photoStyleId);
    console.log(this.photoTypeId);
    console.log(this.photoLabels);
    console.log(this.photoName);
    console.log(this.photoExplanation);

    if(this.photoLabels==null){
      alert("请为作品选择合适的标签！");
    }

    if(this.photoName==null){
      alert("标题不能为空！");
    }

    if(this.photoExplanation==null){
      alert("作品介绍不能为空！");
    }
    if(this.photoLabels!=null&&this.photoName!=null&&this.photoExplanation!=null){

      this.shyj=true;
      /*数据传给后台，并跳转到图片详情页面*/
      var data= new FormData();
      data.set("photoName",this.photoName);
      data.set("photoUserId",localStorage.getItem('UD'));
      data.set("photoExplanation",this.photoExplanation);
      data.set("photoLabel",this.photoLabels);
      data.set("photoStyleId",this.photoStyleId);
      data.set("photoTypeId",this.photoTypeId);
      /*data.set("files",this.files);*/

      this.detailService.submitPhoto(data,res=>
      {
        this.photoId=res.result;
        this.router.navigate(['detailsPhoto',this.photoId])
      })
      /*上传成功后返回上传的作品id*/

      /*根据id结果是否上传成功，上传成功后将id一起传给图片详情页面*/
      alert("图片上传成功即将查看详情！");
      /*传入图片id至图片详情*/
    }
  }
}
