package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.User;

public interface RelationshipMapper {
	
	
	/**
	 * 查询用户粉丝的id
	 * 
	 * @param relationshipUserId
	 *            用户的ID
	 * @return 返回包含粉丝id的list
	 */
	List<Integer> findRelationshipFansUserId(@Param("relationshipUserId") Integer relationshipUserId);
	

	/**
	 * 查询用户关注的人
	 * 
	 * @param relationshipUserId
	 *            用户的ID
	 * @return 包含关注人id的list
	 */
	List<Integer> findRelationshipUserId(@Param("relationshipFansUserId") Integer relationshipFansUserId);
	
	/**
	 * 查询整个user表(包含查询是否为绘师，查询用户状态)
	 * 
	 * @param userId
	 *            用户手机号
	 * @return User的POJO
	 */
	List<User> finaUserById(@Param("userId") List<Integer> userId);
	
}
