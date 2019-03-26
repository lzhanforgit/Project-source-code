package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Painter;

public interface PainterService {
      //添加绘师信息
	int addPainterInfo(Integer certUserId,String certAward);
	
	  //查询所有绘师信息及作品
	List<Painter> findAllPainterInfo();
}
