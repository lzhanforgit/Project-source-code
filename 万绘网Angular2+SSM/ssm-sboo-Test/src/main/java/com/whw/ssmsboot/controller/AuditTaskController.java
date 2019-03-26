package com.whw.ssmsboot.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.pojo.AuditTask;
import com.whw.ssmsboot.pojo.Task;
import com.whw.ssmsboot.serivce.AuditTaskService;

@Controller
@RequestMapping("auditTask")
public class AuditTaskController {
	@Autowired
	private AuditTaskService auditTaskService;
	
	
	/**
	 * 添加举报信息
	 * 
	 * @param AuditTask
	 * @return int 影响行数
	 * */
	@RequestMapping(value="addAuditTask")
	@ResponseBody
	public Map<String,Object> insertAuditTaskInfo(AuditTask auditTask){
		Map<String, Object> map = new HashMap<String,Object>();
		
		Date date = new Date();
		auditTask.setAuditTaskTime(date);
		int count = auditTaskService.insertAuditTaskInfo(auditTask);
		if(count > 0){
			map.put("resultCode", Constant.STATUS_CODE_1);
		}
		else {
			map.put("resultCode", Constant.STATUS_CODE_2);
		}
		return map;
	}
	
	
	/**
	 * 显示举报任务信息 按照状态码来分类显示
	 * 
	 * @param Integer 状态码 0未处理 1未通过 2通过
	 * @return List 相对应状态码的举报任务的记录
	 * */
	@RequestMapping("findAuditTask")
	@ResponseBody
	public Map<String,Object> findAuditTaskByAuditTaskStatus(Integer auditTaskStatus){
		Map<String, Object> map = new HashMap<String,Object>();
		
		List<AuditTask> auditTaskList = auditTaskService.findAuditTaskByAuditTaskStatus(auditTaskStatus);
		if(auditTaskList.size() > 0){
			map.put("resultCode", Constant.STATUS_CODE_1);
			map.put("auditTaskList", auditTaskList);
		}
		else {
			map.put("resultCode", Constant.STATUS_CODE_2);
			map.put("resurt", "未查询到结果");
		}
		return map;
	}
	
	
	/**
	 * 显示未处理记录时，可以是通过 2和未通过1，两个状态,进行修改状态操作
	 * 
	 * @param AuditTask
	 * @return Integer
	 * */
	@RequestMapping("updateAuditTask")
	@ResponseBody
	public Map<String,Object> updateAuditTaskStatusByZero(AuditTask auditTask){
		Map<String, Object> map = new HashMap<String,Object>();
		
		int count = auditTaskService.updateAuditTaskStatusByZero(auditTask);
		if(count > 0){
			map.put("resultCode", Constant.STATUS_CODE_1);
			map.put("resurt", "更新成功");
		}
		else {
			map.put("resultCode", Constant.STATUS_CODE_2);
			map.put("resurt", "更新失败");
		}
		return map;
	}
	
	/**
	 * 显示投诉成功的次数大于3次及以上的任务信息
	 * 
	 * @param AuditTask
	 * @return List
	 * */
	@RequestMapping("listAuditTask")
	@ResponseBody
	public Map<String,Object> findByTaskId(){
		Map<String, Object> map = new HashMap<String,Object>();
		
		List<Task> listTask = auditTaskService.findByTaskId();
		if(listTask.size() > 0){
			map.put("resultCode", Constant.STATUS_CODE_1);
			map.put("taskList", listTask);
		}
		else {
			map.put("resultCode", Constant.STATUS_CODE_2);
			map.put("resurt", "未查询到结果");
		}
		return map;
	}
	
	/**
	 * 删除指定的任务投诉记录
	 * 
	 * @param AuditTask
	 * @return int
	 * */
	@RequestMapping("deleteAuditTask")
	@ResponseBody
	public Map<String,Object> deleteAuditTask(Integer taskId){
		Map<String, Object> map = new HashMap<String,Object>();
		
		int count = auditTaskService.delAuditTaskByTaskId(taskId);
		if(count > 0){
			map.put("resultCode", Constant.STATUS_CODE_1);
			map.put("result","删除成功");
		}
		else {
			map.put("resultCode", Constant.STATUS_CODE_2);
			map.put("resurt", "删除失败");
		}
		return map;
	}
}
