import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[UserService]
})
export class WelcomeComponent implements OnInit {

  userName;

  userId = localStorage.getItem('UD');
  userId2 = this.route.snapshot.url.toString().split(',')[1]

  number=1;
  constructor(
    private UserService: UserService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.panduan();
    this.findUser();
  }

  panduan(){
    if(this.userId != this.userId2){
      this.number=2;
    }

  }

  findUser(){
    console.log(this.route.snapshot.paramMap.get('userId'));
    var data = new FormData();
    data.set("userPhone",this.userId);
    this.UserService.welcome(data,res=>
    {
      console.log(res);
      this.userName= res.user.userNikeName;
    })
  }

  like(){
    var data = new FormData();
    data.set("photoUserId",this.userId2);
    data.set("userId",this.userId);
    this.UserService.like(data,res=>
    {
      // console.log(res);
      // this.userName= res.user.userNikeName;
    })
  }
}
