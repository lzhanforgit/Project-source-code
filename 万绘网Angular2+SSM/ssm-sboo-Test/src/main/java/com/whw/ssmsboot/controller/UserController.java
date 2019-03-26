package com.whw.ssmsboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Comment;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.UserService;
import com.whw.ssmsboot.util.MD5Utils;

@Controller
@RequestMapping(value = "user")
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * 查询用户表中所有的信息
	 * 
	 * @param userPhone
	 *            用户手机号
	 * @return
	 */
	@RequestMapping(value = "finaUser", method = RequestMethod.POST)
	public ModelAndView finaUser(String userPhone) {

		try {
			// User user =
			return new ModelAndView(new MappingJackson2JsonView()).addObject(userService.finaUser(userPhone))
					.addObject("resultCode", Constant.STATUS_CODE_1);
		} catch (Exception e) {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}
	
	
	@RequestMapping(value = "finaUserById", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> findUserById(String taskPostUserId) {
		System.out.println(taskPostUserId+"========findByUserId");
		Integer userId = Integer.parseInt(taskPostUserId);
		Map<String, Object> map = new HashMap<String, Object>();
		User user = userService.finaUserById(userId);
		if(user!=null||user.equals("")) {
			map.put("resultCode", Constant.STATUS_CODE_1);
			map.put("resurt", user);
		}else {
			map.put("resultCode", Constant.STATUS_CODE_2);
		}
		
		return map;

	}

	/**
	 * 查询用户的地址
	 * 
	 * @param userAddressId
	 *            用户的地址id
	 * @return
	 */
	@RequestMapping(value = "findAddress", method = RequestMethod.POST)
	public ModelAndView findAddress(Integer userAddressId) {

		try {
			Address address = userService.findAddress(userAddressId);
			return new ModelAndView(new MappingJackson2JsonView()).addObject(address).addObject("resultCode",
					Constant.STATUS_CODE_1);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

	/**
	 * 查询用户的评论
	 * 
	 * @param id
	 *            用户的id
	 * @return
	 */
	@RequestMapping(value = "findComment", method = RequestMethod.POST)
	public ModelAndView findComment(@RequestParam("id") Integer id) {

		try {
			List<Comment> commentList = userService.findComment(id);
			return new ModelAndView(new MappingJackson2JsonView()).addObject(commentList).addObject("resultCode",
					Constant.STATUS_CODE_1);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

	/***
	 * 修改
	 * 
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "updataUser", method = RequestMethod.POST)
	public ModelAndView updataUser(User user) {
		if(user.getUserPassword()!=null&&user.getUserPassword()!="") {
			user.setUserPassword(MD5Utils.md5(user.getUserPassword()));
		}
		System.out.println(user.getUserNikeName());
		try {
			if (0 == userService.updataUser(user)) {
				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);

			} else {
				System.out.println(userService.updataUser(user));

				return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_1);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

	
	/**
	 * 修改地址
	 * @param address
	 * @return
	 */
	@RequestMapping(value = "updateAddress", method = RequestMethod.POST)
	public ModelAndView updateAddress(Address address) {
		try {
			if(userService.updateAddress(address) != 0) {
				System.out.println("this is controller " + address.getAddressCounty());
				return new ModelAndView(new MappingJackson2JsonView()).addObject(userService.updateAddress(address))
						.addObject("resultCode", Constant.STATUS_CODE_1);
			}else {
				
				return new ModelAndView(new MappingJackson2JsonView()).addObject("Message","Not Found")
						.addObject("resultCode", Constant.STATUS_CODE_2);
			}
		
		} catch (Exception e) {
			return new ModelAndView(new MappingJackson2JsonView()).addObject("resultCode", Constant.STATUS_CODE_2);
		}
	}
	
}
