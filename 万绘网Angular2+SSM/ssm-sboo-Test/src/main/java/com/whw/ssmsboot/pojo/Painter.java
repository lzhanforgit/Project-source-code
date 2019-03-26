package com.whw.ssmsboot.pojo;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//绘师表
@Component
@Scope(scopeName = "prototype")
public class Painter {
	private Integer painterId; //绘师id
	private Integer painterUserId; //用户id
	private String painterArawds; //获奖信息
	
	private User user;//返回用户(绘师)基本信息
	private Photo[] photo;//返回所有作品
	private Integer[] fans; //粉丝数量
	private String gz;//关注
	
	
	public Integer getPainterId() {
		return painterId;
	}
	public void setPainterId(Integer painterId) {
		this.painterId = painterId;
	}
	public Integer getPainterUserId() {
		return painterUserId;
	}
	public void setPainterUserId(Integer painterUserId) {
		this.painterUserId = painterUserId;
	}
	public String getPainterArawds() {
		return painterArawds;
	}
	public void setPainterArawds(String painterArawds) {
		this.painterArawds = painterArawds;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Photo[] getPhoto() {
		return photo;
	}
	public void setPhoto(Photo[] photo) {
		this.photo = photo;
	}
	public Integer[] getFans() {
		return fans;
	}
	public void setFans(Integer[] fans) {
		this.fans = fans;
	}
	
	public String getGz() {
		return gz;
	}
	public void setGz(String gz) {
		this.gz = gz;
	}
	@Override
	public String toString() {
		return "Painter [painterId=" + painterId + ", painterUserId=" + painterUserId + ", painterArawds="
				+ painterArawds + ", user=" + user + ", photo=" + Arrays.toString(photo) + ", fans=" + fans + ", gz="
				+ gz + "]";
	}
	
	
	
	
	
	
	
}
