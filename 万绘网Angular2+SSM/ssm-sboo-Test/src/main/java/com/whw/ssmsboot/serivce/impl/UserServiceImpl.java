package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.UserMapper;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.UserService;

@Service
public class UserServiceImpl implements UserService{


	@Autowired
	private UserMapper userMapper;
	
	@Override
	public User finaUser(String userPhone) {

		return userMapper.finaUser(userPhone);
	}

	@Override
	public Address findAddress(Integer userAddressId) {

		return userMapper.findAddress(userAddressId);
	}

	@Override
	public List<Comment> findComment(Integer id) {

		return userMapper.findComment(id);
	}

	@Override
	public Integer updataUser(User user) {

		return userMapper.updataUser(user);
	}

	
	@Override
	public Integer updateAddress(Address address) {
		
		return userMapper.updateAddress(address); 
	}

	@Override
	public User finaUserById(Integer userId) {
		// TODO Auto-generated method stub
		return userMapper.finaUserById(userId);
	}

}
