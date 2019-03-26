package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.TaskSubmit;

public interface TaskSubmitMapper {
	
	/**
	 * 查询提交的作品,或者ordernumber对应的人
	 * @param taskGetTaskOrderNumber
	 * @return List<TaskSubmit>
	 */
	List<TaskSubmit> findTaskSubmitToOrderNumberOrUserId(@Param("taskSubmitTaskOrderNumber") String taskGetTaskOrderNumber, @Param("taskSubmitUserId") Integer taskSubmitUserId);
	
	/**
	 * 根据提交者id和任务编号删除提交信息
	 * @param taskSubmitUserId
	 * @param taskSubmitTaskOrderNumber
	 * @return
	 */
	int deleteByUserAndOrderNumber(@Param("taskSubmitUserId") Integer taskSubmitUserId,@Param("taskSubmitTaskOrderNumber") String taskSubmitTaskOrderNumber);
	
	
	/**
	 * 根据ordernumber和userid修改提交过的信息
	 * @param taskSubmit
	 * @return
	 */
	 
	int updateTaskSubmit(TaskSubmit taskSubmit);
	

}
