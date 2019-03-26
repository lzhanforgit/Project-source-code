package com.whw.ssmsboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.serivce.PhotoFindService;

@Controller
@RequestMapping(value = "photofind")
public class PhotoFindController {

	@Autowired
	private PhotoFindService photoFindService;

	/**
	 * 删除作品
	 * 
	 * @param photoUserId
	 * @return
	 */
	@RequestMapping(value = "deletePhoto", method = RequestMethod.POST)
	public ModelAndView deletePhoto(Integer photoUserId,Integer photoId) {

		try {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("updateNum",photoFindService.deletePhoto(photoUserId, photoId))
					.addObject("resultCode", Constant.STATUS_CODE_1);
		}catch (Exception e) {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

	@RequestMapping(value = "findPhoto", method = RequestMethod.POST)
	public ModelAndView findPhoto(Integer photoUserId) {
		
		try {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("upPhoto",photoFindService.findPhoto(photoUserId))
					.addObject("resultCode", Constant.STATUS_CODE_1);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}
	}

}
