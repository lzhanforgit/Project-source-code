package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.AuditPhoto;
import com.whw.ssmsboot.pojo.Photo;

public interface AuditPhotoService {

	List<AuditPhoto> findByAll(AuditPhoto auditPhoto);

	int addAuditPhotoInfo(AuditPhoto auditPhoto);

	int updateAuditPhotoStatusZero(AuditPhoto auditPhoto);

	int updatePhotoStatus(List<Integer> photoId, Integer statusCode1);

	List<Photo> findPhotos();

	int delAuditPhotoByList(List<Integer> list);

	int updateAuditPhotoStatusOne(AuditPhoto auditPhoto);


}
