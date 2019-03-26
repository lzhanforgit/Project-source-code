var qn = require('qn');
var path = require('path');
// 本地文件路径
/*var filePaths = [''];*/

var client = qn.create({
    accessKey: '6C3W7G8TwnRgzcPWgfBMQ8L1yYayKDa_0X74rkyz',
    secretKey: 'dSO1Vtlv6_iGkqn5Sqg_48qgwQF7nnoQhWXkmFwn',
    bucket: 'myfactory',  // 在七牛云创建的空间名字
    origin: ' http://owkq4s9d1.bkt.clouddn.com',    // 使用测试域名
});

var qiniuUpload = (filePaths) => {
    // map()方法返回新的 promise对象数组，
    // 若使用forEach()，报错：Cannot read property 'Symbol(Symbol.iterator)' of undefined
    // 因为没有返回值，运行到 return Promise.all(qiniuPromise) 时会返回 undefinded

    var qiniuPromise = filePaths.map(filePath => {

        // key 为上传到七牛云后自定义图片的名称
        return new Promise((resolve, reject) => {
            var fileName = path.win32.basename(filePath);
    client.uploadFile(filePath, {key: fileName}, function (err, result) {
        if(err) {
            reject(err);
        }else {
            resolve(result);
        }
    });
});
});

    return Promise.all(qiniuPromise);

};

// 调用函数
/*qiniuUpload(filePaths).then(res => console.log(res));*/
module.exports = qiniuUpload;