package com.whw.ssmsboot.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.serivce.TypeService;

@Controller
@RequestMapping("type")
public class TypeController {
	
	@Autowired
	private TypeService typeService;
	
	@RequestMapping("findType")
	@ResponseBody
	public Map<String, Object> findType(){
		Map<String, Object> map = new HashMap<String, Object>();
		String type = typeService.findType();
		map.put("restut", type);
		System.out.println(type);
		return map;
	}
}
