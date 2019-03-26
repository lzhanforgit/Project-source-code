package com.whw.ssmsboot.pojo;

import java.util.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//评论表
@Component
@Scope(scopeName = "prototype")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" })
public class Comment {
	private Integer commentId; //自增id
	private Integer commentUserId; //评论用户id
	private Integer commentSumId; //评论id
	private Integer commentAimsUserId; //目标用户id
	private Integer commentPhotoId; //作品id外键
	private String commentContent; //评论内容
	private Date commentTime; //评论时间
	private String commentTime2; //评论时间2
	private Integer commentRead; //已读未读
	private User user;//评论用户的用户信息
	private String commentAimsUser;//目标用户id的昵称
	
	private String userName;
	
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getCommentAimsUser() {
		return commentAimsUser;
	}
	public void setCommentAimsUser(String commentAimsUser) {
		this.commentAimsUser = commentAimsUser;
	}
	public String getCommentTime2() {
		return commentTime2;
	}
	public void setCommentTime2(String commentTime2) {
		this.commentTime2 = commentTime2;
	}
	public Integer getCommentRead() {
		return commentRead;
	}
	public void setCommentRead(Integer commentRead) {
		this.commentRead = commentRead;
	}
	public Integer getCommentId() {
		return commentId;
	}
	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}
	public Integer getCommentUserId() {
		return commentUserId;
	}
	public void setCommentUserId(Integer commentUserId) {
		this.commentUserId = commentUserId;
	}
	public Integer getCommentSumId() {
		return commentSumId;
	}
	public void setCommentSumId(Integer commentSumId) {
		this.commentSumId = commentSumId;
	}
	public Integer getCommentAimsUserId() {
		return commentAimsUserId;
	}
	public void setCommentAimsUserId(Integer commentAimsUserId) {
		this.commentAimsUserId = commentAimsUserId;
	}
	public Integer getCommentPhotoId() {
		return commentPhotoId;
	}
	public void setCommentPhotoId(Integer commentPhotoId) {
		this.commentPhotoId = commentPhotoId;
	}
	public String getCommentContent() {
		return commentContent;
	}
	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}
	public Date getCommentTime() {
		return commentTime;
	}
	public void setCommentTime(Date commentTime) {
		this.commentTime = commentTime;
	}
	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", commentUserId=" + commentUserId + ", commentSumId=" + commentSumId
				+ ", commentAimsUserId=" + commentAimsUserId + ", commentPhotoId=" + commentPhotoId
				+ ", commentContent=" + commentContent + ", commentTime=" + commentTime + "]";
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
	
}
