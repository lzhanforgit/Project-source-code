package com.whw.ssmsboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.serivce.RankService;

@Controller
@RequestMapping(value = "rank")
public class RankController {

	@Autowired
	private RankService rankService;
	
	@RequestMapping(value = "findPhotoRankDate", method = RequestMethod.POST)
	public ModelAndView findPhotoRankDate(String date) {

		SimpleDateFormat simp ;
		List<Photo> list = null;

		try {
			simp = new SimpleDateFormat("yyyy/MM/dd");
			simp.setLenient(false);
			list = rankService.findPhotoRankDate(simp.parse(date));
			Collections.sort(list, new Comparator<Photo>() {

				@Override
				public int compare(Photo o1, Photo o2) {
					Photo photo1 = o1;
					Photo photo2 = o2;
					if (photo1.getLikePhoto() > photo2.getLikePhoto()) {
						return 1;
					} else if (photo1.getLikePhoto() == photo2.getLikePhoto()) {
						return 0;
					} else {
						return -1;
					}
				}
			

			});
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject(list)
					.addObject("resultCode", Constant.STATUS_CODE_1);
		} catch (ParseException e) {

			return new ModelAndView(new MappingJackson2JsonView()).addObject(list)
					.addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}
	
	
	@RequestMapping(value = "findPhotoRankMonth", method = RequestMethod.POST)
	public ModelAndView findPhotoRankMonth(String date) {
		System.out.println(date);
		date="2017/12/10";
		SimpleDateFormat simp = null;
		List<Photo> list = null;

		try {
			simp = new SimpleDateFormat("yyyy/MM/dd");
			simp.setLenient(false);
			list = rankService.findPhotoRankMonth(simp.parse(date));
			Collections.sort(list, new Comparator<Photo>() {

				@Override
				public int compare(Photo o1, Photo o2) {
					Photo photo1 = o1;
					Photo photo2 = o2;
					if (photo1.getLikePhoto() > photo2.getLikePhoto()) {
						return 1;
					} else if (photo1.getLikePhoto() == photo2.getLikePhoto()) {
						return 0;
					} else {
						return -1;
					}
				}
				

			});
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject(list)
					.addObject("resultCode", Constant.STATUS_CODE_1);
		} catch (ParseException e) {

			return new ModelAndView(new MappingJackson2JsonView())
					.addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}
	
	
	@RequestMapping(value = "findPhotoRankWeek", method = RequestMethod.POST)
	public ModelAndView findPhotoRankWeek(String date) {

//		date="2017/12/10";
		SimpleDateFormat simp = null;
		List<Photo> list = null;

		try {
			simp = new SimpleDateFormat("yyyy/MM/dd");
			simp.setLenient(false);
			list = rankService.findPhotoRankWeek(simp.parse(date));
			Collections.sort(list, new Comparator<Photo>() {

				@Override
				public int compare(Photo o1, Photo o2) {
					Photo photo1 = o1;
					Photo photo2 = o2;
					if (photo1.getLikePhoto() > photo2.getLikePhoto()) {
						return 1;
					} else if (photo1.getLikePhoto() == photo2.getLikePhoto()) {
						return 0;
					} else {
						return -1;
					}
				}
				

			});
			
			return new ModelAndView(new MappingJackson2JsonView()).addObject(list)
					.addObject("resultCode", Constant.STATUS_CODE_1);
		} catch (ParseException e) {

			return new ModelAndView(new MappingJackson2JsonView())
					.addObject("resultCode", Constant.STATUS_CODE_2);
		}

	}

}
