import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {DetailsPhotoService} from "../../service/details-photo.service";
import { ActivatedRoute } from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.css'],
  providers:[UserService,DetailsPhotoService]
})
export class FanComponent implements OnInit {

  name = [];


  userId=localStorage.getItem('UD');
  userId2  = this.route.snapshot.url.toString().split(',')[1];
  number;
  constructor(
    private UserService: UserService,
    private detailService: DetailsPhotoService,
    private route:ActivatedRoute ){ }

  ngOnInit() {
    this.panduan();

    this.findfan();
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
  findfan(){
    var data = new FormData();
    data.set("relationshipUserId",this.userId);
    this.UserService.findfan(data,res=>
    {
      console.log(res);
      this.name = res.userList;
    })
  }
  addfollow(photoUserId){
    var data = new FormData();
    data.set("photoUserId",photoUserId);
    data.set("userId",this.userId);
    this.detailService.addRelationship(data,res=>
    {
      console.log(res);
      this.name = res.userList;
    })
  }

  shuaxin(){

  }
  removeFan(id){

    var aaa=document.getElementById(id);
    console.log(id);
    aaa.style.display = 'none';

    // var data = new FormData();
    // data.set("relationshipUserId",this.userId);
    // this.UserService.removeFan(data,res=>
    // {
    //   console.log(res);
    //   this.name = res.userList;
    // })
  }

}
