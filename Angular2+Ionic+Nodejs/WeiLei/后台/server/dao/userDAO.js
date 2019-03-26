/**
 * Created by yaochao on 2017/8/25.
 */
var pool=require('../dbpool').pool;
var sendMes=require('./../sendMes');
var sqls=require('./usersql').sql;
var utils=require('../util/util');
function createCode(){
    code = "";
    var codeLength = 4;//验证码的长度
    var random = new Array(0,1,2,3,4,5,6,7,8,9);//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*10);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
   return code;//把code值赋给验证码
};

exports.user= {
    getPasswordById: function (id, callback) {
      //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getPasswordById;
            client.query(sql, [id], function (error, result) {
                if (error) {
             //       console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    addUser:function(user,callback){
        this.getPasswordById(user.userId,function(pass){
            if(pass){
                if(pass=='e004'){
                    callback('e004');
                }else{
                    //用户名已经存在
                    callback('2');
                }
            }else{
                pool.getConnection(function(error,client){
                    var sql1=sqls.addUser;
                    user.userPassword=utils.MD5(user.userPassword);
                    client.query(sql1,[user.userId,user.userPassword],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        if(result.affectedRows){
                            //注册成功
                          //  console.log(result);
                            callback(result.insertId);
                        }
                        client.release();
                    });
                })
                
            }
        })
    },
    checkUser:function(phone,callback){
        this.getPasswordById(phone,function(data){
            if(data){
                if(data!='e004'){
                    //账号已经注册过
                    callback('1');
                }else{
                    //数据库错误
                    callback("e004");
                }
            }else{
                //账号没有注册过
                var num=createCode();
               sendMes.sendMessage(phone,'SMS_89605081',"{\"number\":\"" + num + "\"}",function(data){
               });
                callback(num);

            }
        })
    },
    getInfo: function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getInfo;
            client.query(sql, [id], function (error, result) {
                if (error) {
                  //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    getMenu:function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getMenus;
            client.query(sql, [id], function (error, result) {
                if (error) {
                 //   console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    getRecommend:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.getUsers;
            client.query(sql, function (error, result) {
                if (error) {
                  //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    getlist: function (id, callback) {
        // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getlists;
            client.query(sql, [id], function (error, result) {
                if (error) {
                  //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无菜单
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getPersonallist: function (id, callback) {
        // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getpersonallists;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无菜单
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getworks:function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getWorks;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无菜单
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getcomments:function (id, callback) {
     //   console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getComments;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                  //  console.log(result[1]+"111111!!!!!!!!");
                    callback(result);
                } else {
                    //无菜单
                    callback('1');
                }
                client.release();//释放数据库连接
            });
        })
    },
    addcomment:function(user,callback){
                pool.getConnection(function(error,client){
                    var sql1=sqls.addComments;
                    client.query(sql1,[user.commenter_id,user.master_id,user.content],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        if(result.affectedRows){
                            //留言成功
                            callback('1');
                        }else{
                            //未知错误
                            callback('2')
                        }
                        client.release();
                    });
                })
    },
    delcomment:function (id, callback) {
      //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.deleteComment;
            client.query(sql, [id], function (error, result) {
                if (error) {
                  //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.affectedRows) {
                    //删除成功
                    callback('1');
                } else {
                    //删除失败
                    callback('2');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getCollectRecipes:function (id, callback) {
      //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getCollectRecipes;
            client.query(sql, [id], function (error, result) {
                if (error) {
                   // console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无收藏菜单
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    getCollectLists:function (id, callback) {
        // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getCollectLists;
            client.query(sql, [id], function (error, result) {
                if (error) {
                   // console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无收藏菜单
                    callback('');
                }
                client.release();//释放数据库连接
            });

        })
    },
    getFollowWho:function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.followWho;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    //无关注
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getFollowByWho:function (id, callback) {
      //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.followByWho;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    //无关注
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getUnFollowUsers:function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.Unfollowedusers;
            client.query(sql, [id,id], function (error, result) {
                if (error) {
                 //   console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //无关注
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
    ifFollowed:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.checkFollow;
            client.query(sql1,[user.follower_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result[0].hasFollowed){
                    //已经关注
                    callback('1');
                }else{
                    //没有关注
                    callback('2')
                }
                client.release();
            });
        })
    },
    followUser:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.Follow_user;
            client.query(sql1,[user.follower_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //收藏成功
                    callback('1');
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        })
    },
    UnfollowUser:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.Unfollower_user;
            client.query(sql1,[user.follower_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //取消收藏成功
                    callback('1');
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        })
    },
    ifThumbed:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.checkThumb;
            client.query(sql1,[user.work_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result[0].hasThumbed){
                    //已经点赞
                    callback('1');
                }else{
                    //没有点赞
                    callback('2')
                }
                client.release();
            });
        })
    },
    thumbWork:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.Thumb_work;
            client.query(sql1,[user.work_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //点赞成功
                    callback('1');
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        })
    },
    addThumbNumber:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.addThumb_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                   // console.log(error.message);
                    callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },
    UnthumbWork:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.Unthumb_work;
            client.query(sql1,[user.work_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //取消点赞成功
                    callback('1');
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        })
    },
    delThumbNumber:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.delThumb_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    //callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },

    UpdateInfo:function(data,url,callback){
        // console.log(url);
        pool.getConnection(function(error,client) {
            var sql1 = sqls.UpdateInfo;
            client.query(sql1,[data.nickname,data.introduce,data.sex,data.home_city,data.now_city,data.profession,url.trim(),data.Id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //修改信息成功
                    callback('1');
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        });
    },
    getBasicInfo:function (id, callback) {
       // console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.BasicInfo;
            client.query(sql, [id], function (error, result) {
                if (error) {
                  //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result) {
                    callback(result);
                } else {
                    //错误
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
   /* createToken:function(phone,token,callback){
        pool.getConnection(function(error,client){
            var sql=sqls.createToken;
            client.query(sql, [token,phone], function (error, result) {
                if (error) {
                    console.log(error.message);
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();//释放数据库连接
            });
        })
    }*/
    checkRegister:function(phone,callback){
        this.getPasswordById(phone,function(data){
            if(data){
                if(data!='e004'){
                    //账号已经注册过
                    var num=createCode();
                    sendMes.sendMessage(phone,'SMS_89605081',"{\"number\":\"" + num + "\"}",function(data){
                    });
                    callback(num);
                }else{
                    //数据库错误
                    callback("e004");
                }
            }else{
                //账号没有注册过
                callback('1');

            }
        })
    },
    resetPassword:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.ResetPassword;
            user.userPassword=utils.MD5(user.userPassword);
            client.query(sql1,[user.userPassword,user.userId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //修改成功
                    callback('1');
                }else{
                    //修改失败
                    callback('2')
                }
                client.release();
            });
        })
    },

    delPersonalWork:function (id, callback) {
        //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.delPersonalWork;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.affectedRows) {
                    //删除成功
                    callback('1');
                } else {
                    //删除失败
                    callback('2');
                }
                client.release();//释放数据库连接
            });
        })
    }
}






