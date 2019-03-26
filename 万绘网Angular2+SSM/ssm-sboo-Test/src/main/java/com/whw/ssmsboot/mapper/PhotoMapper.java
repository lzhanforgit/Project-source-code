
package com.whw.ssmsboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.whw.ssmsboot.pojo.Photo;
import com.whw.ssmsboot.pojo.Style;
import com.whw.ssmsboot.pojo.User;

/**
 * 发布作品接口：
 * 实现功能：1.发布作品、2.修改作品、3.删除作品、4.按时间显示所有用户的作品(分页)、5.查询该作品的点赞数量
 * 6.根据作品id去查询到这个作者：获取到作者的头像昵称、7.根据用户找到他的关注数量、8.粉丝数量、9.关注作者取消关注
 * 10.根据作者id查看他的所有作品、12.通过类型id找到类型内容、13.通过风格id找到风格内容、14.点赞取消赞
 * @author 张景爱
 */
public interface PhotoMapper {
	
	/**
	 * 1.增加作品(登录状态)
	 * @param photo
	 * @return
	 */
	int addPhoto(Photo photo);
	
	/**
	 * 2.修改作品(登录状态)
	 * @param photo
	 * @return
	 */
	int updatePhoto(Photo photo);
	
	/**
	 * 3.删除作品(默认显示修改后不能显示,即删除)
	 * @param photoId
	 * @return
	 */
	int deletePhoto(@Param("photoId") Integer photoId);
	
	/**
	 * 4.按时间查询所有作品排序(特殊分页)
	 * @return
	 */
	List<Photo> findAllByTime();
	
	/**
	 * 5.查询该作品的点赞数量
	 * @param commentPhotoId
	 * @return
	 */
	int findLikeNum(Integer commentPhotoId);
	
	/**
	 * 6.根据作品id去查询到这个作者：获取到作者的头像、昵称
	 * @param photoId
	 * @return
	 */
	User findByPhotoId(@Param("photoId") Integer photoId);
	
	/**
	 * 7.关注作者
	 * @param userId
	 * @return
	 */
	int addRelationship(@Param("photoUserId") Integer photoUserId,@Param("userId") Integer userId);
	
	/**
	 * 8.取消关注
	 * @param userId
	 * @return
	 */
	int deleteRelationship(Integer relationshipId);
	
	/**
	 * 9.查询是否存在关注(存在前台显示已关注,返回关注ID)
	 * @param userId
	 * @return
	 */
	Object findRelationship(@Param("photoUserId") Integer photoUserId,@Param("userId") Integer userId);
	
	/**
	 * 10.根据作者id查看他的所有作品
	 * @param user
	 * @return
	 */
	List<Photo> findAllByUserId(Integer photoUserId);
	
	/**
	 * 11.通过类型id找到类型内容
	 * @param typeId
	 * @return
	 */
	String findTypeById(Integer typeId);
	
	/**
	 * 12.通过风格id找到风格内容
	 * @param styleId
	 * @return
	 */
	Style findStyleById(Integer likePhotoId);
	
	/**
	 * 13.点赞
	 * @param styleId
	 * @return
	 */
	int  addLikePhoto(@Param("likePhotoId")Integer likePhotoId,@Param("likeUserId")Integer likeUserId);

	/**
	 * 14.取消赞
	 * @param styleId
	 * @return
	 */
	int  deleteLikePhoto(Integer likeId);
	
	/**
	 * 15.查看是否点赞
	 * @param styleId
	 * @return
	 */
	Object  findLikePhoto(@Param("likePhotoId")Integer likePhotoId,@Param("likeUserId")Integer likeUserId);

	/**
	 * 16.根据作品id查看该作品详情
	 * @param user
	 * @return
	 */
	List<Photo> findPhotoById(@Param("photoId")Integer photoId);
	/**
	 * 17.根据作者id找到该作者
	 * @param user
	 * @return
	 */
	User findUserById(@Param("userId")Integer userId);
	
	/**
	 * 18.根据作者id找到该作者昵称
	 * @param user
	 * @return
	 */
	String findUserNameById(@Param("userId")Integer userId);
}

