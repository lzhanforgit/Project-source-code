package com.whw.ssmsboot.interceptor;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.LoginRegistService;
import com.whw.ssmsboot.serivce.LoginStatusRecordService;

public class UserInterceptor implements HandlerInterceptor {
	@Autowired
	private LoginRegistService loginRegistService;
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
			HttpServletResponse response, Object arg2) throws Exception {
		HttpSession session = request.getSession();
		Cookie[] cookie = request.getCookies();
		String userNikeName = null;
		Object obj = session.getAttribute("user");
		if (null == obj) {
			if (null != cookie) {
				for (Cookie cook : cookie) {
					if (cook.getName().equals("userNikeName")) {//
						userNikeName = cook.getValue();
					}
				}
				if (null != userNikeName && !userNikeName.equals("")) {
					User user = loginRegistService.findByNikeNameOrPhone(userNikeName, null);
					if (user == null) {
						response.sendRedirect("/WanHuiWang/jsp/user/userlogin.jsp");
						return false;
					} else {
						user.setUserPassword(null);
						session.setAttribute("user", user);
					}
				} else {
					response.sendRedirect("/WanHuiWang/jsp/user/userlogin.jsp");
					return false;
				}
			} else {
				response.sendRedirect("/WanHuiWang/jsp/user/userlogin.jsp");
				return false;
			}
		}else{
			User findUser = loginRegistService.findBySessionId(session.getId());
			if(findUser == null){
				response.sendRedirect("/WanHuiWang/jsp/user/userlogin.jsp");
				return false;
			}
		}
		return true;
	}
}
