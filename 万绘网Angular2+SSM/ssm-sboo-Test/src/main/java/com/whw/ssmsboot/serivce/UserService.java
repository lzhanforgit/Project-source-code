package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.pojo.User;

public interface UserService {

	/**
	 * 查询整个user表(包含查询是否为绘师，查询用户状态)
	 * 
	 * @param userPhone
	 *            用户手机号
	 * @return User的POJO
	 */
	User finaUser(String userPhone);

	
	User finaUserById(Integer userId);

	/**
	 * 查询整个地址表
	 * 
	 * @param userAddressId
	 *            user中的userAddress字段
	 * @return Address的POJO
	 */
	Address findAddress(Integer userAddressId);

	/**
	 * 查询用户的评论
	 * 
	 * @param id
	 *            用户的ID
	 * @return 包含评论的list
	 */
	List<Comment> findComment(Integer id);

	/**
	 * 修改个人信息
	 * 
	 * @param user
	 *            user的全部信息
	 * @return
	 */
	Integer updataUser(User user);

	
	

	/**
	 * 修改地址
	 * @param address 要修改的地址的实例
	 * @return 返回影响行数
	 */
	Integer updateAddress(Address address);

}
