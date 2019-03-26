import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
declare var $:any;

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css'],
  providers:[UserService]
})
export class FindUserComponent implements OnInit {



  user_name;
  user_sex;
  user_gexing;
  user_email;
  user_birthday;
  user_address;
  user_huishi = "绘师";
  user_weibo;
  user_phone;


  userId =localStorage.getItem('UD');
  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    // this.address();
    this.fanduser();
  }

  fanduser(){
    var data = new FormData();
    data.set("userPhone",this.userId);
    this.UserService.finduser(data,res=>
    {
      console.log(res);
      this.user_name = res.user.userNikeName;
      this.user_sex = res.user.userSex;
      this.user_gexing= res.user.userSignature;
      this.user_email= res.user.userEmail;
      this.user_birthday= this.getMyDate(res.user.userBirthday);
      this.user_address= res.user.userPainter;
      this.user_huishi= res.user.userPainter;
      this.user_weibo = res.user.userWeibo;
      this.user_phone = res.user.userPhone;
    })
  }



//==========================================================================================时间
  getMyDate(str) {
    var oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      // oHour = oDate.getHours(),
      // oMin = oDate.getMinutes(),
      // oSen = oDate.getSeconds(),
      oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay);//最后拼接时间
    return oTime;
  };

//补0操作
 getzf(num) {
    if (parseInt(num) < 10) {
      num = '0' + num;
    }
    return num;
  }



}
