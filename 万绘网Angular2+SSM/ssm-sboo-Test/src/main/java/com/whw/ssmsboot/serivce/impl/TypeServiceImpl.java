package com.whw.ssmsboot.serivce.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.TypeMapper;
import com.whw.ssmsboot.serivce.TypeService;

@Service
public class TypeServiceImpl implements TypeService{
	
	@Autowired
	private TypeMapper typeMapper;

	@Override
	public String findType() {
		// TODO Auto-generated method stub
		return typeMapper.findType();
	}
	
	
}
