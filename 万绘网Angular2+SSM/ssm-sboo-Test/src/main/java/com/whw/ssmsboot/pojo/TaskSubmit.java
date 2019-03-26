package com.whw.ssmsboot.pojo;

import java.util.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName = "prototype")
public class TaskSubmit {
	private Integer taskSubmitId;//自增id
	private String taskSubmitDetail;//完成任务的消息介绍
	private String taskSubmitTaskOrderNumber;//提交任务的任务编号
	private String taskSubmitUrl;//提交任务的图片地址
	private Integer taskSubmitUserId;//提交任务的用户id
	private Date taskSubmitTime;//任务提交时间
	public Date getTaskSubmitTime() {
		return taskSubmitTime;
	}
	public void setTaskSubmitTime(Date taskSubmitTime) {
		this.taskSubmitTime = taskSubmitTime;
	}
	public Integer getTaskSubmitUserId() {
		return taskSubmitUserId;
	}
	public void setTaskSubmitUserId(Integer taskSubmitUserId) {
		this.taskSubmitUserId = taskSubmitUserId;
	}
	public String getTaskSubmitUrl() {
		return taskSubmitUrl;
	}
	public void setTaskSubmitUrl(String taskSubmitUrl) {
		this.taskSubmitUrl = taskSubmitUrl;
	}
	public Integer getTaskSubmitId() {
		return taskSubmitId;
	}
	public void setTaskSubmitId(Integer taskSubmitId) {
		this.taskSubmitId = taskSubmitId;
	}
	public String getTaskSubmitDetail() {
		return taskSubmitDetail;
	}
	public void setTaskSubmitDetail(String taskSubmitDetail) {
		this.taskSubmitDetail = taskSubmitDetail;
	}
	public String getTaskSubmitTaskOrderNumber() {
		return taskSubmitTaskOrderNumber;
	}
	public void setTaskSubmitTaskOrderNumber(String taskSubmitTaskOrderNumber) {
		this.taskSubmitTaskOrderNumber = taskSubmitTaskOrderNumber;
	}
	@Override
	public String toString() {
		return "TaskSubmit [taskSubmitId=" + taskSubmitId
				+ ", taskSubmitDetail=" + taskSubmitDetail
				+ ", taskSubmitTaskOrderNumber=" + taskSubmitTaskOrderNumber
				+ ", taskSubmitUrl=" + taskSubmitUrl + ", taskSubmitUserId="
				+ taskSubmitUserId + ", taskSubmitTime=" + taskSubmitTime + "]";
	}
	
}
