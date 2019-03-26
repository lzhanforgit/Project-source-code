package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.PainterMapper;
import com.whw.ssmsboot.pojo.Painter;
import com.whw.ssmsboot.serivce.PainterService;
@Service
public class PainterServiceImpl implements PainterService {
    
	@Autowired
	private PainterMapper painter;
	@Override
	@Transactional
	public int addPainterInfo(Integer certUserId, String certAward) {
		return 0;
	}

	@Override
	@Transactional
	public List<Painter> findAllPainterInfo() {
		return painter.findAllPainterInfo();
	}

}
