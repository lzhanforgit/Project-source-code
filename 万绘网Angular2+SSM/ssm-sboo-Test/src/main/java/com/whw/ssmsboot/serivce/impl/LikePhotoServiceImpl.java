package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.LikePhotoMapper;
import com.whw.ssmsboot.serivce.LikePhotoService;

@Service
public class LikePhotoServiceImpl implements LikePhotoService{

	@Autowired
	private LikePhotoMapper likePhotoMapper;
	
	@Override
	public List<Integer> findLikePhoto(Integer likeUserId) {
		
		return likePhotoMapper.findLikePhoto(likeUserId);
	}

}
 