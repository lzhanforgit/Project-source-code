package com.whw.ssmsboot.serivce;


import java.util.Date;
import java.util.List;

import com.whw.ssmsboot.pojo.Photo;


public interface RankService {

	/**
	 * 查询作品排行 根据月份 根据周 根据天
	 */
	/**
	 * 根据日期进行查询 日
	 * 
	 * @param date
	 *            日期天数
	 * @return 返回日发布作品的list
	 */
	List<Photo> findPhotoRankDate(Date date);

	/**
	 * 根据月份进行查询 月
	 * 
	 * @param date
	 *            日期月份 
	 * @return 返回月发布作品的list
	 */
	List<Photo> findPhotoRankMonth(Date date);

	/**
	 * 根据周进行查询 周
	 * 
	 * @param date
	 *            日期周
	 * @return 返回周发布作品的list
	 */
	List<Photo> findPhotoRankWeek(Date date);

}
