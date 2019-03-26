/*
Navicat MySQL Data Transfer

Source Server         : mysqlServer
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : haha

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 21:52:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `artId` bigint(20) NOT NULL AUTO_INCREMENT,
  `userName` varchar(200) NOT NULL,
  `artPic` varchar(1000) NOT NULL,
  `artContent` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`artId`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '.', '.', '');
INSERT INTO `article` VALUES ('47', '赵庆', '15065172231860.17796488576228997.jpeg', '享受艺术，静心\r\n一块普通的木头，你会想让它变成什么样？一段难得亲子时光，你想怎么去好好利用并使之变得有意义让宝贝难忘？一堂亲子木艺手工课会给孩子带来怎样的成长？');
INSERT INTO `article` VALUES ('48', '陈明珠', '15065173498130.18350103595823608.png', '木艺是一项综合性较强的动手项目，所涉及到的工具、技能、力量与美学、逻辑性、协调性等非常丰富，在与孩子一起创造木艺品的整个过程都是非常的酷的哦！');
INSERT INTO `article` VALUES ('49', '迪丽热巴', '15065174863640.6789135564618227.jpeg', '木工意义在于能让人变得耐心、细心、淡定、从容。切身体会到了纯手工制作物件的价值所在，需要花费很多精力和体力专注在一件事情上。');
INSERT INTO `article` VALUES ('50', '吴亦凡', '15065176026490.41773252900466784.png', '或许一场活动不能改变一个人的生活但在忙忙碌碌的生活中依然愿你能发现自己的心其实是可以慢下来的，发现认真地去享受做一件事的美好。让我们从零基础开始体验木艺创作的同时感受设计、造物的乐趣');
INSERT INTO `article` VALUES ('51', '薛之谦', '15065177946620.4933664506463924.jpeg', '木头，原是有生命的。自古而今，人类就地取材、因材施艺，借助它们的质朴与温和，融入生活。人类以智慧与手艺，创造出了许许多多的木制用品，使得木艺与我们更加密不可分');
INSERT INTO `article` VALUES ('52', '吴彦祖', '15065181553730.21536956354241044.jpeg', '通过亲身体验，了解中国传统木艺，让孩子们在学习木艺过程中，锻炼观察能力、思考能力、应变能力，逐步树立起敬畏职业、追求完美和极致的工匠精神。');
INSERT INTO `article` VALUES ('54', '蔡好看', '15065184994290.9027518896635405.jpeg', '太极图被称为“中华第一图”。这种广为人知的太极图，其形状如阴阳两鱼互纠在一起，因而被称为“阴阳太极图”。关于太极图的起源说法不一，其实也无法确定哪一种说法是正确的。');
INSERT INTO `article` VALUES ('55', '陈明珠', '15065189158490.548925169636389.jpeg', '今年，易乐联手茵曼，共同打造“木作手生活”的理念，\r\n在主张品味平凡中的美好点滴的同时，\r\n也让人们有更多的机会认识木艺、感受木艺。\r\nCCTV的采访让合作更加锦上添花。\r\n纯手工制作让每一件作品看起来都充满');
INSERT INTO `article` VALUES ('56', '赵庆', '15065191087580.7317279666992806.jpeg', '都说匠人追求极致，\r\n其实他们更是一群“野心家”，\r\n总想比好还要好，比美还要美。\r\n尤克里里是当然的明星，\r\n每次都帮我们赚足了面子，\r\n现场人来人往、南腔北调，\r\n有了它，\r\n一弦定音。');
INSERT INTO `article` VALUES ('58', '陈明珠', '15066527746840.3678328472072465.jpeg', '88888');
INSERT INTO `article` VALUES ('59', '陈明珠', '15066536050680.6799306180425984.jpeg', '12323243435');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_telephone` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('34', '陈明珠', '123123', '15779119361');
INSERT INTO `user` VALUES ('35', '赵庆', '123456', '18870422715');
INSERT INTO `user` VALUES ('36', '迪丽热巴', '123456', '13812790421');
INSERT INTO `user` VALUES ('37', '吴亦凡', '1234567', '13322002767');
INSERT INTO `user` VALUES ('38', '薛之谦', 'woshinidie', '15190648798');
INSERT INTO `user` VALUES ('39', '吴彦祖', '123456', '18362210676');
INSERT INTO `user` VALUES ('40', '蔡好看', '123321', '18870421309');
INSERT INTO `user` VALUES ('41', '王明', '123456', '17715387669');
