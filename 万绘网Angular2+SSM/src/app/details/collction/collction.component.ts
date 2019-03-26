import { Component, OnInit } from '@angular/core';
declare var $:any;
import {UserService} from "../../service/user.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-collction',
  templateUrl: './collction.component.html',
  styleUrls: ['./collction.component.css'],
  providers:[UserService]

})
export class CollctionComponent implements OnInit {


  photo = [];

  userId=localStorage.getItem('UD');
  userId2 = this.route.snapshot.url.toString().split(',')[1];

  number;
  constructor( private UserService: UserService,
               private route:ActivatedRoute) {
    // this.colletion();
  }

  ngOnInit() {
    this.panduan();
    this.colletion();
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
  url(w){
    return w.split(",")[0];

  }
  colletion(){
    var data = new FormData();
    data.set("id",this.userId);
    this.UserService.findCollction(data,res=>
    {
      console.log(res.photoList);

      this.photo= res.photoList;
    })

  }


  removeCollection(id){
    var aaa=document.getElementById(id);
    console.log(id);
    aaa.style.display = 'none';

    // var data = new FormData();
    // data.set("collectUserId",this.userId);
    // data.set("collectPhotoId",id.id);
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
