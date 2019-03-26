import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers:[UserService]
})
export class WorkComponent implements OnInit {


  photo = [];
  photoUrls = [];
  userId=localStorage.getItem('UD');
  userId2 = this.route.snapshot.url.toString().split(',')[1];
  number;
  constructor(private UserService: UserService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.panduan();
    this.findWork();
  }
  panduan(){
    if(this.userId2!=this.userId){
      // var shezi1=document.getElementById("shezhi");
      // shezi1.style.display='none';
      this.number = 2
    }else {
      this.number = 1
    }
  }
  findWork(){

    var data = new FormData();
    data.set(" photoUserId",this.userId);
    this.UserService.findWork(data,res=>
    {
      console.log(res);
      this.photo= res.upPhoto;
      /*将作品的地址进行解析：赋值给数组*/
    })

  }

  url(w){
    return w.split(",")[0];

  }
  removeCollection(id){
    var aaa=document.getElementById(id);
    console.log(id);
    aaa.style.display = 'none';

    // var data = new FormData();
    // data.set("photoUserId","1");
    // data.set("photoId",id.id);
    // this.UserService.removeCollection(data,res=>
    // {
    //   console.log(res);
    //
    // })

  }
  addCollection(photoId){
    var data = new FormData();
    data.set("photoId",photoId);
    data.set("userId",this.userId);
    this.UserService.addCollection(data,res=>
    {
      console.log(res.photoList);

      this.photo= res.photoList;
    })
  }
}
