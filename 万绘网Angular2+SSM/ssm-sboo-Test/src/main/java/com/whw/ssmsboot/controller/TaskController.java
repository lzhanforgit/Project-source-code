package com.whw.ssmsboot.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.whw.ssmsboot.constant.Constant6;
import com.whw.ssmsboot.pojo.Task;
import com.whw.ssmsboot.pojo.TaskSubmit;
import com.whw.ssmsboot.serivce.TaskService;
import com.whw.ssmsboot.serivce.TaskSubmitService;

@Controller
@RequestMapping("task")
public class TaskController {

	@Autowired
	private TaskService taskService;
	@Autowired
	private TaskSubmitService taskSubmitService;

	/**
	 * 添加任务
	 * 
	 * @param detailsPicture
	 *            详情图片
	 * @param task
	 * @return
	 */
	@RequestMapping(value = "addTask")
	@ResponseBody
	public Map<String, Object> addTask(MultipartFile[] photo, Task task) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (task.getTaskPostUserId() != null) {
			if (photo.length > 0) {
				String photoUrl = null;
				try {
					for (int i = 0; i < photo.length; i++) {
						String destFile = UUID.randomUUID() + "." + photo[i].getOriginalFilename()
								.substring(photo[i].getOriginalFilename().lastIndexOf(".") + 1);
						File file = new File(destFile);
						photo[i].transferTo(file);
						if (photoUrl != null) {
							photoUrl = destFile + "," + photoUrl;
						} else {
							photoUrl = destFile;
						}
						map.put("description", "图片上传成功");
					}
					task.setTaskPhotoUrl(photoUrl.toString());
				} catch (IllegalStateException | IOException e) {
					map.put("description", "图片上传失败");
				}
			}
			// 设置上传时间
			Date date = new Date();
			task.setTaskPostTime(date.getDay());
			task.setTaskOrderNumber(UUID.randomUUID().toString());
			int count = taskService.addTask(task);
			if (count > 0) {
				map.put("resultCode", Constant6.STATUS_CODE_601);// 成功
			}
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_602);// 失败
		}

		return map;
	}

	/**
	 * 查询是否支付
	 * 
	 * @param task
	 * @return
	 */
	@RequestMapping("taskPayStatus")
	@ResponseBody
	public Map<String, Object> taskPayStatus(String taskOrderNumber) {
		Map<String, Object> map = new HashMap<String, Object>();
		Task task = new Task();
		task.setTaskOrderNumber(taskOrderNumber);
		List<Task> list = taskService.findTask(task);
		if (list.size() > 0) {
			if (list.get(0).getTaskPayStatus() == 0) {
				map.put("resultCode", Constant6.STATUS_CODE_604);
				map.put("result", list.get(0));
			} else {
				map.put("resultCode", Constant6.STATUS_CODE_603);
			}
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}

	/**
	 * 进行支付
	 * 
	 * @param task
	 * @return
	 */
	@RequestMapping("taskPay")
	@ResponseBody
	public Map<String, Object> taskPay(String taskOrderNumber) {
		Map<String, Object> map = new HashMap<String, Object>();

		int count = taskService.TaskPay(taskOrderNumber);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_605);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_606);
		}
		return map;
	}

	/**
	 * 查询所有任务
	 * 
	 * @return
	 */
	@RequestMapping(value = "findAllTasks")
	@ResponseBody
	public Map<String, Object> findAllTasks() {
		Map<String, Object> map = new HashMap<String, Object>();

		List<Task> list = taskService.findAllTasks();
		if (list != null) {
			int thisDay = new Date().getDay();
			for (int i = 0; i < list.size(); i++) {
				list.get(i).setRemaining(list.get(i).getTaskCompleteTime() - (thisDay - list.get(i).getTaskPostTime()));
			}
			map.put("resultCode", Constant6.STATUS_CODE_699);
			map.put("result", list);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}

	/**
	 * 根据不同条件查询任务
	 * 
	 * @return
	 */
	@RequestMapping(value = "findConditionsTask")
	@ResponseBody
	public Map<String, Object> findConditionsTask(String taskTitle, String taskPhotoTypeId, String taskAmount) {
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println(taskTitle+"==="+taskPhotoTypeId+"===="+taskAmount);
		Task task = new Task();
		if(taskTitle!=null &&taskTitle!="") {
			task.setTaskTitle(taskTitle);
		}
		if(taskAmount!=null &&taskAmount!="" && taskAmount!="undefined" &&Integer.parseInt(taskAmount)<1) {
			if(Integer.parseInt(taskAmount)>=1) {
				task.setTaskAmount((Integer.parseInt(taskAmount)-1)*1000);
			}
		}
		if(taskPhotoTypeId!=null &&taskPhotoTypeId!="") {
			task.setTaskPhotoTypeId(Integer.parseInt(taskPhotoTypeId));
		}
		List<Task> list = taskService.findConditionsTask(task);
		if (list != null) {
			int thisDay = new Date().getDay();
			for (int i = 0; i < list.size(); i++) {
				list.get(i).setRemaining(list.get(i).getTaskCompleteTime() - (thisDay - list.get(i).getTaskPostTime()));
			}
			map.put("resultCode", Constant6.STATUS_CODE_699);
			map.put("result", list);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}

	/**
	 * 查询指定任务
	 * 
	 * @return
	 */
	@RequestMapping(value = "findOneTask")
	@ResponseBody
	public Map<String, Object> findOneTask(String taskOrderNumber, Integer taskPostUserId) {
		Map<String, Object> map = new HashMap<String, Object>();
		Task task = new Task();
		task.setTaskOrderNumber(taskOrderNumber);
		task.setTaskPostUserId(taskPostUserId);
		List<Task> listTask = taskService.findTask(task);
		if (listTask.size() > 0) {
			for (Task lt : listTask) {
				if (lt.getTaskStatus() == 0) {
					if (lt.getTaskOrderStatus() == 0) {
						map.put("resultCode", Constant6.STATUS_CODE_611);
						map.put("resurt", listTask);
					} else if (lt.getTaskOrderStatus() == 1) {
						map.put("resultCode", Constant6.STATUS_CODE_610);
						map.put("resurt", listTask);
					} else {
						map.put("resultCode", Constant6.STATUS_CODE_612);
					}
				} else {
					map.put("resultCode", Constant6.STATUS_CODE_613);
					map.put("resurt", listTask);
				}
			}
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}

	/**
	 * 任务发布者指定任务接受者 任务接受者从接受者表里取出
	 * 
	 * @param taskOrderNumber
	 * @param taskGetUserId
	 * @return
	 */
	@RequestMapping(value = "agreeAcceptTask")
	@ResponseBody
	public Map<String, Object> agreeAcceptTask(String taskOrderNumber, Integer taskGetUserId) {
		Map<String, Object> map = new HashMap<String, Object>();

		int count = taskService.agreeAcceptTask(taskOrderNumber, taskGetUserId);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_615);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_616);
		}
		return map;
	}

	/**
	 * 任务接受者提交完成任务内容
	 * 
	 * @param taskSubmit
	 * @return
	 */
	@RequestMapping(value = "addTaskSubmit")
	@ResponseBody
	public Map<String, Object> addTaskSubmit(MultipartFile[] photo, TaskSubmit taskSubmit) {
		Map<String, Object> map = new HashMap<String, Object>();
		String photoUrl = null;
		try {
			for (MultipartFile mf : photo) {
				String destFile = UUID.randomUUID() + mf.getOriginalFilename();
				File file = new File(destFile);
				mf.transferTo(file);
				if (photoUrl != null) {
					photoUrl = destFile + "," + photoUrl;
				} else {
					photoUrl = destFile;
				}
			}
			taskSubmit.setTaskSubmitUrl(photoUrl);
			map.put("description", "图片上传成功");
		} catch (IllegalStateException | IOException e) {
			map.put("description", "上传失败");
		}
		if (taskSubmitService.findTaskSubmitToOrderNumberOrUserId(taskSubmit.getTaskSubmitTaskOrderNumber(),
				taskSubmit.getTaskSubmitUserId()).size() > 0) {
			Date date = new Date();
			taskSubmit.setTaskSubmitTime(date);
			int count = taskSubmitService.updateTaskSubmit(taskSubmit);
			if (count > 0) {
				map.put("resultCode", Constant6.STATUS_CODE_625);
			} else {
				map.put("resultCode", Constant6.STATUS_CODE_626);
			}
			return map;
		}
		Date date = new Date();
		taskSubmit.setTaskSubmitTime(date);
		int count = taskService.addTaskSubmit(taskSubmit);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_617);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_618);
		}
		return map;
	}

	/**
	 * 查询是否提交过此任务
	 */
	@RequestMapping(value = "findSearchSubmitTask")
	@ResponseBody
	public Map<String, Object> findSearchSubmitTask(TaskSubmit taskSubmit) {
		Map<String, Object> map = new HashMap<String, Object>();

		int count = taskService.findSearchSubmitTask(taskSubmit);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_627);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_628);
		}
		return map;
	}
	
	
	/**
	 * 任务发布者确认任务完成
	 * 
	 * @param task
	 * @return
	 */
	@RequestMapping(value = "successTask")
	@ResponseBody
	public Map<String, Object> successTask(Task task) {
		Map<String, Object> map = new HashMap<String, Object>();

		int count = taskService.successTask(task);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_619);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_620);
		}
		return map;
	}

	/**
	 * 任务未完成（接受者未提交完成任务请求），退还佣金
	 * 
	 * @param taskOrderNumber
	 * @return
	 */
	@RequestMapping(value = "failureTask")
	@ResponseBody
	public Map<String, Object> failureTask(String taskOrderNumber) {
		Map<String, Object> map = new HashMap<String, Object>();
		int count = taskService.failureTask(taskOrderNumber);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_621);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_622);
		}
		return map;
	}

	/**
	 * 删除任务 将任务状态码改为负数
	 * 
	 * @param taskOrderNumber
	 * @return
	 */
	@RequestMapping(value = "deleteTask")
	@ResponseBody
	public Map<String, Object> deleteTask(String taskOrderNumber) {
		Map<String, Object> map = new HashMap<String, Object>();
		int count = taskService.deleteTask(taskOrderNumber);
		if (count > 0) {
			map.put("resultCode", Constant6.STATUS_CODE_623);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_624);
		}
		return map;
	}
}
