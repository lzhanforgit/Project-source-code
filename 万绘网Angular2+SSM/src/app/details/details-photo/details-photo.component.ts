import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap,Router} from '@angular/router';
import {DetailsPhotoService} from "../../service/details-photo.service";
import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-details-photo',
  templateUrl: './details-photo.component.html',
  styleUrls: ['./details-photo.component.css'],
  providers:[DetailsPhotoService]

})
export class DetailsPhotoComponent implements OnInit {

  /*评论数组*/
  comments=[];
  comments2=[];
  photoType='风景画';
  photoStyle='古典主义';
  photoLabels=[];
  onclickFirst=0;
  photoCommentNew='';
  photoId;
  /*跳转的作品id*/
  photoId2;
  userId;
  likesNumber=0;
  commentNumber=0;
  number=5;
  photoAuthor;
  photoDetails;
  photoUrls=[];
  /*作品数组*/
  morePhoto=[];
  morePhoto2=[];
  photoOne=[];
  /*回复别人的内容*/
  huifucomment;
  huifucomment2;
  huifuNumber=0;

  /*回复评论*/
  huifuComments='';

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private detailService: DetailsPhotoService
  ) { }
  /*获取后台显示的更多作品*/
  imgData={"data":[
      {'src':'../../../assets/images/zja/yanzhi1.jpg'},{'src':'../../../assets/images/zja/yanzhi2.jpg'},{'src':'../../../assets/images/zja/yanzhi3.jpg'},
      {'src':'../../../assets/images/zja/a.jpg'},{'src':'../../../assets/images/zja/auto.jpg'},{'src':'../../../assets/images/zja/auto2.jpg'},
      {'src':'../../../assets/images/zja/auto3.jpg'},{'src':'../../../assets/images/zja/auto4.jpg'},{'src':'../../../assets/images/zja/auto5.jpg'},
      {'src':'../../../assets/images/zja/auto6.jpg'},{'src':'../../../assets/images/zja/yanzhi1.jpg'},{'src':'../../../assets/images/zja/yanzhi2.jpg'}]
  };


  ngOnInit() {
    var gengduo=document.getElementById('gengduo');
    var shouqi=document.getElementById('shouqi');

    /*根据作品id查询作品详情:其他地方传过来的作品id*/
    this.findPhotoDetails();
  }
  /*根据id查询作品详情*/
  findPhotoDetails(){
    this.route.paramMap.switchMap((params: ParamMap) => {
      this.photoId=params.get('photoId');
      let data=new FormData();
      data.set("photoId",params.get('photoId'));
      return this.detailService.findPhotoById(data);
    })
      .subscribe(res =>
      {
        this.photoDetails=res.result[0];

        this.userId=this.photoDetails.photoUserId;
        /*通过作品id查询作者信息*/
        this.photoAuthor=res.result[0].user;

        /*将作品的地址进行解析：赋值给数组*/
        this.photoUrls=this.photoDetails.photoUrl.split(",");

        /*将作者的标签进行解析*/
        this.photoLabels=this.photoDetails.photoLabel.split(",");

        /*查询类型：前端显示获取类型的id值然后传给页面*/
        if(this.photoDetails.photoStyleId==1){
          this.photoStyle='古典主义';
        }else if(this.photoDetails.photoStyleId==2){
          this.photoStyle='浪漫主义';
        }else if(this.photoDetails.photoStyleId==3){
          this.photoStyle='现实主义';
        }else if(this.photoDetails.photoStyleId==4){
          this.photoStyle='印象派';
        }else if(this.photoDetails.photoStyleId==5){
          this.photoStyle='现实派';
        }else if(this.photoDetails.photoStyleId==6){
          this.photoStyle='未来派';
        }else if(this.photoDetails.photoStyleId==7){
          this.photoStyle='其他';
        }

        /*查询风格：前端显示获取风格的id值然后传给页面*/
        if(this.photoDetails.photoTypeId==1){
          this.photoStyle='风景画';
        }else if(this.photoDetails.photoTypeId==2){
          this.photoStyle='素描';
        }else if(this.photoDetails.photoTypeId==3){
          this.photoStyle='色彩';
        }else if(this.photoDetails.photoTypeId==4){
          this.photoStyle='漫画';
        }else if(this.photoDetails.photoTypeId==5){
          this.photoStyle='油画';
        }else if(this.photoDetails.photoTypeId==6){
          this.photoStyle='简笔画';
        }else if(this.photoDetails.photoTypeId==7){
          this.photoStyle='国画';
        }else if(this.photoDetails.photoTypeId==8){
          this.photoStyle='版画';
        }else if(this.photoDetails.photoTypeId==9){
          this.photoStyle='其他';
        }

        /*查询喜欢的人数*/
        this.likesNumber=this.photoDetails.likePhoto;

        /*是否关注*/
        this.findRelationship(this.photoAuthor.userId,localStorage.getItem('UD'));

        /*是否点赞：需要提供登录之后的id*/
        this.findLikePhoto(this.photoId,localStorage.getItem('UD'));

        /*根据作者id查询更多作品*/
        this.findAllByUserId(this.photoAuthor.userId);

        /*显示评论*/
        this.findAllComment(this.photoDetails.photoId);

      });
  }

  /*根据作者id查询更多作品*/
  findAllByUserId(photoUserId){
    console.log("更多作品"+this.morePhoto);
    console.log(photoUserId);
    var data3= new FormData();
    data3.set("photoUserId",photoUserId);
    this.detailService.findAllByUserId(data3,res=>
    {
      this.morePhoto=res.result;
      console.log("更多作品"+this.morePhoto);
      if(this.morePhoto.length>=8){
        for(var i=0;i<10;i++){
          this.morePhoto2[i]=this.morePhoto[i];
          var aaa=this.morePhoto2[i].photoUrl.split(",");
          this.photoOne[i]=aaa[0];
          console.log(this.photoOne[i]);
          console.log(this.morePhoto2[i]);
        }
      }else if(this.morePhoto.length>0){
        this.morePhoto2=this.morePhoto;
      }else{
        this.morePhoto2=[];
      }
    })
  }


  /*显示评论*/
  findAllComment(commentPhotoId){
    var data= new FormData();
    data.set("commentPhotoId",commentPhotoId);
    this.detailService.findAllComment(data,res=>
    {
      this.comments=res.result2;
      for(var i=0;i<this.number;i++){
        this.comments2[i]=this.comments[i];
      }
      /*查询评论数*/
      this.commentNumber=this.comments.length;
    })

  }

  /*点击查看更多评论*/
  addMoreComment(){
    var gengduo=document.getElementById('gengduo');
    var shouqi=document.getElementById('shouqi');
    if(this.comments.length>this.number){
      this.number+=10;
      for(var i=0;i<this.number;i++){
        if (this.comments[i]!=null){
          this.comments2[i]=this.comments[i];
          gengduo.style.display='block';
          shouqi.style.display='none';
        }else {
          gengduo.style.display='none';
          shouqi.style.display='block';
        }
      }
    }
  }

  /*收起评论*/
  endMoreComment(){
    var gengduo=document.getElementById('gengduo');
    var shouqi=document.getElementById('shouqi');
    /*显示完所有评论后将会收起评论*/
    if(this.number>=this.comments.length){
      this.number=5;
      this.comments2=[];
      for(var i=0;i<this.number;i++){
        this.comments2[i]=this.comments[i];
      }
      gengduo.style.display='block';
      shouqi.style.display='none';
    }
  }


  /*是否显示表情*/
  face_text=document.getElementById('face_text');
  textarea=document.getElementById('textarea');
  onclick1() {
    var img_text=document.getElementById('img_text');
    if(this.onclickFirst==0){
      img_text.style.display='block';
      this.onclickFirst=1;
    }else{
      img_text.style.display='none';
      this.onclickFirst=0;
    }
  };

  /*添加表情至内容*/
  imgText(text){
    this.photoCommentNew+=text;
    console.log(this.photoCommentNew);
  }

  /*添加评论*/
  addComment(photoId){
    console.log("添加评论！");
    var data= new FormData();
    data.set("commentUserId",localStorage.getItem('UD'));
    data.set("commentPhotoId",photoId);
    data.set("commentContent",this.photoCommentNew);
    this.detailService.addComment1(data,res=>
    {
      /*发表完成后去刷新评论*/
      var data1= new FormData();
      data1.set("commentPhotoId",photoId);
      this.detailService.findAllComment(data1,res=>
      {
        this.comments=res.result2;
        for(var i=0;i<this.number;i++){
          this.comments2[i]=this.comments[i];
        }
      })
      console.log("更新评论！")
    })
  }

  /*关于关注作者：查看关注取消关注添加关注*/
  /*查看是否关注，传入关注者和被关注者的id*/
  findRelationship(photoUserId,userId){
    var guanzhu1=document.getElementById('guanzhu1');
    var guanzhu2=document.getElementById('guanzhu2');
    var data4= new FormData();
    data4.set("photoUserId",photoUserId);
    data4.set("userId",userId);
    this.detailService.findRelationship(data4,res=>
    {
      if(res.resultCode!=0){
        guanzhu1.style.display='none';
        guanzhu2.style.display='inline';
      }else {
        guanzhu2.style.display='none';
        guanzhu1.style.display='inline';
      }
    })
  }

  /*点击关注作者*/
  addRelationship(){
    var guanzhu1=document.getElementById('guanzhu1');
    var guanzhu2=document.getElementById('guanzhu2');
    var data4= new FormData();
    data4.set("photoUserId",this.photoId);
    data4.set("userId",localStorage.getItem('UD'));
    this.detailService.addRelationship(data4,res=>
    {
      if(res.resultCode==709){
        guanzhu1.style.display='none';
        guanzhu2.style.display='inline';
      }
    })
  }

  /*取消关注：首先查找到关注的id，然后取消关注*/
  deleteRelationship(photoUserId,userId){
    var guanzhu1=document.getElementById('guanzhu1');
    var guanzhu2=document.getElementById('guanzhu2');
    var relationshipId;
    /*首先查找到关注*/
    var that=this;
    var data5= new FormData();
    data5.set("photoUserId",photoUserId);
    data5.set("userId",userId);
    this.detailService.findRelationship(data5,res=>
    {
      relationshipId=res.result;
      if(relationshipId!=0){
        /*取消关注*/
        var data6= new FormData();
        data6.set("relationshipId",relationshipId);
        this.detailService.deleteRelationship(data6,res=>
        {
          if(res.resultCode==711){
            guanzhu1.style.display='inline';
            guanzhu2.style.display='none';
          }
        })
      }else {
        guanzhu2.style.display='none';
        guanzhu1.style.display='inline';
      }
    })
  }

  /*对该作品进行点赞：查看点赞取消点赞添加点赞*/
  /*查看是否存在点赞关系*/
  findLikePhoto(likePhotoId,likeUserId){
    var zan1=document.getElementById('zan1');
    var zan2=document.getElementById('zan2');
    var data7= new FormData();
    data7.set("likePhotoId",this.photoId);
    data7.set("likeUserId",likeUserId);
    console.log(this.photoId);
    console.log(likeUserId);
    this.detailService.findLikePhoto(data7,res=>
    {
      if(res.result!=0){
        zan1.style.display='none';
        zan2.style.display='inline';
      }else {
        zan2.style.display='none';
        zan1.style.display='inline';
      }
    })
  }

  /*添加点赞*/
  addLikePhoto(likePhotoId,likeUserId){
    var zan1=document.getElementById('zan1');
    var zan2=document.getElementById('zan2');
    var data7= new FormData();
    data7.set("likePhotoId",likePhotoId);
    data7.set("likeUserId",likeUserId);
    this.detailService.addLikePhoto(data7,res=>
    {
      if(res.resultCode!=0){
        zan1.style.display='none';
        zan2.style.display='inline';
      }else {
        zan2.style.display='none';
        zan1.style.display='inline';
      }
    })

    /*查询喜欢的人数*/
    this.likesNumber+=1;
  }

  /*取消点赞*/
  deleteLikePhoto(likePhotoId4,likeUserId){
    var zan1=document.getElementById('zan1');
    var zan2=document.getElementById('zan2');
    var likePhotoId;
    /*首先查找到点赞*/
    var that=this;
    var data8= new FormData();
    data8.set("likePhotoId",likePhotoId4);
    data8.set("likeUserId",likeUserId);
    this.detailService.findLikePhoto(data8,res=>
    {
      likePhotoId=res.result;
      if(likePhotoId!=0){
        /*取消点赞*/
        var data9= new FormData();
        data9.set("likeId",likePhotoId);
        this.detailService.deleteLikePhoto(data9,res=>
        {
          console.log(res.resultCode);
          if(res.resultCode==721){
            zan1.style.display='inline';
            zan2.style.display='none';
          }
        })
      }else {
      zan2.style.display='none';
      zan1.style.display='inline';
    }
    })
    /*查询喜欢的人数*/
    this.likesNumber-=1;
  }

  /*访问主页：传递作者的id*/

  /*回复评论*/
  huifu(a){
    var huifukuang=document.getElementById(a);
    if(this.huifuNumber==0){
      huifukuang.style.display='block';
      this.huifuNumber=1;
    }else{
      huifukuang.style.display='none';
      this.huifuNumber=0;
    }
  }

  /*发表回复评论*/
  addComment2(commentUserId,commentSumId,photoId){
    console.log(commentSumId);
    console.log("更新评论！");
    var data= new FormData();
    data.set("commentUserId",localStorage.getItem('UD'));
    data.set("commentSumId",commentSumId);
    data.set("commentPhotoId",photoId);
    data.set("commentAimsUserId",commentUserId);
    data.set("commentContent",this.huifucomment2);
    this.detailService.addComment1(data,res=>
    {
      /*发表完成后去刷新评论*/
      var data1= new FormData();
      data1.set("commentPhotoId",photoId);
      this.detailService.findAllComment(data1,res=>
      {
        this.comments=res.result2;
        for(var i=0;i<this.number;i++){
          this.comments2[i]=this.comments[i];
        }
      })
      console.log("更新评论！")
    })
  }

  /*点击left就会查询当前作品的数组顺序，并查找到上一个如果没有就弹出框没有更多作品*/
  left(photoId){
    var n=-1;
    for(var i=0;i<this.morePhoto.length;i++){
      if(this.morePhoto[i].photoId==photoId){
        n=i;
      }
    }
    if(n-1>=0){
      this. photoId2=this.morePhoto[n-1].photoId;
      this.router.navigate(['detailsPhoto',this.photoId2])
    }else{
      alert("没有更多作品!");
    }

  }

  /*点击right就会查询当前作品的数组顺序，并查找到上一个如果没有就弹出框没有更多作品*/
  right(photoId){
    var n=-1;
    for(var i=0;i<this.morePhoto.length;i++){
      if(this.morePhoto[i].photoId==photoId){
        n=i;
      }
    }
    if(n+1<this.morePhoto.length){
      this. photoId2=this.morePhoto[n+1].photoId;
      this.router.navigate(['detailsPhoto',this.photoId2])
    }else{
      alert("没有更多作品!");
    }
  }

}
