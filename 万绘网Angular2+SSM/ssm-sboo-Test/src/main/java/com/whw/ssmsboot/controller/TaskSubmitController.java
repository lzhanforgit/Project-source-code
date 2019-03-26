package com.whw.ssmsboot.controller;

import java.io.File;
import java.io.IOException;
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
import com.whw.ssmsboot.pojo.TaskSubmit;
import com.whw.ssmsboot.serivce.TaskSubmitService;

@Controller
@RequestMapping("taskSubmit")
public class TaskSubmitController {

	@Autowired
	private TaskSubmitService taskSubmitService;
	
	/**
	 * 根据参数的不同查询不同的结果
	 * @param taskSubmitUserId
	 * @param taskSubmitTaskOrderNumber
	 * @return
	 */
	@RequestMapping(value="findTaskSubmit")
	@ResponseBody
	public Map<String, Object> findTaskSubmitToOrderNumberOrUserId(Integer taskSubmitUserId,
			String taskSubmitTaskOrderNumber){
		Map<String, Object> map = new HashMap<String, Object>();
		List<TaskSubmit> taskSubmit = taskSubmitService.findTaskSubmitToOrderNumberOrUserId(taskSubmitTaskOrderNumber, taskSubmitUserId);
		if(0 == taskSubmit.size()){
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}else {
			map.put("result", taskSubmit);
			map.put("resurtCode", Constant6.STATUS_CODE_699);
		}
		return map;
	}
	
	@RequestMapping(value="deleteTaskSubmit")
	@ResponseBody
	public Map<String, Object> deleteByUserAndOrderNumber(Integer taskSubmitUserId,
			String taskSubmitTaskOrderNumber){
		Map<String, Object> map = new HashMap<String, Object>();
		
		int count = taskSubmitService.deleteByUserAndOrderNumber(taskSubmitUserId, taskSubmitTaskOrderNumber);
		if(count > 0){
			map.put("resurtCode", Constant6.STATUS_CODE_650);
		}
		else {
			map.put("resurtCode", Constant6.STATUS_CODE_651);
		}
		return map;
	}
	
	@RequestMapping(value="updateTaskSubmit")
	@ResponseBody
	public Map<String, Object> updateTaskSubmit(MultipartFile[] photo,TaskSubmit taskSubmit){
		Map<String, Object> map = new HashMap<String, Object>();
		if(photo.length > 0){
			String photoUrl = null;
			try {
				for(MultipartFile mf:photo) {
					String destFile = UUID.randomUUID() + mf.getOriginalFilename();
					File file = new File(destFile);	
					mf.transferTo(file);
					if(photoUrl != null){
						photoUrl = destFile+"," + photoUrl;
					}else {
						photoUrl = destFile;
					}
				}
				taskSubmit.setTaskSubmitUrl(photoUrl.toString());
				map.put("description", "上传成功");
			} catch (IllegalStateException | IOException e) {
				map.put("description", "上传失败");
			}
		}
		int count = taskSubmitService.updateTaskSubmit(taskSubmit);
		if(count  > 0){
			map.put("resurtCode", Constant6.STATUS_CODE_652);
			map.put("description", "更新成功");
		}
		else {
			map.put("resurtCode", Constant6.STATUS_CODE_653);
			map.put("description", "更新失败");
		}
		return map;
	}
}
