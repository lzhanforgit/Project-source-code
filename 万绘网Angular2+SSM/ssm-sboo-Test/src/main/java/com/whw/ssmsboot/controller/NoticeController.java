package com.whw.ssmsboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.serivce.NoticeService;

@Controller
@RequestMapping(value = "notice")
public class NoticeController {
	
	@Autowired
	private NoticeService noticeService;
	
	/**
	 * 查询未度的消息
	 * @param commentUserId
	 * @return
	 */
	@RequestMapping(value = "findNotice", method = RequestMethod.POST)
	public ModelAndView findNotice(Integer commentUserId) {
		
		try {
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject("Unread",noticeService.findNotice(commentUserId))
					.addObject("resultCode", Constant.STATUS_CODE_1);
			
		}catch (Exception e) {
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
			
		}
		
	}
	
	/**
	 * 修改为已读状态
	 * @param commentUserId
	 * @return
	 */
	@RequestMapping(value = "updateNotice", method = RequestMethod.POST)
	public ModelAndView updateNotice(Integer commentUserId) {
		
		try {
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject("Read",noticeService.updateNotice(commentUserId))
					.addObject("resultCode", Constant.STATUS_CODE_1);
			
		}catch (Exception e) {
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
			
		}
		
	}
	
}
