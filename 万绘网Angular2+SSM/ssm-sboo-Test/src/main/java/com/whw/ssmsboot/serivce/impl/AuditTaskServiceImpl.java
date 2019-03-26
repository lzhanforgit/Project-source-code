package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.AuditTaskMapper;
import com.whw.ssmsboot.pojo.AuditTask;
import com.whw.ssmsboot.pojo.Task;
import com.whw.ssmsboot.serivce.AuditTaskService;

@Service
public class AuditTaskServiceImpl implements AuditTaskService {
	@Autowired
	private AuditTaskMapper auditTaskMapper;

	@Override
	public int insertAuditTaskInfo(AuditTask auditTask) {
		// TODO Auto-generated method stub
		return auditTaskMapper.insertAuditTaskInfo(auditTask);
	}

	@Override
	public List<AuditTask> findAuditTaskByAuditTaskStatus(
			Integer auditTaskStatus) {
		// TODO Auto-generated method stub
		return auditTaskMapper.findAuditTaskByAuditTaskStatus(auditTaskStatus);
	}

	@Override
	public Integer updateAuditTaskStatusByZero(AuditTask auditTask) {
		// TODO Auto-generated method stub
		return auditTaskMapper.updateAuditTaskStatusByZero(auditTask);
	}

	@Override
	public List<Task> findByTaskId() {
		// TODO Auto-generated method stub
		return auditTaskMapper.findByTaskId();
	}

	@Override
	public Integer delAuditTaskByTaskId(Integer taskId) {
		// TODO Auto-generated method stub
		return auditTaskMapper.delAuditTaskByTaskId(taskId);
	}
}
