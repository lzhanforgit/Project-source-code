package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.DrawCertification;

public interface DrawCertificationService {

	int addDrawCertificationInfo(DrawCertification drawCertification);

	List<DrawCertification> findByCertStatus(Integer certStatus);

	int updateDrawCertStatus(Integer certId, Integer certStatus);

	int updateDrawCertStatus(DrawCertification drawCertification);

	int delByIdList(List<Integer> list);

}
