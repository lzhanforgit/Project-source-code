package com.whw.ssmsboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.constant.Constant6;
import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Delivery;
import com.whw.ssmsboot.serivce.DeliveryService;

@Controller
@RequestMapping("delivery")
public class DeliveryController {

	@Autowired
	private DeliveryService deliveryService;
	
	@RequestMapping(value="delectDelivery")
	@ResponseBody
	public Map<String,Object> delectDelivery(Integer DeliveryAddressId) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		int count = deliveryService.deleteDelivery(DeliveryAddressId);
		if(count > 0){
			map.put("resultCode", Constant6.STATUS_CODE_644);
		}else {
			map.put("resultCode", Constant6.STATUS_CODE_645);
		}
		return map;
	}
	
	@RequestMapping(value="addDelivery")
	@ResponseBody
	public Map<String,Object> addDelivery(Delivery delivery, Address address) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		int count = deliveryService.addDelivery(delivery, address);
		if(count > 0){
			map.put("resultCode", Constant6.STATUS_CODE_640);
		}else {
			map.put("resultCode", Constant6.STATUS_CODE_641);
		}
		return map;
	}

	@RequestMapping(value="findOneDelivery")
	@ResponseBody
	public Map<String,Object> findOneDelivery(Integer deliveryId){
		Map<String, Object> map = new HashMap<String,Object>();
		Delivery delivery = deliveryService.findOneDelivery(deliveryId);
		if(null != delivery){
			map.put("resultCode", Constant6.STATUS_CODE_699);
			map.put("result", delivery);
		}else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}
	
	@RequestMapping(value="findDelivery")
	@ResponseBody
	public Map<String,Object> findDelivery(Integer deliveryUserId){
		Map<String, Object> map = new HashMap<String,Object>();
		List<Delivery> list = deliveryService.findDelivery(deliveryUserId);
		if(list.size() > 0){
			map.put("resultCode", Constant6.STATUS_CODE_699);
			map.put("result", list);
		}else {
			map.put("resultCode", Constant6.STATUS_CODE_698);
		}
		return map;
	}
	
	@RequestMapping(value="updateDelivery")
	@ResponseBody
	public Map<String,Object> updateDelivery(Delivery delivery, Address address){
		Map<String,Object> map = new HashMap<String,Object>();
		int count = deliveryService.updateDelivery(delivery, address);
		if(count > 0){
			map.put("resultCode", Constant6.STATUS_CODE_642);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_643);
		}
		return map;
	}
	
	@RequestMapping(value="updateDeliveryDefault")
	@ResponseBody
	public Map<String,Object> updateDeliveryDefault(Integer deliveryDefault,Integer deliveryId){
		Map<String,Object> map = new HashMap<String,Object>();
		int count = deliveryService.updateDeliveryDefault(deliveryDefault,deliveryId);
		if(count > 0){
			map.put("resultCode", Constant6.STATUS_CODE_646);
		} else {
			map.put("resultCode", Constant6.STATUS_CODE_647);
		}
		return map;
	}
}
