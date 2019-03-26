package com.whw.ssmsboot.serivce;

import java.util.List;

import com.whw.ssmsboot.pojo.City;


public interface CityService {

	List<City> findCityById(Integer cityId);

}
