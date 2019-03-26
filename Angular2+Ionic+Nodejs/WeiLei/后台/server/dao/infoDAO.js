var pool=require('../dbpool').pool;
var sqls=require('./Infosql').sql;
var sendMes=require('./../sendMes');
var utils=require('../util/util');

exports.Info={
    getProvinces:function(callback){
        pool.getConnection(function(error,client){
            var sql =sqls.getProvince;
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
    getSocialUpdate:function (id,callback) {
      //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getSocialUpdate;
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
    getFollowers:function (id,callback) {
        //  console.log(id);
        pool.getConnection(function(error,client){
            var sql =sqls.getFollowers;
            client.query(sql, [id], function (error, result) {
                if (error) {
                    //  console.log(error.message);
                    callback('e004');
                    return;
                }
                if (result.length) {
                    callback(result);
                } else {
                    //无关注的人
                    callback('');
                }
                client.release();//释放数据库连接
            });
        })
    },
}