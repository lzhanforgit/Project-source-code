package com.whw.ssmsboot.serivce;

import com.whw.ssmsboot.pojo.Address;

public interface AddressService {

	int insertAddress(Address address);

	int delAddressInfo(Integer addressId);

	Address findAddressById(Integer addressId);

}
