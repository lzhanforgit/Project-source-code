package com.whw.ssmsboot.mapper;

import org.apache.ibatis.annotations.Param;

public interface NoticeMapper {


	/**
	 * 查找未读信息的条数
	 * @param userId
	 * @return
	 */
	Integer findNotice(@Param("commentUserId") Integer commentUserId);
	
	/**
	 * 修改已读未读状态
	 * @param commentRead 0 已读 1 
	 * @return
	 */
	Integer updateNotice(@Param("commentUserId") Integer commentUserId);
	
}
