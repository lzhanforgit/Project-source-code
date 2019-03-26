package com.whw.ssmsboot.mapper;
import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Admin;

/**
 * 管理员接口
 * 
 * @author 杨尚君
 * */
public interface AdminMapper {
	/**
	 * @param admin
	 *            验证管理员账号密码
	 * @return Admin 判断是否存在
	 * */
	Admin findByAdmin(Admin admin);

	/**
	 * @param admin
	 *            修改管理员密码
	 * @return int 判断是否修改成功
	 * */
	int updateByAdmin(Admin admin);

	/**
	 * 查询管理员信息
	 * 
	 * @param adminId
	 *            管理员ID
	 * */
	Admin findById(@Param("adminId") Integer adminId);
   
	/**
	 * 通过 adminName 查询管理员信息
	 * @param adminName 管理员名
	 * */
	Admin findByAdminName(@Param("adminName") String adminName);
}
