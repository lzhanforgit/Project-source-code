package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//任务表
@Component
@Scope(scopeName = "prototype")
public class Task {
	private Integer taskId; //自增id
	private Integer taskPostUserId; //发布者id
	private Integer taskGetUserId; //确认接受者id
	private String taskTitle;//任务标题
	private String taskContent; //任务内容
	private Integer taskPostTime; //发布时间
	private Integer taskOrderStatus; //任务状态
	private Integer taskPay; //支付状态
	private Integer taskAmount; //支付金额
	private String taskOrderNumber; //任务编号
	private Integer taskCompleteTime; //任务完成时间
	private Integer taskPhotoTypeId;//需求作品类型id
	private String taskPhotoUrl;//任务描述图片
	private Integer taskStatus;//是否删除
	private Integer taskPayStatus;//支付状态
	private Integer remaining;//剩余时间
	
	
	
	public Integer getTaskCompleteTime() {
		return taskCompleteTime;
	}
	public void setTaskCompleteTime(Integer taskCompleteTime) {
		this.taskCompleteTime = taskCompleteTime;
	}
	public Integer getRemaining() {
		return remaining;
	}
	public void setRemaining(Integer remaining) {
		this.remaining = remaining;
	}
	public String getTaskTitle() {
		return taskTitle;
	}
	public void setTaskTitle(String taskTitle) {
		this.taskTitle = taskTitle;
	}
	public Integer getTaskPayStatus() {
		return taskPayStatus;
	}
	public void setTaskPayStatus(Integer taskPayStatus) {
		this.taskPayStatus = taskPayStatus;
	}
	public Integer getTaskStatus() {
		return taskStatus;
	}
	public void setTaskStatus(Integer taskStatus) {
		this.taskStatus = taskStatus;
	}
	public String getTaskPhotoUrl() {
		return taskPhotoUrl;
	}
	public void setTaskPhotoUrl(String taskPhotoUrl) {
		this.taskPhotoUrl = taskPhotoUrl;
	}
	public Integer getTaskPhotoTypeId() {
		return taskPhotoTypeId;
	}
	public void setTaskPhotoTypeId(Integer taskPhotoTypeId) {
		this.taskPhotoTypeId = taskPhotoTypeId;
	}
	public Integer getTaskId() {
		return taskId;
	}
	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}
	public Integer getTaskPostUserId() {
		return taskPostUserId;
	}
	public void setTaskPostUserId(Integer taskPostUserId) {
		this.taskPostUserId = taskPostUserId;
	}
	public Integer getTaskGetUserId() {
		return taskGetUserId;
	}
	public void setTaskGetUserId(Integer taskGetUserId) {
		this.taskGetUserId = taskGetUserId;
	}
	public String getTaskContent() {
		return taskContent;
	}
	public void setTaskContent(String taskContent) {
		this.taskContent = taskContent;
	}
	public Integer getTaskPostTime() {
		return taskPostTime;
	}
	public void setTaskPostTime(Integer taskPostTime) {
		this.taskPostTime = taskPostTime;
	}
	public Integer getTaskOrderStatus() {
		return taskOrderStatus;
	}
	public void setTaskOrderStatus(Integer taskOrderStatus) {
		this.taskOrderStatus = taskOrderStatus;
	}
	public Integer getTaskPay() {
		return taskPay;
	}
	public void setTaskPay(Integer taskPay) {
		this.taskPay = taskPay;
	}
	public Integer getTaskAmount() {
		return taskAmount;
	}
	public void setTaskAmount(Integer taskAmount) {
		this.taskAmount = taskAmount;
	}
	public String getTaskOrderNumber() {
		return taskOrderNumber;
	}
	public void setTaskOrderNumber(String taskOrderNumber) {
		this.taskOrderNumber = taskOrderNumber;
	}
	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", taskPostUserId=" + taskPostUserId + ", taskGetUserId=" + taskGetUserId
				+ ", taskTitle=" + taskTitle + ", taskContent=" + taskContent + ", taskPostTime=" + taskPostTime
				+ ", taskOrderStatus=" + taskOrderStatus + ", taskPay=" + taskPay + ", taskAmount=" + taskAmount
				+ ", taskOrderNumber=" + taskOrderNumber + ", taskCompleteTime=" + taskCompleteTime
				+ ", taskPhotoTypeId=" + taskPhotoTypeId + ", taskPhotoUrl=" + taskPhotoUrl + ", taskStatus="
				+ taskStatus + ", taskPayStatus=" + taskPayStatus + "]";
	}
	
}
