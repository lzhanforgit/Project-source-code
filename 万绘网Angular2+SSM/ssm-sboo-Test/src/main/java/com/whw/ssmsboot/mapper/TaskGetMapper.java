package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.TaskGet;

public interface TaskGetMapper {
	/**
	 * 接受任务
	 * 
	 * @param user_id
	 * @return
	 */
	int acceptTask(TaskGet taskGet);
	/**
	 * 查询用戶是否接受过此任务
	 * 
	 * @param taskGet
	 * @return
	 */
	TaskGet selectOne(TaskGet taskGet);

	/**
	 * 显示任务接受者人数
	 * 
	 * @return
	 */
	List<TaskGet> showTaskGetOrderNumber(@Param("taskGetTaskOrderNumber") String taskGetTaskOrderNumber);

}
