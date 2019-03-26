package com.whw.ssmsboot.serivce;

public interface NoticeService {

	/**
	 * 修改已读未读状态
	 * @param commentRead 0 已读 1 未读
	 * @return
	 */
	Integer updateNotice(Integer commentUserId);
	
	/**
	 * 查找未读信息的条数
	 * @param userId
	 * @return
	 */
	Integer findNotice(Integer commentUserId);
	
}
