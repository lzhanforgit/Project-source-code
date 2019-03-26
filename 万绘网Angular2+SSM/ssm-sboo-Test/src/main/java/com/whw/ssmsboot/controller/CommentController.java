package com.whw.ssmsboot.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.constant.Constant7;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.serivce.CommentService;

@Controller
@RequestMapping(value="comment")
public class CommentController {

	@Autowired
	private CommentService commentService;
	
	/**
	 * 1.发表评论(目标用户为空一级评论而二级评论要添加(sumId=id)一级评论的id)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="addComment1")
	@ResponseBody
	public Map<String, Object> addComment1(Comment comment,Integer commentId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		//修改当前时间
		Date date = new Date(System.currentTimeMillis());
		comment.setCommentTime(date);
		int n=0;
		//增加一级评论
		if (null==comment.getCommentAimsUserId()) {
			n=commentService.addComment1(comment);
			commentId=comment.getCommentId();
			n=commentService.updateSumidCommentById(commentId);
		}else{
			System.out.println("发表评论");
			n=commentService.addComment2(comment);
		}
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_727);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_728);
		}
		
		return map;
	}
	
	/**
	 * 2.显示该作品所有评论(size就是数量)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findAllComment")
	@ResponseBody
	public Map<String, Object> findAllComment(Integer commentPhotoId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		List<Comment> listComment=commentService.findAllComment(commentPhotoId);

		for(int i=0;i<listComment.size();i++) {
			System.out.println(listComment.get(i).getCommentTime());
			 SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
	          
		     String formatDate = df.format(listComment.get(i).getCommentTime());  
		     listComment.get(i).setCommentTime2(formatDate);
		     System.out.println(formatDate);
		}
		if (null!=listComment) {
			map.put("result1", listComment.size());
			map.put("result2",listComment);
			
			map.put("resultCode", Constant7.STATUS_CODE_729);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_730);
			map.put("description", "查看评论失败");
		}
		
		return map;
	}
	
	/**
	 * 3.删除评论：首先判断有没有删除权限
	 * 然后根据评论id:如果选择的是一级评论的id
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="deleteComment")
	@ResponseBody
	public Map<String, Object> deleteComment(Integer commentId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=commentService.deleteComment(commentId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_731);
		}else{
			map.put("resultCode",Constant7.STATUS_CODE_732);
		}
		
		return map;
	}
	
	/**
	 * 4.删除评论：首先判断有没有删除权限
	 * 然后根据评论id:如果选择的是一级评论的id那么删除所有一级评论
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="deleteCommentAll")
	@ResponseBody
	public Map<String, Object> deleteCommentAll(Integer commentSumId,Integer commentPhotoId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=commentService.deleteCommentAll(commentSumId, commentPhotoId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_731);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_732);
		}
		
		return map;
	}
	
}

