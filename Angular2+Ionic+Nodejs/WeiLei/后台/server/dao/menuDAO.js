var pool=require('../dbpool').pool;
var sendMes=require('./../sendMes');
var sqls=require('./Menusql').sql;
var utils=require('../util/util');

exports.menu= {
    getDetails:function (id, callback){
        //console.log(id+"here");
        pool.getConnection(function(error,client){
            var sql =sqls.details;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    console.log(error.message);
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
    getSteps:function(id,callback){
        pool.getConnection(function(error,client){
            var sql =sqls.steps;
            client.query(sql, [id], function (error, result) {
                if (error) {
                   // console.log(error.message);
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
    getIndexMenus:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.IndexMenu;
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
    getIndexlists:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.IndexList;
            client.query(sql, function (error, result) {
                if (error) {
                    //console.log(error.message);
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
    getMenuDetails:function (id, callback){
        //console.log(id+"here");
        pool.getConnection(function(error,client){
            var sql =sqls.Menudetail;
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
    getMenuworks:function(id,callback){
        pool.getConnection(function(error,client){
            var sql =sqls.Menuworks;
            client.query(sql, [id], function (error, result) {
                if (error) {
                   // console.log(error.message);
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
    getMenulists:function(id,callback){
        pool.getConnection(function(error,client){
            var sql =sqls.MenuLists;
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
    getClasses:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.getClass;
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
    ifCollected:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.checkCollected;
            client.query(sql1,[user.reciper_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result[0].hasCollected){
                    //已经收藏
                    callback('1');
                }else{
                    //没有收藏
                    callback('2')
                }
                client.release();
            });
        })
    },
    collectReciper:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.collect_reciper;
            client.query(sql1,[user.reciper_id,user.user_id],function (error,result) {
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
    addRcollectNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.addreciperCol_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                   // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },
    UncollectReciper:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.uncollect_reciper;
            client.query(sql1,[user.reciper_id,user.user_id],function (error,result) {
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
    delRcollectNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.delreciperCol_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },
    hasCollectedList:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.IfcollectList;
            client.query(sql1,[user.list_id,user.user_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result[0].hasCollected){
                    //已经收藏
                    callback('1');
                }else{
                    //没有收藏
                    callback('2')
                }
                client.release();
            });
        })
    },
    collectList:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.collect_list;
            client.query(sql1,[user.list_id,user.user_id],function (error,result) {
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
    addLcollectNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.addlistCol_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },
    UncollectList:function(user,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.uncollect_list;
            client.query(sql1,[user.list_id,user.user_id],function (error,result) {
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
    delLcollectNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.dellistCol_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },

    UploadMenu:function(data,url,callback){
        // console.log(url);
        pool.getConnection(function(error,client) {
            var sql1 = sqls.UploadRecipe;
            client.query(sql1,[data.recipe_name,url.trim(),data.recipe_description,data.creater_id,data.tips],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //修改信息成功
                    callback(result.insertId);
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        });
    },
    UploadMaterial:function(data,Recipe_id,callback){
        var  Materials=data.split('weilei.com');
        var length=Materials.length-1;
      //  console.log(Recipe_id);
        var sql1 = sqls.UploadMaterial;
        Materials.forEach(function(item,index){
            if(index<length){
                pool.getConnection(function(error,client) {
                    client.query(sql1,[item,Recipe_id],function (error,result) {
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
            }
        })
    },
    UploadMaterial_amount:function(data,Recipe_id,callback){
        var Materials_amount=data.split('weilei.com');
        var length=Materials_amount.length-1;
        // console.log(Recipe_id);
        var sql1 = sqls.UploadMaterial_amount;
       Materials_amount.forEach(function(item,index){
           if(index<length){
               pool.getConnection(function(error,client) {
                   client.query(sql1,[Recipe_id,item],function (error,result) {
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
           }
       })
    },
    UploadSteps:function(data,Recipe_id,callback){
        var Steps=data.split('weilei.com');
        var length=Steps.length-1;
       // console.log(Recipe_id+"--------->step");
        var sql1 = sqls.UploadSteps;
        Steps.forEach(function(item,index){
            if(index<length&&item){
                pool.getConnection(function(error,client) {
                    client.query(sql1,[item,Recipe_id],function (error,result) {
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
            }
        })
    },
    addUprodunctionNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.addUserProduction_num;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },


    delRecipeFromList:function(data,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.delRecipefromList;
            client.query(sql1,[data.recipe_id,data.list_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //删除成功
                    callback('1');
                }else{
                    //删除失败
                    callback('2')
                }
                client.release();
            });
        })
    },
    addRecipeintoList:function(data,callback){
        pool.getConnection(function(error,client){
            var sql1=sqls.addRecipeintoList;
            client.query(sql1,[data.recipe_id,data.list_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //删除成功
                    callback('1');
                }else{
                    //删除失败
                    callback('2')
                }
                client.release();
            });
        })
    },
    addRecipe_list:function(data,url,callback){
        // console.log(url);
        pool.getConnection(function(error,client) {
            var sql1 = sqls.addRecipe_list
            client.query(sql1,[data.menu_name,url.trim(),data.introduce,data.creater_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //上传成功
                    callback(result.insertId);
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        });
    },
    addPersonalWork:function(data,url,callback){
        // console.log(url);
        pool.getConnection(function(error,client) {
            var sql1 = sqls.addPersonalWork;
            client.query(sql1,[data.recipe_name,url.trim(),data.recipe_id,data.description,data.creater_id],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //上传成功
                    callback(result.insertId);
                }else{
                    //未知错误
                    callback('2')
                }
                client.release();
            });
        });
    },
    addRcookNum:function (id, callback) {
        //console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.addRecipeCookNum;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //console.log(error.message);
                    // callback('e004');
                    return;
                }
                client.release();//释放数据库连接
            });
        })
    },


}