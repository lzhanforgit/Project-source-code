package com.whw.ssmsboot.serivce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whw.ssmsboot.mapper.AddressMapper;
import com.whw.ssmsboot.mapper.DeliveryMapper;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Delivery;
import com.whw.ssmsboot.serivce.DeliveryService;

@Service
public class DeliveryServiceImpl implements DeliveryService{

    @Autowired
    private DeliveryMapper deliveryMapper;
    
    @Autowired
    private AddressMapper addressMapper;
    
    @Transactional
    @Override
    public int deleteDelivery(Integer addressId) {
        return deliveryMapper.deleteDelivery(addressId);
    }

    @Override
    public int addDeliveryAddress(Address address) {
        return deliveryMapper.addDeliveryAddress(address);
    }

    @Transactional
    @Override
    public int addDelivery(Delivery delivery, Address address) {
    	if(delivery.getDeliveryDefault() == 0){
    		int i = findDeliveryDefault(delivery.getDeliveryUserId());
    		updateDeliveryDefault(1,i);
    	}
    	if(address != null){
            addDeliveryAddress(address);
            delivery.setDeliveryAddressId(address.getAddressId());
    	}
        return deliveryMapper.addDelivery(delivery, address);
    }

    @Override
    public Delivery findOneDelivery(Integer deliveryId) {
        return deliveryMapper.findOneDelivery(deliveryId);
    }

    @Override
    public List<Delivery> findDelivery(Integer deliveryUserId) {
        return deliveryMapper.findDelivery(deliveryUserId);
    }

    @Transactional
    @Override
    public int updateDelivery(Delivery delivery, Address address) {
    	if(delivery.getDeliveryDefault() == 0){
    		int i = findDeliveryDefault(delivery.getDeliveryUserId());
    		updateDeliveryDefault(1,i);
    	}
    	if(!(address.getAddressCity() == null && address.getAddressCounty() == null && address.getAddressDetailed() == null
    			&& address.getAddressProvince() == null && address.getAddressStreet() == null)){
    		address.setAddressId(deliveryMapper.findOneDelivery(delivery.getDeliveryId()).getDeliveryAddressId());
            addressMapper.updateAddress(address);
    	}
        return deliveryMapper.updateDelivery(delivery, address);
    }

	@Override
	public int updateDeliveryDefault(Integer DeliveryDefault,Integer deliveryId) {
		return deliveryMapper.updateDeliveryDefault(DeliveryDefault,deliveryId);
	}

	@Override
	public Integer findDeliveryDefault(Integer deliveryUserId) {
		return deliveryMapper.findDeliveryDefault(deliveryUserId);
	}
}
