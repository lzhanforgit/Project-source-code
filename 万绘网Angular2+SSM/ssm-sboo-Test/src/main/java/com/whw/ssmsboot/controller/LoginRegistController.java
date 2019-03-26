package com.whw.ssmsboot.controller;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.City;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.AddressService;
import com.whw.ssmsboot.serivce.CityService;
import com.whw.ssmsboot.serivce.LoginRegistService;
import com.whw.ssmsboot.util.MD5Utils;

@Controller
@RequestMapping("lrc")
public class LoginRegistController {
	@Autowired
	private LoginRegistService loginRegistService;
	@Autowired
	private AddressService addressService;
	@Autowired
	private CityService cityService;

	/**
	 * 用戶登录
	 */
	@RequestMapping(value = "userLogin", method = RequestMethod.POST)
	public ModelAndView userLogin(@Valid User user, Errors errors, String valiCode, HttpSession session,
			HttpServletResponse response, Integer keepDayNum) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("user", "");
		List<FieldError> fe = errors.getFieldErrors();
		if (fe.isEmpty()) {
			System.out.println(user);
			user.setUserPassword(MD5Utils.md5(user.getUserPassword()));
			System.out.println(user.getUserPassword());
			User user1 = loginRegistService.loginCheck(user);
			System.out.println(user1);
			if (null != user1) {
				mv.addObject("resultCode", Constant9.LOGIN_SUCCESS);
				user1.setUserPassword(null);
				mv.addObject("user", user1);
			} else {
				mv.addObject("result_code", Constant9.LOGIN_FAIL);
			}
		} else {
			mv.addObject("result_code", Constant9.FIELD_VAILD_FAIL);
		}
		mv.setView(new MappingJackson2JsonView());
		return mv;
	}

	/**
	 * 验证码生成
	 */
	@RequestMapping(value = "validateCode", method = RequestMethod.GET)
	public ModelAndView vailCode(HttpSession session) {
		ModelAndView mv = new ModelAndView();
		int radomValue = (int) (Math.random() * 555555 + 111111);
		mv.addObject("result", radomValue + "");
		// session.setAttribute("code", radomValue + "");
		mv.setView(new MappingJackson2JsonView());
		return mv;
	}

	/**
	 * 用户注册
	 */
	@RequestMapping(value = "register", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> register(String userNikeName,String userPassword,String userPhone) {
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println(userNikeName+userPassword+userPhone);
		User user = new User();
		user.setUserPassword(MD5Utils.md5(userPassword));
		User user1 = loginRegistService.findByNikeNameOrPhone(userNikeName, userPhone);
		user.setUserNikeName(userNikeName);
		user.setUserPhone(userPhone);
		if (null == user1) {
			user.setUserSex(0);
			user.setUserStatus(Constant9.STATUS_CODE_0);
			user.setUserPainter(Constant9.STATUS_CODE_0);
			user.setUserRegistTime(new Date(System.currentTimeMillis()));
			user.setUserAvatar("avg1.svg");
			int userCount = loginRegistService.addUserInfo(user);
			if (userCount > 0) {
				map.put("result_code", Constant9.REGIST_SUCCESS);
			} else {
				map.put("result_code", Constant9.REGIST_FAIL);
			}
		} else {
			// 用户已存在
			map.put("result_code", Constant9.EXIST_YES);
		}
		return map;
	}

	/**
	 * 异步验证手机号是否已经存在
	 */
	@RequestMapping(value = "exsit", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> exsit(String userPhone) {
		Map<String, Object> map = new HashMap<String, Object>();
		User user = loginRegistService.exsit(userPhone);
		if (null != user) {
			map.put("result_code", Constant9.EXIST_YES);
		} else {
			map.put("result_code", Constant9.EXIST_NO);
		}
		return map;
	}

	/**
	 * 异步加载市区
	 */
	@RequestMapping(value = "showCity", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> showCity(Integer cityId) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (null != cityId && cityId.intValue() != 0) {
			List<City> cityList = cityService.findCityById(cityId);
			if (null != cityList && !cityList.isEmpty()) {
				map.put("result_code", Constant9.SELECT_SUCCESS);
				map.put("result", cityList);
			} else {
				map.put("result_code", Constant9.SELECT_FAIL);
			}
		} else {
			map.put("result_code", Constant9.PARAM_ERROR);
		}
		return map;
	}

	/**
	 * 显示用户的地址
	 */
	@RequestMapping(value = "showUserInfo", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> showUserInfo(HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		User user = null;
		if (null != session.getAttribute("user")) {
			user = (User) session.getAttribute("user");
		}
		Address address = null;
		if (null != user) {
			address = addressService.findAddressById(user.getUserAddressId());
		}
		if (null != address) {
			map.put("result_code", Constant9.SELECT_SUCCESS);
			map.put("result", address);
		} else {
			map.put("result_code", Constant9.SELECT_FAIL);
		}
		return map;
	}

	/**
	 * 修改用户的信息
	 */
	@RequestMapping(value = "updateUserInfo", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> updateUserInfo(MultipartFile photo, User user, Address address, Integer sex,
			HttpSession session, HttpServletResponse response) {
		Map<String, Object> map = new HashMap<String, Object>();
		int count = loginRegistService.updateUserInfo(photo, user, address, sex, session, response);
		if (count > 0) {
			map.put("result_code", Constant9.UPDATE_SUCCESS);
		} else {
			map.put("result_code", Constant9.UPDATE_FAIL);
		}
		return map;
	}
}
