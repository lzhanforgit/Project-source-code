package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.City;

public interface CityMapper {
    /**
     * 按照parantId查询city信息
     * */
	List<City> findCityById(@Param("cityId") Integer cityId);

}
