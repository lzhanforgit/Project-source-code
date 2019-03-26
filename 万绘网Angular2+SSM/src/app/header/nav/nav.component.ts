import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService} from "../../service/global-property.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  navIteam = [];
  navIteamLink = [];
  last_scroll_position;
  new_scroll_position = 0;
  loginState = 1;
  avatar;
  userNikeName;
  header;
  userId;
  //搜索框输入的值
  searchInput;
  constructor(
    private glo:GlobalPropertyService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.navIteam = ['最新发布','排行','绘师','悬赏'];
    this.navIteamLink = ['recently','ranking','drawer','task'];
    this.header = document.getElementById('header');
    this.userId = localStorage.getItem("UD");
    this.userNikeName = localStorage.getItem('nn')
  }

  ngOnInit() {
    //验证是否登录
    localStorage.getItem('tel');
    document.cookie.split(';')[0].split('=')[1];
    if((localStorage.getItem('tel') == null || localStorage.getItem('tel') == '' ) || document.cookie.split(';')[0].split('=')[1] != localStorage.getItem('tel')){
      this.loginState = 1;
    }else {
      this.avatar = localStorage.getItem('avatar');
      this.loginState = 2;
    }

    //header 导航栏
    var header = document.getElementById('header');
    var new_scroll_position = 0;
    var last_scroll_position;

    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;

      // Scrolling down
      if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");
        // Scrolling up
      } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
      }

      new_scroll_position = last_scroll_position;
    });
  }


  search(){
    if(this.searchInput){
      this.router.navigate(['/search',this.searchInput]);
    }else{

    }
  }



  pageScroll(){
    this.last_scroll_position = window.scrollY;

    // Scrolling down
    if (this.new_scroll_position < this.last_scroll_position && this.last_scroll_position > 80) {
      // header.removeClass('slideDown').addClass('slideUp');
      this.header.classList.remove("slideDown");
      this.header.classList.add("slideUp");
      // Scrolling up
    } else if (this.new_scroll_position > this.last_scroll_position) {
      // header.removeClass('slideUp').addClass('slideDown');
      this.header.classList.remove("slideUp");
      this.header.classList.add("slideDown");
    }

    this.new_scroll_position = this.last_scroll_position;
  }

  quit(){
    this.glo.isLogin = false;
    // localStorage.removeItem('tel');
    // localStorage.removeItem('UD');
    // localStorage.removeItem('avatar');
    localStorage.clear();
    sessionStorage.clear();
    this.delCookie();
    window.location.reload();
  }

  delCookie(){
    var myDate=new Date();
    myDate.setTime(-1000);//设置时间
    var data=document.cookie;
    var dataArray=data.split("; ");
    for(var i=0;i<dataArray.length;i++){
      var varName=dataArray[i].split("=");
      document.cookie=varName[0]+"=''; expires="+myDate.toDateString();
    }
  }
}
