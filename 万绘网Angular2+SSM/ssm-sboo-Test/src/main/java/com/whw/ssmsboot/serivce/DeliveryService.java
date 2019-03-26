package com.whw.ssmsboot.serivce;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Address;
import com.whw.ssmsboot.pojo.Delivery;


public interface DeliveryService {

	/**
	 * 删除收货信息
	 * 
	 * @param deliveryId
	 * @return
	 */
	int deleteDelivery(Integer addressId);
	
	/**
	 * 添加地址信息获取到他的主键
	 * 
	 * @param address
	 * @return
	 */
	int addDeliveryAddress(Address address);
	/**
	 * 添加收货信息
	 * 
	 * @param delivery
	 * @return
	 */
	int addDelivery(Delivery delivery,Address address);
	
	/**
	 * 通过deliveryid指定要用的收货地址
	 * 
	 * @param deliveryId
	 * @return
	 */
	Delivery findOneDelivery(Integer deliveryId);
	
	/**
	 * 通过用户id查询出用户所有的收货地址
	 * 
	 * @param userId
	 * @return
	 */
	List<Delivery> findDelivery(Integer userId);
	
	/**
	 * 修改收货地址信息
	 * 
	 * @param delivery
	 * @return
	 */
	int updateDelivery(@Param("delivery") Delivery delivery,@Param("address") Address address);

	/**
	 * 修改默认收货地址
	 * @param DeliveryDefault
	 * @return
	 */
	int updateDeliveryDefault(Integer DeliveryDefault,Integer deliveryId);

	/**
	 * 根据用户id查询用户默认收货地址 返回收货地址id
	 * @param deliveryUserId
	 * @return
	 */
	Integer findDeliveryDefault(Integer deliveryUserId);
	
}
