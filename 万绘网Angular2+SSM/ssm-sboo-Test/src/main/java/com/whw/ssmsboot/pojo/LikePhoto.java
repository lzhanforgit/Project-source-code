package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//点赞表
@Component
@Scope(scopeName = "prototype")
public class LikePhoto {
	private Integer likeId; //自增id
	private Integer likePhotoId; //作品id外键
	private Integer likeUserId; //点赞用户id
	
	
	
	public Integer getLikeId() {
		return likeId;
	}
	public void setLikeId(Integer likeId) {
		this.likeId = likeId;
	}
	public Integer getLikePhotoId() {
		return likePhotoId;
	}
	public void setLikePhotoId(Integer likePhotoId) {
		this.likePhotoId = likePhotoId;
	}
	public Integer getLikeUserId() {
		return likeUserId;
	}
	public void setLikeUserId(Integer likeUserId) {
		this.likeUserId = likeUserId;
	}
	@Override
	public String toString() {
		return "likePhoto [likeId=" + likeId + ", likePhotoId=" + likePhotoId + ", likeUserId=" + likeUserId + "]";
	}
	
	
}
