package com.whw.ssmsboot.serivce.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.AddressMapper;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.serivce.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressMapper addressMapper;

	@Override
	@Transactional
	public int insertAddress(Address address) {
		return addressMapper.addAddress(address);
	}

	@Override
	@Transactional
	public int delAddressInfo(Integer addressId) {
		return addressMapper.delAddressInfo(addressId);
	}

	@Override
	@Transactional
	public Address findAddressById(Integer addressId) {
		return addressMapper.findById(addressId);
	}

}
