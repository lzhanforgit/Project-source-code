var pool = require('./db_pool').pool;
var userSql = require('./userSql').sql;
exports.userDao = {
    getPasswordById: function (telephone, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(userSql.getPasswordById, [telephone], function (error, result) {
                if (error) {
                    console.log(error.message + ' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    addUser: function (user, callback) {
            this.getPasswordById(user.telephone, function (result) {
                if (result.length == 0) {//如果没有找到密码，则执行insert语句
                    pool.getConnection(function (error, client) {
                        if (error) {
                            return;
                            console.log(error.message);
                        }
                        client.query(userSql.addUser, [user.username, user.password, user.telephone], function (error, result) {
                            if (error) {
                                callback('e004');
                                return;
                            }
                            callback(result.affectedRows);
                            client.release();
                        })
                    })
                } else {
                    callback('5');
                }
            })
    },

    createToken: function (telephone, token, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(userSql.createToken, [token, telephone], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    getUserIcon: function (telephone, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(userSql.getUserIcon, [telephone], function (error, result) {
                if (error) {
                    console.log(error.message + ' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    updateUserIcon: function (userName, iconName, content,user_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                callback('e004');
                return;
            }
            // console.log(content+'>>>>>>>>>>>>>>>>>>>');
            client.query(userSql.updateUserIcon, [userName, iconName, content, user_id], function (error, result) {
                if (error) {
                    // console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }
                console.log(result.affectedRows+'>>>>>>>>>>>>>');
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    downLoad: function (callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(userSql.getAllText, function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })

    }
}
;