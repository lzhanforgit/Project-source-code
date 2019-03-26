package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whw.ssmsboot.mapper.CityMapper;
import com.whw.ssmsboot.pojo.City;
import com.whw.ssmsboot.serivce.CityService;
@Service
public class CityServiceImpl implements CityService{
       @Autowired
	private CityMapper cityMapper;

	@Override
	public List<City> findCityById(Integer cityId) {
		return cityMapper.findCityById(cityId);
	}
       
}
