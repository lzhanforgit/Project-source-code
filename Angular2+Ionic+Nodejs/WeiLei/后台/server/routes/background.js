var express = require('express');
var router = express.Router();
var utils=require('../util/util');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var backdao=require('../dao/backgroundDAO').Back;
//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');
var ct=require('./../util/checkToken');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/allComments',function(requese,response,next){
    backdao.getAllComments(function(data){
        if(data){
            if(data.length){
                //获取成功
                response.json(data);
            }else if(data=='e004'){
                response.json({"stageCode":"e004"});
            }else{
                response.json({"stageCode":"1"});
            }
        }
    })
});

router.post('/delComment',function(requese,response,next){
    var user=requese.body;
    console.log(user);
    if(user){
        console.log(user.id);
        backdao.delcomment(user.id,function(data){
            // console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //获取成功 ;
                    response.json({"stageCode":"1"});
                }else{
                    //删除失败！
                    response.json({"stageCode":"2"});
                }
            }else{
                //console.log("222")
                //错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.get('/allRecipes',function(requese,response,next){
    backdao.getAllRecipes(function(data){
        if(data){
            if(data.length){
                //获取成功
                response.json(data);
            }else if(data=='e004'){
                response.json({"stageCode":"e004"});
            }else{
                response.json({"stageCode":"1"});
            }
        }
    })
});
router.post('/delRecipe',function(requese,response,next){
    var user=requese.body;
    if(user){
        console.log(user.id);
        backdao.delrecipe(user.id,function(data){
            // console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    //获取成功 ;
                    response.json({"stageCode":"1"});
                }
            }else{
                //console.log("222")
                //错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.post('/adminLogin', function(requese, response, next) {
    var user=requese.body;
    // console.log(user);
    if(user){
        backdao.getPasswordByName(user.userId, function (result) {
            if (result) {
                if (result[0].password == user.userPassword) {
                    //    1 表示登录成功
                    //产生令牌
                    var expires = moment().add(7, 'days').valueOf();
                    var token = jwt.encode({
                        iss: user.userId,
                        exp: expires
                    }, utils.secret);
                    response.json({"stageCode": "1",token:token,Name:result[0].name});
                } else if(result=='e004'){
                    //数据库错误
                    response.json({"stageCode":"e004"});
                } else{
                    //    2 表示密码错误
                    response.json({"stageCode":"2"});
                }
            } else {
                //    0 用户不存在
                response.json({"stageCode":"0"});
            }
        })
    }
});

module.exports = router;