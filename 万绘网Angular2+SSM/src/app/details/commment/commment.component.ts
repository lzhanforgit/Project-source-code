import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-commment',
  templateUrl: './commment.component.html',
  styleUrls: ['./commment.component.css'],
  providers:[UserService]

})
export class CommmentComponent implements OnInit {


  comment = [];

  userId =localStorage.getItem('UD');
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.findcomment();
  }


  findcomment(){
    var data = new FormData();
    data.set("id",this.userId);
    this.UserService.findComment(data,res=>
    {
      console.log(res);
      this.comment = res.commentList;

    })
  }
  remove(id){
    var aaa=document.getElementById(id);
    console.log(id);
    aaa.style.display = 'none';

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
