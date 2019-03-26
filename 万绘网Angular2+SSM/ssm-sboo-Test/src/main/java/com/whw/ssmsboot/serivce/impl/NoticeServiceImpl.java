package com.whw.ssmsboot.serivce.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.NoticeMapper;
import com.whw.ssmsboot.serivce.NoticeService;

@Service
public class NoticeServiceImpl implements NoticeService{

	@Autowired
	private NoticeMapper noticeMapper;
	
	@Override
	public Integer updateNotice(Integer commentUserId) {
		
		return noticeMapper.updateNotice(commentUserId);
		
	}

	@Override
	public Integer findNotice(Integer commentUserId) {
		
		return noticeMapper.findNotice(commentUserId);
	}
	
	
}
