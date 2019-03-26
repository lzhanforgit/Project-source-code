package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Task;
import com.whw.ssmsboot.pojo.TaskSubmit;

public interface TaskService {
	/**
	 * 添加任务 返回状态码
	 * 
	 * @param task
	 * @return
	 */
	int addTask(Task task);
	
	/**
	 * 支付佣金后任务正式成立
	 * 
	 * @param task
	 * @return
	 */
	int TaskPay(String taskOrderNumber);

	/**
	 * 显示任务列表
	 * 
	 * @return
	 */
	List<Task> findAllTasks();
	
	/**
	 * 查询任务是否存在
	 * @return
	 */
	List<Task> findTask(Task task);

	/**
	 * 根据条件查询任务 
	 * @return
	 */
	List<Task> findConditionsTask(Task task);
	
	/**
	 * 任务发布者指定任务接受者 任务接受者从接受者表里取出
	 * 
	 * @param userid
	 * @param taskGetUserId
	 * @return
	 */
	int agreeAcceptTask(String taskOrderNumber, Integer taskGetUserId);

	/**
	 * 任务接受者提交完成任务内容
	 * 
	 * @param taskSubmit
	 * @return
	 */
	int addTaskSubmit(TaskSubmit taskSubmit);
	
	/**
	 * 任务发布者确认任务完成
	 * 
	 * @param task
	 * @return
	 */
	int successTask(Task task);

	/**
	 * 任务未完成（接受者未提交完成任务请求），退还佣金
	 * 
	 * @param task
	 * @return
	 */
	int failureTask(String taskOrderNumber);
	
	/**
	 * 删除任务
	 * 
	 * @param taskOrderNumber
	 * @return
	 */
	int deleteTask(String taskOrderNumber);
	
	/**
	 * 查询是否提交过当前任务
	 * @param taskSubmit
	 * @return
	 */
	int findSearchSubmitTask(TaskSubmit taskSubmit);
}
