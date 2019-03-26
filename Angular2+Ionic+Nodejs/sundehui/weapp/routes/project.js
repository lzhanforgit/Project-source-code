var express = require('express');
var request = require('request');
var router = express.Router();
var util = require('./../utils/util');
var formidable = require('formidable');
var AVATAR_UPLOAD_FOLDER = '/uploads/';
var fs = require('fs');
var projectDao = require('./../dao/projectDao').projectDao;
router.post('/login', function (req, res, next) {
    var user=req.body;
    var list_name=req.body.user_nickname+'的平台';
    if (user) {
        projectDao.login(user.user_openid,user.user_nickname,user.user_headpic,list_name,user.user_name, user.user_phone, user.user_provinceName, user.user_cityName, user.user_company,user.list_user, user.list_sum, user.list_self, user.list_country, user.list_public, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result == 1) {
                    res.end(JSON.stringify({success: true}));
                }
                else {
                    if (result == 0) {
                        res.json({"stateCode": 5});
                    } else {
                        res.json({"stateCode": 7});
                    }
                }
            }
        })
    }
});

router.post('/infomation', function (req, res, next) {
    var infomation = req.body;
    if (infomation) {
        projectDao.infomation(infomation.list_name, infomation.user_name,infomation.user_phone,infomation.provinceName,infomation.cityName,infomation.user_company,infomation.list_self,infomation.list_sum,infomation.list_country,infomation.list_public,infomation.openid, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result == 1) {
                    res.end(JSON.stringify({success: 'success'}));
                }
                else {
                    if (result == 0) {
                        res.json({"stateCode": 5});
                    } else {
                        res.json({"stateCode": 7});
                    }
                }
            }
        })
    }
});

router.post('/getUserInfo', function (req, res, next) {
    var openid = req.body;
    if (openid) {
        projectDao.getUserInfo(openid.openId, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json([]);
                } else {
                    res.json(result[0]);
                    }
                }
        })
    }
});

router.post('/newProject', function (req, res, next) {
    var newProject = req.body;
    if (newProject) {
        projectDao.newProject(newProject.project_name, newProject.project_user, newProject.project_type, newProject.project_provinceNmae, newProject.project_cityName,
            newProject.project_require, newProject.project_public, newProject.self_capacity, newProject.self_area, newProject.self_electricity, newProject.self_elec_distance,
            newProject.self_discount, newProject.sum_capacity, newProject.sum_area, newProject.sum_distance, newProject.sum_rent, newProject.country_number, newProject.country_capacity, newProject.project_phone, newProject.project_time, newProject.self_shuini,
            newProject.self_zhuankuai, newProject.self_qita, newProject.sum_shuini, newProject.sum_zhuankuai, newProject.sum_qita, newProject.user_openid,function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result) {
                    console.log(result);
                    res.json(result);
                }
                // else {
                //     if (result == 0) {
                //         res.json({"stateCode": 5});
                //     } else {
                //         res.json({"stateCode": 7});
                //     }
                // }
            }
        })
    }
});

router.post('/updateProject', function (req, res, next) {
    var updateProject = req.body;
    console.log(updateProject);
    if (updateProject) {
        projectDao.updateProject(updateProject.project_name, updateProject.project_user, updateProject.project_provinceNmae, updateProject.project_cityName,
            updateProject.project_require, updateProject.self_capacity, updateProject.self_area, updateProject.self_electricity, updateProject.self_elec_distance,
            updateProject.self_discount, updateProject.sum_capacity, updateProject.sum_area, updateProject.sum_distance, updateProject.sum_rent,
            updateProject.country_number, updateProject.country_capacity, updateProject.project_phone, updateProject.project_time, updateProject.self_shuini,
            updateProject.self_zhuankuai, updateProject.self_qita, updateProject.sum_shuini, updateProject.sum_zhuankuai, updateProject.sum_qita ,updateProject.project_public,updateProject.project_id,function (result) {
                if (result == 'e004') {
                    res.json({"stateCode": result});
                } else {
                    if (result == 1) {
                        res.end(JSON.stringify({success: 'yes'}));
                    }
                    else {
                        if (result == 0) {
                            res.json({"stateCode": 5});
                        } else {
                            res.json({"stateCode": 7});
                        }
                    }
                }
            })
    }
});

router.post('/index_right', function (req, res, next) {
    var pagenum=req.body.pageNumber;
    projectDao.index_right(pagenum,function (result) {
        if (result.length == 0) {
            res.json(null);
        } else {
            res.json(result);
        }
    })
});

router.post('/index', function (req, res, next) {
    var pagenum=req.body.pageNumber;
    projectDao.index(pagenum,function (result) {
        if (result.length == 0) {
            res.json(null);
        } else {
            res.json(result);
        }
    })
});

router.post('/myProject', function (req, res, next) {
    var openid = req.body;
    if (openid) {
        projectDao.myProject(openid.openId, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json([]);
                } else {
                    res.json(result);
                }
            }
        })
    }
});

router.post('/getListid', function (req, res, next) {
    var openid = req.body;
    if (openid) {
        projectDao.getListid(openid.openId, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json([]);
                } else {
                    res.json(result[0]);
                }
            }
        })
    }
});

router.post('/listProject', function (req, res, next) {
    var list_id = req.body;
    if (list_id) {
        projectDao.listProject(list_id.list_id, function (result) {
            console.log(result);
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json([]);
                } else {
                    res.json(result);
                }
            }
        })
    }
});

router.post('/deleteProject', function (req, res, next) {
    var id = req.body;
    if (id) {
        projectDao.deleteProject(id.list_id,id.project_id, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result == 1) {
                    res.end(JSON.stringify({success: 'yes'}));
                }
                else {
                    if (result == 0) {
                        res.json({"stateCode": 5});
                    } else {
                        res.json({"stateCode": 7});
                    }
                }
            }
        })
    }
});

router.post('/deleteMyProject', function (req, res, next) {
    var project_id = req.body;
    if (project_id) {
        projectDao.deleteMyProject(project_id.project_id, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result > 0) {
                    res.end(JSON.stringify({success: 'yes'}));
                }else if(result==0){
                    res.json({"stateCode": 5});
                }
            }
        })
    }
});

router.post('/inesertOthers', function (req, res, next) {
    var list_id = req.body.list_id;
    var project_id=req.body.project_id;
    if (req.body) {
        projectDao.inesertOthers(list_id,project_id, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result > 0) {
                    res.end(JSON.stringify({success: 'yes'}));
                }else if(result==0){
                    res.json({"stateCode": 5});
                }
            }
        })
    }
});

router.post('/updata', function (request, res, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    // console.log(form);
    form.parse(request, function (err, index, files) {
        if (err) {
            res.locals.error = err;
            res.json({"stateCode": 'e005'});
            return;
        }
        // console.log(index);
        var i=parseInt(index.index)+1;
        var project_id=index.project_id;
        // console.log(files.pic);
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
        if (extName.length == 0) {
            res.json({"stateCode": 'e005'});
            return;
        } else {
            form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 2 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            // 'public/uploads/d23242343242.jpg'
            var newPath = form.uploadDir + avatarName;
            // console.log("newpath---"+newPath);
            // fs.renameSync(files.user_icon.path, newPath);  //重命名
            fs.rename(files.pic.path, newPath, function (error) {
                console.log(files.pic.path);
                console.log(newPath);
                if (error) {
                    console.log(error);
                    res.json({"stateCode": 'e005'});
                    return
                }
                projectDao.upload(avatarName,i,project_id, function (result) {

                    if (result == 1) {
                        res.end(JSON.stringify({success: 'yes'}));
                    } else {
                        res.json({"stateCode": 0});
                    }
                })
            })

        }

    })


});

router.get('/wx/onlogin', function (req, res, next) {
    var code = req.query.code;
    request.get({
        uri: 'https://api.weixin.qq.com/sns/jscode2session',
        json: true,
        qs: {
            grant_type: 'authorization_code',
            appid: 'wx5e8a5c8f2e1789f1',
            secret: '5bc9e15301ef0f71a409873606e7c550',
            js_code: code
        }
    }, function(err, response, data){
        if (response.statusCode === 200) {
            res.json({ openid: data.openid })
    } else {
        res.json(err)
    }
})
});

module.exports = router;
