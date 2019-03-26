/*
Navicat MySQL Data Transfer

Source Server         : MySQLServer
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysun

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-13 16:36:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `list_id` int(11) NOT NULL AUTO_INCREMENT,
  `list_pic` varchar(200) DEFAULT NULL,
  `list_name` varchar(45) DEFAULT NULL,
  `list_user` varchar(45) DEFAULT NULL,
  `user_openid` varchar(45) DEFAULT NULL,
  `list_sum` varchar(45) DEFAULT NULL,
  `list_self` varchar(45) DEFAULT NULL,
  `list_country` varchar(45) DEFAULT NULL,
  `list_public` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) DEFAULT NULL,
  `project_user` varchar(100) DEFAULT NULL,
  `project_type` varchar(100) DEFAULT NULL,
  `project_provinceNmae` varchar(100) DEFAULT NULL,
  `project_cityName` varchar(100) DEFAULT NULL,
  `project_require` varchar(400) DEFAULT NULL,
  `project_public` varchar(100) DEFAULT NULL,
  `self_capacity` varchar(100) DEFAULT NULL,
  `self_area` varchar(100) DEFAULT NULL,
  `self_electricity` varchar(100) DEFAULT NULL,
  `self_elec_distance` varchar(100) DEFAULT NULL,
  `self_discount` varchar(100) DEFAULT NULL,
  `sum_capacity` varchar(100) DEFAULT NULL,
  `sum_area` varchar(100) DEFAULT NULL,
  `sum_distance` varchar(100) DEFAULT NULL,
  `sum_rent` varchar(100) DEFAULT NULL,
  `project_pic1` varchar(100) DEFAULT NULL,
  `project_pic2` varchar(100) DEFAULT NULL,
  `project_pic3` varchar(100) DEFAULT NULL,
  `country_number` varchar(100) DEFAULT NULL,
  `country_capacity` varchar(100) DEFAULT NULL,
  `project_phone` varchar(100) DEFAULT NULL,
  `project_time` varchar(100) DEFAULT NULL,
  `self_shuini` varchar(100) DEFAULT NULL,
  `self_zhuankuai` varchar(100) DEFAULT NULL,
  `self_qita` varchar(100) DEFAULT NULL,
  `sum_shuini` varchar(100) DEFAULT NULL,
  `sum_zhuankuai` varchar(100) DEFAULT NULL,
  `user_openid` varchar(100) DEFAULT NULL,
  `sum_qita` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for project_list
-- ----------------------------
DROP TABLE IF EXISTS `project_list`;
CREATE TABLE `project_list` (
  `list_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `project_remark` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_openid` varchar(45) DEFAULT NULL,
  `user_nickname` varchar(45) DEFAULT NULL,
  `user_headpic` varchar(200) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `user_list` varchar(45) DEFAULT NULL,
  `user_phone` varchar(45) DEFAULT NULL,
  `user_provinceName` varchar(45) DEFAULT NULL,
  `user_cityName` varchar(45) DEFAULT NULL,
  `user_company` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
