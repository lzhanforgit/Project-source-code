import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import { LocalStorage } from './../services/localStorage.service';
declare var $: any ;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [UsersService]
})
export class WorkComponent implements OnInit {

  constructor(
    private userSer: UsersService,
    private localstorage: LocalStorage
  ) { }
  telephone: any;
  data: any;
  username: any;
  text: any ;
  click: boolean ;
  content: any;
  _content: any;
  ngOnInit() {
    let that = this;
    that.username = that.localstorage.get('username');
    that.telephone = that.localstorage.get('telephone');
    if (that.username) {
      that.click = false;
      // console.log(that.click + '>>>>>>>>>>>>>>>>>>>>>>');
    }else {
      that.click = true;
      that.username = '';
      // console.log(that.click + '<<<<<<<<<<<<<<<<<<<<<<<');
    }
    downLoad();
    function downLoad() {
      $.ajax({
        type: 'get',
        url: 'http://localhost:3000/users/work',
        success: function (result) {
          if (result) {
            that.text = result;
            // console.log(that.text);
          }else {
          }
        },
        error: function (err) {
        }
      });
    }
  }
toText(textForm) {
  let that = this;
  that.content = $('#content').val();
  let formdata = new FormData($('#myForm')[0]);
  formdata.append('userName', that.username);
  formdata.append('content', that.content);
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/users/upload',
    data: formdata,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function (result) {
      if (result.stateCode == 1) {
        // location.reload();
        that._content = '';
      }else {
      }
    },
    error: function (err) {
    }
  });
}
}
