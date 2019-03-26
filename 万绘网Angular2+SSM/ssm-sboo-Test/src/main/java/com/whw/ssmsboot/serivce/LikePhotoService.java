package com.whw.ssmsboot.serivce;

import java.util.List;

public interface LikePhotoService {

	/**
	 * 查询用户点赞作品的id
	 * 
	 * @param likeUserId
	 *            用户ID
	 * @return 包含点赞作品ID的list
	 */
	List<Integer> findLikePhoto(Integer likeUserId);

}
 