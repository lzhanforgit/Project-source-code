package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.CollectMapper;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.CollectService;

@Service
public class CollectServiceImpl implements CollectService{

	@Autowired
	private CollectMapper collectMapper;
	
	
	@Override
	public List<Photo> findCollectPhoto(List<Integer> list) {
		
		return collectMapper.findCollectPhoto(list);
	}

	@Override
	public Integer delectCollect(Integer collectUserId, Integer collectPhotoId) {
		
		return collectMapper.delectCollect(collectUserId, collectPhotoId);
	}

	@Override
	public List<Integer> findCollect(Integer collectUserId) {
		
		return collectMapper.findCollect(collectUserId);
	}
	




@Override
	public Integer addCollection(Integer photoId, Integer userId) {
		
		return collectMapper.addCollection(photoId, userId);


	}
}
 