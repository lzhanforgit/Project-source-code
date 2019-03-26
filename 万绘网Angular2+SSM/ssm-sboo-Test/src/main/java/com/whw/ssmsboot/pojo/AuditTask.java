package com.whw.ssmsboot.pojo;

import java.util.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//举报任务审核表
@Component
@Scope(scopeName = "prototype")
public class AuditTask {
	private Integer auditTaskId; //举报id
	private Integer auditTaskUserId; //举报人id
	private Integer auditTaskTaskId; //被举报id
	private Integer auditTaskStatus; //状态
	private Date auditTaskTime; //举报时间
	
	

	public Integer getAuditTaskId() {
		return auditTaskId;
	}
	public void setAuditTaskId(Integer auditTaskId) {
		this.auditTaskId = auditTaskId;
	}
	public Integer getAuditTaskUserId() {
		return auditTaskUserId;
	}
	public void setAuditTaskUserId(Integer auditTaskUserId) {
		this.auditTaskUserId = auditTaskUserId;
	}
	public Integer getAuditTaskTaskId() {
		return auditTaskTaskId;
	}
	public void setAuditTaskTaskId(Integer auditTaskTaskId) {
		this.auditTaskTaskId = auditTaskTaskId;
	}
	
	public Integer getAuditTaskStatus() {
		return auditTaskStatus;
	}
	public void setAuditTaskStatus(Integer auditTaskStatus) {
		this.auditTaskStatus = auditTaskStatus;
	}
	public Date getAuditTaskTime() {
		return auditTaskTime;
	}
	public void setAuditTaskTime(Date auditTaskTime) {
		this.auditTaskTime = auditTaskTime;
	}
	@Override
	public String toString() {
		return "AuditTask [auditTaskId=" + auditTaskId + ", auditTaskUserId=" + auditTaskUserId + ", auditTaskTaskId="
				+ auditTaskTaskId + ", auditTaskStatus=" + auditTaskStatus + ", auditTaskTime=" + auditTaskTime + "]";
	}
	
	
	
}
