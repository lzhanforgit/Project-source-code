package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Photo;

public interface PhotoFindMapper {

	
	/**
	 * 删除上传的作品
	 * @param photoUserId 用户id
	 * @param photoId 图片id
	 * @return
	 */
	Integer deletePhoto(@Param("photoUserId") Integer photoUserId,@Param("photoId") Integer photoId);
	
	/**
	 * 查询上传的作品
	 * 
	 * @param photoUserId
	 *            用户的id
	 * @return 包含作品POJO的list
	 */
	List<Photo> findPhoto(@Param("photoUserId") Integer photoUserId);

}
