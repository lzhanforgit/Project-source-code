package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.AuditPhoto;
import com.whw.ssmsboot.pojo.Photo;

/**
 * 作品投诉接口
 * 
 * @author 杨尚君
 * */
public interface AuditPhotoMapper {
	/**
	 * 添加举报信息
	 * 
	 * @param AuditPhoto
	 * @return int 影响行数
	 * */
	Integer insertAuditPhotoInfo(AuditPhoto auditPhoto);

	/**
	 * @param AuditPhoto
	 *            先判断 举报0 还是申诉1 投诉作品的状态码 0 未处理 1 未通过 2通过
	 * @return List 包含 举报 和 申诉的
	 * */
	List<AuditPhoto> findByAuditPhotoStatus(AuditPhoto auditPhoto);

	/**
	 * @param AuditPhoto
	 *            修改指定ID的状态码 1 未通过 2通过 包含 举报 和 申诉的
	 * @return Integer 判断是否修改成功
	 * */
	Integer updateAuditPhotoStatusZero(AuditPhoto auditPhoto);

	/**
	 * @return List 包含投诉作品记录状态为 通过状态 2 并且都是通过次数大于3次及以上的 作品信息 不包括申诉
	 * */
	List<Photo> findByAuditPhotoStatusTwo();

	/**
	 * 按照申诉或者拉黑成功的作品ID 删除对应投诉作品的记录全部删除
	 * 
	 * @param Integer
	 * @return Integer 判断是否删除成功
	 * */
	Integer delAuditPhotoByPhotoId(@Param("list") List<Integer> list);

	/**
	 * 申诉成功或者拉黑用到 修改作品状态
	 * 
	 * @param auditPhotoPhotoId
	 *            作品ID ,statusCode
	 * @return Integer 判断是否成功修改
	 * */
	Integer updatePhotoStatus(@Param("photoId") Integer photoId,
			@Param("photoStatus") Integer statusCode);

	/**
	 * 删除指定作品ID 状态码
	 * 
	 * @param auditPhotoPhotoId
	 *            指定的作品ID
	 * @param statusCode2
	 *            状态码
	 * */
	int delByIdAndStatus(@Param("auditPhotoPhotoId") Integer auditPhotoPhotoId,
			@Param("statusCode") Integer statusCode);

	/**
	 * 删除指定ID的举报或者申诉记录
	 * 
	 * @param list
	 *            id集合
	 * */
	int delAuditPhotoByList(@Param("list") List<Integer> list);

	/**
	 * 拉黑指定id的作品
	 * @param photoId 作品ID的集合
	 * @param statusCode1 拉黑状态码
	 * */
	int updatePhotoStatusByListAndStatusCode(@Param("list")List<Integer> photoId, @Param("statusCode1")Integer statusCode1);
}
