package com.whw.ssmsboot.controller;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.constant.Constant6;
import com.whw.ssmsboot.pojo.TaskGet;
import com.whw.ssmsboot.serivce.TaskGetService;

@Controller
@RequestMapping("taskGet")
public class TaskGetController {

	@Autowired
	private TaskGetService taskGetService;

	
	/**
	 * 接受任务
	 * 
	 * @param user_id
	 * @return
	 */
	@RequestMapping("acceptTask")
	@ResponseBody
	public Map<String, Object> acceptTask(String taskOrderNumber,
			String taskUserId) {
		Map<String, Object> map = new HashMap<String, Object>();
		TaskGet taskGet = new TaskGet();
		System.out.println("1"+taskGet.toString());
		taskGet.setTaskGetTaskOrderNumber(taskOrderNumber);
		taskGet.setTaskGetTaskUserId(Integer.parseInt(taskUserId));
		System.out.println("2"+taskGet.toString());
		if (taskGetService.selectOne(taskGet) == null) {
			Date date = new Date(System.currentTimeMillis());
			taskGet.setTaskGetTime(date);
			int count = taskGetService.acceptTask(taskGet);
			if (count > 0) {
				map.put("resultCode", Constant6.STATUS_CODE_630);// 成功
			}
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_631);// 失败
			map.put("description", "已接受过此任务");
		}

		return map;
	}
	
	/**
	 * 查询用戶是否接受过此任务
	 * 
	 * @param taskGet
	 * @return
	 */
	@RequestMapping("selectTaskGet")
	@ResponseBody
	public Map<String,Object> selectOne(String taskOrderNumber,
			String taskUserId){
		Map<String, Object> map = new HashMap<String, Object>();

		TaskGet taskGet = new TaskGet();
		taskGet.setTaskGetTaskOrderNumber(taskOrderNumber);
		taskGet.setTaskGetTaskUserId(Integer.parseInt(taskUserId));
		System.out.println("taskGet-------"+taskGet);
		TaskGet taskGet2 = taskGetService.selectOne(taskGet);
		System.out.println("taskget2-------"+taskGet2);
		if(null != taskGet2){
			map.put("resultCode", Constant6.STATUS_CODE_632);
			map.put("result", taskGet2);
			map.put("description", "已接受过此任务");
		}else {
			map.put("resultCode", Constant6.STATUS_CODE_633);
			map.put("description", "未接受过此任务");
		}
		return map;
	}
	
	/**
	 * 显示任务接受者人数
	 * 
	 * @return
	 */
	@RequestMapping("showTaskGetOrderNumber")
	@ResponseBody
	public Map<String, Object> showTaskGetOrderNumber(String taskGetTaskOrderNumber){
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println("taskGetTaskOrderNumber"+"=="+taskGetTaskOrderNumber);
		List<TaskGet> list = taskGetService.showTaskGetOrderNumber(taskGetTaskOrderNumber);
		int count = list.size();
		map.put("result", count);
		map.put("resultCode", Constant6.STATUS_CODE_699);
		return map;
	}

}
