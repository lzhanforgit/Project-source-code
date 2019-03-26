package com.whw.ssmsboot.serivce.impl;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.mapper.DrawCertificationMapper;
import com.whw.ssmsboot.mapper.LoginRegistMapper;
import com.whw.ssmsboot.mapper.PainterMapper;
import com.whw.ssmsboot.pojo.DrawCertification;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.DrawCertificationService;

@Service
public class DrawCertificationServiceImpl implements DrawCertificationService {
	@Autowired
	private DrawCertificationMapper drawCertificationMapper;
	@Autowired
	private LoginRegistMapper loginRegistMapper;
	@Autowired
	private PainterMapper painterMapper;

	@Override
	@Transactional
	public int addDrawCertificationInfo(DrawCertification drawCertification) {
		DrawCertification drawCert = drawCertificationMapper
				.findByUserId(drawCertification.getCertUserId());
		if (drawCert != null) {
			return Constant9.EXIST_CERT;
		} else {
			User user = loginRegistMapper.findUserById(drawCertification
					.getCertUserId());
			if (null != user && user.getUserPainter().intValue() == 1) {
				return Constant9.EXIST_DRAW;
			}
		}
		return drawCertificationMapper
				.addDrawCertificationInfo(drawCertification);
	}

	@Override
	@Transactional
	public List<DrawCertification> findByCertStatus(Integer certStatus) {
		return drawCertificationMapper.findByCertStatus(certStatus);
	}

	@Override
	@Transactional
	public int updateDrawCertStatus(Integer certId, Integer certStatus) {
		return drawCertificationMapper.updateDrawCertStatus(certId, certStatus);
	}

	@Override
	@Transactional
	public int updateDrawCertStatus(DrawCertification drawCertification) {
		int certCount = drawCertificationMapper.updateDrawCertStatus(
				drawCertification.getCertId(),
				drawCertification.getCertStatus());
		if (certCount > 0) {
			int painterCount = painterMapper.addPainterInfo(
					drawCertification.getCertUserId(),
					drawCertification.getCertAward());
			if (painterCount > 0) {
				User user = new User();
				user.setUserId(drawCertification.getCertUserId());
				user.setUserPainter(Constant9.STATUS_CODE_1);
				int userCount = loginRegistMapper.updateUserInfo(user);
				return userCount;
			}
		}
		return 0;
	}

	@Override
	@Transactional
	public int delByIdList(List<Integer> list) {
		List<String> certPhoto = drawCertificationMapper.findByIdList(list);
		for (String cp : certPhoto) {
			File file = new File(cp);
			if (file.exists()) {
				file.delete();
			}
		}
		return drawCertificationMapper.delByIdList(list);
	}

}
