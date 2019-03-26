package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//地址表
@Component
@Scope(scopeName = "prototype")
public class Address {
	private Integer addressId; //自增id
	private String addressProvince; //省
	private String addressCity; //市
	private String addressCounty; //县、区
	private String addressStreet; //街道
	private String addressDetailed; //详细地址
	

	public Integer getAddressId() {
		return addressId;
	}
	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}
	public String getAddressProvince() {
		return addressProvince;
	}
	public void setAddressProvince(String addressProvince) {
		this.addressProvince = addressProvince;
	}
	public String getAddressCity() {
		return addressCity;
	}
	public void setAddressCity(String addressCity) {
		this.addressCity = addressCity;
	}
	public String getAddressCounty() {
		return addressCounty;
	}
	public void setAddressCounty(String addressCounty) {
		this.addressCounty = addressCounty;
	}
	public String getAddressStreet() {
		return addressStreet;
	}
	public void setAddressStreet(String addressStreet) {
		this.addressStreet = addressStreet;
	}
	public String getAddressDetailed() {
		return addressDetailed;
	}
	public void setAddressDetailed(String addressDetailed) {
		this.addressDetailed = addressDetailed;
	}
	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", addressProvince=" + addressProvince + ", addressCity="
				+ addressCity + ", addressCounty=" + addressCounty + ", addressStreet=" + addressStreet
				+ ", addressDetailed=" + addressDetailed + "]";
	}
	
	
}
