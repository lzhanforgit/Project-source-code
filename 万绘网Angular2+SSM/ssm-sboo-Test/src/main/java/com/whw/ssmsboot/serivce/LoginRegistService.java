package com.whw.ssmsboot.serivce;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;

import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.User;

public interface LoginRegistService {

	User loginCheck(User user);

	User exsit(String userPhone);

	int addUserInfo(User user);

	User findByNikeNameOrPhone(String userNikeName, String userPhone);

	User findBySessionId(String userSessionId);

	int updateUserInfo(MultipartFile photo, User user, Address address,
			Integer sex, HttpSession session,HttpServletResponse response);

}
