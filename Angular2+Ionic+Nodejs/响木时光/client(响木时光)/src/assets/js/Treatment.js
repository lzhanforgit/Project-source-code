//生成验证码
var code = "";
function createCode(e) {
    code = "";
    var codeLength = 4;
    var selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 60);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode(e);
    }
    console.log(code);
    if(canGetCookie == 1){
    	setCookie(e, code, 60 * 60 * 60, '/');
	}else{
		return code;
	}
}


//hours为空字符串时,cookie的生存期至浏览器会话结束。  
//hours为数字0时,建立的是一个失效的cookie,  
//这个cookie会覆盖已经建立过的同名、同path的cookie（如果这个cookie存在）。     

//cookie名获取值  
