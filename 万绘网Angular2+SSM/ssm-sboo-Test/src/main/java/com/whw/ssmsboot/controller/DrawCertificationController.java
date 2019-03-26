package com.whw.ssmsboot.controller;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.pojo.DrawCertification;
import com.whw.ssmsboot.serivce.DrawCertificationService;

@Controller
@RequestMapping("drawCert")
public class DrawCertificationController {
	@Autowired
	private DrawCertificationService drawCertificationService;

	/**
	 * 添加认证信息
	 * 
	 * @param MultipartFile
	 *            文件上传
	 * @param DrawCertification
	 *            认证记录
	 * */
	@RequestMapping(value = "addDrawCertificationInfo", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> addDrawCertificationInfo(MultipartFile photo,
			DrawCertification drawCertification) {
		Map<String, Object> map = new HashMap<String, Object>();
		String fileName = photo.getOriginalFilename();
		String destFile = UUID.randomUUID() + fileName;
		try {
			photo.transferTo(new File(destFile));
			drawCertification.setCertPhoto(destFile);
			drawCertification.setCertTime(new Date(System.currentTimeMillis()));
			drawCertification.setCertStatus(Constant9.STATUS_CODE_0);
			int count = drawCertificationService
					.addDrawCertificationInfo(drawCertification);
			if (count == Constant9.EXIST_DRAW) {
				map.put("result_code", Constant9.EXIST_DRAW);// 此用户已经是绘师
				File file = new File(Constant9.SOURCE_PATH + destFile);
				if (file.exists()) {
					file.delete();
				}
			} else if (count == Constant9.EXIST_CERT) {// 此用户已提交过认证记录
				map.put("result_code", Constant9.EXIST_CERT);
				File file = new File(Constant9.SOURCE_PATH + destFile);
				if (file.exists()) {
					file.delete();
				}
			} else if (count > 0) {
				map.put("result_code", Constant9.ADD_SUCCESS);// 添加认证记录成功
			} else {
				map.put("result_code", Constant9.ADD_FAIL);// 添加认证记录失败
				File file = new File(Constant9.SOURCE_PATH + destFile);
				if (file.exists()) {
					file.delete();
				}
			}
		} catch (IllegalStateException | IOException e) {
			map.put("result_code", Constant9.UPLOAD_FAIL);// 文件上传失败
			File file = new File(Constant9.SOURCE_PATH + destFile);
			if (file.exists()) {
				file.delete();
			}
		}
		return map;
	}

	/**
	 * 分页显示指定状态码的认证信息 0:未处理 ,1:未通过,2:通过
	 * 
	 * @param pageNum
	 *            从第几条记录开始
	 * @param pageSize
	 *            每页显示多少条记录
	 * @param certStatus
	 *            认证记录的状态码
	 * 
	 * */
	@RequestMapping(value = "showDrawCertificationInfo", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> showDrawCertificationInfo(int pageNum,
			int pageSize, Integer certStatus) {
		Map<String, Object> map = new HashMap<String, Object>();
		PageHelper.startPage(pageNum, pageSize);
		List<DrawCertification> drawCertificationList = drawCertificationService
				.findByCertStatus(certStatus);
		Page<DrawCertification> page = (Page<DrawCertification>) drawCertificationList;
		if (null != page && !page.isEmpty()) {
			map.put("page", page);
			map.put("pageNum", pageNum);
			map.put("pageSize", pageSize);
			map.put("result_code", Constant9.SELECT_SUCCESS);// 认证信息查询成功
		} else {
			map.put("result_code", Constant9.SELECT_FAIL);// 认证信息查询失败
		}
		return map;
	}

	/**
	 * 修改认证记录状态 1通过 2 未通过
	 * 
	 * @param DrawCertification
	 * 
	 * */
	@RequestMapping(value = "updateDrawCertStatus", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> updateDrawCertStatus(
			DrawCertification drawCertification) {
		Map<String, Object> map = new HashMap<String, Object>();
		int count = 0;
		if (drawCertification.getCertStatus() == 1) {// 未通过
			count = drawCertificationService.updateDrawCertStatus(
					drawCertification.getCertId(),
					drawCertification.getCertStatus());
		} else if (drawCertification.getCertStatus() == 2) {// 通过
			count = drawCertificationService
					.updateDrawCertStatus(drawCertification);
		}
		if (count > 0) {
			map.put("result_code", Constant9.UPDATE_SUCCESS);// 更新成功
		} else {
			map.put("result_code", Constant9.UPDATE_FAIL);// 更新失败
		}
		return map;
	}

	/**
	 * 刪除指定ID的认证记录 不包括未处理
	 * */
	@RequestMapping(value = "delDrawCertStatus", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> delDrawCertStatus(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		String[] drawCertIdArr = request.getParameterValues("drawCertId");
		List<Integer> list = new ArrayList<Integer>();
		for (int z = 0; z < drawCertIdArr.length; z++) {
			list.add(Integer.valueOf(drawCertIdArr[z]));
		}
		int count = drawCertificationService.delByIdList(list);
		if (count > 0) {
			map.put("result_code", Constant9.DEL_SUCCESS);// 删除成功
		} else {
			map.put("result_code", Constant9.DEL_FAIL);// 删除失败
		}
		return map;
	}

}
