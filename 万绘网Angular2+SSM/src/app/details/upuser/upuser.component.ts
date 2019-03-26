import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
declare var $:any;

@Component({
  selector: 'app-upuser',
  templateUrl: './upuser.component.html',
  styleUrls: ['./upuser.component.css'],
  providers:[UserService]

})
export class UpuserComponent implements OnInit {




  user_name;
  user_sex;
  user_gexing;
  user_email;
  user_birthday;
  user_address;
  user_huishi;
  user_weibo;
  user_phone;


  year = 0;
  mon = 0;
  day = 31;

  userId=localStorage.getItem('UD');
  constructor(    private UserService: UserService
  ) { }

  ngOnInit() {
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

  upuser(){
    var time = this.year+"-"+this.mon+"-"+this.day;

    console.log(this.user_name);
    var data = new FormData();
    data.set("userId",this.userId);
    data.set("userNikeName",this.user_name);
    data.set("userSignature",this.user_gexing);
    data.set("userEmail",this.user_email);
    data.set("userWeibo",this.user_weibo);
    data.set("userPhone",this.user_phone);
    data.set("UserSex", this.user_sex);
    data.set("userBirthday",time);

    this.UserService.upuser(data,res=>
    {
      console.log(res);
      // this.user_name = res.userNikeName;
      // this.user_sex = res.userSex;
      // this.user_gexing= res.userSignature;
      // this.user_email= res.userEmail;
      // this.user_birthday= res.userBirthday;
      // this.user_address= res.userPainter;
      // this.user_huishi= res.userPainter;
      // this.user_weibo = res.userWeibo;
      // this.user_phone = res.userPhone;

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
