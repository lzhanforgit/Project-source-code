package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Painter;

public interface PainterMapper {
    //添加繪師表信息
	int addPainterInfo(@Param("certUserId")Integer certUserId, @Param("certAward")String certAward);
    //查詢所有繪師表信息
	List<Painter> findAllPainterInfo();
}
