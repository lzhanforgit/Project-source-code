package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.pojo.User;

/**
 * 
 * 个人信息查询映射接口 个人中心(关注点赞、收藏等) 此接口负责查询个人信息，主要显示到个人介绍的界面
 * 
 * @author http://blog.csdn.net/thewaiting/
 *
 */
public interface UserMapper {

	/**
	 * 个人信息（表中所有字段） 查询我关注的人 查询点赞 查询收藏 查询上传 查询用户状态 我的评论 查询是否为绘师 删除作品 申诉作品
	 */

	/**
	 * 查询整个user表(包含查询是否为绘师，查询用户状态)
	 * 
	 * @param userPhone
	 *            用户手机号
	 * @return User的POJO
	 */
	User finaUser(@Param("userPhone") String userPhone);
	
	
	User finaUserById(Integer userId);

	/**
	 * 查询整个地址表
	 * 
	 * @param userAddressId
	 *            user中的userAddress字段
	 * @return Address的POJO
	 */
	Address findAddress(@Param("userAddressId") Integer userAddressId);

	

	/**
	 * 查询用户评论
	 * 
	 * @param commentUserId
	 *            用户的ID
	 * @return 包含评论POJO的list
	 */
	// List<Comment> findComment(@Param("commentUserId") Integer commentUserId);

	

	/**
	 * 查询我的评论
	 * 
	 * @param id
	 *            用户的ID
	 * @return 包含评论的list
	 */
	List<Comment> findComment(@Param("id") Integer id);



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
	
	

	
	/**
	 * 寻找名字 添加
	 * @param useId
	 * @return
	 */
	String findUserName(Integer useId);
	
}
