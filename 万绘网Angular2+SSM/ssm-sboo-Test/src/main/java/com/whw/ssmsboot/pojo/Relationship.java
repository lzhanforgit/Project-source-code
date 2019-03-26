package com.whw.ssmsboot.pojo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//用户关系表
@Component
@Scope(scopeName = "prototype")
public class Relationship {
	private Integer relationshipId; //自增id
	private Integer relationshipUserId; //关注人id
	private Integer relationshipFansUserId; //被关注人id

	public Integer getRelationshipId() {
		return relationshipId;
	}
	public void setRelationshipId(Integer relationshipId) {
		this.relationshipId = relationshipId;
	}
	public Integer getRelationshipUserId() {
		return relationshipUserId;
	}
	public void setRelationshipUserId(Integer relationshipUserId) {
		this.relationshipUserId = relationshipUserId;
	}
	public Integer getRelationshipFansUserId() {
		return relationshipFansUserId;
	}
	public void setRelationshipFansUserId(Integer relationshipFansUserId) {
		this.relationshipFansUserId = relationshipFansUserId;
	}
	@Override
	public String toString() {
		return "Relationship [relationshipId=" + relationshipId + ", relationshipUserId=" + relationshipUserId
				+ ", relationshipFansUserId=" + relationshipFansUserId + "]";
	}
	
	
}
