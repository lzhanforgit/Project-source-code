package com.whw.ssmsboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.serivce.RelationshipService;

@Controller
@RequestMapping(value = "relationship")
public class RelationshipController {

	@Autowired
	private RelationshipService relationshipService;

	/**
	 * 返回粉丝id的list数量
	 * 
	 * @param relationshipUserId
	 * @return
	 */
	@RequestMapping(value = "findRelationshipFansUserId", method = RequestMethod.POST)
	public ModelAndView findRelationshipFansUserId(@RequestParam("relationshipUserId") Integer relationshipUserId) {

		try {

			return new ModelAndView(new MappingJackson2JsonView())
					.addObject("fanNum",relationshipService.findRelationshipFansUserId(relationshipUserId).size())
					.addObject("resultCode", Constant.STATUS_CODE_1);

		} catch (Exception e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}

	}

	/**
	 * 返回具体的粉丝
	 * 
	 * @param relationshipUserId
	 * @return
	 */
	@RequestMapping(value = "findRelationshipFans", method = RequestMethod.POST)
	public ModelAndView findRelationshipFans(Model mm, Integer relationshipUserId) {

//		mm.addAttribute("userId", relationshipService.findRelationshipFansUserId(relationshipUserId));
//		return "forward:/relationship/finaUserById.do";
		return this.finaUserById(relationshipService.findRelationshipFansUserId(relationshipUserId));
	}

	/**
	 * 返回关注用户id的list数量
	 * 
	 * @param relationshipUserId
	 * @return
	 */

	@RequestMapping(value = "findRelationshipUserId", method = RequestMethod.POST)
	public ModelAndView findRelationshipUserId(@RequestParam("relationshipUserId") Integer relationshipUserId) {

		try {

			return new ModelAndView(new MappingJackson2JsonView())
					.addObject("follow",relationshipService.findRelationshipUserId(relationshipUserId).size())
					.addObject("resultCode", Constant.STATUS_CODE_1);

		} catch (Exception e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}

	}

	
	/**
	 * 返回具体的关注人
	 * 
	 * @param relationshipUserId
	 * @return
	 */

	@RequestMapping(value = "findRelationshipfollow", method = RequestMethod.POST)
	public ModelAndView findRelationshipfollow(Model mm, Integer relationshipUserId) {


		return this.finaUserById(relationshipService.findRelationshipUserId(relationshipUserId));

	}
	
	/**
	 * 根据用户id查询用户
	 * 
	 * @param userId
	 * @return
	 */
	@RequestMapping(value = "finaUserById", method = RequestMethod.POST)
	public ModelAndView finaUserById(@RequestAttribute("userId") List<Integer> userId) {
		
		if (!userId.isEmpty()) {
			try {
				return new ModelAndView(new MappingJackson2JsonView()).addObject(relationshipService.finaUserById(userId))
						.addObject("resultCode", Constant.STATUS_CODE_1);

			} catch (Exception e) {
				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
			}
		} else {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

		}
		
	}

}
