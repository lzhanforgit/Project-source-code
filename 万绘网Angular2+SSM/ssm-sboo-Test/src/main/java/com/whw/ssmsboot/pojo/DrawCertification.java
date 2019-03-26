package com.whw.ssmsboot.pojo;

import java.sql.Date;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName = "prototype")
public class DrawCertification {
	private Integer certId;// 认证记录id
	private Integer certUserId;// 认证用户的ID
	private String certAward;//获奖描述
	private Date certTime;// 认证时间
	private Integer certStatus;// 认证状态
	private String certPhoto;// 获奖证明:可以是作品也可以是证书

	public String getCertAward() {
		return certAward;
	}

	public void setCertAward(String certAward) {
		this.certAward = certAward;
	}

	public Integer getCertId() {
		return certId;
	}

	public void setCertId(Integer certId) {
		this.certId = certId;
	}

	public Integer getCertUserId() {
		return certUserId;
	}

	public void setCertUserId(Integer certUserId) {
		this.certUserId = certUserId;
	}

	public Date getCertTime() {
		return certTime;
	}

	public void setCertTime(Date certTime) {
		this.certTime = certTime;
	}

	public Integer getCertStatus() {
		return certStatus;
	}

	public void setCertStatus(Integer certStatus) {
		this.certStatus = certStatus;
	}

	public String getCertPhoto() {
		return certPhoto;
	}

	public void setCertPhoto(String certPhoto) {
		this.certPhoto = certPhoto;
	}

	@Override
	public String toString() {
		return "DrawCertification [certId=" + certId + ", certUserId="
				+ certUserId + ", certAward=" + certAward + ", certTime="
				+ certTime + ", certStatus=" + certStatus + ", certPhoto="
				+ certPhoto + "]";
	}

	

}
