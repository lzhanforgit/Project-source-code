package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//风格表
@Component
@Scope(scopeName = "prototype")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" }) 
public class Style {
	private Integer styleId; //自增id
	private String style; //风格
	private String styleIntroduction; //风格介绍
	
	public Integer getStyleId() {
		return styleId;
	}
	public void setStyleId(Integer styleId) {
		this.styleId = styleId;
	}
	public String getStyle() {
		return style;
	}
	public void setStyle(String style) {
		this.style = style;
	}
	public String getStyleIntroduction() {
		return styleIntroduction;
	}
	public void setStyleIntroduction(String styleIntroduction) {
		this.styleIntroduction = styleIntroduction;
	}
	@Override
	public String toString() {
		return "Style [styleId=" + styleId + ", style=" + style + ", styleIntroduction=" + styleIntroduction + "]";
	}
	
	
}
