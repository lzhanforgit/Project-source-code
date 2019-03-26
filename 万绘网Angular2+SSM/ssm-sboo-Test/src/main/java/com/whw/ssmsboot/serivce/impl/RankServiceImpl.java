package com.whw.ssmsboot.serivce.impl;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.RankMapper;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.RankService;
@Service
public class RankServiceImpl implements RankService{

	@Autowired
	private RankMapper rankMapper;
	
	@Override
	public List<Photo> findPhotoRankDate(Date date) {

		return rankMapper.findPhotoRankDate(date);
	}

	@Override
	public List<Photo> findPhotoRankMonth(Date date) {

		return rankMapper.findPhotoRankMonth(date);
	}

	@Override
	public List<Photo> findPhotoRankWeek(Date date) {
		
		return rankMapper.findPhotoRankWeek(date);
	}

} 
