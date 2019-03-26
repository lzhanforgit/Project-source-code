package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.TaskSubmitMapper;
import com.whw.ssmsboot.pojo.TaskSubmit;
import com.whw.ssmsboot.serivce.TaskSubmitService;

@Service
public class TsakSubmitServiceImpl implements TaskSubmitService{

	@Autowired
	private TaskSubmitMapper taskSubmitMapper;

	@Override
	public int deleteByUserAndOrderNumber(Integer taskSubmitUserId,
			String taskSubmitTaskOrderNumber) {
		// TODO Auto-generated method stub
		return taskSubmitMapper.deleteByUserAndOrderNumber(taskSubmitUserId, taskSubmitTaskOrderNumber);
	}

	@Override
	public int updateTaskSubmit(TaskSubmit taskSubmit) {
		// TODO Auto-generated method stub
		return taskSubmitMapper.updateTaskSubmit(taskSubmit);
	}

	@Transactional(readOnly=true)
	@Override
	public List<TaskSubmit> findTaskSubmitToOrderNumberOrUserId(
			String taskSubmitTaskOrderNumber, Integer taskSubmitUserId) {
		// TODO Auto-generated method stub
		
		List<TaskSubmit> tSubmits = taskSubmitMapper.findTaskSubmitToOrderNumberOrUserId(taskSubmitTaskOrderNumber, taskSubmitUserId);
		
		return tSubmits;
	}


}
