package com.whw.ssmsboot.serivce;

import java.util.List;

public interface Relationship {

	/**
	 * 查询用户粉丝的id
	 * 
	 * @param relationshipUserId
	 *            用户的ID
	 * @return 返回包含粉丝id的list
	 */
	List<Integer> findRelationshipFansUserId(Integer relationshipUserId);

	/**
	 * 查询用户关注的人
	 * 
	 * @param relationshipUserId
	 *            用户的ID
	 * @return 包含关注人id的list
	 */
	List<Integer> findRelationshipUserId(Integer relationshipFansUserId);
}
