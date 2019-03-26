package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface LikePhotoMapper {

	/**
	 * 查询用户点赞作品的id
	 * 
	 * @param likeUserId
	 *            用户ID
	 * @return 包含点赞作品ID的list
	 */
	List<Integer> findLikePhoto(@Param("likeUserId") Integer likeUserId);

	
}
