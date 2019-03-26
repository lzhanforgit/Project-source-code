var express = require('express');
var router = express.Router();
var utils=require('../util/util');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var menudao=require('../dao/menuDAO').menu;
var formidable = require('formidable');
var fs=require('fs');
var qiNiu=require('../UploadPic');
//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');
var ct=require('./../util/checkToken');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/details',function(requese,response,next){
    var menu=requese.headers||requese.body||requese.query;
    if(menu){
    //   console.log(menu.id);
        menudao.getDetails(menu.id,function(data){
            if(data){
                if(data.length){
                    //获取成功
                    response.json(data);
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    response.json({"stageCode":"1"});
                }
            }else{
                response.json({"stageCode":"1"});
            }
        })
    }
});

router.get('/steps',function(requese,response,next){
    var menu=requese.headers||requese.body||requese.query;
    if(menu){
      //  console.log(menu.id);
        menudao.getSteps(menu.id,function(data){
            if(data){
                if(data.length){
                    //获取成功
                    response.json(data);
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    response.json({"stageCode":"1"});
                }
            }else{
                //无步骤
                response.json({"stageCode":"3"});
            }
        })
    }
});

router.get('/indexmenu',function(requese,response,next){
        menudao.getIndexMenus(function(data){
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

router.get('/indexlist',function(requese,response,next){
    menudao.getIndexlists(function(data){
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

router.get('/Menudetails',function(requese,response,next){
    var menu=requese.headers||requese.body||requese.query;
   // console.log(menu);
    //console.log("111");
    if(menu){
      //  console.log(menu.id);
        menudao.getMenuDetails(menu.id,function(data){
            if(data){
                if(data.length){
                    //获取成功
                    response.json(data);
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    response.json({"stageCode":"1"});
                }
            }else{
                response.json({"stageCode":"1"});
            }
        })
    }
});

router.get('/Menuworks',function(requese,response,next){
    var menu=requese.headers||requese.body||requese.query;
    if(menu){
      //  console.log(menu.id);
        menudao.getMenuworks(menu.id,function(data){
            if(data){
                if(data.length){
                    //获取成功
                    response.json(data);
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    //未知错误
                    response.json({"stageCode":"2"});
                }
            }else{
                //无作品
                response.json({"stageCode":"3"})
            }
        })
    }
});

router.get('/Menulists',function(requese,response,next){
    var menu=requese.headers||requese.body||requese.query;
    if(menu){
      //  console.log(menu.id);
        menudao.getMenulists(menu.id,function(data){
            if(data){
                if(data.length){
                    //获取成功
                    response.json(data);
                }else if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else{
                    //未知错误
                    response.json({"stageCode":"2"});
                }
            }else{
                //无作品
                response.json({"stageCode":"3"})
            }
        })
    }
});

router.get('/classes',function(requese,response,next){
    menudao.getClasses(function(data){
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

router.post('/checkCollect',function(requese,response,next){
    var user=requese.body;
    if(user){
       // console.log(user);
        menudao.ifCollected(user,function(data){
          //  console.log(data);
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

router.post('/collectReciper',function(requese,response,next){
    var user=requese.body;
    if(user){
       // console.log(user);
        menudao.collectReciper(user,function(data){
            //console.log(data);
            if(data){
               // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    menudao.addRcollectNum(user.reciper_id,function (d) {});
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

router.post('/UncollectReciper',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        menudao.UncollectReciper(user,function(data){
          //  console.log(data);
            if(data){
                // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //取消收藏成功 ;
                    menudao.delRcollectNum(user.reciper_id,function (d) {});
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

router.post('/ifCollectList',function(requese,response,next){
    var user=requese.body;
    if(user){
       // console.log(user);
        menudao.hasCollectedList(user,function(data){
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

router.post('/collectList',function(requese,response,next){
    var user=requese.body;
    if(user){
        //console.log(user);
        menudao.collectList(user,function(data){
           // console.log(data);
            if(data){
               // console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //已经收藏 ;
                    menudao.addLcollectNum(user.list_id,function (d) {});
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

router.post('/UncollectList',function(requese,response,next){
    var user=requese.body;
    if(user){
        // console.log(user);
        menudao.UncollectList(user,function(data){
            // console.log(data);
            if(data){
              //  console.log("111");
                if(data=='e004'){
                    response.json({"stageCode":"e004"});
                }else if(data=='1'){
                    //取消收藏成功 ;
                    menudao.delLcollectNum(user.list_id,function (d) {});
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

router.post('/UploadMenu', function (request, response, next) {
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
        // console.log(fields);
        // console.log(files);
        var extName = '';  //后缀名�console.log('files.in_file.type: '+files.in_file.type);�
        switch (files.recipe_cover1.type) {
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
          //  console.log("old"+files.recipe_cover1.path);
           // console.log("newpath---"+newPath);
            //   fs.renameSync(files.user_icon.path, newPath);  //重命名�
            var is = fs.createReadStream(files.recipe_cover1.path);
            var os = fs.createWriteStream(newPath);
            is.pipe(os);
            is.on('end', function () {
                fs.unlinkSync(files.recipe_cover1.path,newPath);
                var filePaths = [newPath];
                qiNiu(filePaths).then(res => menudao.UploadMenu(fields,res[0].url.trim(),function(data){
                    // console.log(data);
                    if(data){
                        // console.log("111");
                        if(data=='e004'){
                            response.json({"stageCode":"e004"});
                        }else if(data=='2'){
                            //上传失败;
                            response.json({"stageCode":"2"});
                        }else{
                           // console.log(data);
                            menudao.UploadMaterial(fields.MaterialStr,data,function(Reciper_id){})
                            menudao.UploadMaterial_amount(fields.material_amountStr,data,function(data){})
                            menudao.UploadSteps(fields.StepStr,data,function(data){})
                            menudao.addUprodunctionNum(fields.creater_id,function(data){})
                            response.json({"recipe_id":data});
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
router.post('/deleteRfromList',function(requese,response,next){
    var menu=requese.body;
     // console.log(menu);
    //console.log("111");
    if(menu){
        //  console.log(menu.id);
        menudao.delRecipeFromList(menu,function(data){
           if(data=='1'){
               response.json({"stageCode":"1"});
           }else if(data=="2"){
               response.json({"stageCode":"2"});
           }else{
               response.json({"stageCode":"e004"});
           }
        })
    }else{
        response.json({"stageCode":"2"});
    }
});
router.post('/addRintoList',function(requese,response,next){
    var menu=requese.body;
    console.log(menu);
    //console.log("111");
    if(menu){
        //  console.log(menu.id);
        menudao.addRecipeintoList(menu,function(data){
            if(data=='1'){
                //加入成功
                response.json({"stageCode":"1"});
            }else if(data=="2"){
                response.json({"stageCode":"2"});
            }else{
                response.json({"stageCode":"e004"});
            }
        })
    }else{
        response.json({"stageCode":"2"});
    }
});

router.post('/addList', function (request, response, next) {
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
         console.log(fields);
         console.log(files);
        var extName = '';  //后缀名�console.log('files.in_file.type: '+files.in_file.type);�
        switch (files.menu_cover.type) {
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
            //  console.log("old"+files.recipe_cover1.path);
            // console.log("newpath---"+newPath);
            //   fs.renameSync(files.user_icon.path, newPath);  //重命名�
            var is = fs.createReadStream(files.menu_cover.path);
            var os = fs.createWriteStream(newPath);
            is.pipe(os);
            is.on('end', function () {
                fs.unlinkSync(files.menu_cover.path,newPath);
                var filePaths = [newPath];
                qiNiu(filePaths).then(res => menudao.addRecipe_list(fields,res[0].url.trim(),function(data){
                    // console.log(data);
                    if(data){
                        // console.log("111");
                        if(data=='e004'){
                            response.json({"stageCode":"e004"});
                        }else if(data=='2'){
                            //上传失败;
                            response.json({"stageCode":"2"});
                        }else{
                            // console.log(data);
                            response.json({"list_id":data});
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

router.post('/addPersonalWork', function (request, response, next) {
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
       // console.log(fields);
        // console.log(files);
        var extName = '';  //后缀名�console.log('files.in_file.type: '+files.in_file.type);�
        switch (files.cover_pic.type) {
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
            //  console.log("old"+files.recipe_cover1.path);
            // console.log("newpath---"+newPath);
            //   fs.renameSync(files.user_icon.path, newPath);  //重命名�
            var is = fs.createReadStream(files.cover_pic.path);
            var os = fs.createWriteStream(newPath);
            is.pipe(os);
            is.on('end', function () {
                fs.unlinkSync(files.cover_pic.path,newPath);
                var filePaths = [newPath];
                qiNiu(filePaths).then(res => menudao.addPersonalWork(fields,res[0].url.trim(),function(data){
                    // console.log(data);
                    if(data){
                        // console.log("111");
                        if(data=='e004'){
                            response.json({"stageCode":"e004"});
                        }else if(data=='2'){
                            //上传失败;
                            response.json({"stageCode":"2"});
                        }else{
                            // console.log(data);
                            menudao.addRcookNum(fields.recipe_id,function(result){});
                            response.json({"list_id":data});
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

module.exports = router;