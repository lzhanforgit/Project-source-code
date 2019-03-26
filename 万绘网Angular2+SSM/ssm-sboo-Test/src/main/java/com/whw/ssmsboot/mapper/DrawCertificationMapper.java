package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.DrawCertification;

public interface DrawCertificationMapper {

	int addDrawCertificationInfo(DrawCertification drawCertification);

	List<DrawCertification> findByCertStatus(@Param("certStatus")Integer certStatus);

	int updateDrawCertStatus(@Param("certId")Integer certId, @Param("certStatus")Integer certStatus);

	int delByIdList(@Param("list")List<Integer> list);

	DrawCertification findByUserId(@Param("userId")Integer certUserId);

	List<String> findByIdList(@Param("list")List<Integer> list);

}
