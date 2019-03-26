package com.whw.ssmsboot.serivce;

import com.whw.ssmsboot.pojo.LoginStatusRecord;

public interface LoginStatusRecordService {

	int addLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord);

	int delLoginStatusRecordInfo(Integer Id);

	LoginStatusRecord findByUserOrAdminId(Integer id);

	int updateLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord);

}
