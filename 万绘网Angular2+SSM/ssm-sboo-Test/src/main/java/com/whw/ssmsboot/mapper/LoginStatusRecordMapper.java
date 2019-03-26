package com.whw.ssmsboot.mapper;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.LoginStatusRecord;

public interface LoginStatusRecordMapper {
    /**
     * 添加登录记录
     * */
	int addLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord);
    /**
     * 通过session获取登录记录信息
     * */
	LoginStatusRecord findBySessionId(@Param("sessionId")String sessionId);
	/**
	 * 刪除記錄
	 * */
	int delLoginStatusRecordInfo(@Param("id")Integer id);
	/**
	 * 
	 * 按照管理员id 或者 user id 查询记录
	 * */
	LoginStatusRecord findByUserOrAdminId(@Param("id")Integer id);
	/**
	 * 修改登录状态记录
	 * */
	int updateLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord);
  
}
