package com.whw.ssmsboot.pojo;

import java.sql.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//接收任务表
@Component
@Scope(scopeName = "prototype")
public class TaskGet {
	private Integer taskGetId; // 自增id
	private String taskGetTaskOrderNumber; // 任务编号
	private Integer taskGetTaskUserId; // 接收者id
	private Integer taskGetStatus;// 任务状态
	private Date taskGetTime;// 任务接受时间

	public Date getTaskGetTime() {
		return taskGetTime;
	}

	public void setTaskGetTime(Date taskGetTime) {
		this.taskGetTime = taskGetTime;
	}

	public Integer getTaskGetStatus() {
		return taskGetStatus;
	}

	public void setTaskGetStatus(Integer taskGetStatus) {
		this.taskGetStatus = taskGetStatus;
	}

	public Integer getTaskGetId() {
		return taskGetId;
	}

	public void setTaskGetId(Integer taskGetId) {
		this.taskGetId = taskGetId;
	}

	public String getTaskGetTaskOrderNumber() {
		return taskGetTaskOrderNumber;
	}

	public void setTaskGetTaskOrderNumber(String taskGetTaskOrderNumber) {
		this.taskGetTaskOrderNumber = taskGetTaskOrderNumber;
	}

	public Integer getTaskGetTaskUserId() {
		return taskGetTaskUserId;
	}

	public void setTaskGetTaskUserId(Integer taskGetTaskUserId) {
		this.taskGetTaskUserId = taskGetTaskUserId;
	}

	@Override
	public String toString() {
		return "TaskGet [taskGetId=" + taskGetId + ", taskGetTaskOrderNumber="
				+ taskGetTaskOrderNumber + ", taskGetTaskUserId="
				+ taskGetTaskUserId + ", taskGetStatus=" + taskGetStatus
				+ ", taskGetTime=" + taskGetTime + "]";
	}

}
