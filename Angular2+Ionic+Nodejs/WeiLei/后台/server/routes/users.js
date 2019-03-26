var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs=require('fs');
var utils=require('../util/util');
var AVATAR_UPLOAD_FOLDER='/uploads/'
var userdao=require('../dao/userDAO').user;
var qiNiu=require('../UploadPic');


//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');
var ct=require('./../util/checkToken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(requese, response, next) {
  var user=requese.body;
   // console.log(user);
    if(user){
    userdao.getPasswordById(user.userId, function (result) {
        if (result) {
            if (result[0].password == utils.MD5(user.userPassword)) {
          //    1 表示登录成功
          //产生令牌
            var expires = moment().add(7, 'days').valueOf();
            var token = jwt.encode({
                iss: user.userId,
                exp: expires
            }, utils.secret);
            response.json({"stageCode": "1",token:token,Id:result[0].id,UserIcon:result[0].user_icon});
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

router.post('/regist',function(requese,response,next){
  var user=requese.body;
    if(user){
      userdao.addUser(user,function(pass){
        if(pass=='2'){
          //用户已经存在
          response.json({"stageCode":"2"});
        }else if(pass=='e004'){
            response.json({"stageCode":"e004"});
        }else if(pass){
            //注册成功
            var expires = moment().add(7, 'days').valueOf();
            var token = jwt.encode({
                iss: user.userId,
                exp: expires
            }, utils.secret);
            response.json({"stageCode": "1",token:token,Id:pass});
        }else{
            //未知错误
            response.json({"stageCode":"e004"});
        }
      })
    }
});

router.post('/code',function(requese,response,next){
  var user=requese.body;
  if(user){
     // console.log(user);
    userdao.checkUser(user.userId,function(data){
      if(data){
        if(data=='1'){
          //已经注册过
          response.json({"stageCode":"1"});
        }else if(data=='e004'){
          response.json({"stageCode":"e004"});
        }else{
          response.json({"stageCode":data});
        }
      }
    })
  }
});

router.get('/info',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
       // console.log(user.id);
        userdao.getInfo(user.id,function(data){
            if(data){
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 );
                    response.json(data);
                }else{
                    response.json({"stageCode":"1"});
                }
            }else{
                response.json({"stageCode":"1"});
            }
        })
    }
});

router.get('/menus',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
    //    console.log(user.id);
        userdao.getMenu(user.id,function(data){
         //   console.log(data);
            if(data){
             //   console.log("111");
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

router.get('/recommend',function(requese,response,next){
    userdao.getRecommend(function(data){
        if(data){
            if(data.length){
                //获取成功
                response.json(data);
            }else if(data=='e004'){
                //数据库错误
                response.json({"stageCode":"e004"});
            }else{
                //未知错误
                response.json({"stageCode":"3"});
            }
        }else{
            //无用户
            response.json({"stageCode":"2"});
        }
    })
});

router.get('/lists',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        //console.log(user.id);
        userdao.getlist(user.id,function(data){
          //  console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无菜单！
                    response.json({"stageCode":"2"});
                }
            }else{
             //   console.log("222")
                //错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.get('/personallists',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        //console.log(user.id);
        userdao.getPersonallist(user.id,function(data){
            //  console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无菜单！
                    response.json({"stageCode":"2"});
                }
            }else{
                //   console.log("222")
                //错误
                response.json({"stageCode":"3"});
            }
        })
    }
});

router.get('/works',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
       //  console.log(user.id);
        userdao.getworks(user.id,function(data){
            //  console.log(data);
            if(data){
               // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无菜单！
                    response.json({"stageCode":"2"});
                }
            }else{
             //    console.log("222")
                //错误
                response.json({"stageCode":"3"});
            }
        })
    }
});

router.get('/comments',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        //console.log(user.id);
        userdao.getcomments(user.id,function(data){
            /*console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log(data[0].comment_date.toLocaleDateString());*/
            if(data){
            //    console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无评论！
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

router.post('/addcomment',function(requese,response,next){
    var user=requese.body;
    if(user){
       // console.log(user);
        userdao.addcomment(user,function(data){
         //   console.log(data);
            if(data){
            //    console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //留言成功 ;
                    response.json({"stageCode":"1"});
                }else{
                    //未知错误！
                    response.json({"stageCode":"2"});
                }
            }else{
           //     console.log("222")
                //未知错误
                response.json({"stageCode":"2"});
            }
        })
    }
});

router.post('/delcomment',function(requese,response,next){
    var user=requese.body;
   // console.log(user+'wdwed');
    if(user){
        //console.log(user.id);
        userdao.delcomment(user.id,function(data){
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

router.get('/collect_recipes',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        //console.log(user.id);
        userdao.getCollectRecipes(user.id,function(data){
            //console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无收藏菜单！
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

/*router.post('/checkCollect',function(requese,response,next){
    var user=requese.body;
    if(user){
        console.log(user);
        userdao.checkCollected(user,function(data){
            console.log(data);
            if(data){
                console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //留言成功 ;
                    response.json({"stageCode":"1"});
                }else{
                    //未知错误！
                    response.json({"stageCode":"2"});
                }
            }else{
                console.log("222")
                //未知错误
                response.json({"stageCode":"2"});
            }
        })
    }
});*/

router.get('/collect_lists',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        //console.log(user.id);
        userdao.getCollectLists(user.id,function(data){
            //console.log(data);
            if(data){
                //console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //无收藏菜单！
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

router.get('/follow',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
     //   console.log(user.id);
        userdao.getFollowWho(user.id,function(data){
            // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //错误！
                    response.json({"stageCode":"3"});
                }
            }else{
                //console.log("222")
                //无关注
                response.json({"stageCode":"2"});
            }
        })
    }
});

router.get('/Befollowed',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
      //  console.log(user.id);
        userdao.getFollowByWho(user.id,function(data){
            // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //错误！
                    response.json({"stageCode":"3"});
                }
            }else{
                //console.log("222")
                //无关注
                response.json({"stageCode":"2"});
            }
        })
    }
});

router.get('/UnfollowUsers',function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
       // console.log(user.id);
        userdao.getUnFollowUsers(user.id,function(data){
            // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //错误！
                    response.json({"stageCode":"3"});
                }
            }else{
                //console.log("222")
                //无关注
                response.json({"stageCode":"2"});
            }
        })
    }
});

router.post('/checkFollow',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.ifFollowed(user,function(data){
           // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //收藏成功 ;
                    response.json({"stageCode":"1"});
                }else{
                    //收藏失败！
                    response.json({"stageCode":"2"});
                }
            }else{
                //console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.post('/followUser',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.followUser(user,function(data){
           // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //关注成功;
                    response.json({"stageCode":"1"});
                }else{
                    response.json({"stageCode":"2"});
                }
            }else{
                //    console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.post('/UnfollowUser',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.UnfollowUser(user,function(data){
        //    console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //取消收藏成功 ;
                    response.json({"stageCode":"1"});
                }else{
                    //没有收藏！
                    response.json({"stageCode":"2"});
                }
            }else{
                // console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});


router.post('/checkThumb',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.ifThumbed(user,function(data){
            // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //已经点赞 ;
                    response.json({"stageCode":"1"});
                }else{
                    //没有点赞！
                    response.json({"stageCode":"2"});
                }
            }else{
                //console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.post('/thumbWork',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.thumbWork(user,function(data){
        //    console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //点赞成功;
                    userdao.addThumbNumber(user.work_id,function (data) {});
                    response.json({"stageCode":"1"});
                }else{
                    // 点赞失败
                    response.json({"stageCode":"2"});
                }
            }else{
                //    console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});
router.post('/UnthumbWork',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.UnthumbWork(user,function(data){
          //  console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //取消赞成功 ;
                    userdao.delThumbNumber(user.work_id,function (data) {});
                    response.json({"stageCode":"1"});
                }else{
                    //没有收藏！
                    response.json({"stageCode":"2"});
                }
            }else{
                // console.log("222")
                //未知错误
                response.json({"stageCode":"3"});
            }
        })
    }
});

router.post('/UpdateInfo', function (request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    var form = new formidable.IncomingForm();   //创建上传表单�
    form.encoding = 'utf-8';//设置编码�
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            //上传错误
            response.json({"stageCode":"e004"});
            return;
        }
      //  console.log(fields);
      //  console.log(files);
        var extName = '';  //后缀名�console.log('files.in_file.type: '+files.in_file.type);�
        switch (files.user_icon.type) {
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
            //图片格式不正确
            response.json({"stageCode":"2"});
            return;
        } else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录�
            form.keepExtensions = true;     //保留后缀�
            form.maxFieldsSize = 2 * 1024;   //文件大小�
            var avatarName = utils.createUnique1() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            // console.log("old"+files.user_icon.path);
            // console.log("newpath---"+newPath);
         //   fs.renameSync(files.user_icon.path, newPath);  //重命名�
            var is = fs.createReadStream(files.user_icon.path);
            var os = fs.createWriteStream(newPath);
            is.pipe(os);
            is.on('end', function () {
                fs.unlinkSync(files.user_icon.path,newPath);
                var filePaths = [newPath];
                qiNiu(filePaths).then(res => userdao.UpdateInfo(fields,res[0].url,function(data){
                   // console.log(data);
                    if(data){
                        // console.log("111");
                        if(data=='e004'){
                            response.json({"stageCode":"e004"});
                        }else if(data=='1'){
                            //修改信息成功;
                            response.json({"stageCode":"1","user_icon":res[0].url});
                        }else{
                            //修改失败
                            response.json({"stageCode":"2"});
                        }
                    }else{
                        // console.log("222")
                        //未知错误
                        response.json({"stageCode":"3"});
                    }
                })
            );
            });




        }
    })

});

router.get('/BasicInfo',ct.checkToken,function(requese,response,next){
    var user=requese.headers||requese.body||requese.query;
    if(user){
        // console.log(user.id);
        userdao.getBasicInfo(user.id,function(data){
            // console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data.length){
                    //获取成功 ;
                    response.json(data);
                }else{
                    //错误！
                    response.json({"stageCode":"3"});
                }
            }else{
                //console.log("222")
                //错误
                response.json({"stageCode":"2"});
            }
        })
    }
});

router.post('/Resetcode',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        userdao.checkRegister(user.userId,function(data){
            if(data){
                if(data=='1'){
                    //没有注册过
                    response.json({"stageCode":"1"});
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    response.json({"stageCode":data});
                }
            }
        })
    }
});

router.post('/ResetPssword',function(requese,response,next){
    var user=requese.body;
    if(user){
         console.log(user);
        userdao.resetPassword(user,function(data){
            if(data){
                if(data=='1'){
                    //修改成功
                    response.json({"stageCode":'1'});
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    //修改失败
                    response.json({"stageCode":'2'});
                }
            }
        })
    }
});

router.post('/delPersonalWork',function(requese,response,next){
    var user=requese.body;
    // console.log(user+'wdwed');
    if(user){
        //console.log(user.id);
        userdao.delPersonalWork(user.id,function(data){
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

module.exports = router;