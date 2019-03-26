var pool=require('../dbpool').pool;
var sqls=require('./Backsql').sql;
var sendMes=require('./../sendMes');
var utils=require('../util/util');

exports.Back={
    getAllComments:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.getAllComments;
            client.query(sql, function (error, result) {
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
    delcomment:function (id, callback) {
        console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.delComment;
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
    getAllRecipes:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.getAllRecipes;
            client.query(sql, function (error, result) {
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
    delrecipe:function (id, callback) {
        //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.delRecipe;
            client.query(sql, [id], function (error, result) {
               // console.log(result);
                if (error) {
                    //  console.log(error.message);
                    callback('e004');
                    return;
                }else{
                    callback('1');
                }
                client.release();//释放数据库连接
            });
        })
    },
    getPasswordByName: function (name, callback) {
        //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getPasswordbyName;
            client.query(sql, [name], function (error, result) {
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
}