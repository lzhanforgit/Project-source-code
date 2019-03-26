package com.whw.ssmsboot.serivce.impl;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.whw.ssmsboot.constant.Constant9;
import com.whw.ssmsboot.mapper.AddressMapper;
import com.whw.ssmsboot.mapper.LoginRegistMapper;
import com.whw.ssmsboot.mapper.LoginStatusRecordMapper;
import com.whw.ssmsboot.mapper.UserMapper;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.LoginStatusRecord;
import com.whw.ssmsboot.pojo.SexEnum;
import com.whw.ssmsboot.pojo.User;
import com.whw.ssmsboot.serivce.LoginRegistService;
import com.whw.ssmsboot.util.MD5Utils;

@Service
public class LoginRegistServiceImpl implements LoginRegistService {
	@Autowired
	private LoginRegistMapper loginRegistMapper;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private AddressMapper addressMapper;
	@Autowired
	private LoginStatusRecordMapper loginStatusRecordMapper;

	@Override
	@Transactional
	public User loginCheck(User user) {
		return loginRegistMapper.loginCheck(user);
	}

	@Override
	@Transactional
	public User exsit(String userPhone) {
		return userMapper.finaUser(userPhone);
	}

	@Override
	@Transactional
	public int addUserInfo(User user) {
		return loginRegistMapper.insertUserInfo(user);
	}

	@Override
	@Transactional
	public User findByNikeNameOrPhone(String userNikeName, String userPhone) {
		return loginRegistMapper.findByNikeNameOrPhone(userNikeName, userPhone);
	}

	@Override
	@Transactional
	public User findBySessionId(String userSessionId) {
		LoginStatusRecord loginStatusRecord = loginStatusRecordMapper.findBySessionId(userSessionId);
		return loginRegistMapper.findUserById(loginStatusRecord.getLoginStatusRecordUserId());
	}

	@Override
	@Transactional
	public int updateUserInfo(MultipartFile photo, User user, Address address,
			Integer sex, HttpSession session, HttpServletResponse response) {
		int addressCount = addressMapper.updateAddress(address);
		String oldAvatar = user.getUserAvatar();
		if (addressCount > 0) {
			String fileName = photo.getOriginalFilename();
			String destFile = UUID.randomUUID() + fileName;
			File file = new File(Constant9.SOURCE_PATH + destFile);
			try {
				photo.transferTo(new File(destFile));
				user.setUserAvatar(fileName);
				if (null != sex) {
						user.setUserSex(sex);
				}
				if (null != user.getUserPassword()
						&& !user.getUserPassword().equals("")) {
					user.setUserPassword(MD5Utils.md5(user.getUserPassword()));
					session.removeAttribute("user");
					Cookie cookie = new Cookie("userNikeName", "");
					cookie.setPath("/");
					cookie.setMaxAge(0);
					response.addCookie(cookie);
				}
				int userCount = loginRegistMapper.updateUserInfo(user);
				if (userCount > 0) {
					return userCount;
				} else {
					if (file.exists()) {
						file.delete();
						user.setUserAvatar(oldAvatar);
						loginRegistMapper.updateUserInfo(user);
					}
				}
			} catch (IllegalStateException | IOException e) {
				if (file.exists()) {
					file.delete();
					user.setUserAvatar(oldAvatar);
					loginRegistMapper.updateUserInfo(user);
				}
			}
		}
		if (null == user.getUserPassword() || user.getUserPassword().equals("")) {
			User updateUser = loginRegistMapper.findUserById(user.getUserId());
			updateUser.setUserPassword(null);
			session.setAttribute("user", updateUser);
		}
		return 0;
	}

}
