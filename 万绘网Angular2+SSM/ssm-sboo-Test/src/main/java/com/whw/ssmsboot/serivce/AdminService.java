package com.whw.ssmsboot.serivce;
import com.whw.ssmsboot.pojo.Admin;

public interface AdminService {
	
	Admin findAdminByAdmin(Admin admin);

	int updateAdminPwd(Admin admin);

	Admin findBySessionId(String adminSessionId);

	Admin findByAdminName(String adminName);

}
