	package com.whw.ssmsboot.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.whw.ssmsboot.pojo.Admin;
import com.whw.ssmsboot.serivce.AdminService;
import com.whw.ssmsboot.serivce.LoginStatusRecordService;

public class AdminInterceptor implements HandlerInterceptor {
	@Autowired
	private AdminService adminService;
	@Autowired
	private LoginStatusRecordService loginStatusRecordService;

	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {

	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {

	}

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object args) throws Exception {
		HttpSession session = request.getSession();
		Cookie[] cookie = request.getCookies();
		String adminName = null;
		Object obj = session.getAttribute("admin");
		if (null == obj) {
			if (null != cookie) {
				for (Cookie cook : cookie) {// 查询adminSessionId
					if (cook.getName().equals("adminName")) {//
						adminName = cook.getValue();
					}
				}
				if (null != adminName
						&& !adminName.equals("")) {
					Admin admin = adminService.findByAdminName(adminName);
					if (admin == null) {
						response.sendRedirect("/WanHuiWang/jsp/admin/adminlogin.jsp");
						return false;
					} else {
						admin.setAdminPassword(null);
						session.setAttribute("admin", admin);
					}
				} else {
					response.sendRedirect("/WanHuiWang/jsp/admin/adminlogin.jsp");
					return false;
				}
			}else {
				response.sendRedirect("/WanHuiWang/jsp/admin/adminlogin.jsp");
				return false;
			}
		}else{
			Admin findAdmin = adminService.findBySessionId(session.getId());
			if(findAdmin == null){
				response.sendRedirect("/WanHuiWang/jsp/admin/adminlogin.jsp");
				return false;
			}
		}
		return true;
	}

}
