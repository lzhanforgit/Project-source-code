package com.whw.ssmsboot.pojo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//管理员表
@Component
@Scope(scopeName = "prototype")
public class Admin {
	private Integer adminId; // 管理员自增id
	@NotNull
	@Size(min = 6, max = 12)
	private String adminName; // 管理员账号
	@NotNull
	@Size(min = 6, max = 12)
	private String adminPassword; // 密码

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName
				+ ", adminPassword=" + adminPassword + "]";
	}

}
