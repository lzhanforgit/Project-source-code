/**
 * Created by yaochao on 2017/8/25.
 */
var userphone=$('#user_id');
var userpass=$('#user_password');
var check=$('#remember');
var forget=$('#forget');
var btn=$('#btn_login');
userphone.blur(function(){
    checkPhone();
});
userphone.keypress(function(e){
    if(e.keyCode==13){
        checkPhone();
        if(checkPhone()){
            userpass.focus();
        }
    }
})
userpass.blur(function(){
    checkPass();
});

userpass.keypress(function(e){
    if(e.keyCode==13){
        checkPass();
        if(checkPass()&&checkPhone()){
            btn.trigger('click');
        }
    }
})


function checkPhone(){
    if(userphone.val()){
        var reg=/^1[34578]\d{9}$/;
        if(reg.test(userphone.val())){
            $('#telephone_error').html("");
            return 1;
        }else{
            $('#telephone_error').html("输入的不是11位手机号");
            return 0;
        }
    }else{
        $('#telephone_error').html("账号不为空");
        return 0;
    }
}

function checkPass(){
    if(userpass.val()){
        var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(reg.test(userpass.val())){
            $('#password_error').html("");
            return 1;
        }else{
            $('#password_error').html("密码要同时含有数字和字母，且长度要在8-16位之间");
            return 0;
        }
    }else{
        $('#password_error').html("密码不为空");
        return 0;
    }
}


$('#btn_login').click(function(){
   if(checkPass()&&checkPhone()){
       if(check.is(':checked')){
           localStorage.setItem('tel',userphone.val());
           localStorage.setItem('password',userpass.val());
       }
       if(forget.is(':checked')){
           localStorage.clear();
       }
       $.ajax({
           type:'post',
           url:'http://localhost:3000/users/login',
//                    data:{userName:$('#user_id').val(),userPassword:$('#user_password').val()},
           data:$('#myform').serialize(),
           dataType:'json',
           success:function (data) {
               if(data.stageCode=='1'){
                   sessionStorage.setItem('telphone',userphone.val());
                   location.href='../../index.html';
               }else if(data.stageCode=='0'){
                   $('#myModal').modal('show');
                   $('#model_message').html('用户名不存在');
               }else if(data.stageCode=='2'){
                   $('#myModal').modal('show');
                   $('#model_message').html('用户名或密码错误');
               }else{
                   location.href = '404.html';
               }
           },
           error:function (err) {
               alert(err);
               //location.href = '404.html';
           }
       })
      /* sessionStorage.setItem('telphone',userphone.val());
       location.href='../../index.html';*/
   }
});

