package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.CommentMapper;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.serivce.CommentService;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentMapper commentMapper;

	@Override
	public int addComment2(Comment comment) {
		return commentMapper.addComment2(comment);
	}
	@Override
	public int addComment1(Comment comment) {
		return commentMapper.addComment1(comment);
	}

	@Override
	public List<Comment> findAllComment(Integer commentPhotoId) {
		return commentMapper.findAllComment(commentPhotoId);
	}

	@Override
	public int deleteComment(Integer commentId) {
		return commentMapper.deleteComment(commentId);
	}

	@Override
	public int deleteCommentAll(Integer commentSumId, Integer commentPhotoId) {
		return commentMapper.deleteCommentAll(commentSumId, commentPhotoId);
	}

	@Override
	public int updateSumidCommentById(Integer commentId) {
		return commentMapper.updateSumidCommentById(commentId);
	}
	
	
}
