package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.PhotoMapper;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.pojo.Style;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService{

	@Autowired
	private PhotoMapper photoMapper;

	@Override
	public int addPhoto(Photo photo) {
		return photoMapper.addPhoto(photo);
	}

	@Override
	public int updatePhoto(Photo photo) {
		return photoMapper.updatePhoto(photo);
	}

	@Override
	public int deletePhoto(Integer photoId) {
		return photoMapper.deletePhoto(photoId);
	}

	@Override
	public List<Photo> findAllByTime() {
		return photoMapper.findAllByTime();
	}

	@Override
	public int findLikeNum(Integer commentPhotoId) {
		return photoMapper.findLikeNum(commentPhotoId);
	}

	@Override
	public User findByPhotoId(Integer photoId) {
		return photoMapper.findByPhotoId(photoId);
	}

	@Override
	public int addRelationship(Integer photoUserId, Integer userId) {
		return  photoMapper.addRelationship(photoUserId, userId);
	}

	@Override
	public int deleteRelationship(Integer relationshipId) {
		return photoMapper.deleteRelationship(relationshipId);
	}

	@Override
	public Long findRelationship(Integer photoUserId, Integer userId){
		if (photoMapper.findRelationship(photoUserId, userId) instanceof  String) {
			return 0l;
		}
		
		return (Long) photoMapper.findRelationship(photoUserId, userId);
	}

	@Override
	public List<Photo> findAllByUserId(Integer photoUserId) {
		return photoMapper.findAllByUserId(photoUserId);
	}

	@Override
	public String findTypeById(Integer typeId) {
		return photoMapper.findTypeById(typeId);
	}

	@Override
	public Style findStyleById(Integer likePhotoId) {
		return photoMapper.findStyleById(likePhotoId);
	}

	@Override
	public int addLikePhoto(Integer likePhotoId, Integer likeUserId) {
		return photoMapper.addLikePhoto(likePhotoId, likeUserId);
	}

	@Override
	public int deleteLikePhoto(Integer likeId) {
		return photoMapper.deleteLikePhoto(likeId);
	}

	@Override
	public int findLikePhoto(Integer likePhotoId, Integer likeUserId) {
		if (null==photoMapper.findLikePhoto(likePhotoId, likeUserId)) {
			return 0;
		}
		return (int) photoMapper.findLikePhoto(likePhotoId, likeUserId);
	}

	@Override
	public List<Photo> findPhotoById(Integer photoId) {
		return photoMapper.findPhotoById(photoId);
	}
	
	
}
