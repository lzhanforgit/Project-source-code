package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.TaskMapper;
import com.whw.ssmsboot.pojo.Task;
import com.whw.ssmsboot.pojo.TaskSubmit;
import com.whw.ssmsboot.serivce.TaskService;

@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskMapper taskMapper;
	
	@Override
	public int addTask(Task task) {
		return taskMapper.addTask(task);
	}

	@Override
	public int TaskPay(String taskOrderNumber) {
		// TODO Auto-generated method stub
		return taskMapper.taskPay(taskOrderNumber);
	}

	@Override
	public List<Task> findAllTasks() {
		// TODO Auto-generated method stub
		return taskMapper.findAllTasks();
	}

	@Override
	public int agreeAcceptTask(String taskOrderNumber, Integer taskGetUserId) {
		// TODO Auto-generated method stub
		return taskMapper.agreeAcceptTask(taskOrderNumber,taskGetUserId);
	}

	@Transactional
	@Override
	public int addTaskSubmit(TaskSubmit taskSubmit) {
		taskMapper.updateTaskGetStatus(taskSubmit.getTaskSubmitTaskOrderNumber(),taskSubmit.getTaskSubmitUserId());
		return taskMapper.addTaskSubmit(taskSubmit);
	}

	@Override
	public int successTask(Task task) {
		// TODO Auto-generated method stub
		return taskMapper.successTask(task);
	}

	@Override
	public int failureTask(String taskOrderNumber) {
		// TODO Auto-generated method stub
		return taskMapper.failureTask(taskOrderNumber);
	}

	@Override
	public int deleteTask(String taskOrderNumber) {
		// TODO Auto-generated method stub
		return taskMapper.deleteTask(taskOrderNumber);
	}

	/**
	 * 查询任务是否存在
	 * @return
	 */
	@Override
	public List<Task> findTask(Task task) {
		// TODO Auto-generated method stub
		return taskMapper.findTask(task);
	}

	@Override
	public List<Task> findConditionsTask(Task task) {
		// TODO Auto-generated method stub
		return taskMapper.findConditionsTask(task);
	}

	@Override
	public int findSearchSubmitTask(TaskSubmit taskSubmit) {
		// TODO Auto-generated method stub
		return taskMapper.findSearchSubmitTask(taskSubmit);
	}


}
