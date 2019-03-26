/**
 * Created by yaochao on 2017/8/25.
 */
var num;
var userphone=$('#user_id');
var userpass=$('#password');
var pass_confirm=$('#password_confirm');
var getCode_btn=$("#getCode");
var code=$('#code');

userphone.blur(function(){
    checkPhone();
});
userphone.keypress(function(e){
    if(e.keyCode==13){
        checkPhone();
        if(checkPhone()){
            code.focus();
        }
    }
});

userpass.blur(function(){
    checkPass();
});
code.keypress(function(e){
    if(e.keyCode==13){
        userpass.focus();
    }
})
userpass.keypress(function(e){
    if(e.keyCode==13){
        checkPass();
        if(checkPass()&&checkPhone()){
            pass_confirm.focus();
            /*btn.trigger('click');*/
        }
    }
})

pass_confirm.blur(function(){
    confirm_pass();
});
pass_confirm.keypress(function (e) {
    if(e.keyCode==13){
        confirm_pass();
        if(confirm_pass()){
            $('#btn_regist').trigger('click');
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

function confirm_pass(){
    if(pass_confirm.val()){
        if(checkPass()){
            if(pass_confirm.val()==userpass.val()){
                $('#password_confirm_error').html("");
                return 1;
            }else{
                $('#password_confirm_error').html("两次密码不一致！");
                return 0;
            }
        }
    }else{
        $('#password_confirm_error').html("密码不为空");
        return 0;
    }
}


$('#btn_regist').click(function(){
    if(num==code.val()){
        if(checkPass()&&checkPhone()&&confirm_pass()){
            $.ajax({
                type:'post',
                url:'http://localhost:3000/users/regist',
                data:$('#regist_form').serialize(),
                dataType:'json',
                success:function (data) {
                    if(data.stageCode=='1'){
                        sessionStorage.setItem('telphone',userphone.val());
                        location.href='../../index.html';
                    }else if(data.stageCode=='2'){
                        $('#myModal').modal('show');
                        $('#model_message').html('用户已存在');
                    }else{
                        location.href = '404.html';
                    }
                },
                error:function (err) {
                    location.href = '404.html';
                }
            })
        }
    }else{
        $('#myModal').modal('show');
        $('#model_message').html('验证码错误！');
    }
   
});
getCode_btn.click(function(){
    checkPhone();
    if(checkPhone()){
        $.ajax({
            type:'post',
            url:'http://localhost:3000/users/code',
            data: userphone.serialize(),
            dataType:'json',
            success:function (data) {
                if(data.stageCode=='1'){
                    $('#myModal').modal('show');
                    $('#model_message').html('您已经注册过！');
                }else if(data.stageCode=='e004'){
                    location.href = '404.html';

                }else{
                    if(data){
                        num=data.stageCode;
                        console.log(num);
                        RemainTime();
                    }
                }
            },
            error:function (err) {
                location.href = '404.html';
            }
        })
    }
});

var iTime = 59;
var Account;
function RemainTime() {
    document.getElementById("getCode").disabled = true;
    var iSecond, sSecond = "", sTime = "";
    if (iTime >= 0) {
        //console.log(iSecond);
        iSecond = parseInt(iTime % 60);
        iMinute = parseInt(iTime / 60);
        if (iSecond >= 0) {
            if (iMinute > 0) {
                sSecond = iMinute + "分" + iSecond + "秒";
            } else {
                sSecond = iSecond + "秒";
            }
        }
        sTime = sSecond;
        if (iTime == 0) {
            clearTimeout(Account);
            sTime = "获取验证码";
            iTime = 59;
            document.getElementById("getCode").disabled = false;
            document.getElementById("getCode").innerText = sTime;

        } else {
           // console.log(sTime);
            Account = setTimeout("RemainTime()", 1000);
            iTime = iTime - 1;
            document.getElementById("getCode").innerText = sTime+"后重新获取";
        }
    } else {
        sTime = "没有倒计时";
    }
}