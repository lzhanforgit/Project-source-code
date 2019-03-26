package com.whw.ssmsboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
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

import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.pojo.Admin;
import com.whw.ssmsboot.pojo.LoginStatusRecord;
import com.whw.ssmsboot.serivce.AdminService;
import com.whw.ssmsboot.serivce.LoginStatusRecordService;
import com.whw.ssmsboot.util.MD5Utils;

@Controller
@RequestMapping("admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
    @Autowired
    private LoginStatusRecordService loginStatusRecordService;
	/**
	 * 管理员登录
	 * */
	@RequestMapping(value = "adminLogin", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> adminLogin(@Valid Admin admin, Errors errors,
			String valiCode, HttpSession session,HttpServletResponse response,Integer keepDayNum) {
		List<FieldError> fe = errors.getFieldErrors();
		Map<String, Object> map = new HashMap<String, Object>();
//		ModelAndView mv = new ModelAndView();
		String code = (String) session.getAttribute("code");
		session.removeAttribute("code");
		if (null != code && code.equals(valiCode)) {// 验证码验证
			if (fe.isEmpty()) {// 属性验证
				admin.setAdminPassword(MD5Utils.md5(admin.getAdminPassword()));
				Admin admin1 = adminService.findAdminByAdmin(admin);
				if (null != admin1) {// 数据库验证
					map.clear();
					map.put("result_code", Constant9.LOGIN_SUCCESS);
					admin1.setAdminPassword(null);
					LoginStatusRecord loginStatusRecord = loginStatusRecordService.findByUserOrAdminId(admin1.getAdminId());
					int count = 0;
					if(null != loginStatusRecord){
						loginStatusRecord.setLoginStatusRecordSessionId(session.getId());
						loginStatusRecord.setLoginStatusRecordUserId(admin1.getAdminId());
						count = loginStatusRecordService.updateLoginStatusRecordInfo(loginStatusRecord);
					}else{
						loginStatusRecord = new LoginStatusRecord();
						loginStatusRecord.setLoginStatusRecordSessionId(session.getId());
						loginStatusRecord.setLoginStatusRecordUserId(admin1.getAdminId());
						count = loginStatusRecordService.addLoginStatusRecordInfo(loginStatusRecord);
					}
					if(count > 0){
						if(null != keepDayNum){
							Cookie cookie = new Cookie("adminName",admin1.getAdminName());
							cookie.setPath("/");
							cookie.setMaxAge(keepDayNum.intValue());
							response.addCookie(cookie);
						}
					}
				} else {// 没找到
					map.put("result_code", Constant9.EXIST_NO);
				}
			} else {// 属性验证失败
				map.put("result_code", Constant9.FIELD_VAILD_FAIL);
			}
		} else {// 验证码验证失败
			map.put("result_code", Constant9.VAILD_CODE_FAIL);
		}
		return map;
	}

	/**
	 * 生成验证码
	 * */
	@RequestMapping(value = "validateCode", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> validateCode(HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		int randomValue = (int) (Math.random() * 555555 + 111111);
		map.put("result", randomValue);
		session.setAttribute("code", randomValue + "");
		System.out.println(session.getAttribute("code")+"123222");
		return map;
	}

	/**
	 * 修改管理员密码
	 * */
	@RequestMapping(value="updateAdminPwd", method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> updateAdminPwd(String password,
			HttpSession session,HttpServletResponse response) {
		Map<String, Object> map = new HashMap<String, Object>();
		Admin admin = null;
		if(null != session.getAttribute("admin")){
			admin = (Admin) session.getAttribute("admin");
		}
		if (null != admin) {
			admin.setAdminPassword(MD5Utils.md5(password));
			int count = adminService.updateAdminPwd(admin);
			if (count > 0) {
				map.put("result_code", Constant9.UPDATE_SUCCESS);
				session.removeAttribute("admin");//密码修改成功后清除
				Cookie cookie = new Cookie("adminName","");
				cookie.setPath("/");
				cookie.setMaxAge(0);
				response.addCookie(cookie);
			} else {
				map.put("result_code", Constant9.UPDATE_FAIL);
			}
		} else {
			map.put("result_code", Constant9.LOGIN_STATUS_NO);
		}
		return map;
	}
}
