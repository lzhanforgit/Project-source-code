package com.whw.ssmsboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.serivce.LikePhotoService;

@Controller
@RequestMapping(value = "likephoto")
public class LikePhotoController {

	@Autowired
	private LikePhotoService likePhotoService;

	/**
	 * 查询用户点赞作品的id
	 * 
	 * @param likeUserId
	 *            用户ID
	 * @return 包含点赞作品ID的list
	 */
	@RequestMapping(value = "findLikePhoto", method = RequestMethod.POST)
	public ModelAndView findLikePhoto(Integer likeUserId) {

		try {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("likePhotoSize",likePhotoService.findLikePhoto(likeUserId).size())
					.addObject("resultCode", Constant.STATUS_CODE_1);

		} catch (Exception e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}

	}

	/**
	 * 查找点赞的具体作品
	 * 
	 * @param mm
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "findPhoto", method = RequestMethod.POST)
	public String findPhoto(Model mm, Integer id) {

		mm.addAttribute("list", likePhotoService.findLikePhoto(id));
		//
		System.out.println(likePhotoService.findLikePhoto(id));
		return "forward:/collect/findCollectPhoto.do";

	}
	
}
