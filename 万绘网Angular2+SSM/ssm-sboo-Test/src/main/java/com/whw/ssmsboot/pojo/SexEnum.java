package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName = "prototype")
public enum SexEnum {
	
	MALE(0,"男"),FEMALE(1,"女");
	
	
	private int value;
	private String note;
	
	private SexEnum(Integer value, String note) {
		this.value = value;
		this.note = note;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	/**
	 * 根据传入的id得到这个id对应的实例，并返回，当不存在时返回null
	 * @param id
	 * @return
	 */
	public static SexEnum getSexEnumById(int id) {
		for(SexEnum sex:SexEnum.values()) {
			if (sex.getValue() == id) {
				return sex;
			}
		}
		
		return null;
	}
	
	

}
