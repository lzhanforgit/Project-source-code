package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.RelationshipMapper;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.RelationshipService;

@Service
public class RelationshipServiceImpl implements RelationshipService{

	@Autowired
	private RelationshipMapper relationshipMapper;
	
	@Override
	public List<Integer> findRelationshipFansUserId(Integer relationshipUserId) {
	
		return relationshipMapper.findRelationshipFansUserId(relationshipUserId);
	}

	@Override
	public List<Integer> findRelationshipUserId(Integer relationshipFansUserId) {
		
		return relationshipMapper.findRelationshipUserId(relationshipFansUserId);
	}
	
	@Override
	public List<User> finaUserById(List<Integer> userId) {

		return relationshipMapper.finaUserById(userId);
	}


} 
  