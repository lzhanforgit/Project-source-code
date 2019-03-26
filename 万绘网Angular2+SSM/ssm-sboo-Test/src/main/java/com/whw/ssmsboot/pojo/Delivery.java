package com.whw.ssmsboot.pojo;

public class Delivery {

	private Integer deliveryId;//自增id
	private Integer deliveryUserId;//用户id
	private Integer deliveryAddressId;//地址id
	private String deliveryPhone;//联系方式
	private String deliveryName;//收货人姓名
	private Integer deliveryDefault;//默认收货地址
	
	public Integer getDeliveryDefault() {
		return deliveryDefault;
	}
	public void setDeliveryDefault(Integer deliveryDefault) {
		this.deliveryDefault = deliveryDefault;
	}
	public Integer getDeliveryId() {
		return deliveryId;
	}
	public void setDeliveryId(Integer deliveryId) {
		this.deliveryId = deliveryId;
	}
	public Integer getDeliveryUserId() {
		return deliveryUserId;
	}
	public void setDeliveryUserId(Integer deliveryUserId) {
		this.deliveryUserId = deliveryUserId;
	}
	public Integer getDeliveryAddressId() {
		return deliveryAddressId;
	}
	public void setDeliveryAddressId(Integer deliveryAddressId) {
		this.deliveryAddressId = deliveryAddressId;
	}
	public String getDeliveryPhone() {
		return deliveryPhone;
	}
	public void setDeliveryPhone(String deliveryPhone) {
		this.deliveryPhone = deliveryPhone;
	}
	public String getDeliveryName() {
		return deliveryName;
	}
	public void setDeliveryName(String deliveryName) {
		this.deliveryName = deliveryName;
	}
}
