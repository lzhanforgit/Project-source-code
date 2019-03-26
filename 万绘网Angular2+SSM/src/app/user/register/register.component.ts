import { Component, OnInit } from '@angular/core';
import {UserRegistService} from "./user-regist.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserRegistService,FormsModule]
})
export class RegisterComponent implements OnInit {

  alias:string;//绑定验证码
  hint_Info:string;//绑定注册事件返回信息
  data = new FormData();
  userNikeName;
  userPhone;
  userPassword;
  constructor(
    private rst:UserRegistService
  ) {
  }

  ngOnInit() {

  }

  user_register(){//注册事件
    console.log(this.userNikeName);
      this.data.set('userNikeName',this.userNikeName);
      this.data.set('userPhone',this.userPhone);
      this.data.set('userPassword',this.userPassword);
      this.rst.register(this.data,res=>{
          console.log(this.data.get('userPhone'));
      })
  }

}
