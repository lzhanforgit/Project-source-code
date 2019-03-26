/**
 * Created by yaochao on 2017/8/28.
 */
var dbconfig=require('./dbconfig');
var mysql=require('mysql');
var pool=mysql.createPool(dbconfig.options);
pool.connectionLimit=20;
pool.queueLimit=30;

exports.pool=pool;