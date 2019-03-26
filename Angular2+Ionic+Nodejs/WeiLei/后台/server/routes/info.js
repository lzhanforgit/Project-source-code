var express = require('express');
var router = express.Router();
var utils=require('../util/util');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var infodao=require('../dao/infoDAO').Info;
//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');
var ct=require('./../util/checkToken');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/provinces',function(requese,response,next){
    infodao.getProvinces(function(data){
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
router.get('/social_update',function (requese, response, next) {
    var user=requese.headers||requese.body||requese.query;
    if(user){
        infodao.getSocialUpdate(user.id,function(data){
            //  console.log(data);
            if(data){
                // console.log("keyinadao");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //获取失败！
                    response.json({"stageCode":"2"});
                }
            }else{
                //  console.log("222");
                response.json({"stageCode":"2"});
            }
        })
    }
});
router.get('/getFollowers',function (requese, response, next) {
    var user=requese.headers||requese.body||requese.query;
    if(user){
        infodao.getFollowers(user.id,function(data){
            //  console.log(data);
            if(data){
                // console.log("keyinadao");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //获取失败！
                    response.json({"stageCode":"2"});
                }
            }else{
                //  console.log("222");
                response.json({"stageCode":"2"});
            }
        })
    }
})
module.exports = router;