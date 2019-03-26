package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.TaskSubmit;


public interface TaskSubmitService {

	/**
	 * 根据任务编号，查询提交的作品
	 * @param taskGetTaskOrderNumber
	 * @return
	 */
	List<TaskSubmit> findTaskSubmitToOrderNumberOrUserId(String taskSubmitTaskOrderNumber,Integer taskSubmitUserId);
	
	/**
	 * 根据提交者id和任务编号删除提交信息
	 * @param taskSubmitUserId
	 * @param taskSubmitTaskOrderNumber
	 * @return
	 */
	int deleteByUserAndOrderNumber(Integer taskSubmitUserId,String taskSubmitTaskOrderNumber);
	
	/**
	 * 根据ordernumber和userid修改提交过的信息
	 * @param taskSubmit
	 * @param taskSubmitUserId
	 * @param taskSubmitTaskOrderNumber
	 * @return
	 */
	int updateTaskSubmit(TaskSubmit taskSubmit);

}
