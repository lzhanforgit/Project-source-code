package com.whw.ssmsboot.pojo;

import java.sql.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//举报图片审核表
@Component
@Scope(scopeName = "prototype")
public class AuditPhoto {
	private Integer auditPhotoId; //举报id
	private Integer auditPhotoUserId; //举报人id
	private Integer auditPhotoPhotoId; //被举报作品id
	private Integer auditPhotoAppeal; //投诉 0 申诉1 
	private Integer auditPhotoStatus; //状态
	private Date auditPhotoTime; //举报时间
	private String auditAppealContext;//投诉 0 申诉1  内容
	
	
	
	public Integer getAuditPhotoId() {
		return auditPhotoId;
	}
	public void setAuditPhotoId(Integer auditPhotoId) {
		this.auditPhotoId = auditPhotoId;
	}
	public Integer getAuditPhotoUserId() {
		return auditPhotoUserId;
	}
	public void setAuditPhotoUserId(Integer auditPhotoUserId) {
		this.auditPhotoUserId = auditPhotoUserId;
	}
	public Integer getAuditPhotoPhotoId() {
		return auditPhotoPhotoId;
	}
	public void setAuditPhotoPhotoId(Integer auditPhotoPhotoId) {
		this.auditPhotoPhotoId = auditPhotoPhotoId;
	}
	public Integer getAuditPhotoAppeal() {
		return auditPhotoAppeal;
	}
	public void setAuditPhotoAppeal(Integer auditPhotoAppeal) {
		this.auditPhotoAppeal = auditPhotoAppeal;
	}
	public Integer getAuditPhotoStatus() {
		return auditPhotoStatus;
	}
	public void setAuditPhotoStatus(Integer auditPhotoStatus) {
		this.auditPhotoStatus = auditPhotoStatus;
	}
	public Date getAuditPhotoTime() {
		return auditPhotoTime;
	}
	public void setAuditPhotoTime(Date auditPhotoTime) {
		this.auditPhotoTime = auditPhotoTime;
	}
	
	public String getAuditAppealContext() {
		return auditAppealContext;
	}
	public void setAuditAppealContext(String auditAppealContext) {
		this.auditAppealContext = auditAppealContext;
	}
	@Override
	public String toString() {
		return "AuditPhoto [auditPhotoId=" + auditPhotoId
				+ ", auditPhotoUserId=" + auditPhotoUserId
				+ ", auditPhotoPhotoId=" + auditPhotoPhotoId
				+ ", auditPhotoAppeal=" + auditPhotoAppeal
				+ ", auditPhotoStatus=" + auditPhotoStatus
				+ ", auditPhotoTime=" + auditPhotoTime
				+ ", auditAppealContext=" + auditAppealContext + "]";
	}
	
	
}
