package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//收藏表
@Component
@Scope(scopeName = "prototype")
public class Collect {
	private Integer collectId; //自增id
	private Integer collectPhotoId; //收藏图片id
	private Integer collectUserId; //收藏人id
	
	
	public Integer getCollectId() {
		return collectId;
	}
	public void setCollectId(Integer collectId) {
		this.collectId = collectId;
	}
	public Integer getCollectPhotoId() {
		return collectPhotoId;
	}
	public void setCollectPhotoId(Integer collectPhotoId) {
		this.collectPhotoId = collectPhotoId;
	}
	public Integer getCollectUserId() {
		return collectUserId;
	}
	public void setCollectUserId(Integer collectUserId) {
		this.collectUserId = collectUserId;
	}
	@Override
	public String toString() {
		return "Collect [collectId=" + collectId + ", collectPhotoId=" + collectPhotoId + ", collectUserId="
				+ collectUserId + "]";
	}
	
	
}
