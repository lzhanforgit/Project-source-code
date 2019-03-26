package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName = "prototype")
public class LoginStatusRecord {
	private Integer loginStatusRecordId;
	private String loginStatusRecordSessionId;
	private Integer loginStatusRecordUserId;

	public Integer getLoginStatusRecordId() {
		return loginStatusRecordId;
	}

	public void setLoginStatusRecordId(Integer loginStatusRecordId) {
		this.loginStatusRecordId = loginStatusRecordId;
	}

	public String getLoginStatusRecordSessionId() {
		return loginStatusRecordSessionId;
	}

	public void setLoginStatusRecordSessionId(String loginStatusRecordSessionId) {
		this.loginStatusRecordSessionId = loginStatusRecordSessionId;
	}

	public Integer getLoginStatusRecordUserId() {
		return loginStatusRecordUserId;
	}

	public void setLoginStatusRecordUserId(Integer loginStatusRecordUserId) {
		this.loginStatusRecordUserId = loginStatusRecordUserId;
	}

	@Override
	public String toString() {
		return "LoginStatusRecord [loginStatusRecordId=" + loginStatusRecordId
				+ ", loginStatusRecordSessionId=" + loginStatusRecordSessionId
				+ ", loginStatusRecordUserId=" + loginStatusRecordUserId + "]";
	}

}
