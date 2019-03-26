package com.whw.ssmsboot.serivce.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.LoginStatusRecordMapper;
import com.whw.ssmsboot.pojo.LoginStatusRecord;
import com.whw.ssmsboot.serivce.LoginStatusRecordService;

@Service
public class LoginStatusRecordServiceImpl implements LoginStatusRecordService {
	@Autowired
	private LoginStatusRecordMapper loginStatusRecordMapper;

	@Override
	@Transactional
	public int addLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord) {
		return loginStatusRecordMapper.addLoginStatusRecordInfo(loginStatusRecord);
	}

	@Override
	@Transactional
	public int delLoginStatusRecordInfo(Integer id) {
		return loginStatusRecordMapper.delLoginStatusRecordInfo(id);
	}

	@Override
	@Transactional
	public LoginStatusRecord findByUserOrAdminId(Integer id) {
		return loginStatusRecordMapper.findByUserOrAdminId(id);
	}

	@Override
	public int updateLoginStatusRecordInfo(LoginStatusRecord loginStatusRecord) {
		return loginStatusRecordMapper.updateLoginStatusRecordInfo(loginStatusRecord);
	}

}
