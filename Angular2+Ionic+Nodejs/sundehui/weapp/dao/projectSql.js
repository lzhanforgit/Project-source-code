
exports.sql={
    check:'SELECT user_nickname FROM `user` where user_openid=?',

    loginsql:'insert into `user` (`user_nickname`, `user_headpic`,`user_openid`,`user_name`, `user_phone`, `user_provinceName`, `user_cityName`, `user_company` ) values (?, ?, ?, ?, ?, ?, ?, ?);',

    loginList:'INSERT INTO `mysun`.`list` (`list_pic`,`list_name`,`list_user`, `list_sum`, `list_self`, `list_country`, `list_public`,`user_openid`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',

    updateInfo:'update user set user_nickname=?,user_headpic=? where user_openid=?',

    updateList:'update list set list_pic=? where user_openid=?',

    myInfo:'update user set user_name=?,user_phone=?,user_provinceName=?,user_cityName=?,user_company=? where user_openid=?',

    myList:'update list set list_name=?,list_user=?,list_self=?,list_sum=?,list_country=?,list_public=? where user_openid=?',

    getUserInfo:'SELECT list_name,list_self,list_sum,list_country,list_public,user_name,user_phone,user_provinceName,user_cityName,user_company' +
    ' FROM `user` left join list ON user.user_openid=list.user_openid WHERE user.user_openid=?;',

    newProject:'insert into project(`project_name`, `project_user`, `project_type`, `project_provinceNmae`, `project_cityName`,' +
    ' `project_require`, `project_public`, `self_capacity`, `self_area`, `self_electricity`, `self_elec_distance`, `self_discount`, `sum_capacity`,' +
    ' `sum_area`, `sum_distance`, `sum_rent`, `country_number`, `country_capacity`,' +
    ' `project_phone`, `project_time`, `self_shuini`, `self_zhuankuai`, `self_qita`, `sum_shuini`, `sum_zhuankuai`, `sum_qita`,`user_openid`)' +
    ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',

    updateProject:'update project set project_name=?, project_user=?, project_provinceNmae=?, project_cityName=?,' +
    'project_require=?, self_capacity=?, self_area=?, self_electricity=?, self_elec_distance=?, self_discount=?, sum_capacity=?,sum_area=?, ' +
    'sum_distance=?,sum_rent=?, country_number=?, country_capacity=?, project_phone=?,project_time=?, self_shuini=?, self_zhuankuai=?, self_qita=?, ' +
    'sum_shuini=?, sum_zhuankuai=?,sum_qita=?,project_public=? where project_id = ?',

    index_right:'SELECT `project_id`, `project_name`, `project_user`, `project_type`, `project_provinceNmae`, `project_cityName`, `project_require`, ' +
    '`project_public`, `self_capacity`, `self_area`, `self_electricity`, `self_elec_distance`, `self_discount`, `sum_capacity`, `sum_area`, ' +
    '`sum_distance`, `sum_rent`, `project_pic1`, `project_pic2`, `project_pic3`, `country_number`, `country_capacity`, `project_phone`, ' +
    '`project_time`, `self_shuini`, `self_zhuankuai`, `self_qita`, `sum_shuini`, `sum_zhuankuai`, `user_openid`, `sum_qita` FROM `project` ' +
    'where project_public="true" ORDER BY project_time DESC limit ?,10',

    index:'SELECT `list_id`, `list_pic`, `list_name`, `list_user`, list.user_openid, `list_sum`, `list_self`, `list_country`, `list_public`,' +
    '`user_provinceName`,`user_cityName` FROM `user` LEFT JOIN list on user.user_openid=list.user_openid where list_public="true" ORDER BY list_id DESC limit ?,10',

    myProject:'SELECT `project_id`, `project_name`, `project_user`, `project_type`, `project_provinceNmae`, `project_cityName`, `project_require`, ' +
    '`project_public`, `self_capacity`, `self_area`, `self_electricity`, `self_elec_distance`, `self_discount`, `sum_capacity`, `sum_area`, ' +
    '`sum_distance`, `sum_rent`, `project_pic1`, `project_pic2`, `project_pic3`, `country_number`, `country_capacity`, `project_phone`, ' +
    '`project_time`, `self_shuini`, `self_zhuankuai`, `self_qita`, `sum_shuini`, `sum_zhuankuai`, `user_openid`, `sum_qita`, `project_public` FROM `project` ' +
    'where user_openid = ? ORDER BY project_time DESC;',

    selectProject:'SELECT  `project_id` from project  where user_openid = ?  ORDER BY project_time DESC  limit 1;',

    listProject:'SELECT project.project_id, `project_name`, `project_user`, `project_type`, `project_provinceNmae`, `project_cityName`, ' +
    '`project_require`, `project_public`, `self_capacity`, `self_area`, `self_electricity`, `self_elec_distance`, `self_discount`, `sum_capacity`, ' +
    '`sum_area`, `sum_distance`, `sum_rent`, `project_pic1`, `project_pic2`, `project_pic3`, `country_number`, `country_capacity`, `project_phone`, ' +
    '`project_time`, `self_shuini`, `self_zhuankuai`, `self_qita`, `sum_shuini`, `sum_zhuankuai`, `user_openid`, `sum_qita`, `project_public` ' +
    'FROM project_list LEFT JOIN project on project.project_id=project_list.project_id where list_id = ? ORDER BY project_time DESC',

    getListid:'SELECT list_id FROM list WHERE user_openid = ?',

    deleteProject:'DELETE FROM project_list WHERE list_id=? and project_id = ? ;',

    deleteListProject:'DELETE FROM project_list WHERE project_id = ?;',

    deleteMyProject:'DELETE FROM project WHERE project_id = ? ;',

    inesertOthers:'INSERT INTO `project_list` (`list_id`, `project_id`) VALUES ( ? , ? );',

    updatePic:'update project set project_pic? = ? where project_id = ?',

    update:'update 表名称 set 列名称 = 新值 where 列名称 = 某值',

    delete:'delete from 表名称 where 列名称 = 值'
};