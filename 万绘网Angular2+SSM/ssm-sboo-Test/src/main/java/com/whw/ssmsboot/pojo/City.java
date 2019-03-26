package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName = "prototype")
public class City {
	private Integer cityId;// id
	private Integer parentId;// 依赖的ID
	private String cityNm;// 省 市 区 名字
	private Integer cityType;// 省 市 区区分

	public Integer getCityId() {
		return cityId;
	}

	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getCityNm() {
		return cityNm;
	}

	public void setCityNm(String cityNm) {
		this.cityNm = cityNm;
	}

	public Integer getCityType() {
		return cityType;
	}

	public void setCityType(Integer cityType) {
		this.cityType = cityType;
	}

	@Override
	public String toString() {
		return "City [cityId=" + cityId + ", parentId=" + parentId
				+ ", cityNm=" + cityNm + ", cityType=" + cityType + "]";
	}

}
