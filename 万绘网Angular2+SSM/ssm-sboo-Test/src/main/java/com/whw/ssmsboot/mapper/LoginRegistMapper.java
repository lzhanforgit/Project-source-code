package com.whw.ssmsboot.mapper;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.User;

/**
 * 用户登录注册信息展示接口
 * 
 * @author 杨尚君
 * */
public interface LoginRegistMapper {
	/**
	 * 登录验证
	 * 
	 * @param User
	 *            手机号密码验证
	 * @return User 返回值
	 */
	User loginCheck(User user);

	/**
	 * 修改个人信息
	 * 
	 * @param User
	 *            需要修改的值
	 * @return Integer 返回影响行数
	 */
	int updateUserInfo(User user);

	/**
	 * 显示个人信息
	 * 
	 * @param Integer
	 *            通过ID 来查询
	 * @return User 返回个人信息
	 */
	User findUserById(int userId);

	/**
	 * 插入个人信息 注册
	 * 
	 * @param User
	 *            需要插入的个人信息
	 * @return Integer 返回影响行数
	 */
	int insertUserInfo(User user);

	/**
	 * 检验注册时昵称手机号是否已经存在
	 * */
	User findByNikeNameOrPhone(@Param("userNikeName")String userNikeName, @Param("userPhone")String userPhone);
}
