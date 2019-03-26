package com.whw.ssmsboot.pojo;

import java.sql.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//用户表
@Component
@Scope(scopeName = "prototype")
public class User {
	private Integer userId; // 自增ID
	private String userNikeName; // 昵称
	private String userAvatar; // 头像
	private String userSignature; // 签名
	private String userPassword; // 密码
	private String userPhone; // 手机号
	private String userEmail; // 邮箱
	private String userWeibo; // 微博
	public String getUserBirthday() {
		return userBirthday;
	}

	public void setUserBirthday(String userBirthday) {
		this.userBirthday = userBirthday;
	}

	private String userBirthday; // 生日
	private Integer userSex; // 性别
	private Integer userAddressId; // 地址id外键
	private Integer userStatus; // 是否拉黑状态
	private Integer userPainter; // 绘师认证
	private Date userRegistTime; // 注册 时间

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserNikeName() {
		return userNikeName;
	}

	public void setUserNikeName(String userNikeName) {
		this.userNikeName = userNikeName;
	}

	public String getUserAvatar() {
		return userAvatar;
	}

	public void setUserAvatar(String userAvatar) {
		this.userAvatar = userAvatar;
	}

	public String getUserSignature() {
		return userSignature;
	}

	public void setUserSignature(String userSignature) {
		this.userSignature = userSignature;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserWeibo() {
		return userWeibo;
	}

	public void setUserWeibo(String userWeibo) {
		this.userWeibo = userWeibo;
	}
//
//	public Date getUserBirthday() {
//		return userBirthday;
//	}
//
//	public void setUserBirthday(Date userBirthday) {
//		this.userBirthday = userBirthday;
//	}

	public Integer getUserSex() {
		return userSex;
	}

	public void setUserSex(Integer userSex) {
		this.userSex = userSex;
	}

	public Integer getUserAddressId() {
		return userAddressId;
	}

	public void setUserAddressId(Integer userAddressId) {
		this.userAddressId = userAddressId;
	}

	public Integer getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(Integer userStatus) {
		this.userStatus = userStatus;
	}

	public Integer getUserPainter() {
		return userPainter;
	}

	public void setUserPainter(Integer userPainter) {
		this.userPainter = userPainter;
	}

	public Date getUserRegistTime() {
		return userRegistTime;
	}

	public void setUserRegistTime(Date userRegistTime) {
		this.userRegistTime = userRegistTime;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userNikeName=" + userNikeName
				+ ", userAvatar=" + userAvatar + ", userSignature="
				+ userSignature + ", userPassword=" + userPassword
				+ ", userPhone=" + userPhone + ", userEmail=" + userEmail
				+ ", userWeibo=" + userWeibo + ", userBirthday=" + userBirthday
				+ ", userSex=" + userSex + ", userAddressId=" + userAddressId
				+ ", userStatus=" + userStatus + ", userPainter=" + userPainter
				+ ", userRegistTime=" + userRegistTime + "]";
	}

}
