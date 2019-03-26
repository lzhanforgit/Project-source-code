package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Photo;

public interface PhotoFindService {
	/**
	 * 删除作品
	 * 
	 * @param photoUserId
	 *            用户的ID
	 * @return 返回影响行数
	 */
	Integer deletePhoto(Integer photoUserId,Integer photoId);

	/**
	 * 查询上传的作品
	 * 
	 * @param photoUserId
	 *            用户的id
	 * @return 包含作品POJO的list 
	 */
	List<Photo> findPhoto(Integer photoUserId);

}
