package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Photo;

public interface CollectMapper {

	
	/**
	 * 查询收藏的作品
	 * 
	 * @param list
	 *            包含收藏作品的id
	 * @return 一个包含作品详细信息的list
	 */
	List<Photo> findCollectPhoto(@Param("listId") List<Integer> list);
	
	/**
	 * 删除收藏的作品
	 * 
	 * @param collectUserId
	 *            收藏人id
	 * @param collectPhotoId
	 *            收藏作品id
	 * @return
	 */
	Integer delectCollect(@Param("collectUserId") Integer collectUserId,
			@Param("collectPhotoId") Integer collectPhotoId);
	

	/**
	 * 查询收藏作品的id
	 * 
	 * @param collectUserId
	 *            用户的个人id
	 * @return 包含作品id的list
	 */
	List<Integer> findCollect(@Param("collectUserId") Integer collectUserId);
	
	/**
	 * 查询收藏作品的数量
	 * 
	 * @param 作品id 
	 * 
	 * @return 收藏作品数量
	 */
	Integer findCollectNumber(@Param("collectPhotoId") Integer collectPhotoId);
	
	
	/**
	 * 添加收藏
	 * @param photoId
	 * @param userId
	 * @return
	 */
	Integer addCollection(@Param("photoId") Integer photoId,@Param("userId") Integer userId);
}
