package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.mapper.AuditPhotoMapper;
import com.whw.ssmsboot.pojo.AuditPhoto;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.AuditPhotoService;

@Service
public class AuditPhotoServiceImpl implements AuditPhotoService {
	@Autowired
	private AuditPhotoMapper auditPhotoMapper;

	@Override
	@Transactional
	public List<AuditPhoto> findByAll(AuditPhoto auditPhoto) {
		return auditPhotoMapper.findByAuditPhotoStatus(auditPhoto);
	}

	@Override
	@Transactional
	public int addAuditPhotoInfo(AuditPhoto auditPhoto) {
		return auditPhotoMapper.insertAuditPhotoInfo(auditPhoto);
	}

	@Override
	@Transactional
	public int updateAuditPhotoStatusZero(AuditPhoto auditPhoto) {
		return auditPhotoMapper.updateAuditPhotoStatusZero(auditPhoto);
	}
	
	@Override
	@Transactional
	public List<Photo> findPhotos() {
		return auditPhotoMapper.findByAuditPhotoStatusTwo();
	}

	@Override
	@Transactional
	public int delAuditPhotoByList(List<Integer> list) {
		return auditPhotoMapper.delAuditPhotoByList(list);
	}

	@Override
	@Transactional
	public int updateAuditPhotoStatusOne(AuditPhoto auditPhoto) {
		int updateStatusCount = auditPhotoMapper
				.updateAuditPhotoStatusZero(auditPhoto);
		if (updateStatusCount > 0) {
			if (auditPhoto.getAuditPhotoStatus().intValue() == 2) {// 记录是通过的
				Integer photoId = auditPhoto.getAuditPhotoPhotoId();
				int photoStatusCount = auditPhotoMapper.updatePhotoStatus(//修改作品ID为0
						photoId, Constant9.STATUS_CODE_0);
				if (photoStatusCount > 0) {
					int delAuditPhotoCount = auditPhotoMapper.delByIdAndStatus(//举报的作品id并且通过的记录删除
							auditPhoto.getAuditPhotoPhotoId(),
							2);
					if (delAuditPhotoCount > 0) {
						return Constant9.UPDATE_SUCCESS;
					} else {
						return Constant9.UPDATE_FAIL;
					}
				} else {
					return Constant9.UPDATE_FAIL;
				}
			} else {
				return Constant9.UPDATE_SUCCESS;
			}
		} else {
			return Constant9.UPDATE_FAIL;
		}
	}

	@Override
	public int updatePhotoStatus(List<Integer> photoId, Integer statusCode1) {
		return auditPhotoMapper.updatePhotoStatusByListAndStatusCode(photoId, statusCode1);
	}

}
