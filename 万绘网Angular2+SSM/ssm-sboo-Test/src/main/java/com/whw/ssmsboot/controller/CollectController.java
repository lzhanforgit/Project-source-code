package com.whw.ssmsboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.serivce.CollectService;

@Controller
@RequestMapping(value = "collect")
public class CollectController {

	@Autowired
	private CollectService collectService;

	/**
	 * 查找具体作品
	 * 
	 * @param list
	 * @return
	 */
	@RequestMapping(value = "findCollectPhoto", method = RequestMethod.POST)
	public ModelAndView findCollectPhoto(@RequestAttribute("list") List<Integer> list) {
		
		if (!list.isEmpty()) {
			try {

				return new ModelAndView(new MappingJackson2JsonView())
						.addObject("photoList", collectService.findCollectPhoto(list))
						.addObject("resultCode", Constant.STATUS_CODE_1);

			} catch (Exception e) {

				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

			}
		} else {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

	/**
	 * 查找收藏作品的id
	 * 
	 * @param collectUserId
	 * @return
	 */
	@RequestMapping(value = "findCollect", method = RequestMethod.POST)
	public ModelAndView findCollect(Integer collectUserId) {

		try {

			return new ModelAndView(new MappingJackson2JsonView())
					.addObject("photoListId", collectService.findCollect(collectUserId).size())
					.addObject("resultCode", Constant.STATUS_CODE_1);

		} catch (Exception e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}

	}

//	/**
//	 * 查找收藏的具体作品
//	 * 
//	 * @param mm
//	 * @param id
//	 * @return
//	 */
//	@RequestMapping(value = "findPhoto", method = RequestMethod.POST)
//	public String findPhoto(Model mm, Integer id) {
//		
//			mm.addAttribute("list", collectService.findCollect(id));
//			return "forward:/collect/findCollectPhoto.do";
//			
//	}
	/**
	 * 查找收藏的具体作品
	 * 
	 * @param mm
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "findPhoto", method = RequestMethod.POST)
	public ModelAndView findPhoto(Integer id) {
		
//			mm.addAttribute("list", collectService.findCollect(id));
//			return "forward:/collect/findCollectPhoto.do";
			return this.findCollectPhoto(collectService.findCollect(id));
			
	}
	/**
	 * 删除收藏的作品
	 * 
	 * @param collectUserId
	 * @param collectPhotoId
	 * @return
	 */
	@RequestMapping(value = "delectCollect", method = RequestMethod.POST)
	public ModelAndView delectCollect(Integer collectUserId, Integer collectPhotoId) {
		try {

			if (0 != collectService.delectCollect(collectUserId, collectPhotoId)) {

				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_1);

			} else {

				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

			}
		} catch (Exception e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}

	}
	
	

/**
	 * 添加收藏
	 * @param photoId
	 * @param userId
	 * @return
	 */
	@RequestMapping(value = "addCollection", method = RequestMethod.POST)
	public ModelAndView findPhoto(Integer photoId,Integer userId) {
		
			try{
				if(collectService.addCollection(photoId, userId)!=0) {
					return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_1);

				}else {
					System.out.println(collectService.addCollection(photoId, userId));
					return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

				}
			}catch(Exception e) {
				System.out.println(e.getMessage());
				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

			}
			
	}
}
