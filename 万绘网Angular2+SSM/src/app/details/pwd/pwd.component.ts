import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
declare var $:any;

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.css'],
  providers:[UserService]
})
export class PwdComponent implements OnInit {


  userId=localStorage.getItem('UD');

  constructor(private UserService: UserService) { }

  ngOnInit() {

  }

  uppwd() {
    // console.log("xsx00");
    // console.log($("#newpwd").val())

    // $.ajax({
    //   url: 'http://127.0.0.1:8080/WanHuiWang/user/updatePassword.do',
    //   type: 'post',
    //   dataType: 'json',
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   crossDomain: true,
    //   data: {
    //     pwd: $("#newpwd").val(),
    //     userId: sid
    //   },
    //
    //   success: function () {
    //
    //     id.style.background = 'white';
    //     id.style.color = 'black';
    //     id.value = "修改成功";
    //
    //   }
    //
    // })

    var data = new FormData();
    console.log($("#newpwd2").val());
    data.set("userPassword",$("#newpwd2").val());
    data.set("userId",this.userId);
    this.UserService.uppwd(data,res=>
    {
      console.log(res);
    })
  }
}
