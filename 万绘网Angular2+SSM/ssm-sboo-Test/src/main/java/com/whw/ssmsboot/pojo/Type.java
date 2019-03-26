package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//类型表
@Component
@Scope(scopeName = "prototype")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" }) 
public class Type {
	private Integer typeId; //类型ID
	private String type; //类型
	
	
	public Integer getTypeId() {
		return typeId;
	}
	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Type [typeId=" + typeId + ", type=" + type + "]";
	}
	
	
}
