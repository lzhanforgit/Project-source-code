package com.whw.ssmsboot.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.pojo.AuditPhoto;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.AuditPhotoService;

@Controller
@RequestMapping("aduitPhoto")
public class AuditPhotoController {
	@Autowired
	private AuditPhotoService auditPhotoService;

	/**
	 * @param AuditPhoto
	 *            :显示作品举报信息 auditPhoto appeal = 0 & status = 0 未处理 | appeal = 0
	 *            & status = 1 未通過 | appeal = 0 & status = 2 通過
	 * @param AuditPhoto
	 *            :显示作品申诉信息 auditPhoto appeal = 1 & status = 0 未处理 | appeal = 1
	 *            & status = 1 未通過 | appeal = 1 & status = 2 通過
	 * 
	 * @param pageNum
	 *            从第几条数据开始
	 * @param pageSize
	 *            每次显示多少条数据
	 * */
	@RequestMapping(value="showAuditPhotoInfo")
	@ResponseBody
	public Map<String, Object> showAuditPhotoInfo(int pageNum, int pageSize,
			AuditPhoto auditPhoto) {
		Map<String, Object> map = new HashMap<String, Object>();
		PageHelper.startPage(pageNum, pageSize);
		List<AuditPhoto> auditPhotoList = auditPhotoService
				.findByAll(auditPhoto);
		Page<AuditPhoto> page = (Page<AuditPhoto>) auditPhotoList;
		if (null != page && !page.isEmpty()) {
			map.put("result_code", Constant9.SELECT_SUCCESS);//查询成功
			map.put("page", page);
			map.put("pageNum", pageNum);
			map.put("pageSize", pageSize);
		} else {
			map.put("result_code", Constant9.SELECT_FAIL);//没有记录可显示
		}
		return map;
	}

	/**
	 * @param AuditPhoto
	 *            :添加作品举报信息 auditPhoto appeal = 0 & status = 0 未处理 & 其他属性
	 * @param AuditPhoto
	 *            :添加作品申诉信息 auditPhoto appeal = 1 & status = 0 未处理 & 其他属性
	 * */
	@RequestMapping(value="addAuditPhotoInfo",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> addAuditPhotoInfo(AuditPhoto auditPhoto) {
		Map<String, Object> map = new HashMap<String, Object>();
		auditPhoto.setAuditPhotoTime(new Date(System.currentTimeMillis()));
		auditPhoto.setAuditPhotoStatus(Constant9.STATUS_CODE_0);
		int auditPhotoCount = auditPhotoService.addAuditPhotoInfo(auditPhoto);
		if (auditPhotoCount > 0) {
			map.put("result_code", Constant9.ADD_SUCCESS);//添加记录成功
		} else {
			map.put("result_code", Constant9.ADD_FAIL);//添加记录失败
		}
		return map;
	}

	/**
	 * 修改指定id的那条记录的auditPhotoStatus 当appeal = 1时直接修改作品状态 为0正常
	 * 并且删除所有状态为通过的和属于投诉的记录当appeal = 0时则不执行上一条操作
	 * 
	 * @param auditPhoto
	 *            auditPhotoStatus
	 * */
	@RequestMapping(value="updateAuditPhotoStatus",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> updateAuditPhotoStatus(AuditPhoto auditPhoto) {
		System.out.println(auditPhoto);
		Map<String, Object> map = new HashMap<String, Object>();
		int updateStatusCount = 0;
		if (auditPhoto.getAuditPhotoAppeal().intValue() == 0) {// 0表示举报记录
			updateStatusCount = auditPhotoService
					.updateAuditPhotoStatusZero(auditPhoto);
			if (updateStatusCount > 0) {
				map.put("result_code", Constant9.UPDATE_SUCCESS);//状态更新成功
			} else {
				map.put("result_code", Constant9.UPDATE_FAIL);//状态更新失败
			}
		} else if (auditPhoto.getAuditPhotoAppeal().intValue() == 1) {// 1表示申诉记录
			updateStatusCount = auditPhotoService
					.updateAuditPhotoStatusOne(auditPhoto);
			if (updateStatusCount == Constant9.UPDATE_SUCCESS) {
				map.put("result_code", Constant9.UPDATE_SUCCESS);//状态更新成功
			} else if (updateStatusCount == Constant9.UPDATE_FAIL) {
				map.put("result_code", Constant9.UPDATE_FAIL);//状态更新失败
			}
		}
		return map;
	}

	/**
	 * 显示待拉黑的作品信息
	 * */
	@RequestMapping(value="showPendingBlackPhoto",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> showPendingBlackPhoto(int pageNum, int pageSize) {
		Map<String, Object> map = new HashMap<String, Object>();
		PageHelper.startPage(pageNum, pageSize);
		List<Photo> photoList = auditPhotoService.findPhotos();
		Page<Photo> page = (Page<Photo>) photoList;
		if (page != null && !page.isEmpty()) {
			map.put("result_code", Constant9.SELECT_SUCCESS);//查询成功
			map.put("result", page);
		} else {
			map.put("result_code", Constant9.SELECT_FAIL);//查询失败
		}
		return map;
	}

	/**
	 * 拉黑作品
	 * 
	 * @param request
	 *            获取拉黑作品id数组
	 * @param 转换为集合
	 *            遍历修改数据库中作品的状态为1 拉黑
	 * */
	@RequestMapping(value="pullBlackPhoto",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> pullBlackPhoto(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		String[] photoIdStr = request.getParameterValues("photoId");
		List<Integer> list = new ArrayList<Integer>();
		for (int z = 0; z < photoIdStr.length; z++) {
			list.add(Integer.valueOf(photoIdStr[z]));
		}
		int pullBlackPhotoCount = auditPhotoService.updatePhotoStatus(list,
				Constant9.STATUS_CODE_1);
		if (pullBlackPhotoCount > 0) {
			map.put("result_code", Constant9.UPDATE_SUCCESS);//修改状态成功
		} else {
			map.put("result_code", Constant9.UPDATE_FAIL);//修改状态失败
		}
		return map;
	}

	/**
	 * 按照id删除指定举报或者申诉的记录
	 * 
	 * @param request获取auditPhotoId
	 *            ,删除
	 * */
	@RequestMapping(value="delAuditPhotoInfo",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> delAuditPhotoInfo(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		String[] photoIdStr = request.getParameterValues("auditPhotoId");
		List<Integer> list = new ArrayList<Integer>();
		for (int z = 0; z < photoIdStr.length; z++) {
			list.add(Integer.valueOf(photoIdStr[z]));
		}
		int count = auditPhotoService.delAuditPhotoByList(list);
		if (count > 0) {
			map.put("result_code", Constant9.DEL_SUCCESS);//删除成功
		} else {
			map.put("result_code", Constant9.DEL_FAIL);//删除失败
		}
		return map;
	}
}
