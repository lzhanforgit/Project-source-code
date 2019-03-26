package com.whw.ssmsboot.pojo;

import java.util.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//作品表
@Component
@Scope(scopeName = "prototype")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" })  
public class Photo {
	private Integer photoId; //自增ID
	private Integer photoId2; //自增ID
	private String photoName; //作品名称
	private String photoUrl; //作品url
	private String photoExplanation; //作品详细信息
	private String photoUserId; //作者id
	private String photoLabel; //标签
	private Integer photoStyleId; //风格id
	private Integer photoTypeId; //类型id
	private Date photoUploadTime; //上传时间
	private String photoUploadTime2; //上传时间2
	private String photoStatus; //状态
	private Integer likePhoto; //点赞数量
	private Integer photoHide; //作品是否显示
	
	
	private User user; //作者信息
	private Integer follow;  //关注数量
	private Integer fans; //粉丝数量
	private Integer collect; //作品收藏数
	
//	作者名字 添加
	
	private String userName;
	
	public Integer getCollect() {
		return collect;
	}
	public void setCollect(Integer collect) {
		this.collect = collect;
	}
	public Integer getPhotoId2() {
		return photoId2;
	}
	public void setPhotoId2(Integer photoId2) {
		this.photoId2 = photoId2;
	}
	public String getPhotoUploadTime2() {
		return photoUploadTime2;
	}
	public void setPhotoUploadTime2(String photoUploadTime2) {
		this.photoUploadTime2 = photoUploadTime2;
	}
	public Integer getPhotoHide() {
		return photoHide;
	}
	public void setPhotoHide(Integer photoHide) {
		this.photoHide = photoHide;
	}
	public Integer getPhotoId() {
		return photoId;
	}
	public void setPhotoId(Integer photoId) {
		this.photoId = photoId;
	}
	public String getPhotoName() {
		return photoName;
	}
	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public String getPhotoExplanation() {
		return photoExplanation;
	}
	public void setPhotoExplanation(String photoExplanation) {
		this.photoExplanation = photoExplanation;
	}
	public String getPhotoUserId() {
		return photoUserId;
	}
	public void setPhotoUserId(String photoUserId) {
		this.photoUserId = photoUserId;
	}
	public String getPhotoLabel() {
		return photoLabel;
	}
	public void setPhotoLabel(String photoLabel) {
		this.photoLabel = photoLabel;
	}
	public Integer getPhotoStyleId() {
		return photoStyleId;
	}
	public void setPhotoStyleId(Integer photoStyleId) {
		this.photoStyleId = photoStyleId;
	}
	public Integer getPhotoTypeId() {
		return photoTypeId;
	}
	public void setPhotoTypeId(Integer photoTypeId) {
		this.photoTypeId = photoTypeId;
	}
	public Date getPhotoUploadTime() {
		return photoUploadTime;
	}
	public void setPhotoUploadTime(Date photoUploadTime) {
		this.photoUploadTime = photoUploadTime;
	}
	public String getPhotoStatus() {
		return photoStatus;
	}
	public void setPhotoStatus(String photoStatus) {
		this.photoStatus = photoStatus;
	}
	
	public Integer getLikePhoto() {
		return likePhoto;
	}
	public void setLikePhoto(Integer likePhoto) {
		this.likePhoto = likePhoto;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getFollow() {
		return follow;
	}
	public void setFollow(Integer follow) {
		this.follow = follow;
	}
	public Integer getFans() {
		return fans;
	}
	public void setFans(Integer fans) {
		this.fans = fans;
	}
	@Override
	public String toString() {
		return "Photo [photoId=" + photoId + ", photoName=" + photoName + ", photoUrl=" + photoUrl
				+ ", photoExplanation=" + photoExplanation + ", photoUserId=" + photoUserId + ", photoLabel="
				+ photoLabel + ", photoStyleId=" + photoStyleId + ", photoTypeId=" + photoTypeId + ", photoUploadTime="
				+ photoUploadTime + ", photoStatus=" + photoStatus + ", likePhoto=" + likePhoto + ", photoHide="
				+ photoHide + "]";
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
}
