package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.AuditTask;
import com.whw.ssmsboot.pojo.Task;
/**
 * 任务投诉接口
 *  @author 杨尚君
 * */
public interface AuditTaskMapper {
	/**
	 * 添加举报信息
	 * 
	 * @param AuditTask
	 * @return int 影响行数
	 * */
	int insertAuditTaskInfo(AuditTask auditTask);
	/**
	 * 显示举报任务信息 按照状态码来分类显示
	 * 
	 * @param Integer 状态码 0未处理 1未通过 2通过
	 * @return List 相对应状态码的举报任务的记录
	 * */
	List<AuditTask> findAuditTaskByAuditTaskStatus(Integer auditTaskStatus);

	/**
	 * 显示未处理记录时，可以是通过 2和未通过1，两个状态,进行修改状态操作
	 * 
	 * @param AuditTask
	 * @return Integer
	 * */
	Integer updateAuditTaskStatusByZero(AuditTask auditTask);

	/**
	 * 显示投诉成功的次数大于3次及以上的任务信息
	 * 
	 * @param AuditTask
	 * @return List
	 * */
	List<Task> findByTaskId();

	/**
	 * 删除指定的任务投诉记录
	 * 
	 * @param AuditTask
	 * @return int
	 * */
	Integer delAuditTaskByTaskId(@Param("taskId")Integer taskId);
}
