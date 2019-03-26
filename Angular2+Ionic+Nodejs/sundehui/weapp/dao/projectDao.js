var pool = require('./db_pool').pool;
var projectSql = require('./projectSql').sql;
exports.projectDao = {
    index: function (pagenum,callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.index,[pagenum], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    index_right: function (pagenum,callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.index_right,[pagenum], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    myProject: function (openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(projectSql.myProject, [openid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    getListid: function (openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(projectSql.getListid, [openid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    listProject: function (list_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(projectSql.listProject, [list_id], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    checkUser: function (openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(projectSql.check, [openid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    login: function (openid, nickname, headpic, list_name, user_name, user_phone, user_provinceName, user_cityName, user_company, list_user, list_sum, list_self, list_country, list_public, callback) {
        this.checkUser(openid, function (result) {
            if (result.length == 0) {//如果没有找到密码，则执行insert语句
                pool.getConnection(function (error, client) {
                    if (error) {
                        return;
                    }
                    client.query(projectSql.loginsql, [nickname, headpic, openid, user_name, user_phone, user_provinceName, user_cityName, user_company], function (error, results) {
                        if (error) {
                            callback('e004');
                            return;
                        } else {
                            client.query(projectSql.loginList, [headpic, list_name, list_user, list_sum, list_self, list_country, list_public, openid], function (error, results) {
                                if (error) {
                                    callback('e004');
                                }
                            })
                        }
                        callback(results.affectedRows);
                        client.release();
                    })
                })
            } else {
                pool.getConnection(function (error, client) {
                    if (error) {
                        return;
                    }
                    client.query(projectSql.updateInfo, [nickname, headpic, openid], function (error, result) {
                        if (error) {
                            callback('e004');
                            return;
                        } else {
                            client.query(projectSql.updateList, [headpic, openid], function (error, result) {
                                if (error) {
                                    callback('e004');
                                }
                            })
                        }
                        callback(result.affectedRows);
                        client.release();
                    })
                })
            }
        })
    },

    infomation: function (list_name, user_name, user_phone, provinceName, cityName, list_company, list_self, list_sum, list_country, list_public, openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.myInfo, [user_name, user_phone, provinceName, cityName, list_company, openid], function (error, results) {
                if (error) {
                    callback('e004');
                    return;
                } else {
                    client.query(projectSql.myList, [list_name, user_name, list_self, list_sum, list_country, list_public, openid], function (error, results) {
                        if (error) {
                            callback('e004');
                        }
                    })
                }
                callback(results.affectedRows);
                client.release();
            })
        })
    },

    getUserInfo: function (openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(projectSql.getUserInfo, [openid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    deleteProject: function (list_id, project_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.deleteProject, [list_id, project_id], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },

    deleteMyProject: function (project_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.deleteListProject, [project_id], function (error, results) {
                if (error) {
                    callback('e004');
                    return;
                } else {
                    client.query(projectSql.deleteMyProject, [project_id], function (error, results) {
                        if (error) {
                            callback('e004');
                        }
                    })
                }
                callback(results.affectedRows);
                client.release();
            })
        })
    },

    inesertOthers: function (list_id, project_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            for (var i = 0, len = project_id.length; i < len; i++) {
                client.query(projectSql.inesertOthers, [list_id, project_id[i]], function (error, result, a) {
                    if (error) {
                        callback('e004');
                        return;
                    }
                    callback(result.affectedRows);
                });
            }
            client.release();
        })
    },

    upload: function (picName, index, project_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                callback('e004');
                return;
            }
            client.query(projectSql.updatePic, [index, picName, project_id], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },

    newProject: function (project_name, project_user, project_type, project_provinceNmae, project_cityName,
                          project_require, project_public, self_capacity, self_area, self_electricity, self_elec_distance, self_discount, sum_capacity,
                          sum_area, sum_distance, sum_rent, country_number, country_capacity, project_phone,
                          project_time, self_shuini, self_zhuankuai, self_qita, sum_shuini, sum_zhuankuai, sum_qita, user_openid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.newProject, [project_name, project_user, project_type, project_provinceNmae, project_cityName,
                project_require, project_public, self_capacity, self_area, self_electricity, self_elec_distance, self_discount, sum_capacity,
                sum_area, sum_distance, sum_rent, country_number, country_capacity, project_phone,
                project_time, self_shuini, self_zhuankuai, self_qita, sum_shuini, sum_zhuankuai, sum_qita, user_openid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                } else {
                    client.query(projectSql.selectProject, [user_openid], function (error, result) {
                        if (error) {
                            callback('e004');
                        }
                        callback(result[0])
                    })
                }
                client.release();
            })
        })
    },

    updateProject: function (project_name, project_user, project_provinceNmae, project_cityName,
                             project_require, self_capacity, self_area, self_electricity, self_elec_distance, self_discount, sum_capacity,
                             sum_area, sum_distance, sum_rent, country_number, country_capacity, project_phone,
                             project_time, self_shuini, self_zhuankuai, self_qita, sum_shuini, sum_zhuankuai, sum_qita, project_public, project_id, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(projectSql.updateProject, [project_name, project_user, project_provinceNmae, project_cityName,
                project_require, self_capacity, self_area, self_electricity, self_elec_distance, self_discount, sum_capacity,
                sum_area, sum_distance, sum_rent, country_number, country_capacity, project_phone,
                project_time, self_shuini, self_zhuankuai, self_qita, sum_shuini, sum_zhuankuai, sum_qita, project_public, project_id], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    }
};