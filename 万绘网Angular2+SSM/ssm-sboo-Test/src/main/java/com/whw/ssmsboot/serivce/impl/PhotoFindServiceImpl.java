package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.PhotoFindMapper;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.PhotoFindService;

@Service
public class PhotoFindServiceImpl implements PhotoFindService{

	@Autowired
	private  PhotoFindMapper photoFindMapper;
	
	@Override
	public Integer deletePhoto(Integer photoUserId,Integer photoId) {
		
		return photoFindMapper.deletePhoto(photoUserId,photoId);
		
	}

	@Override
	public List<Photo> findPhoto(Integer photoUserId) {

		return photoFindMapper.findPhoto(photoUserId);
	}

}
 