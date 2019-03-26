/**
 * Created by yaochao on 2017/8/27.
 */
function createCode(){
    var code = "";
    var codeLength = 4;//验证码的长度
    var random = new Array(0,1,2,3,4,5,6,7,8,9);//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*10);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
    return code;//把code值赋给验证码
}
var num=createCode();