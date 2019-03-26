package com.whw.ssmsboot.controller;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.whw.ssmsboot.constant.Constant7;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.pojo.Style;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.PhotoService;

@Controller
@RequestMapping("photo")
public class PhotoController {
	
	@Autowired
	private PhotoService photoService;
	
	/**
	 * 1.增加作品(登录状态)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="submitPhoto")
	@ResponseBody
	public Map<String, Object> submitPhoto(MultipartFile[] files,Photo photo) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		String photoUrl=null;
	/*		try {
				for (MultipartFile multi : files) {
					String destFile=UUID.randomUUID()+multi.getOriginalFilename();
					File file=new File(destFile);
					multi.transferTo(file);
					
					if (photoUrl!=null) {
						photoUrl=photoUrl+","+destFile;
					}else {
						photoUrl=destFile;
					}
				}
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}*/
			photoUrl="半面妆.jpg,天空之境.jpg,车辆.jpg";
			if (null!=photoUrl) {
				Date date = new Date(System.currentTimeMillis());
				photo.setPhotoUploadTime(date);
				photo.setPhotoUrl(photoUrl);
				int n=photoService.addPhoto(photo);
				System.out.println(photo.getPhotoId());
				photo.setPhotoId2(photo.getPhotoId());
				System.out.println(photo.getPhotoId2());
				if (n>0) {
					map.put("result",photo.getPhotoId2());
					map.put("resultCode", Constant7.STATUS_CODE_701);
					System.out.println(map);
				}
			}else{
				map.put("resultCode", Constant7.STATUS_CODE_702);
			}
		
		return map;
	}
	
	/**
	 * 2.修改作品(登录状态)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="updatePhoto")
	@ResponseBody
	public Map<String, Object> updatePhoto(MultipartFile[] files,Photo photo) {
		Map<String, Object> map = new HashMap<String,Object>();
		
		String photoUrl=null;
		try {
			for (MultipartFile multi : files) {
				String destFile=UUID.randomUUID()+multi.getOriginalFilename();
				File file=new File(destFile);
				multi.transferTo(file);
				
				if (photoUrl!=null) {
					photoUrl=photoUrl+","+destFile;
				}else {
					photoUrl=destFile;
				}
			}
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		
		if (null!=photoUrl) {
			photo.setPhotoUrl(photoUrl);
			int n=photoService.updatePhoto(photo);
			
			if (n>0) {
				map.put("resultCode", Constant7.STATUS_CODE_703);
			}
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_704);
		}
		
		return map;
	}
	
	/**
	 * 3.删除作品(默认显示修改后不能显示,即删除)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="deletePhoto")
	@ResponseBody
	public Map<String, Object> deletePhoto(Integer photoId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.deletePhoto(photoId);
		if (n>0) {
			map.put("resultCode",Constant7.STATUS_CODE_705);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_706);
		}
		
		return map;
	}
	
	/**
	 * 4.按时间查询所有作品排序(特殊分页)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findAllByTime")
	@ResponseBody
	public Map<String, Object> findAllByTime() {
		
		Map<String, Object> map = new HashMap<String,Object>();
		
		List<Photo> listPhoto1=photoService.findAllByTime();
		
		if (null!=listPhoto1) {
			map.put("result",listPhoto1);
			map.put("resultCode", Constant7.STATUS_CODE_707);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_708);
		}
		
		return map;
	}
	
	/**
	 * 5.根据作品id去查询到这个作者：获取到作者的头像、昵称
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findByPhotoId")
	@ResponseBody
	public Map<String, Object> findByPhotoId(Integer photoId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		User user=photoService.findByPhotoId(photoId);
		
		if (null!=user) {
			map.put("result", user);
			map.put("resultCode", Constant7.STATUS_CODE_733);
		}else{
			map.put("resultCode",Constant7.STATUS_CODE_734);
		}
		
		return map;
	}
	
	/**
	 * 6.关注作者
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="addRelationship")
	@ResponseBody
	public Map<String, Object> addRelationship(Integer photoUserId,Integer userId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.addRelationship(photoUserId, userId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_709);
		}else {
			map.put("resultCode", Constant7.STATUS_CODE_710);
		}
		
		return map;
	}
	
	/**
	 *  7.取消关注
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="deleteRelationship")
	@ResponseBody
	public Map<String, Object> deleteRelationship(Integer relationshipId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.deleteRelationship(relationshipId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_711);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_712);
		}
		
		return map;
	}
	
	/**
	 * 8.查询是否存在关注(存在前台显示已关注,返回关注ID)
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findRelationship")
	@ResponseBody
	public Map<String, Object> findRelationship(Integer photoUserId,Integer userId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		Long n=photoService.findRelationship(photoUserId, userId);
		
		if (null!=n) {
			map.put("result", n);
			map.put("resultCode", Constant7.STATUS_CODE_713);
		}else{
			map.put("result", 0);
			map.put("resultCode", Constant7.STATUS_CODE_714);
		}
		
		return map;
	}
	
	/**
	 * 9.根据作者id查看他的所有作品(考虑没有作品状态)
	 * @param photo
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping(value="findAllByUserId")
	@ResponseBody
	public Map<String, Object> findAllByUserId(Integer photoUserId) throws ParseException {
		Map<String, Object> map = new HashMap<String,Object>();
		List<Photo> listPhoto=photoService.findAllByUserId(photoUserId);

		
		if (null!=listPhoto && listPhoto.size()>0) {
//			对作品时间进行转换
			for(int i=0;i<listPhoto.size();i++) {
				
		        System.out.println(listPhoto.get(i).getPhotoUploadTime()+"=============3");
		        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		          
		        String formatDate = df.format(listPhoto.get(i).getPhotoUploadTime());  
		        listPhoto.get(i).setPhotoUploadTime2(formatDate);
		        System.out.println(formatDate);  
			}
			
			
			
			map.put("result", listPhoto);
			map.put("resultCode", Constant7.STATUS_CODE_725);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_726);
		}
		
		return map;
	}
	
	
	/**
	 * 10.通过类型id找到类型内容
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findTypeById")
	@ResponseBody
	public Map<String, Object> findTypeById(Integer photoTypeId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		String type=photoService.findTypeById(photoTypeId);
		
		if (null!=type) {
			map.put("result", type);
			map.put("resultCode", Constant7.STATUS_CODE_715);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_716);
		}
		
		return map;
	}
	
	/**
	 * 11.通过风格id找到风格内容
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findStyleById")
	@ResponseBody
	public Map<String, Object> findStyleById(Integer photoStyleId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		Style style=photoService.findStyleById(photoStyleId);
		
		if (null!=style) {
			map.put("result", style);
			map.put("resultCode", Constant7.STATUS_CODE_717);
		}else{
			map.put("resultCode", Constant7.STATUS_CODE_718);
		}
		
		return map;
	}
	
	
	/**
	 * 12.点赞
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="addLikePhoto")
	@ResponseBody
	public Map<String, Object> addLikePhoto(Integer likePhotoId,Integer likeUserId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.addLikePhoto(likePhotoId, likeUserId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_719);
		}else {
			map.put("resultCode", Constant7.STATUS_CODE_720);
		}
		
		return map;
	}
	
	/**
	 * 14.取消赞
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="deleteLikePhoto")
	@ResponseBody
	public Map<String, Object> deleteLikePhoto(Integer likeId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.deleteLikePhoto(likeId);
		
		if (n>0) {
			map.put("resultCode", Constant7.STATUS_CODE_721);
		}else {
			map.put("resultCode", Constant7.STATUS_CODE_722);
		}
		
		return map;
	}
	
	/**
	 * 15.查看是否点赞
	 * @param photo
	 * @return
	 */
	@RequestMapping(value="findLikePhoto")
	@ResponseBody
	public Map<String, Object> findLikePhoto(Integer likePhotoId,Integer likeUserId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		int n=photoService.findLikePhoto(likePhotoId, likeUserId);
		
		if (n>0) {
			map.put("result", n);
			map.put("resultCode", Constant7.STATUS_CODE_723);
		}else{
			map.put("result", 0);
			map.put("resultCode", Constant7.STATUS_CODE_724);
		}
		
		return map;
	}
	
	/**
	 * 16.根据作品id查找到该作品的详情
	 * 
	 */
	@RequestMapping(value="findPhotoById")
	@ResponseBody
	public Map<String, Object> findPhotoById(Integer photoId) {
		
		Map<String, Object> map = new HashMap<String,Object>();
		List<Photo> photo=photoService.findPhotoById(photoId);
		if (null!=photo && photo.size()>0) {
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
		    String formatDate = df.format(photo.get(0).getPhotoUploadTime());  
		    photo.get(0).setPhotoUploadTime2(formatDate);
			map.put("result", photo);
			map.put("resultCode", Constant7.STATUS_CODE_723);
		}else{
			map.put("result", 0);
			map.put("resultCode", Constant7.STATUS_CODE_724);
		}
		
		return map;
	}
	/**
	 * 16.根据类型查找一系列作品
	 * 
	 */
	
	public Map<String,Object> findPhotoByStyleId(String photoTypeId){
		Map<String, Object> map = new HashMap<String,Object>();
		return map;
	}
	
}
