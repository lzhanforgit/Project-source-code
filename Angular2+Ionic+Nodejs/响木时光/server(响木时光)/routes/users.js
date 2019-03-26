var express = require('express');
var router = express.Router();
var util = require('./../utils/util');
var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var fs=require('fs');
//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');
var ct=require('./../utils/checkToken');
var userdao = require('./../dao/userDAO').userDao;
router.post('/login', function (req, res, next) {
    var user = req.body;
    if (user) {
        // console.log(user);
        userdao.getPasswordById(user.telephone, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json({"stateCode": 3});
                } else {
                    if (result[0].user_password == user.password) {

                        //产生令牌
                        var telephone=user.telephone;
                        var expires = moment().add(7, 'days').valueOf();
                        var token = jwt.encode({
                            iss: user.telephone,
                            exp: expires
                        }, util.secret);
                        res.json({"stateCode": 1,'token':token,"user_name":result[0].user_name,"user_id":result[0].user_id,"user_telephone":telephone});

                    } else {
                        res.json({"stateCode": 2});
                    }
                }
            }
        })
    }
});
router.post('/upload', function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    // console.log(form);
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        console.log(files);
        console.log(fields);
        console.log(fields.content);
        var extName = '';  //后缀名
        switch (files.pic.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            return;
        } else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 6 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            // 'public/uploads/d23242343242.jpg'
            var newPath = form.uploadDir + avatarName;
            // console.log("newpath---"+newPath);
            // fs.renameSync(files.user_icon.path, newPath);  //重命名
            fs.rename(files.pic.path, newPath,function (error) {
                if(error){
                    response.json({"stateCode":'e005'});
                    return
                }
                userdao.updateUserIcon(fields.userName,avatarName,fields.content,fields.user_id,function (result) {
                    if(result==1){
                        response.json({"stateCode":1});
                    }else{
                        response.json({"stateCode":0});
                    }
                })
            })

        }

    })



});
router.post('/uploadIcon', function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    // console.log(form);
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        console.log(files.pic.path);
        console.log(files.pic.type);
        console.log(fields);
        var extName = '';  //后缀名
        switch (files.pic.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            return;
        } else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 6 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            // 'public/uploads/d23242343242.jpg'
            var newPath = form.uploadDir + avatarName;
            // console.log("newpath---"+newPath);
            // fs.renameSync(files.user_icon.path, newPath);  //重命名
            fs.rename(files.pic.path, newPath,function (error) {
                if(error){
                    response.json({"stateCode":'e005'});
                    return
                }
                userdao.uploadUserIcon(avatarName,fields.user_id,function (result) {
                    console.log(result);
                    if(result==1){
                        response.json({"stateCode":1});
                    }else{
                        response.json({"stateCode":0});
                    }
                })
            })

        }

    })



});
router.post('/regist', function (req, res, next) {
    var user=req.body;
    // console.log(user)
    // user.password=util.MD5(user.password);
    if(user){
        var username=user.username;
        var telephone=user.telephone;
        userdao.addUser(user,function(pass){
            if(pass=='5'){
                //用户已经存在
                // console.log('用户已经存在');
                res.json({"stateCode":"5"});
            }else if(pass=='1'){
                //注册成功
                // console.log('注册成功');
                // console.log(user)
                console.log(username);
                console.log(telephone);
                res.json({"stateCode": 1,"username":username,"telephone":telephone});

            }else{
                // console.log('服务器错误');
                res.json({"stateCode":"e004"});
            }
        })
    }
});
router.get('/getAllUsers',ct.checkToken,function (req, res, next) {


    console.log(req.query);

    console.log(req.headers);
    res.json({'stateCode':'ok'});
    // console.log('headers');
    // console.log(req.headers);
    // console.log(req.header('token'));
    //
    // console.log('query');
    // console.log(req.query);
});
router.get('/work',function (req, res, next) {
    userdao.downLoad(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            // console.log(result);
            res.json(result);
        }
    })
});

module.exports = router;
