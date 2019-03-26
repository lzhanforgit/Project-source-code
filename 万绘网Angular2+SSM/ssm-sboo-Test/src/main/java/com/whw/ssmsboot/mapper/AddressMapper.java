package com.whw.ssmsboot.mapper;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Address;

public interface AddressMapper {

	int addAddress(Address address);

	int updateAddress(Address address);

	int delAddressInfo(@Param("addressId")Integer addressId);

	Address findById(@Param("addressId")Integer addressId);
    
}
