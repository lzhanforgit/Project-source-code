package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.Comment;

public interface CommentService {
	
	/**
	 * 发表评论(目标用户为空一级评论而二级评论要添加(sumId=id)一级评论的id)
	 * @param comment
	 * @return
	 */
	int addComment1(Comment comment);
	/**
	 * 发表评论(目标用户为空一级评论而二级评论要添加(sumId=id)一级评论的id)
	 * @param comment
	 * @return
	 */
	int addComment2(Comment comment);

	
	/**
	 * 根据主键修改sumid，值为主键
	 * @param commentPhotoId
	 * @return
	 */
	int updateSumidCommentById(Integer commentId);
	
	/**
	 * 显示该作品所有评论(size就是数量)
	 * @param commentPhotoId
	 * @return
	 */
	List<Comment> findAllComment(Integer commentPhotoId);
	
	/**
	 * 删除评论：首先判断有没有删除权限
	 * 然后根据评论id:如果选择的是一级评论的id
	 * @param commentId
	 * @return
	 */
	int deleteComment(Integer commentId);
	
	/**
	 * 删除评论：首先判断有没有删除权限
	 * 然后根据评论id:如果选择的是一级评论的id那么删除所有一级评论
	 * @param commentId
	 * @return
	 */
	int deleteCommentAll(Integer commentSumId,Integer commentPhotoId);

}
