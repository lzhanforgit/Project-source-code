import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {


  myNav=[];


  userId;
  constructor() {
    this.myNav = ['查看个人信息','设置个人信息','关注','粉丝','消息','投稿','收藏','修改密码','约稿','欢迎'];
  }

  ngOnInit() {
  }

  re(a){

  }

}
