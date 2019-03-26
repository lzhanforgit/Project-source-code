package com.whw.ssmsboot.serivce.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.AdminMapper;
import com.whw.ssmsboot.mapper.LoginStatusRecordMapper;
import com.whw.ssmsboot.pojo.Admin;
import com.whw.ssmsboot.pojo.LoginStatusRecord;
import com.whw.ssmsboot.serivce.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminMapper adminMapper;
	@Autowired
	private LoginStatusRecordMapper loginStatusRecordMapper;

	@Override
	@Transactional
	public Admin findAdminByAdmin(Admin admin) {
		return adminMapper.findByAdmin(admin);
	}

	@Override
	@Transactional
	public int updateAdminPwd(Admin admin) {
		return adminMapper.updateByAdmin(admin);
	}

	@Override
	@Transactional
	public Admin findBySessionId(String adminSessionId) {
		LoginStatusRecord loginStatusRecord = loginStatusRecordMapper.findBySessionId(adminSessionId);
		return adminMapper.findById(loginStatusRecord.getLoginStatusRecordUserId());
	}

	@Override
	@Transactional
	public Admin findByAdminName(String adminName) {
		return adminMapper.findByAdminName(adminName);
	}
}
