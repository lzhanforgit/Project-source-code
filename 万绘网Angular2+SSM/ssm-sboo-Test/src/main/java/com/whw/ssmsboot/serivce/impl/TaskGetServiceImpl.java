package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.TaskGetMapper;
import com.whw.ssmsboot.pojo.TaskGet;
import com.whw.ssmsboot.serivce.TaskGetService;

@Service
public class TaskGetServiceImpl implements TaskGetService{

	@Autowired
	private TaskGetMapper taskGetMapper;
	
	@Override
	public int acceptTask(TaskGet taskGet) {
		// TODO Auto-generated method stub
		return taskGetMapper.acceptTask(taskGet);
	}

	@Override
	public TaskGet selectOne(TaskGet taskGet) {
		// TODO Auto-generated method stub
		return taskGetMapper.selectOne(taskGet);
	}

	@Override
	public List<TaskGet> showTaskGetOrderNumber(String taskGetTaskOrderNumber) {
		// TODO Auto-generated method stub
		return taskGetMapper.showTaskGetOrderNumber(taskGetTaskOrderNumber);
	}

}
