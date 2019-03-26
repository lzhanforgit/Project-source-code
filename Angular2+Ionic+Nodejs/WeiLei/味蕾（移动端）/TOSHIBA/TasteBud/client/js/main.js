/**
 * Created by yaochao on 2017/8/25.
 */ 
var nav=$('#nav_right');
if(sessionStorage.getItem('telphone')!=null){
    var user_tel=sessionStorage.getItem('telphone');
    nav.html('<li><a href="">欢迎'+user_tel+'</a></li>');
}else{
    nav.html('<li><a href="./client/webs/regist.html">注册</a></li> <li><a href="./client/webs/login.html">登录</a></li>');
}


   
