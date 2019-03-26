package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Photo;

public interface CollectService {

	/**
	 * 查询收藏的作品
	 * 
	 * @param list
	 *            包含收藏作品的id
	 * @return 一个包含作品详细信息的list
	 */
	List<Photo> findCollectPhoto(List<Integer> list);

	/**
	 * 删除 
	 * 
	 * @param collectUserId
	 *            收藏人id
	 * @param collectPhotoId
	 *            收藏作品id
	 * @return
	 */
	Integer delectCollect(Integer collectUserId, Integer collectPhotoId);

	/**
	 * 查询收藏作品的id
	 * 
	 * @param collectUserId
	 *            用户的个人id
	 * @return 包含作品id的list
	 */
	List<Integer> findCollect(Integer collectUserId);
	
	/**
	 * 添加收藏
	 * @param photoId
	 * @param userId
	 * @return
	 */
	Integer addCollection(Integer photoId,Integer userId);
}
