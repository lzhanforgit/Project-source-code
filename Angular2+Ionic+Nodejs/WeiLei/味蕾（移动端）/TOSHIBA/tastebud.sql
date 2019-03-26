/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tastebud

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-11 18:00:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `addrecipes`
-- ----------------------------
DROP TABLE IF EXISTS `addrecipes`;
CREATE TABLE `addrecipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `list_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `list_fk` (`list_id`),
  KEY `recipe3_fk` (`recipe_id`),
  CONSTRAINT `list_fk` FOREIGN KEY (`list_id`) REFERENCES `recipe_list` (`id`),
  CONSTRAINT `recipe3_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addrecipes
-- ----------------------------
INSERT INTO `addrecipes` VALUES ('3', '1', '4');
INSERT INTO `addrecipes` VALUES ('5', '1', '5');
INSERT INTO `addrecipes` VALUES ('7', '2', '5');
INSERT INTO `addrecipes` VALUES ('8', '2', '6');
INSERT INTO `addrecipes` VALUES ('9', '2', '11');
INSERT INTO `addrecipes` VALUES ('13', '3', '9');
INSERT INTO `addrecipes` VALUES ('14', '3', '10');
INSERT INTO `addrecipes` VALUES ('15', '3', '12');
INSERT INTO `addrecipes` VALUES ('17', '2', '7');
INSERT INTO `addrecipes` VALUES ('20', '4', '20');
INSERT INTO `addrecipes` VALUES ('22', '4', '31');
INSERT INTO `addrecipes` VALUES ('26', '4', '27');
INSERT INTO `addrecipes` VALUES ('27', '4', '5');
INSERT INTO `addrecipes` VALUES ('28', '4', '37');
INSERT INTO `addrecipes` VALUES ('29', '2', '30');
INSERT INTO `addrecipes` VALUES ('31', '5', '30');
INSERT INTO `addrecipes` VALUES ('32', '5', '31');
INSERT INTO `addrecipes` VALUES ('35', '5', '34');
INSERT INTO `addrecipes` VALUES ('36', '5', '27');
INSERT INTO `addrecipes` VALUES ('37', '5', '28');
INSERT INTO `addrecipes` VALUES ('39', '5', '18');
INSERT INTO `addrecipes` VALUES ('40', '5', '21');
INSERT INTO `addrecipes` VALUES ('43', '5', '7');
INSERT INTO `addrecipes` VALUES ('50', '2', '49');
INSERT INTO `addrecipes` VALUES ('54', '2', '6');
INSERT INTO `addrecipes` VALUES ('66', '4', '15');
INSERT INTO `addrecipes` VALUES ('67', '1', '5');
INSERT INTO `addrecipes` VALUES ('70', '2', '6');
INSERT INTO `addrecipes` VALUES ('78', '1', '10');
INSERT INTO `addrecipes` VALUES ('80', '1', '11');
INSERT INTO `addrecipes` VALUES ('82', '2', '8');
INSERT INTO `addrecipes` VALUES ('85', '9', '6');
INSERT INTO `addrecipes` VALUES ('89', '10', '5');
INSERT INTO `addrecipes` VALUES ('90', '10', '6');
INSERT INTO `addrecipes` VALUES ('91', '5', '22');

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', '123456');

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pycode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '热门专题', '10001');
INSERT INTO `category` VALUES ('2', '烘焙甜品饮料', '10002');
INSERT INTO `category` VALUES ('3', '肉食', '10003');
INSERT INTO `category` VALUES ('4', '蔬菜水果', '10004');
INSERT INTO `category` VALUES ('5', '汤粥主食', '10005');
INSERT INTO `category` VALUES ('6', '口味特色', '10006');
INSERT INTO `category` VALUES ('7', '水产', '10007');
INSERT INTO `category` VALUES ('8', '蛋奶豆制品', '10008');
INSERT INTO `category` VALUES ('9', '米面干果腌咸', '10009');

-- ----------------------------
-- Table structure for `city`
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `province_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_city_province1_idx` (`province_id`)
) ENGINE=InnoDB AUTO_INCREMENT=376 DEFAULT CHARSET=utf8 COMMENT='城市表';

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('5', '石家庄市', '130000');
INSERT INTO `city` VALUES ('6', '唐山市', '130000');
INSERT INTO `city` VALUES ('7', '秦皇岛市', '130000');
INSERT INTO `city` VALUES ('8', '邯郸市', '130000');
INSERT INTO `city` VALUES ('9', '邢台市', '130000');
INSERT INTO `city` VALUES ('10', '保定市', '130000');
INSERT INTO `city` VALUES ('11', '张家口市', '130000');
INSERT INTO `city` VALUES ('12', '承德市', '130000');
INSERT INTO `city` VALUES ('13', '沧州市', '130000');
INSERT INTO `city` VALUES ('14', '廊坊市', '130000');
INSERT INTO `city` VALUES ('15', '衡水市', '130000');
INSERT INTO `city` VALUES ('16', '太原市', '140000');
INSERT INTO `city` VALUES ('17', '大同市', '140000');
INSERT INTO `city` VALUES ('18', '阳泉市', '140000');
INSERT INTO `city` VALUES ('19', '长治市', '140000');
INSERT INTO `city` VALUES ('20', '晋城市', '140000');
INSERT INTO `city` VALUES ('21', '朔州市', '140000');
INSERT INTO `city` VALUES ('22', '晋中市', '140000');
INSERT INTO `city` VALUES ('23', '运城市', '140000');
INSERT INTO `city` VALUES ('24', '忻州市', '140000');
INSERT INTO `city` VALUES ('25', '临汾市', '140000');
INSERT INTO `city` VALUES ('26', '吕梁市', '140000');
INSERT INTO `city` VALUES ('27', '呼和浩特市', '150000');
INSERT INTO `city` VALUES ('28', '包头市', '150000');
INSERT INTO `city` VALUES ('29', '乌海市', '150000');
INSERT INTO `city` VALUES ('30', '赤峰市', '150000');
INSERT INTO `city` VALUES ('31', '通辽市', '150000');
INSERT INTO `city` VALUES ('32', '鄂尔多斯市', '150000');
INSERT INTO `city` VALUES ('33', '呼伦贝尔市', '150000');
INSERT INTO `city` VALUES ('34', '巴彦淖尔市', '150000');
INSERT INTO `city` VALUES ('35', '乌兰察布市', '150000');
INSERT INTO `city` VALUES ('36', '兴安盟', '150000');
INSERT INTO `city` VALUES ('37', '锡林郭勒盟', '150000');
INSERT INTO `city` VALUES ('38', '阿拉善盟', '150000');
INSERT INTO `city` VALUES ('39', '沈阳市', '210000');
INSERT INTO `city` VALUES ('40', '大连市', '210000');
INSERT INTO `city` VALUES ('41', '鞍山市', '210000');
INSERT INTO `city` VALUES ('42', '抚顺市', '210000');
INSERT INTO `city` VALUES ('43', '本溪市', '210000');
INSERT INTO `city` VALUES ('44', '丹东市', '210000');
INSERT INTO `city` VALUES ('45', '锦州市', '210000');
INSERT INTO `city` VALUES ('46', '营口市', '210000');
INSERT INTO `city` VALUES ('47', '阜新市', '210000');
INSERT INTO `city` VALUES ('48', '辽阳市', '210000');
INSERT INTO `city` VALUES ('49', '盘锦市', '210000');
INSERT INTO `city` VALUES ('50', '铁岭市', '210000');
INSERT INTO `city` VALUES ('51', '朝阳市', '210000');
INSERT INTO `city` VALUES ('52', '葫芦岛市', '210000');
INSERT INTO `city` VALUES ('53', '长春市', '220000');
INSERT INTO `city` VALUES ('54', '吉林市', '220000');
INSERT INTO `city` VALUES ('55', '四平市', '220000');
INSERT INTO `city` VALUES ('56', '辽源市', '220000');
INSERT INTO `city` VALUES ('57', '通化市', '220000');
INSERT INTO `city` VALUES ('58', '白山市', '220000');
INSERT INTO `city` VALUES ('59', '松原市', '220000');
INSERT INTO `city` VALUES ('60', '白城市', '220000');
INSERT INTO `city` VALUES ('61', '延边朝鲜族自治州', '220000');
INSERT INTO `city` VALUES ('62', '哈尔滨市', '230000');
INSERT INTO `city` VALUES ('63', '齐齐哈尔市', '230000');
INSERT INTO `city` VALUES ('64', '鸡西市', '230000');
INSERT INTO `city` VALUES ('65', '鹤岗市', '230000');
INSERT INTO `city` VALUES ('66', '双鸭山市', '230000');
INSERT INTO `city` VALUES ('67', '大庆市', '230000');
INSERT INTO `city` VALUES ('68', '伊春市', '230000');
INSERT INTO `city` VALUES ('69', '佳木斯市', '230000');
INSERT INTO `city` VALUES ('70', '七台河市', '230000');
INSERT INTO `city` VALUES ('71', '牡丹江市', '230000');
INSERT INTO `city` VALUES ('72', '黑河市', '230000');
INSERT INTO `city` VALUES ('73', '绥化市', '230000');
INSERT INTO `city` VALUES ('74', '大兴安岭地区', '230000');
INSERT INTO `city` VALUES ('75', '市辖区', '310000');
INSERT INTO `city` VALUES ('76', '县', '310000');
INSERT INTO `city` VALUES ('77', '南京市', '320000');
INSERT INTO `city` VALUES ('78', '无锡市', '320000');
INSERT INTO `city` VALUES ('79', '徐州市', '320000');
INSERT INTO `city` VALUES ('80', '常州市', '320000');
INSERT INTO `city` VALUES ('81', '苏州市', '320000');
INSERT INTO `city` VALUES ('82', '南通市', '320000');
INSERT INTO `city` VALUES ('83', '连云港市', '320000');
INSERT INTO `city` VALUES ('84', '淮安市', '320000');
INSERT INTO `city` VALUES ('85', '盐城市', '320000');
INSERT INTO `city` VALUES ('86', '扬州市', '320000');
INSERT INTO `city` VALUES ('87', '镇江市', '320000');
INSERT INTO `city` VALUES ('88', '泰州市', '320000');
INSERT INTO `city` VALUES ('89', '宿迁市', '320000');
INSERT INTO `city` VALUES ('90', '杭州市', '330000');
INSERT INTO `city` VALUES ('91', '宁波市', '330000');
INSERT INTO `city` VALUES ('92', '温州市', '330000');
INSERT INTO `city` VALUES ('93', '嘉兴市', '330000');
INSERT INTO `city` VALUES ('94', '湖州市', '330000');
INSERT INTO `city` VALUES ('95', '绍兴市', '330000');
INSERT INTO `city` VALUES ('96', '金华市', '330000');
INSERT INTO `city` VALUES ('97', '衢州市', '330000');
INSERT INTO `city` VALUES ('98', '舟山市', '330000');
INSERT INTO `city` VALUES ('99', '台州市', '330000');
INSERT INTO `city` VALUES ('100', '丽水市', '330000');
INSERT INTO `city` VALUES ('101', '合肥市', '340000');
INSERT INTO `city` VALUES ('102', '芜湖市', '340000');
INSERT INTO `city` VALUES ('103', '蚌埠市', '340000');
INSERT INTO `city` VALUES ('104', '淮南市', '340000');
INSERT INTO `city` VALUES ('105', '马鞍山市', '340000');
INSERT INTO `city` VALUES ('106', '淮北市', '340000');
INSERT INTO `city` VALUES ('107', '铜陵市', '340000');
INSERT INTO `city` VALUES ('108', '安庆市', '340000');
INSERT INTO `city` VALUES ('109', '黄山市', '340000');
INSERT INTO `city` VALUES ('110', '滁州市', '340000');
INSERT INTO `city` VALUES ('111', '阜阳市', '340000');
INSERT INTO `city` VALUES ('112', '宿州市', '340000');
INSERT INTO `city` VALUES ('113', '巢湖市', '340000');
INSERT INTO `city` VALUES ('114', '六安市', '340000');
INSERT INTO `city` VALUES ('115', '亳州市', '340000');
INSERT INTO `city` VALUES ('116', '池州市', '340000');
INSERT INTO `city` VALUES ('117', '宣城市', '340000');
INSERT INTO `city` VALUES ('118', '福州市', '350000');
INSERT INTO `city` VALUES ('119', '厦门市', '350000');
INSERT INTO `city` VALUES ('120', '莆田市', '350000');
INSERT INTO `city` VALUES ('121', '三明市', '350000');
INSERT INTO `city` VALUES ('122', '泉州市', '350000');
INSERT INTO `city` VALUES ('123', '漳州市', '350000');
INSERT INTO `city` VALUES ('124', '南平市', '350000');
INSERT INTO `city` VALUES ('125', '龙岩市', '350000');
INSERT INTO `city` VALUES ('126', '宁德市', '350000');
INSERT INTO `city` VALUES ('127', '南昌市', '360000');
INSERT INTO `city` VALUES ('128', '景德镇市', '360000');
INSERT INTO `city` VALUES ('129', '萍乡市', '360000');
INSERT INTO `city` VALUES ('130', '九江市', '360000');
INSERT INTO `city` VALUES ('131', '新余市', '360000');
INSERT INTO `city` VALUES ('132', '鹰潭市', '360000');
INSERT INTO `city` VALUES ('133', '赣州市', '360000');
INSERT INTO `city` VALUES ('134', '吉安市', '360000');
INSERT INTO `city` VALUES ('135', '宜春市', '360000');
INSERT INTO `city` VALUES ('136', '抚州市', '360000');
INSERT INTO `city` VALUES ('137', '上饶市', '360000');
INSERT INTO `city` VALUES ('138', '济南市', '370000');
INSERT INTO `city` VALUES ('139', '青岛市', '370000');
INSERT INTO `city` VALUES ('140', '淄博市', '370000');
INSERT INTO `city` VALUES ('141', '枣庄市', '370000');
INSERT INTO `city` VALUES ('142', '东营市', '370000');
INSERT INTO `city` VALUES ('143', '烟台市', '370000');
INSERT INTO `city` VALUES ('144', '潍坊市', '370000');
INSERT INTO `city` VALUES ('145', '济宁市', '370000');
INSERT INTO `city` VALUES ('146', '泰安市', '370000');
INSERT INTO `city` VALUES ('147', '威海市', '370000');
INSERT INTO `city` VALUES ('148', '日照市', '370000');
INSERT INTO `city` VALUES ('149', '莱芜市', '370000');
INSERT INTO `city` VALUES ('150', '临沂市', '370000');
INSERT INTO `city` VALUES ('151', '德州市', '370000');
INSERT INTO `city` VALUES ('152', '聊城市', '370000');
INSERT INTO `city` VALUES ('153', '滨州市', '370000');
INSERT INTO `city` VALUES ('154', '荷泽市', '370000');
INSERT INTO `city` VALUES ('155', '郑州市', '410000');
INSERT INTO `city` VALUES ('156', '开封市', '410000');
INSERT INTO `city` VALUES ('157', '洛阳市', '410000');
INSERT INTO `city` VALUES ('158', '平顶山市', '410000');
INSERT INTO `city` VALUES ('159', '安阳市', '410000');
INSERT INTO `city` VALUES ('160', '鹤壁市', '410000');
INSERT INTO `city` VALUES ('161', '新乡市', '410000');
INSERT INTO `city` VALUES ('162', '焦作市', '410000');
INSERT INTO `city` VALUES ('163', '濮阳市', '410000');
INSERT INTO `city` VALUES ('164', '许昌市', '410000');
INSERT INTO `city` VALUES ('165', '漯河市', '410000');
INSERT INTO `city` VALUES ('166', '三门峡市', '410000');
INSERT INTO `city` VALUES ('167', '南阳市', '410000');
INSERT INTO `city` VALUES ('168', '商丘市', '410000');
INSERT INTO `city` VALUES ('169', '信阳市', '410000');
INSERT INTO `city` VALUES ('170', '周口市', '410000');
INSERT INTO `city` VALUES ('171', '驻马店市', '410000');
INSERT INTO `city` VALUES ('172', '武汉市', '420000');
INSERT INTO `city` VALUES ('173', '黄石市', '420000');
INSERT INTO `city` VALUES ('174', '十堰市', '420000');
INSERT INTO `city` VALUES ('175', '宜昌市', '420000');
INSERT INTO `city` VALUES ('176', '襄樊市', '420000');
INSERT INTO `city` VALUES ('177', '鄂州市', '420000');
INSERT INTO `city` VALUES ('178', '荆门市', '420000');
INSERT INTO `city` VALUES ('179', '孝感市', '420000');
INSERT INTO `city` VALUES ('180', '荆州市', '420000');
INSERT INTO `city` VALUES ('181', '黄冈市', '420000');
INSERT INTO `city` VALUES ('182', '咸宁市', '420000');
INSERT INTO `city` VALUES ('183', '随州市', '420000');
INSERT INTO `city` VALUES ('184', '恩施土家族苗族自治州', '420000');
INSERT INTO `city` VALUES ('185', '省直辖行政单位', '420000');
INSERT INTO `city` VALUES ('186', '长沙市', '430000');
INSERT INTO `city` VALUES ('187', '株洲市', '430000');
INSERT INTO `city` VALUES ('188', '湘潭市', '430000');
INSERT INTO `city` VALUES ('189', '衡阳市', '430000');
INSERT INTO `city` VALUES ('190', '邵阳市', '430000');
INSERT INTO `city` VALUES ('191', '岳阳市', '430000');
INSERT INTO `city` VALUES ('192', '常德市', '430000');
INSERT INTO `city` VALUES ('193', '张家界市', '430000');
INSERT INTO `city` VALUES ('194', '益阳市', '430000');
INSERT INTO `city` VALUES ('195', '郴州市', '430000');
INSERT INTO `city` VALUES ('196', '永州市', '430000');
INSERT INTO `city` VALUES ('197', '怀化市', '430000');
INSERT INTO `city` VALUES ('198', '娄底市', '430000');
INSERT INTO `city` VALUES ('199', '湘西土家族苗族自治州', '430000');
INSERT INTO `city` VALUES ('200', '广州市', '440000');
INSERT INTO `city` VALUES ('201', '韶关市', '440000');
INSERT INTO `city` VALUES ('202', '深圳市', '440000');
INSERT INTO `city` VALUES ('203', '珠海市', '440000');
INSERT INTO `city` VALUES ('204', '汕头市', '440000');
INSERT INTO `city` VALUES ('205', '佛山市', '440000');
INSERT INTO `city` VALUES ('206', '江门市', '440000');
INSERT INTO `city` VALUES ('207', '湛江市', '440000');
INSERT INTO `city` VALUES ('208', '茂名市', '440000');
INSERT INTO `city` VALUES ('209', '肇庆市', '440000');
INSERT INTO `city` VALUES ('210', '惠州市', '440000');
INSERT INTO `city` VALUES ('211', '梅州市', '440000');
INSERT INTO `city` VALUES ('212', '汕尾市', '440000');
INSERT INTO `city` VALUES ('213', '河源市', '440000');
INSERT INTO `city` VALUES ('214', '阳江市', '440000');
INSERT INTO `city` VALUES ('215', '清远市', '440000');
INSERT INTO `city` VALUES ('216', '东莞市', '440000');
INSERT INTO `city` VALUES ('217', '中山市', '440000');
INSERT INTO `city` VALUES ('218', '潮州市', '440000');
INSERT INTO `city` VALUES ('219', '揭阳市', '440000');
INSERT INTO `city` VALUES ('220', '云浮市', '440000');
INSERT INTO `city` VALUES ('221', '南宁市', '450000');
INSERT INTO `city` VALUES ('222', '柳州市', '450000');
INSERT INTO `city` VALUES ('223', '桂林市', '450000');
INSERT INTO `city` VALUES ('224', '梧州市', '450000');
INSERT INTO `city` VALUES ('225', '北海市', '450000');
INSERT INTO `city` VALUES ('226', '防城港市', '450000');
INSERT INTO `city` VALUES ('227', '钦州市', '450000');
INSERT INTO `city` VALUES ('228', '贵港市', '450000');
INSERT INTO `city` VALUES ('229', '玉林市', '450000');
INSERT INTO `city` VALUES ('230', '百色市', '450000');
INSERT INTO `city` VALUES ('231', '贺州市', '450000');
INSERT INTO `city` VALUES ('232', '河池市', '450000');
INSERT INTO `city` VALUES ('233', '来宾市', '450000');
INSERT INTO `city` VALUES ('234', '崇左市', '450000');
INSERT INTO `city` VALUES ('235', '海口市', '460000');
INSERT INTO `city` VALUES ('236', '三亚市', '460000');
INSERT INTO `city` VALUES ('237', '省直辖县级行政单位', '460000');
INSERT INTO `city` VALUES ('238', '市辖区', '500000');
INSERT INTO `city` VALUES ('239', '县', '500000');
INSERT INTO `city` VALUES ('240', '市', '500000');
INSERT INTO `city` VALUES ('241', '成都市', '510000');
INSERT INTO `city` VALUES ('242', '自贡市', '510000');
INSERT INTO `city` VALUES ('243', '攀枝花市', '510000');
INSERT INTO `city` VALUES ('244', '泸州市', '510000');
INSERT INTO `city` VALUES ('245', '德阳市', '510000');
INSERT INTO `city` VALUES ('246', '绵阳市', '510000');
INSERT INTO `city` VALUES ('247', '广元市', '510000');
INSERT INTO `city` VALUES ('248', '遂宁市', '510000');
INSERT INTO `city` VALUES ('249', '内江市', '510000');
INSERT INTO `city` VALUES ('250', '乐山市', '510000');
INSERT INTO `city` VALUES ('251', '南充市', '510000');
INSERT INTO `city` VALUES ('252', '眉山市', '510000');
INSERT INTO `city` VALUES ('253', '宜宾市', '510000');
INSERT INTO `city` VALUES ('254', '广安市', '510000');
INSERT INTO `city` VALUES ('255', '达州市', '510000');
INSERT INTO `city` VALUES ('256', '雅安市', '510000');
INSERT INTO `city` VALUES ('257', '巴中市', '510000');
INSERT INTO `city` VALUES ('258', '资阳市', '510000');
INSERT INTO `city` VALUES ('259', '阿坝藏族羌族自治州', '510000');
INSERT INTO `city` VALUES ('260', '甘孜藏族自治州', '510000');
INSERT INTO `city` VALUES ('261', '凉山彝族自治州', '510000');
INSERT INTO `city` VALUES ('262', '贵阳市', '520000');
INSERT INTO `city` VALUES ('263', '六盘水市', '520000');
INSERT INTO `city` VALUES ('264', '遵义市', '520000');
INSERT INTO `city` VALUES ('265', '安顺市', '520000');
INSERT INTO `city` VALUES ('266', '铜仁地区', '520000');
INSERT INTO `city` VALUES ('267', '黔西南布依族苗族自治州', '520000');
INSERT INTO `city` VALUES ('268', '毕节地区', '520000');
INSERT INTO `city` VALUES ('269', '黔东南苗族侗族自治州', '520000');
INSERT INTO `city` VALUES ('270', '黔南布依族苗族自治州', '520000');
INSERT INTO `city` VALUES ('271', '昆明市', '530000');
INSERT INTO `city` VALUES ('272', '曲靖市', '530000');
INSERT INTO `city` VALUES ('273', '玉溪市', '530000');
INSERT INTO `city` VALUES ('274', '保山市', '530000');
INSERT INTO `city` VALUES ('275', '昭通市', '530000');
INSERT INTO `city` VALUES ('276', '丽江市', '530000');
INSERT INTO `city` VALUES ('277', '思茅市', '530000');
INSERT INTO `city` VALUES ('278', '临沧市', '530000');
INSERT INTO `city` VALUES ('279', '楚雄彝族自治州', '530000');
INSERT INTO `city` VALUES ('280', '红河哈尼族彝族自治州', '530000');
INSERT INTO `city` VALUES ('281', '文山壮族苗族自治州', '530000');
INSERT INTO `city` VALUES ('282', '西双版纳傣族自治州', '530000');
INSERT INTO `city` VALUES ('283', '大理白族自治州', '530000');
INSERT INTO `city` VALUES ('284', '德宏傣族景颇族自治州', '530000');
INSERT INTO `city` VALUES ('285', '怒江傈僳族自治州', '530000');
INSERT INTO `city` VALUES ('286', '迪庆藏族自治州', '530000');
INSERT INTO `city` VALUES ('287', '拉萨市', '540000');
INSERT INTO `city` VALUES ('288', '昌都地区', '540000');
INSERT INTO `city` VALUES ('289', '山南地区', '540000');
INSERT INTO `city` VALUES ('290', '日喀则地区', '540000');
INSERT INTO `city` VALUES ('291', '那曲地区', '540000');
INSERT INTO `city` VALUES ('292', '阿里地区', '540000');
INSERT INTO `city` VALUES ('293', '林芝地区', '540000');
INSERT INTO `city` VALUES ('294', '西安市', '610000');
INSERT INTO `city` VALUES ('295', '铜川市', '610000');
INSERT INTO `city` VALUES ('296', '宝鸡市', '610000');
INSERT INTO `city` VALUES ('297', '咸阳市', '610000');
INSERT INTO `city` VALUES ('298', '渭南市', '610000');
INSERT INTO `city` VALUES ('299', '延安市', '610000');
INSERT INTO `city` VALUES ('300', '汉中市', '610000');
INSERT INTO `city` VALUES ('301', '榆林市', '610000');
INSERT INTO `city` VALUES ('302', '安康市', '610000');
INSERT INTO `city` VALUES ('303', '商洛市', '610000');
INSERT INTO `city` VALUES ('304', '兰州市', '620000');
INSERT INTO `city` VALUES ('305', '嘉峪关市', '620000');
INSERT INTO `city` VALUES ('306', '金昌市', '620000');
INSERT INTO `city` VALUES ('307', '白银市', '620000');
INSERT INTO `city` VALUES ('308', '天水市', '620000');
INSERT INTO `city` VALUES ('309', '武威市', '620000');
INSERT INTO `city` VALUES ('310', '张掖市', '620000');
INSERT INTO `city` VALUES ('311', '平凉市', '620000');
INSERT INTO `city` VALUES ('312', '酒泉市', '620000');
INSERT INTO `city` VALUES ('313', '庆阳市', '620000');
INSERT INTO `city` VALUES ('314', '定西市', '620000');
INSERT INTO `city` VALUES ('315', '陇南市', '620000');
INSERT INTO `city` VALUES ('316', '临夏回族自治州', '620000');
INSERT INTO `city` VALUES ('317', '甘南藏族自治州', '620000');
INSERT INTO `city` VALUES ('318', '西宁市', '630000');
INSERT INTO `city` VALUES ('319', '海东地区', '630000');
INSERT INTO `city` VALUES ('320', '海北藏族自治州', '630000');
INSERT INTO `city` VALUES ('321', '黄南藏族自治州', '630000');
INSERT INTO `city` VALUES ('322', '海南藏族自治州', '630000');
INSERT INTO `city` VALUES ('323', '果洛藏族自治州', '630000');
INSERT INTO `city` VALUES ('324', '玉树藏族自治州', '630000');
INSERT INTO `city` VALUES ('325', '海西蒙古族藏族自治州', '630000');
INSERT INTO `city` VALUES ('326', '银川市', '640000');
INSERT INTO `city` VALUES ('327', '石嘴山市', '640000');
INSERT INTO `city` VALUES ('328', '吴忠市', '640000');
INSERT INTO `city` VALUES ('329', '固原市', '640000');
INSERT INTO `city` VALUES ('330', '中卫市', '640000');
INSERT INTO `city` VALUES ('331', '乌鲁木齐市', '650000');
INSERT INTO `city` VALUES ('332', '克拉玛依市', '650000');
INSERT INTO `city` VALUES ('333', '吐鲁番地区', '650000');
INSERT INTO `city` VALUES ('334', '哈密地区', '650000');
INSERT INTO `city` VALUES ('335', '昌吉回族自治州', '650000');
INSERT INTO `city` VALUES ('336', '博尔塔拉蒙古自治州', '650000');
INSERT INTO `city` VALUES ('337', '巴音郭楞蒙古自治州', '650000');
INSERT INTO `city` VALUES ('338', '阿克苏地区', '650000');
INSERT INTO `city` VALUES ('339', '克孜勒苏柯尔克孜自治州', '650000');
INSERT INTO `city` VALUES ('340', '喀什地区', '650000');
INSERT INTO `city` VALUES ('341', '和田地区', '650000');
INSERT INTO `city` VALUES ('342', '伊犁哈萨克自治州', '650000');
INSERT INTO `city` VALUES ('343', '塔城地区', '650000');
INSERT INTO `city` VALUES ('344', '阿勒泰地区', '650000');
INSERT INTO `city` VALUES ('345', '省直辖行政单位', '650000');
INSERT INTO `city` VALUES ('346', '朝阳区', '110000');
INSERT INTO `city` VALUES ('347', '丰台区', '110000');
INSERT INTO `city` VALUES ('348', '海淀区', '110000');
INSERT INTO `city` VALUES ('349', '通州区', '110000');
INSERT INTO `city` VALUES ('350', '昌平区', '110000');
INSERT INTO `city` VALUES ('351', '大兴区', '110000');
INSERT INTO `city` VALUES ('352', '顺义区', '110000');
INSERT INTO `city` VALUES ('353', '西城区', '110000');
INSERT INTO `city` VALUES ('354', '延庆县', '110000');
INSERT INTO `city` VALUES ('355', '石景山区', '110000');
INSERT INTO `city` VALUES ('356', '宣武区', '110000');
INSERT INTO `city` VALUES ('357', '怀柔区', '110000');
INSERT INTO `city` VALUES ('358', '崇文区', '110000');
INSERT INTO `city` VALUES ('359', '密云县', '110000');
INSERT INTO `city` VALUES ('360', '东城区', '110000');
INSERT INTO `city` VALUES ('361', '和平区', '120000');
INSERT INTO `city` VALUES ('362', '北辰区', '120000');
INSERT INTO `city` VALUES ('363', '河北区', '120000');
INSERT INTO `city` VALUES ('364', '河西区', '120000');
INSERT INTO `city` VALUES ('365', '西青区', '120000');
INSERT INTO `city` VALUES ('366', '东丽区', '120000');
INSERT INTO `city` VALUES ('367', '武清区', '120000');
INSERT INTO `city` VALUES ('368', '宝坻区', '120000');
INSERT INTO `city` VALUES ('369', '红桥区', '120000');
INSERT INTO `city` VALUES ('370', '大港区', '120000');
INSERT INTO `city` VALUES ('371', '汉沽区', '120000');
INSERT INTO `city` VALUES ('372', '静海县', '120000');
INSERT INTO `city` VALUES ('373', '宁河县', '120000');
INSERT INTO `city` VALUES ('374', '塘沽区', '120000');
INSERT INTO `city` VALUES ('375', '南开区', '120000');

-- ----------------------------
-- Table structure for `collect_list`
-- ----------------------------
DROP TABLE IF EXISTS `collect_list`;
CREATE TABLE `collect_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `list_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `list_fk1` (`list_id`),
  KEY `user1_fk1` (`user_id`),
  CONSTRAINT `list_fk1` FOREIGN KEY (`list_id`) REFERENCES `recipe_list` (`id`),
  CONSTRAINT `user1_fk1` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect_list
-- ----------------------------
INSERT INTO `collect_list` VALUES ('1', '1', '1');
INSERT INTO `collect_list` VALUES ('2', '2', '1');
INSERT INTO `collect_list` VALUES ('3', '1', '2');
INSERT INTO `collect_list` VALUES ('5', '3', '4');
INSERT INTO `collect_list` VALUES ('6', '2', '4');
INSERT INTO `collect_list` VALUES ('8', '3', '5');
INSERT INTO `collect_list` VALUES ('9', '2', '6');
INSERT INTO `collect_list` VALUES ('11', '2', '8');
INSERT INTO `collect_list` VALUES ('12', '3', '9');
INSERT INTO `collect_list` VALUES ('35', '2', '9');
INSERT INTO `collect_list` VALUES ('37', '1', '3');
INSERT INTO `collect_list` VALUES ('40', '1', '15');
INSERT INTO `collect_list` VALUES ('41', '1', '9');
INSERT INTO `collect_list` VALUES ('42', '2', '3');
INSERT INTO `collect_list` VALUES ('43', '3', '15');
INSERT INTO `collect_list` VALUES ('45', '2', '15');

-- ----------------------------
-- Table structure for `collect_recipe`
-- ----------------------------
DROP TABLE IF EXISTS `collect_recipe`;
CREATE TABLE `collect_recipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recipe_id` int(11) DEFAULT NULL,
  `collecter_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `collecter_fk` (`collecter_id`),
  KEY `reciper_fk` (`recipe_id`),
  CONSTRAINT `collecter_fk` FOREIGN KEY (`collecter_id`) REFERENCES `userinfo` (`id`),
  CONSTRAINT `reciper_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect_recipe
-- ----------------------------
INSERT INTO `collect_recipe` VALUES ('2', '12', '1');
INSERT INTO `collect_recipe` VALUES ('3', '4', '1');
INSERT INTO `collect_recipe` VALUES ('4', '6', '2');
INSERT INTO `collect_recipe` VALUES ('5', '3', '2');
INSERT INTO `collect_recipe` VALUES ('6', '7', '2');
INSERT INTO `collect_recipe` VALUES ('9', '9', '3');
INSERT INTO `collect_recipe` VALUES ('10', '10', '4');
INSERT INTO `collect_recipe` VALUES ('12', '12', '4');
INSERT INTO `collect_recipe` VALUES ('15', '6', '5');
INSERT INTO `collect_recipe` VALUES ('17', '4', '9');
INSERT INTO `collect_recipe` VALUES ('19', '8', '8');
INSERT INTO `collect_recipe` VALUES ('20', '4', '8');
INSERT INTO `collect_recipe` VALUES ('21', '4', '7');
INSERT INTO `collect_recipe` VALUES ('23', '9', '7');
INSERT INTO `collect_recipe` VALUES ('24', '11', '7');
INSERT INTO `collect_recipe` VALUES ('66', '14', '3');
INSERT INTO `collect_recipe` VALUES ('68', '12', '15');
INSERT INTO `collect_recipe` VALUES ('70', '5', '15');
INSERT INTO `collect_recipe` VALUES ('71', '18', '15');
INSERT INTO `collect_recipe` VALUES ('72', '31', '15');
INSERT INTO `collect_recipe` VALUES ('74', '27', '9');
INSERT INTO `collect_recipe` VALUES ('75', '24', '3');
INSERT INTO `collect_recipe` VALUES ('76', '3', '3');
INSERT INTO `collect_recipe` VALUES ('77', '23', '3');

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `commenter_id` int(11) DEFAULT NULL,
  `master_id` int(11) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `reply` varchar(2000) DEFAULT NULL,
  `comment_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commenterfk` (`commenter_id`),
  KEY `masterfk` (`master_id`),
  CONSTRAINT `commenterfk` FOREIGN KEY (`commenter_id`) REFERENCES `userinfo` (`id`),
  CONSTRAINT `masterfk` FOREIGN KEY (`master_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('58', '3', '9', '雷猴啊~', null, '2017-09-27');
INSERT INTO `comment` VALUES ('59', '9', '3', '你的小松松嘞', null, '2017-09-27');
INSERT INTO `comment` VALUES ('61', '3', '5', '你好', null, '2017-09-27');
INSERT INTO `comment` VALUES ('67', null, '9', 'dddddd', null, '2017-09-28');
INSERT INTO `comment` VALUES ('70', '3', '2', 'lallala', null, '2017-09-29');
INSERT INTO `comment` VALUES ('116', '3', '16', '啦啦啦啦', null, '2017-09-30');
INSERT INTO `comment` VALUES ('139', '7', '7', 'sdfdghj', null, '2017-10-10');
INSERT INTO `comment` VALUES ('140', '15', '15', '嘎嘎嘎', null, '2017-10-10');

-- ----------------------------
-- Table structure for `dosage`
-- ----------------------------
DROP TABLE IF EXISTS `dosage`;
CREATE TABLE `dosage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reciper_id` int(11) DEFAULT NULL,
  `amount` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reciper1_id` (`reciper_id`),
  CONSTRAINT `reciper1_id` FOREIGN KEY (`reciper_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=363 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dosage
-- ----------------------------
INSERT INTO `dosage` VALUES ('14', '3', '16-20个');
INSERT INTO `dosage` VALUES ('15', '3', '1瓶');
INSERT INTO `dosage` VALUES ('16', '3', '3勺');
INSERT INTO `dosage` VALUES ('17', '3', '3段');
INSERT INTO `dosage` VALUES ('18', '3', '3片');
INSERT INTO `dosage` VALUES ('19', '3', '适量');
INSERT INTO `dosage` VALUES ('20', '3', '适量');
INSERT INTO `dosage` VALUES ('21', '4', '6块（约2.4磅，两斤多点）');
INSERT INTO `dosage` VALUES ('22', '4', '2 tsp （10ml）');
INSERT INTO `dosage` VALUES ('23', '4', '2 tsp （10ml）');
INSERT INTO `dosage` VALUES ('24', '4', '无限量！');
INSERT INTO `dosage` VALUES ('25', '5', '800克');
INSERT INTO `dosage` VALUES ('26', '5', '350ml（一罐）');
INSERT INTO `dosage` VALUES ('27', '5', '适量');
INSERT INTO `dosage` VALUES ('28', '5', '适量');
INSERT INTO `dosage` VALUES ('29', '5', '适量');
INSERT INTO `dosage` VALUES ('30', '5', '10g');
INSERT INTO `dosage` VALUES ('31', '5', '适量');
INSERT INTO `dosage` VALUES ('32', '5', '适量');
INSERT INTO `dosage` VALUES ('33', '5', '适量');
INSERT INTO `dosage` VALUES ('34', '6', '半块200g');
INSERT INTO `dosage` VALUES ('35', '6', '2只');
INSERT INTO `dosage` VALUES ('36', '6', '适量');
INSERT INTO `dosage` VALUES ('37', '6', null);
INSERT INTO `dosage` VALUES ('38', '6', null);
INSERT INTO `dosage` VALUES ('39', '7', '2个');
INSERT INTO `dosage` VALUES ('40', '7', '4个');
INSERT INTO `dosage` VALUES ('41', '7', '1-2个');
INSERT INTO `dosage` VALUES ('42', '7', '2-5个（根据个人能吃辣程度）');
INSERT INTO `dosage` VALUES ('43', '7', '半个（不喜欢洋葱可以不放）');
INSERT INTO `dosage` VALUES ('44', '7', '一小段');
INSERT INTO `dosage` VALUES ('45', '7', '4-5片');
INSERT INTO `dosage` VALUES ('46', '7', '两勺（吃饭的小勺就可以）');
INSERT INTO `dosage` VALUES ('47', '7', '两勺（吃饭的小勺就可以）');
INSERT INTO `dosage` VALUES ('48', '7', '一小勺');
INSERT INTO `dosage` VALUES ('49', '7', '适量');
INSERT INTO `dosage` VALUES ('50', '7', '适量');
INSERT INTO `dosage` VALUES ('51', '8', '500g左右');
INSERT INTO `dosage` VALUES ('52', '8', null);
INSERT INTO `dosage` VALUES ('53', '8', null);
INSERT INTO `dosage` VALUES ('54', '8', null);
INSERT INTO `dosage` VALUES ('55', '8', null);
INSERT INTO `dosage` VALUES ('56', '9', '2斤');
INSERT INTO `dosage` VALUES ('57', '9', '一斤半');
INSERT INTO `dosage` VALUES ('58', '9', '12朵');
INSERT INTO `dosage` VALUES ('59', '9', '2大把');
INSERT INTO `dosage` VALUES ('60', '9', '2大把');
INSERT INTO `dosage` VALUES ('61', '9', '一大锅…');
INSERT INTO `dosage` VALUES ('62', '10', '1块');
INSERT INTO `dosage` VALUES ('63', '10', '1/4个');
INSERT INTO `dosage` VALUES ('64', '10', '4个');
INSERT INTO `dosage` VALUES ('65', '10', '1瓣');
INSERT INTO `dosage` VALUES ('66', '10', '一小把');
INSERT INTO `dosage` VALUES ('67', '10', '1勺');
INSERT INTO `dosage` VALUES ('68', '10', '2个');
INSERT INTO `dosage` VALUES ('69', '10', '1勺');
INSERT INTO `dosage` VALUES ('70', '10', '1块');
INSERT INTO `dosage` VALUES ('71', '10', '1片');
INSERT INTO `dosage` VALUES ('72', '10', null);
INSERT INTO `dosage` VALUES ('73', '10', null);
INSERT INTO `dosage` VALUES ('74', '11', null);
INSERT INTO `dosage` VALUES ('75', '11', null);
INSERT INTO `dosage` VALUES ('76', '11', null);
INSERT INTO `dosage` VALUES ('77', '11', null);
INSERT INTO `dosage` VALUES ('78', '11', null);
INSERT INTO `dosage` VALUES ('79', '11', '250克');
INSERT INTO `dosage` VALUES ('80', '11', null);
INSERT INTO `dosage` VALUES ('81', '12', null);
INSERT INTO `dosage` VALUES ('82', '12', '90G');
INSERT INTO `dosage` VALUES ('83', '12', '30G');
INSERT INTO `dosage` VALUES ('84', '12', '10G');
INSERT INTO `dosage` VALUES ('85', '12', '一大勺');
INSERT INTO `dosage` VALUES ('86', '12', '一小撮');
INSERT INTO `dosage` VALUES ('87', '12', null);
INSERT INTO `dosage` VALUES ('88', '12', '250G');
INSERT INTO `dosage` VALUES ('89', '12', '100G');
INSERT INTO `dosage` VALUES ('90', '12', '60G');
INSERT INTO `dosage` VALUES ('91', '12', '1个');
INSERT INTO `dosage` VALUES ('92', '12', '1/4茶匙');
INSERT INTO `dosage` VALUES ('93', '12', '6G');
INSERT INTO `dosage` VALUES ('94', '12', '40G');
INSERT INTO `dosage` VALUES ('95', '12', '一大勺');
INSERT INTO `dosage` VALUES ('96', '12', '适量');
INSERT INTO `dosage` VALUES ('102', '14', '3个');
INSERT INTO `dosage` VALUES ('103', '14', '10克');
INSERT INTO `dosage` VALUES ('104', '14', '30克');
INSERT INTO `dosage` VALUES ('105', '14', '3滴');
INSERT INTO `dosage` VALUES ('106', '14', '30克');
INSERT INTO `dosage` VALUES ('107', '14', '1根');
INSERT INTO `dosage` VALUES ('108', '14', '3个');
INSERT INTO `dosage` VALUES ('109', '14', '	45克');
INSERT INTO `dosage` VALUES ('110', '14', '10克');
INSERT INTO `dosage` VALUES ('111', '14', '	5克');
INSERT INTO `dosage` VALUES ('112', '15', '1个');
INSERT INTO `dosage` VALUES ('113', '15', '1勺');
INSERT INTO `dosage` VALUES ('114', '15', '1瓶');
INSERT INTO `dosage` VALUES ('115', '15', '5-6块');
INSERT INTO `dosage` VALUES ('116', '16', '');
INSERT INTO `dosage` VALUES ('117', '16', '2只 5-6两/只');
INSERT INTO `dosage` VALUES ('118', '16', '');
INSERT INTO `dosage` VALUES ('119', '16', '2个');
INSERT INTO `dosage` VALUES ('120', '16', '');
INSERT INTO `dosage` VALUES ('121', '16', '');
INSERT INTO `dosage` VALUES ('122', '16', '');
INSERT INTO `dosage` VALUES ('125', '18', '	少许');
INSERT INTO `dosage` VALUES ('126', '18', '	少许');
INSERT INTO `dosage` VALUES ('127', '18', '	少许');
INSERT INTO `dosage` VALUES ('128', '18', '	少许');
INSERT INTO `dosage` VALUES ('129', '18', '	少许');
INSERT INTO `dosage` VALUES ('130', '18', '	少许');
INSERT INTO `dosage` VALUES ('135', '20', '适量');
INSERT INTO `dosage` VALUES ('136', '20', '适量');
INSERT INTO `dosage` VALUES ('137', '20', '适量');
INSERT INTO `dosage` VALUES ('138', '20', '');
INSERT INTO `dosage` VALUES ('139', '21', '1块');
INSERT INTO `dosage` VALUES ('140', '21', '30克');
INSERT INTO `dosage` VALUES ('141', '21', '300克');
INSERT INTO `dosage` VALUES ('142', '21', '适量');
INSERT INTO `dosage` VALUES ('143', '21', '1个');
INSERT INTO `dosage` VALUES ('144', '21', '少许');
INSERT INTO `dosage` VALUES ('145', '22', '105克');
INSERT INTO `dosage` VALUES ('146', '22', '40克');
INSERT INTO `dosage` VALUES ('147', '22', '135克');
INSERT INTO `dosage` VALUES ('148', '22', '300克');
INSERT INTO `dosage` VALUES ('149', '22', '450克（我用9个鸡蛋，小鸡蛋大概10个）');
INSERT INTO `dosage` VALUES ('150', '22', '100克');
INSERT INTO `dosage` VALUES ('151', '22', '30克');
INSERT INTO `dosage` VALUES ('152', '22', '150克');
INSERT INTO `dosage` VALUES ('153', '22', '轻刷表面，薄薄带过隆起纹路');
INSERT INTO `dosage` VALUES ('154', '23', '3根');
INSERT INTO `dosage` VALUES ('155', '23', '2节');
INSERT INTO `dosage` VALUES ('156', '23', '2个');
INSERT INTO `dosage` VALUES ('157', '23', '5根');
INSERT INTO `dosage` VALUES ('158', '23', '1小块');
INSERT INTO `dosage` VALUES ('159', '24', '1.5g');
INSERT INTO `dosage` VALUES ('160', '24', '50g');
INSERT INTO `dosage` VALUES ('161', '24', '8g');
INSERT INTO `dosage` VALUES ('162', '24', '85g');
INSERT INTO `dosage` VALUES ('163', '24', '20只');
INSERT INTO `dosage` VALUES ('164', '24', '20个');
INSERT INTO `dosage` VALUES ('165', '24', '适量');
INSERT INTO `dosage` VALUES ('166', '24', '适量');
INSERT INTO `dosage` VALUES ('167', '25', '每种3-5个');
INSERT INTO `dosage` VALUES ('168', '25', '1小袋');
INSERT INTO `dosage` VALUES ('169', '25', '1条');
INSERT INTO `dosage` VALUES ('170', '25', '1碗');
INSERT INTO `dosage` VALUES ('171', '25', '3片');
INSERT INTO `dosage` VALUES ('172', '25', '1片');
INSERT INTO `dosage` VALUES ('173', '25', '1根');
INSERT INTO `dosage` VALUES ('174', '25', '1个');
INSERT INTO `dosage` VALUES ('175', '25', '2个');
INSERT INTO `dosage` VALUES ('176', '25', '1小包');
INSERT INTO `dosage` VALUES ('177', '26', '250克');
INSERT INTO `dosage` VALUES ('178', '26', '8朵');
INSERT INTO `dosage` VALUES ('179', '26', '4块');
INSERT INTO `dosage` VALUES ('180', '26', '2根');
INSERT INTO `dosage` VALUES ('181', '26', '2片');
INSERT INTO `dosage` VALUES ('182', '26', '1小碗');
INSERT INTO `dosage` VALUES ('183', '26', '2大勺');
INSERT INTO `dosage` VALUES ('184', '26', '1大勺');
INSERT INTO `dosage` VALUES ('185', '26', '1大勺');
INSERT INTO `dosage` VALUES ('186', '26', '1大勺');
INSERT INTO `dosage` VALUES ('187', '27', '260g');
INSERT INTO `dosage` VALUES ('188', '27', '190g');
INSERT INTO `dosage` VALUES ('189', '27', '40g');
INSERT INTO `dosage` VALUES ('190', '27', '');
INSERT INTO `dosage` VALUES ('191', '28', '');
INSERT INTO `dosage` VALUES ('192', '28', '');
INSERT INTO `dosage` VALUES ('193', '28', '');
INSERT INTO `dosage` VALUES ('194', '28', '');
INSERT INTO `dosage` VALUES ('195', '28', '');
INSERT INTO `dosage` VALUES ('196', '28', '');
INSERT INTO `dosage` VALUES ('197', '28', '');
INSERT INTO `dosage` VALUES ('198', '28', '');
INSERT INTO `dosage` VALUES ('199', '28', '');
INSERT INTO `dosage` VALUES ('200', '29', '');
INSERT INTO `dosage` VALUES ('201', '29', '');
INSERT INTO `dosage` VALUES ('202', '29', '');
INSERT INTO `dosage` VALUES ('203', '30', '');
INSERT INTO `dosage` VALUES ('204', '30', '');
INSERT INTO `dosage` VALUES ('205', '30', '');
INSERT INTO `dosage` VALUES ('206', '30', '');
INSERT INTO `dosage` VALUES ('207', '30', '');
INSERT INTO `dosage` VALUES ('208', '30', '');
INSERT INTO `dosage` VALUES ('209', '30', '');
INSERT INTO `dosage` VALUES ('210', '31', '１只');
INSERT INTO `dosage` VALUES ('211', '31', '');
INSERT INTO `dosage` VALUES ('212', '31', '');
INSERT INTO `dosage` VALUES ('213', '31', '适量');
INSERT INTO `dosage` VALUES ('214', '31', '');
INSERT INTO `dosage` VALUES ('215', '31', '');
INSERT INTO `dosage` VALUES ('216', '31', '');
INSERT INTO `dosage` VALUES ('217', '31', '');
INSERT INTO `dosage` VALUES ('218', '31', '');
INSERT INTO `dosage` VALUES ('227', '34', '适量');
INSERT INTO `dosage` VALUES ('228', '34', '适量');
INSERT INTO `dosage` VALUES ('229', '34', '适量');
INSERT INTO `dosage` VALUES ('230', '34', '适量');
INSERT INTO `dosage` VALUES ('231', '34', '适量');
INSERT INTO `dosage` VALUES ('232', '34', '适量');
INSERT INTO `dosage` VALUES ('233', '35', '适量');
INSERT INTO `dosage` VALUES ('234', '35', '适量');
INSERT INTO `dosage` VALUES ('235', '35', '适量');
INSERT INTO `dosage` VALUES ('236', '35', '适量');
INSERT INTO `dosage` VALUES ('237', '36', '100克');
INSERT INTO `dosage` VALUES ('238', '36', '50克');
INSERT INTO `dosage` VALUES ('239', '36', '50克');
INSERT INTO `dosage` VALUES ('240', '36', '1/2小匙');
INSERT INTO `dosage` VALUES ('241', '36', '适量');
INSERT INTO `dosage` VALUES ('242', '36', '适量');
INSERT INTO `dosage` VALUES ('243', '36', '1小匙');
INSERT INTO `dosage` VALUES ('244', '36', '1小匙');
INSERT INTO `dosage` VALUES ('245', '36', '适量');
INSERT INTO `dosage` VALUES ('246', '36', '1/2小匙');
INSERT INTO `dosage` VALUES ('247', '36', '适量');
INSERT INTO `dosage` VALUES ('248', '37', '1/2小只');
INSERT INTO `dosage` VALUES ('249', '37', '2只');
INSERT INTO `dosage` VALUES ('250', '37', '1条');
INSERT INTO `dosage` VALUES ('251', '37', '1/2小只');
INSERT INTO `dosage` VALUES ('252', '37', '1/4只');
INSERT INTO `dosage` VALUES ('253', '37', '少许');
INSERT INTO `dosage` VALUES ('254', '38', '150克');
INSERT INTO `dosage` VALUES ('255', '38', '50克');
INSERT INTO `dosage` VALUES ('256', '38', '20克');
INSERT INTO `dosage` VALUES ('257', '38', '80克');
INSERT INTO `dosage` VALUES ('258', '38', '500克');
INSERT INTO `dosage` VALUES ('259', '38', '180克');
INSERT INTO `dosage` VALUES ('260', '38', '150克');
INSERT INTO `dosage` VALUES ('261', '38', '20颗');
INSERT INTO `dosage` VALUES ('262', '38', '适量');
INSERT INTO `dosage` VALUES ('263', '38', '适量');
INSERT INTO `dosage` VALUES ('264', '38', '2颗');
INSERT INTO `dosage` VALUES ('265', '39', '60g');
INSERT INTO `dosage` VALUES ('266', '39', '36g');
INSERT INTO `dosage` VALUES ('267', '39', '60g');
INSERT INTO `dosage` VALUES ('268', '39', '60g');
INSERT INTO `dosage` VALUES ('269', '39', '	280g');
INSERT INTO `dosage` VALUES ('270', '39', '60g');
INSERT INTO `dosage` VALUES ('271', '40', '适量');
INSERT INTO `dosage` VALUES ('272', '40', '适量');
INSERT INTO `dosage` VALUES ('273', '40', '');
INSERT INTO `dosage` VALUES ('274', '40', '');
INSERT INTO `dosage` VALUES ('275', '41', '300克');
INSERT INTO `dosage` VALUES ('276', '41', '黄油');
INSERT INTO `dosage` VALUES ('277', '41', '120克');
INSERT INTO `dosage` VALUES ('278', '41', '45克');
INSERT INTO `dosage` VALUES ('279', '41', '2克 ');
INSERT INTO `dosage` VALUES ('280', '41', '8克');
INSERT INTO `dosage` VALUES ('281', '41', '130克');
INSERT INTO `dosage` VALUES ('282', '41', '	20克');
INSERT INTO `dosage` VALUES ('283', '42', '（带肥的）');
INSERT INTO `dosage` VALUES ('284', '42', '适量');
INSERT INTO `dosage` VALUES ('285', '42', '适量');
INSERT INTO `dosage` VALUES ('286', '42', '适量');
INSERT INTO `dosage` VALUES ('287', '42', '适量');
INSERT INTO `dosage` VALUES ('288', '42', '适量');
INSERT INTO `dosage` VALUES ('289', '42', '适量');
INSERT INTO `dosage` VALUES ('290', '42', '适量');
INSERT INTO `dosage` VALUES ('291', '42', '适量');
INSERT INTO `dosage` VALUES ('292', '42', '适量');
INSERT INTO `dosage` VALUES ('293', '43', '一斤');
INSERT INTO `dosage` VALUES ('294', '43', '适量');
INSERT INTO `dosage` VALUES ('295', '43', '少许');
INSERT INTO `dosage` VALUES ('296', '43', '少许');
INSERT INTO `dosage` VALUES ('297', '43', '少许');
INSERT INTO `dosage` VALUES ('298', '43', '少许');
INSERT INTO `dosage` VALUES ('299', '43', '少许');
INSERT INTO `dosage` VALUES ('300', '43', '少许');
INSERT INTO `dosage` VALUES ('301', '43', '少许');
INSERT INTO `dosage` VALUES ('302', '44', '4片');
INSERT INTO `dosage` VALUES ('303', '44', '400克');
INSERT INTO `dosage` VALUES ('304', '44', '5颗');
INSERT INTO `dosage` VALUES ('305', '44', '2颗');
INSERT INTO `dosage` VALUES ('306', '44', '8颗');
INSERT INTO `dosage` VALUES ('307', '44', '2张');
INSERT INTO `dosage` VALUES ('308', '44', '2段');
INSERT INTO `dosage` VALUES ('309', '45', '（约700g）');
INSERT INTO `dosage` VALUES ('310', '45', '	2节');
INSERT INTO `dosage` VALUES ('311', '45', '1块');
INSERT INTO `dosage` VALUES ('312', '45', '');
INSERT INTO `dosage` VALUES ('313', '46', '适量');
INSERT INTO `dosage` VALUES ('314', '46', '适量');
INSERT INTO `dosage` VALUES ('315', '46', '适量');
INSERT INTO `dosage` VALUES ('316', '46', '适量');
INSERT INTO `dosage` VALUES ('317', '46', '适量');
INSERT INTO `dosage` VALUES ('318', '46', '适量');
INSERT INTO `dosage` VALUES ('319', '46', '适量');
INSERT INTO `dosage` VALUES ('320', '47', '15ML');
INSERT INTO `dosage` VALUES ('321', '47', '200G');
INSERT INTO `dosage` VALUES ('322', '47', '40G');
INSERT INTO `dosage` VALUES ('323', '47', '80G');
INSERT INTO `dosage` VALUES ('324', '47', '30G');
INSERT INTO `dosage` VALUES ('325', '47', '200G');
INSERT INTO `dosage` VALUES ('326', '47', '150G');
INSERT INTO `dosage` VALUES ('327', '48', '2块');
INSERT INTO `dosage` VALUES ('328', '48', '2只');
INSERT INTO `dosage` VALUES ('329', '48', '适量');
INSERT INTO `dosage` VALUES ('330', '48', '适量');
INSERT INTO `dosage` VALUES ('331', '49', '');
INSERT INTO `dosage` VALUES ('332', '49', '');
INSERT INTO `dosage` VALUES ('333', '49', '');
INSERT INTO `dosage` VALUES ('334', '49', '');
INSERT INTO `dosage` VALUES ('340', '51', '一朵');
INSERT INTO `dosage` VALUES ('341', '51', '	2个');
INSERT INTO `dosage` VALUES ('342', '51', '适量');
INSERT INTO `dosage` VALUES ('343', '51', '10g');

-- ----------------------------
-- Table structure for `follow`
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `follower_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `follower_fk` (`follower_id`),
  KEY `u_fk` (`user_id`),
  CONSTRAINT `follower_fk` FOREIGN KEY (`follower_id`) REFERENCES `userinfo` (`id`),
  CONSTRAINT `u_fk` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES ('1', '1', '2');
INSERT INTO `follow` VALUES ('4', '2', '4');
INSERT INTO `follow` VALUES ('6', '3', '2');
INSERT INTO `follow` VALUES ('7', '3', '6');
INSERT INTO `follow` VALUES ('8', '3', '1');
INSERT INTO `follow` VALUES ('9', '4', '1');
INSERT INTO `follow` VALUES ('12', '5', '9');
INSERT INTO `follow` VALUES ('14', '6', '1');
INSERT INTO `follow` VALUES ('15', '6', '8');
INSERT INTO `follow` VALUES ('16', '7', '8');
INSERT INTO `follow` VALUES ('17', '1', '8');
INSERT INTO `follow` VALUES ('34', '9', '7');
INSERT INTO `follow` VALUES ('35', '7', '3');
INSERT INTO `follow` VALUES ('38', '3', '7');
INSERT INTO `follow` VALUES ('39', '8', '7');
INSERT INTO `follow` VALUES ('42', '3', '9');
INSERT INTO `follow` VALUES ('50', '7', '16');
INSERT INTO `follow` VALUES ('51', '3', '15');
INSERT INTO `follow` VALUES ('52', '4', '15');
INSERT INTO `follow` VALUES ('53', '6', '3');
INSERT INTO `follow` VALUES ('55', '7', '9');
INSERT INTO `follow` VALUES ('56', '16', '9');
INSERT INTO `follow` VALUES ('57', '9', '3');
INSERT INTO `follow` VALUES ('58', '1', '3');
INSERT INTO `follow` VALUES ('59', '9', '15');

-- ----------------------------
-- Table structure for `material`
-- ----------------------------
DROP TABLE IF EXISTS `material`;
CREATE TABLE `material` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods` varchar(2000) DEFAULT NULL,
  `recipe_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recipe_fk` (`recipe_id`),
  CONSTRAINT `recipe_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=363 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of material
-- ----------------------------
INSERT INTO `material` VALUES ('14', '鸡翅', '3');
INSERT INTO `material` VALUES ('15', '可乐', '3');
INSERT INTO `material` VALUES ('16', '酱油', '3');
INSERT INTO `material` VALUES ('17', '葱', '3');
INSERT INTO `material` VALUES ('18', '姜', '3');
INSERT INTO `material` VALUES ('19', '盐', '3');
INSERT INTO `material` VALUES ('20', '花椒，大料，干辣椒', '3');
INSERT INTO `material` VALUES ('21', '带皮带骨鸡大腿', '4');
INSERT INTO `material` VALUES ('22', '粗盐（kosher salt）', '4');
INSERT INTO `material` VALUES ('23', '有机动物油（猪油，牛油，鹅油，鸭油都可以）', '4');
INSERT INTO `material` VALUES ('24', '盐酥鸡粉', '4');
INSERT INTO `material` VALUES ('25', '排骨', '5');
INSERT INTO `material` VALUES ('26', '啤酒', '5');
INSERT INTO `material` VALUES ('27', '花椒', '5');
INSERT INTO `material` VALUES ('28', '干辣椒', '5');
INSERT INTO `material` VALUES ('29', '酱油', '5');
INSERT INTO `material` VALUES ('30', '糖', '5');
INSERT INTO `material` VALUES ('31', '盐', '5');
INSERT INTO `material` VALUES ('32', '生姜片', '5');
INSERT INTO `material` VALUES ('33', '生抽', '5');
INSERT INTO `material` VALUES ('34', '内酯豆腐', '6');
INSERT INTO `material` VALUES ('35', '鸡蛋', '6');
INSERT INTO `material` VALUES ('36', '西兰花（熟）', '6');
INSERT INTO `material` VALUES ('37', '生抽', '6');
INSERT INTO `material` VALUES ('38', '白胡椒', '6');
INSERT INTO `material` VALUES ('39', '鸡腿', '7');
INSERT INTO `material` VALUES ('40', '香菇', '7');
INSERT INTO `material` VALUES ('41', '尖椒', '7');
INSERT INTO `material` VALUES ('42', '新鲜小红椒', '7');
INSERT INTO `material` VALUES ('43', '洋葱', '7');
INSERT INTO `material` VALUES ('44', '葱段', '7');
INSERT INTO `material` VALUES ('45', '姜片', '7');
INSERT INTO `material` VALUES ('46', '酱油', '7');
INSERT INTO `material` VALUES ('47', '料酒', '7');
INSERT INTO `material` VALUES ('48', '白糖', '7');
INSERT INTO `material` VALUES ('49', '白胡椒粉', '7');
INSERT INTO `material` VALUES ('50', '清水', '7');
INSERT INTO `material` VALUES ('51', '青口（海虹', '8');
INSERT INTO `material` VALUES ('52', '李锦记蒜蓉豆豉酱', '8');
INSERT INTO `material` VALUES ('53', '食用油', '8');
INSERT INTO `material` VALUES ('54', '葱', '8');
INSERT INTO `material` VALUES ('55', '姜	\r\n蒜	\r\n（糖）	\r\n（豆瓣酱）', '8');
INSERT INTO `material` VALUES ('56', '扁豆', '9');
INSERT INTO `material` VALUES ('57', '猪肉丁', '9');
INSERT INTO `material` VALUES ('58', '香菇干', '9');
INSERT INTO `material` VALUES ('59', '虾米（没有可不加）', '9');
INSERT INTO `material` VALUES ('60', '扁豆籽（没有可不加）', '9');
INSERT INTO `material` VALUES ('61', '大米', '9');
INSERT INTO `material` VALUES ('62', '鸡肉', '10');
INSERT INTO `material` VALUES ('63', '洋葱', '10');
INSERT INTO `material` VALUES ('64', '蘑菇', '10');
INSERT INTO `material` VALUES ('65', '蒜', '10');
INSERT INTO `material` VALUES ('66', '青豆', '10');
INSERT INTO `material` VALUES ('67', '奶油/奶', '10');
INSERT INTO `material` VALUES ('68', '鸡蛋', '10');
INSERT INTO `material` VALUES ('69', '白葡萄酒', '10');
INSERT INTO `material` VALUES ('70', '牛肉汤块', '10');
INSERT INTO `material` VALUES ('71', '香叶', '10');
INSERT INTO `material` VALUES ('72', '番茄酱（自制番茄糊+市售番茄酱）	全用番茄糊或番茄酱也可，根据口味调整', '10');
INSERT INTO `material` VALUES ('73', '米饭', '10');
INSERT INTO `material` VALUES ('74', '意大利面', '11');
INSERT INTO `material` VALUES ('75', '芦笋', '11');
INSERT INTO `material` VALUES ('76', '蘑菇', '11');
INSERT INTO `material` VALUES ('77', '洋葱', '11');
INSERT INTO `material` VALUES ('78', '三文鱼', '11');
INSERT INTO `material` VALUES ('79', '淡奶油', '11');
INSERT INTO `material` VALUES ('80', '黑胡椒碎、盐', '11');
INSERT INTO `material` VALUES ('81', '饼干底', '12');
INSERT INTO `material` VALUES ('82', '消化饼干', '12');
INSERT INTO `material` VALUES ('83', '无盐黄油', '12');
INSERT INTO `material` VALUES ('84', '糖粉', '12');
INSERT INTO `material` VALUES ('85', '熟的黑芝麻', '12');
INSERT INTO `material` VALUES ('86', '盐', '12');
INSERT INTO `material` VALUES ('87', '乳酪糊', '12');
INSERT INTO `material` VALUES ('88', '奶油奶酪', '12');
INSERT INTO `material` VALUES ('89', '酸奶油', '12');
INSERT INTO `material` VALUES ('90', '糖', '12');
INSERT INTO `material` VALUES ('91', '鸡蛋（室温）', '12');
INSERT INTO `material` VALUES ('92', '香草精', '12');
INSERT INTO `material` VALUES ('93', '抹茶粉', '12');
INSERT INTO `material` VALUES ('94', '黑芝麻粉', '12');
INSERT INTO `material` VALUES ('95', '低粉', '12');
INSERT INTO `material` VALUES ('96', '表面装饰的黑芝麻和抹茶粉', '12');
INSERT INTO `material` VALUES ('102', '鸡蛋', '14');
INSERT INTO `material` VALUES ('103', '可可粉', '14');
INSERT INTO `material` VALUES ('104', '柠檬汁', '14');
INSERT INTO `material` VALUES ('105', '红糖（蛋黄）', '14');
INSERT INTO `material` VALUES ('106', '白糖（蛋清）', '14');
INSERT INTO `material` VALUES ('107', '牛奶', '14');
INSERT INTO `material` VALUES ('108', '低筋面粉', '14');
INSERT INTO `material` VALUES ('109', '红曲粉', '14');
INSERT INTO `material` VALUES ('110', '香蕉', '14');
INSERT INTO `material` VALUES ('111', '玉米油', '14');
INSERT INTO `material` VALUES ('112', '西柚', '15');
INSERT INTO `material` VALUES ('113', '养乐多', '15');
INSERT INTO `material` VALUES ('114', '冰块', '15');
INSERT INTO `material` VALUES ('115', '蜂蜜', '15');
INSERT INTO `material` VALUES ('116', '梭子蟹', '16');
INSERT INTO `material` VALUES ('117', '咸蛋黄', '16');
INSERT INTO `material` VALUES ('118', '生粉', '16');
INSERT INTO `material` VALUES ('119', '色拉油', '16');
INSERT INTO `material` VALUES ('120', '盐', '16');
INSERT INTO `material` VALUES ('121', '生姜', '16');
INSERT INTO `material` VALUES ('122', '料酒', '16');
INSERT INTO `material` VALUES ('125', '半肥瘦猪肉', '18');
INSERT INTO `material` VALUES ('126', '虾仁', '18');
INSERT INTO `material` VALUES ('127', '云吞皮', '18');
INSERT INTO `material` VALUES ('128', '腌料', '18');
INSERT INTO `material` VALUES ('129', '盐', '18');
INSERT INTO `material` VALUES ('130', '生抽', '18');
INSERT INTO `material` VALUES ('135', '秋葵', '20');
INSERT INTO `material` VALUES ('136', '蒜蓉', '20');
INSERT INTO `material` VALUES ('137', '油，盐，糖，酱油，清水', '20');
INSERT INTO `material` VALUES ('138', '', '20');
INSERT INTO `material` VALUES ('139', ' 薏米', '21');
INSERT INTO `material` VALUES ('140', '冬瓜', '21');
INSERT INTO `material` VALUES ('141', '鸡骨架', '21');
INSERT INTO `material` VALUES ('142', '姜', '21');
INSERT INTO `material` VALUES ('143', '盐', '21');
INSERT INTO `material` VALUES ('144', '胡椒粉', '21');
INSERT INTO `material` VALUES ('145', '转化糖浆', '22');
INSERT INTO `material` VALUES ('146', 'A:鸡蛋液（全蛋）', '22');
INSERT INTO `material` VALUES ('147', '玉米油', '22');
INSERT INTO `material` VALUES ('148', '中筋面粉', '22');
INSERT INTO `material` VALUES ('149', '纯白莲蓉（我用广州酒家品牌）', '22');
INSERT INTO `material` VALUES ('150', '细砂糖', '22');
INSERT INTO `material` VALUES ('151', '杏仁粉', '22');
INSERT INTO `material` VALUES ('152', '全脂奶粉', '22');
INSERT INTO `material` VALUES ('153', '蛋黄液加少许水稀释', '22');
INSERT INTO `material` VALUES ('154', ' 鲜藕', '23');
INSERT INTO `material` VALUES ('155', '青椒', '23');
INSERT INTO `material` VALUES ('156', '干红辣椒', '23');
INSERT INTO `material` VALUES ('157', '生姜', '23');
INSERT INTO `material` VALUES ('158', '小葱', '23');
INSERT INTO `material` VALUES ('159', '低筋面粉', '24');
INSERT INTO `material` VALUES ('160', '泡打粉', '24');
INSERT INTO `material` VALUES ('161', '澄粉', '24');
INSERT INTO `material` VALUES ('162', '水', '24');
INSERT INTO `material` VALUES ('163', '鲜虾', '24');
INSERT INTO `material` VALUES ('164', '鹌鹑蛋', '24');
INSERT INTO `material` VALUES ('165', '海苔粉', '24');
INSERT INTO `material` VALUES ('166', '沙拉酱', '24');
INSERT INTO `material` VALUES ('167', '樱桃水萝卜', '25');
INSERT INTO `material` VALUES ('168', ' 暖男厨房肉丸三拼', '25');
INSERT INTO `material` VALUES ('169', '沙茶酱', '25');
INSERT INTO `material` VALUES ('170', '面包', '25');
INSERT INTO `material` VALUES ('171', '米饭', '25');
INSERT INTO `material` VALUES ('172', '生菜', '25');
INSERT INTO `material` VALUES ('173', '樱桃西红柿', '25');
INSERT INTO `material` VALUES ('174', '奶酪片', '25');
INSERT INTO `material` VALUES ('175', '香葱', '25');
INSERT INTO `material` VALUES ('176', '拌饭海苔碎', '25');
INSERT INTO `material` VALUES ('177', '白糖', '26');
INSERT INTO `material` VALUES ('178', ' 猪肉', '26');
INSERT INTO `material` VALUES ('179', '香菇', '26');
INSERT INTO `material` VALUES ('180', '香干', '26');
INSERT INTO `material` VALUES ('181', '茭白', '26');
INSERT INTO `material` VALUES ('182', '毛豆米', '26');
INSERT INTO `material` VALUES ('183', '生姜', '26');
INSERT INTO `material` VALUES ('184', '甜面酱', '26');
INSERT INTO `material` VALUES ('185', '辣豆瓣酱', '26');
INSERT INTO `material` VALUES ('186', '黄酒', '26');
INSERT INTO `material` VALUES ('187', '稀奶油', '27');
INSERT INTO `material` VALUES ('188', '砂糖', '27');
INSERT INTO `material` VALUES ('189', '黄油', '27');
INSERT INTO `material` VALUES ('190', '可可粉', '27');
INSERT INTO `material` VALUES ('191', '', '28');
INSERT INTO `material` VALUES ('192', '', '28');
INSERT INTO `material` VALUES ('193', '糖', '28');
INSERT INTO `material` VALUES ('194', '西柚汁', '28');
INSERT INTO `material` VALUES ('195', '', '28');
INSERT INTO `material` VALUES ('196', '西柚果', '28');
INSERT INTO `material` VALUES ('197', '冰块', '28');
INSERT INTO `material` VALUES ('198', '茉香绿茶', '28');
INSERT INTO `material` VALUES ('199', '', '28');
INSERT INTO `material` VALUES ('200', '西柚', '29');
INSERT INTO `material` VALUES ('201', '酸奶', '29');
INSERT INTO `material` VALUES ('202', '蜂蜜', '29');
INSERT INTO `material` VALUES ('203', '', '30');
INSERT INTO `material` VALUES ('204', '', '30');
INSERT INTO `material` VALUES ('205', '', '30');
INSERT INTO `material` VALUES ('206', '', '30');
INSERT INTO `material` VALUES ('207', '西柚', '30');
INSERT INTO `material` VALUES ('208', '蜂蜜', '30');
INSERT INTO `material` VALUES ('209', '水', '30');
INSERT INTO `material` VALUES ('210', '新鲜鸡腿', '31');
INSERT INTO `material` VALUES ('211', '大米', '31');
INSERT INTO `material` VALUES ('212', '水', '31');
INSERT INTO `material` VALUES ('213', '盐', '31');
INSERT INTO `material` VALUES ('214', '香葱末', '31');
INSERT INTO `material` VALUES ('215', '花椒', '31');
INSERT INTO `material` VALUES ('216', '八角', '31');
INSERT INTO `material` VALUES ('217', '料酒', '31');
INSERT INTO `material` VALUES ('218', '姜', '31');
INSERT INTO `material` VALUES ('227', ' 蔬菜', '34');
INSERT INTO `material` VALUES ('228', '水果', '34');
INSERT INTO `material` VALUES ('229', '坚果', '34');
INSERT INTO `material` VALUES ('230', '奶酪', '34');
INSERT INTO `material` VALUES ('231', '肉肉', '34');
INSERT INTO `material` VALUES ('232', '调料', '34');
INSERT INTO `material` VALUES ('233', '蔬菜', '35');
INSERT INTO `material` VALUES ('234', '蛋白质类', '35');
INSERT INTO `material` VALUES ('235', '	 肉类', '35');
INSERT INTO `material` VALUES ('236', '', '35');
INSERT INTO `material` VALUES ('237', '色拉油', '36');
INSERT INTO `material` VALUES ('238', ' 莲藕', '36');
INSERT INTO `material` VALUES ('239', '黑木耳', '36');
INSERT INTO `material` VALUES ('240', '荷兰豆', '36');
INSERT INTO `material` VALUES ('241', '胡萝卜', '36');
INSERT INTO `material` VALUES ('242', '大蒜', '36');
INSERT INTO `material` VALUES ('243', '盐', '36');
INSERT INTO `material` VALUES ('244', '鸡精', '36');
INSERT INTO `material` VALUES ('245', '糖', '36');
INSERT INTO `material` VALUES ('246', '白醋', '36');
INSERT INTO `material` VALUES ('247', '香油', '36');
INSERT INTO `material` VALUES ('248', ' 鸡蛋', '37');
INSERT INTO `material` VALUES ('249', '培根', '37');
INSERT INTO `material` VALUES ('250', '红辣椒', '37');
INSERT INTO `material` VALUES ('251', '青辣椒', '37');
INSERT INTO `material` VALUES ('252', '洋葱', '37');
INSERT INTO `material` VALUES ('253', '面粉', '37');
INSERT INTO `material` VALUES ('254', '黑芝麻', '38');
INSERT INTO `material` VALUES ('255', '中筋面粉', '38');
INSERT INTO `material` VALUES ('256', '低筋面粉', '38');
INSERT INTO `material` VALUES ('257', '糖粉', '38');
INSERT INTO `material` VALUES ('258', '猪油', '38');
INSERT INTO `material` VALUES ('259', '低筋面粉', '38');
INSERT INTO `material` VALUES ('260', '蜜红豆', '38');
INSERT INTO `material` VALUES ('261', '无盐黄油', '38');
INSERT INTO `material` VALUES ('262', '咸蛋黄', '38');
INSERT INTO `material` VALUES ('263', '玉米油', '38');
INSERT INTO `material` VALUES ('264', '蛋黄', '38');
INSERT INTO `material` VALUES ('265', '澄面（白鹤）', '39');
INSERT INTO `material` VALUES ('266', '糖粉', '39');
INSERT INTO `material` VALUES ('267', '糯米粉（三象）', '39');
INSERT INTO `material` VALUES ('268', '粘米粉（三象）', '39');
INSERT INTO `material` VALUES ('269', '牛奶or果蔬汁', '39');
INSERT INTO `material` VALUES ('270', '玉米油', '39');
INSERT INTO `material` VALUES ('271', '各类蔬菜', '40');
INSERT INTO `material` VALUES ('272', '低脂肪肉类', '40');
INSERT INTO `material` VALUES ('273', '', '40');
INSERT INTO `material` VALUES ('274', '', '40');
INSERT INTO `material` VALUES ('275', '黄油', '41');
INSERT INTO `material` VALUES ('276', '低筋面粉', '41');
INSERT INTO `material` VALUES ('277', '糖粉', '41');
INSERT INTO `material` VALUES ('278', '鸡蛋液', '41');
INSERT INTO `material` VALUES ('279', '盐', '41');
INSERT INTO `material` VALUES ('280', '糖粉', '41');
INSERT INTO `material` VALUES ('281', '蛋白粉', '41');
INSERT INTO `material` VALUES ('282', '凉开水', '41');
INSERT INTO `material` VALUES ('283', '八角', '42');
INSERT INTO `material` VALUES ('284', ' 牛肉', '42');
INSERT INTO `material` VALUES ('285', '面条', '42');
INSERT INTO `material` VALUES ('286', '青菜', '42');
INSERT INTO `material` VALUES ('287', '番茄', '42');
INSERT INTO `material` VALUES ('288', '辣椒丝', '42');
INSERT INTO `material` VALUES ('289', '大蒜', '42');
INSERT INTO `material` VALUES ('290', '生姜', '42');
INSERT INTO `material` VALUES ('291', '香叶', '42');
INSERT INTO `material` VALUES ('292', '陈皮', '42');
INSERT INTO `material` VALUES ('293', ' 牛蛙', '43');
INSERT INTO `material` VALUES ('294', '土豆', '43');
INSERT INTO `material` VALUES ('295', '莴苣', '43');
INSERT INTO `material` VALUES ('296', '香菜', '43');
INSERT INTO `material` VALUES ('297', '干辣椒', '43');
INSERT INTO `material` VALUES ('298', '葱姜', '43');
INSERT INTO `material` VALUES ('299', '大蒜', '43');
INSERT INTO `material` VALUES ('300', '白胡椒粉', '43');
INSERT INTO `material` VALUES ('301', '川湘辣酱', '43');
INSERT INTO `material` VALUES ('302', '带鱼', '44');
INSERT INTO `material` VALUES ('303', '大蒜', '44');
INSERT INTO `material` VALUES ('304', '生姜', '44');
INSERT INTO `material` VALUES ('305', '八角', '44');
INSERT INTO `material` VALUES ('306', '花椒', '44');
INSERT INTO `material` VALUES ('307', '香叶', '44');
INSERT INTO `material` VALUES ('308', '大葱', '44');
INSERT INTO `material` VALUES ('309', ' 排骨', '45');
INSERT INTO `material` VALUES ('310', '莲藕', '45');
INSERT INTO `material` VALUES ('311', '生姜', '45');
INSERT INTO `material` VALUES ('312', '', '45');
INSERT INTO `material` VALUES ('313', ' 芹菜', '46');
INSERT INTO `material` VALUES ('314', '胡萝卜', '46');
INSERT INTO `material` VALUES ('315', '大葱', '46');
INSERT INTO `material` VALUES ('316', '猪肉', '46');
INSERT INTO `material` VALUES ('317', '生姜', '46');
INSERT INTO `material` VALUES ('318', '食用油', '46');
INSERT INTO `material` VALUES ('319', '小海米', '46');
INSERT INTO `material` VALUES ('320', ' 蓝莓酱	 蓝莓', '47');
INSERT INTO `material` VALUES ('321', '白砂糖', '47');
INSERT INTO `material` VALUES ('322', '柠檬汁', '47');
INSERT INTO `material` VALUES ('323', '奥利奥（去掉夹心）', '47');
INSERT INTO `material` VALUES ('324', '黄油（融化）', '47');
INSERT INTO `material` VALUES ('325', '奶油奶酪', '47');
INSERT INTO `material` VALUES ('326', '浓稠酸奶（或老酸奶）', '47');
INSERT INTO `material` VALUES ('327', ' 牛排', '48');
INSERT INTO `material` VALUES ('328', '杏鲍菇', '48');
INSERT INTO `material` VALUES ('329', '橄榄油、生抽', '48');
INSERT INTO `material` VALUES ('330', '研磨盐、黑胡椒、白砂糖', '48');
INSERT INTO `material` VALUES ('331', '菠菜汁', '49');
INSERT INTO `material` VALUES ('332', '鸡蛋液', '49');
INSERT INTO `material` VALUES ('333', '淡奶油', '49');
INSERT INTO `material` VALUES ('334', '高筋粉', '49');
INSERT INTO `material` VALUES ('340', '银耳', '51');
INSERT INTO `material` VALUES ('341', '紫薯', '51');
INSERT INTO `material` VALUES ('342', '冰糖', '51');
INSERT INTO `material` VALUES ('343', '蔓越莓', '51');

-- ----------------------------
-- Table structure for `province`
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `pycode` varchar(45) DEFAULT NULL COMMENT '拼音\n',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='省份表';

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', '北京市', '110000');
INSERT INTO `province` VALUES ('2', '天津市', '120000');
INSERT INTO `province` VALUES ('3', '河北省', '130000');
INSERT INTO `province` VALUES ('4', '山西省', '140000');
INSERT INTO `province` VALUES ('5', '内蒙古自治区', '150000');
INSERT INTO `province` VALUES ('6', '辽宁省', '210000');
INSERT INTO `province` VALUES ('7', '吉林省', '220000');
INSERT INTO `province` VALUES ('8', '黑龙江省', '230000');
INSERT INTO `province` VALUES ('9', '上海市', '310000');
INSERT INTO `province` VALUES ('10', '江苏省', '320000');
INSERT INTO `province` VALUES ('11', '浙江省', '330000');
INSERT INTO `province` VALUES ('12', '安徽省', '340000');
INSERT INTO `province` VALUES ('13', '福建省', '350000');
INSERT INTO `province` VALUES ('14', '江西省', '360000');
INSERT INTO `province` VALUES ('15', '山东省', '370000');
INSERT INTO `province` VALUES ('16', '河南省', '410000');
INSERT INTO `province` VALUES ('17', '湖北省', '420000');
INSERT INTO `province` VALUES ('18', '湖南省', '430000');
INSERT INTO `province` VALUES ('19', '广东省', '440000');
INSERT INTO `province` VALUES ('20', '广西壮族自治区', '450000');
INSERT INTO `province` VALUES ('21', '海南省', '460000');
INSERT INTO `province` VALUES ('22', '重庆市', '500000');
INSERT INTO `province` VALUES ('23', '四川省', '510000');
INSERT INTO `province` VALUES ('24', '贵州省', '520000');
INSERT INTO `province` VALUES ('25', '云南省', '530000');
INSERT INTO `province` VALUES ('26', '西藏自治区', '540000');
INSERT INTO `province` VALUES ('27', '陕西省', '610000');
INSERT INTO `province` VALUES ('28', '甘肃省', '620000');
INSERT INTO `province` VALUES ('29', '青海省', '630000');
INSERT INTO `province` VALUES ('30', '宁夏回族自治区', '640000');
INSERT INTO `province` VALUES ('31', '新疆维吾尔自治区', '650000');
INSERT INTO `province` VALUES ('32', '台湾省', '710000');
INSERT INTO `province` VALUES ('33', '香港特别行政区', '810000');
INSERT INTO `province` VALUES ('34', '澳门特别行政区', '820000');

-- ----------------------------
-- Table structure for `recipes`
-- ----------------------------
DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `cover_pic` varchar(200) DEFAULT NULL,
  `descripe` text,
  `cook_times` int(11) DEFAULT '0',
  `collect_times` int(11) DEFAULT '0',
  `creater_id` int(11) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `tips` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `creater_fk` (`creater_id`),
  CONSTRAINT `creater_fk` FOREIGN KEY (`creater_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recipes
-- ----------------------------
INSERT INTO `recipes` VALUES ('3', '可乐鸡翅', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E5%8F%AF%E4%B9%90%E9%B8%A1%E7%BF%85.jpg-660420', '甜咸口的菜一般都会很受欢迎~这道菜我真是从小爱到大呢~', '108', '12', '2', '2017-09-13', '炖到鸡翅完全熟透的时候可以转大火，快速收汁。');
INSERT INTO `recipes` VALUES ('4', '盐酥大鸡腿', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E7%9B%90%E9%85%A5%E5%A4%A7%E9%B8%A1%E6%8E%92.png', '自从在中超买了盐酥鸡粉就再也看不上其他调料。原方来自nomnompaleo，我调整了一下时间和调料配比，她是一位很棒的chef，但是连美国人都反映她的很多recipe太咸了。所以我调整了一下。\r\n\r\n注意鸡大腿是鸡腿根部那一大块，不是我们平时吃的鸡小腿（棒槌状的那块）。建议带皮煎，记得买质量好的鸡肉哈', '6', '21', '2', '2017-09-01', '粗盐和细盐的用量不一样，国内大部分是细盐，请再减去一半的量。\r\n火力我是按自己的电炉来判断的，国内小伙伴请用中火\r\n');
INSERT INTO `recipes` VALUES ('5', '啤酒烧排骨', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E5%95%A4%E9%85%92%E7%83%A7%E6%8E%92%E9%AA%A8.png', '排骨用啤酒炖，很香～', '1235', '3', '3', '2017-08-09', '1用的调料尽量少，凸显啤酒的清香，排骨的原汁原味。啤酒其实没有什么限定的牌子，我用的青岛啤酒。\r\n2如果喜欢酥烂的排骨，就是连骨头一起可以嚼嚼的（偷笑）那就都烧长些时间，注意观察锅中的水量，不够要再及时添些，以免烧干啦。');
INSERT INTO `recipes` VALUES ('6', '\r\n五分钟鸡蛋豆腐羹', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E9%B8%A1%E8%9B%8B%E8%B1%86%E8%85%90%E7%BE%B9.jpg-660x488', '大星大米随便你的厨房  大星大米随便你  \r\n西兰花 两鸡蛋 嫩豆腐 早上一碗我够了(^^)\r\n感觉有点好吃阿 吃一口下一勺就挖进去了 \r\n还！不！怕！胖！\r\n早上起不来不要紧 我微波个豆腐给你吃阿d(￣ ￣)\r\n\r\n来到即赚到！\r\n附送盒装豆腐脱模大法 夏天凉菜凹了个造型', '606', '54', '3', '2017-07-05', '\r\n不要放生的西兰花阿！\r\n重口味可以试试加勺老干妈阿！\r\n不然你可以扯点火腿进去阿！\r\n想要营养更多可以加胡萝卜碎玉米粒阿！');
INSERT INTO `recipes` VALUES ('7', '\r\n永不失败之黄焖鸡', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E6%B0%B8%E4%B8%8D%E5%A4%B1%E8%B4%A5%E4%B9%8B%E9%BB%84%E7%84%96%E9%B8%A1.jpg-660420', '老公亲自评测 说比外面的黄焖鸡还好吃   光是汤汁泡饭 就能吃两大碗\r\n我是小土堆er  首先谢谢你们喜欢我的菜谱\r\n我非常热爱美食和烘焙分享 喜欢的小伙伴可以', '844', '52', '7', '2017-09-06', null);
INSERT INTO `recipes` VALUES ('8', '\r\n酱爆青口', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E9%85%B1%E7%88%86%E9%9D%92%E5%8F%A3.jpg-660420', '秋天来了，肥美的青口终于也在荷兰上市了。打折时候4欧2kg，简直比白菜都要便宜了，现在不吃什么时候吃？李锦记的蒜蓉豆豉酱实在是和海鲜绝配，多姜多葱爆炒简直是大排档复刻~', '68', '5', '7', '2017-04-11', '1. 大火爆炒，使劲翻匀！ \r\n2. 味道一定要够，但也要注意，豆豉酱豆瓣酱都是很咸的东西，都放的时候一定要掌握住度。 \r\n3. 加点糖加点点料酒有助提鲜。 \r\n4. 活青口的买回来拿淡盐水养一养，有助于吐沙。死的也尽量多拿清水泡一泡，不放心的拿硬刷子再使劲刷洗刷洗。\r\n');
INSERT INTO `recipes` VALUES ('9', '家乡扁豆肉饭', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png', '我相信这是每个南通人在家都会吃到的焖饭。我最爱吃的饭～\r\n做法非常简单，我小时候可是吃过十碗的。\r\n除了常规的扁豆、大米、肉丁以外，还要加入香菇、虾米、扁豆籽，我们家都是这么做的，不过扁豆籽不是人人都爱吃的哦，可以不加，而且也不是那么好买到的。', '110', '52', '1', '2016-12-30', '煮饭的水一定要比平时少！\r\n肉的汤汁要多一点，才有味。！\r\n豆子口感不是每个人都喜欢可以不放。\r\n扁豆可以用缸豆替换。\r\n太简单…没有贴士了');
INSERT INTO `recipes` VALUES ('10', '超正宗日式蛋包饭', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E8%B6%85%E6%AD%A3%E5%AE%97%E6%97%A5%E5%BC%8F%E8%9B%8B%E5%8C%85%E9%A5%AD.jpg-660420', '看似简单的蛋包饭也有大学问~\r\n在日本留学的小伙伴推荐给我看的《cooking with dog》，说是很好味道的做法~\r\n用料讲究但是很家常，做法改变一小步让你的蛋包饭更美味哦！！', '3720', '123', '1', '2017-07-19', '小贴士\r\n1.蛋包饭内容也可以自己发挥~~ \r\n2.摊蛋皮火要小，因为新手来说比较容易糊锅~~ \r\n3.步骤用了视频中的截图~成品图是自己做的~');
INSERT INTO `recipes` VALUES ('11', '三文鱼奶油意面', 'http://owil6n9af.bkt.clouddn.com/%E5%A5%B6%E6%B2%B9%E6%84%8F%E5%A4%A7%E5%88%A9%E9%9D%A2.jpg', '做一盘简单快手又有颜值的三文鱼奶油意面和家人朋友一起分享吧！\r\n香浓的奶油酱汁包裹着香嫩大块的三文鱼和意面，一口吃下去再满足不过了！', '74', '42', '2', '2017-08-08', null);
INSERT INTO `recipes` VALUES ('12', '和风抹茶黑芝麻乳酪蛋糕', 'http://owil6n9af.bkt.clouddn.com/ade8018288a211e6a9a10242ac110002_3594w_2396h.jpg', '如果你喜欢黑芝麻的醇香，又喜欢抹茶的清新，那么这款乳酪蛋糕融合了和风甜点的两大要素。丰富的口感请一定要尝试一下哦！\r\n\r\n配方来自于一个做烘焙很棒的华裔帅哥Hungry rabbit，我自己有修改。\r\n\r\n菜谱里用到的酸奶油sour cream，是一种发酵奶油，国内比较难买到。', '273', '23', '2', '2017-06-06', '酸奶油有两种方法自制：（我个人推荐第二种方法）\r\n1.在一个小碗里倒入淡奶油（200ml）和柠檬汁（2茶匙），稍微搅拌一下，室温下放置30分钟以上，奶油会变得浓稠，这时就可以使用了。\r\n2.无菌容器里倒入动物性淡奶油200ml,原味酸奶1大勺。将两者混合均匀，容器密封放温暖的地方发酵8小时以上（夏天放室温就可以，冬天可以放在暖气片或者酸奶机里）制作完成后就可以使用了。密封放冰箱冷藏可保寸1周左右。');
INSERT INTO `recipes` VALUES ('14', '红丝绒香蕉戚风蛋糕', 'http://owkq4s9d1.bkt.clouddn.com/1506470791956.jpeg', '香甜、软滑的香蕉，不仅味美，药用价值也不少：其含有一定量5-羟色胺及合成5-羟色胺的物质，能使人心境变得舒畅，有助防治抑郁症，还能预防心血管疾病。\r\n 红丝绒蛋糕的质感与华丽，真是让人欲罢不能。以红曲粉代替色素，加点可可粉中和了红曲粉的微苦，这款高贵典雅蛋糕胚子口感温润有弹性并带着淡淡的可可香气，又有香甜的果味。', '5', '42', '3', '2017-09-27', '1.关于鸡蛋：我用的是小个土鸡蛋，大个带壳60克以上的用2个就可以了；\r\n2.制作戚风，一定要使用无味的植物油，不可用花生油或橄榄油，会破坏口感。也不可替换成黄油，会影响戚风的质地；\r\n3.低粉最好过筛一遍成品更松软；\r\n4.鸡蛋要事先冷藏，分离蛋黄蛋清，分别放在干净无油无油的盆中；\r\n5.蛋白霜与蛋黄糊往一起混合时手法是切拌，就像炒菜一样，从盆底翻起，再用刮刀切，这样混合不容易消泡，但手法一定要快；\r\n6.烤箱请提前预热10分钟，烘烤时间和温度依自家烤箱的性能调整，观察蛋糕表面上色即可，勿烤糊表面。温度时间仅供参考，要根据自己家烤箱温度来调整。\r\n7.烤好后立刻把蛋糕从烤箱中取出。倒扣晾凉。等蛋糕彻底凉后，用牙签划边，脱模即可。');
INSERT INTO `recipes` VALUES ('15', '西柚养乐多果昔', 'http://owkq4s9d1.bkt.clouddn.com/1506474285750.jpeg', '最近一直沉迷在养乐多打一切的迷恋中，各种水果打养乐多，西柚养乐多当然也是美味，而且瘦身，巴不得天天喝', '9', '15', '9', '2017-09-27', '也可以不加冰块');
INSERT INTO `recipes` VALUES ('16', '咸蛋黄焗蟹', 'http://owkq4s9d1.bkt.clouddn.com/1506475129683.jpeg', '咸蛋黄有超多的铁杆粉丝，在大多数人心里，被咸蛋黄焗过的材料都超级好吃，当然这道咸蛋黄焗海蟹也不例外，咸蛋黄金沙般的包裹，带来的不仅是诱人的外观，更是无法言语的美味。', '23', '16', '7', '2017-09-27', '1、螃蟹身切四块就可以，不需要切太细，留蟹脚脚尖部分\r\n2、沾生粉：小碗装些淀粉，拿螃蟹块在上面沾几下就可以，不需要沾很多\r\n3、炒咸蛋黄时用新油，别用炸过螃蟹的油，影响色泽，再放一点细盐，否则味道会比较淡\r\n\r\n挑梭子蟹方法\r\n第一步:  掂\r\n螃蟹拿在手里是否有分量。\r\n第二步：看\r\n质量好的梭子蟹背壳呈褐色或紫色，纹理清晰有光泽。\r\n拿起来看蟹背两个尖角的地方，透明状明显的，说明里面没什么货色。\r\n看肚脐部分（三角区）的颜色略深的，挑呈黄色或者偏红的，舟山人讲这样的蟹老结。\r\n看肚脐与蟹壳连接的部分是否饱满，或者是有点突出的，突出部位越宽蟹越好\r\n第三步：捏\r\n小的蟹脚与身体连接部位，肉弹出的，捏起来紧实，提起蟹体时蟹足不松弛下垂。\r\n捏肚脐是否紧实，肚脐部位壳硬的好');
INSERT INTO `recipes` VALUES ('18', '鲜虾云吞', 'http://owkq4s9d1.bkt.clouddn.com/1506491709223.jpeg', '猪肉加鲜虾的云吞，美味，很有广东的特色，皮薄（现成买的皮），料足，后面一个标志性的大尾巴，一口下去~打动你的味蕾！', '14', '1', '15', '2017-09-27', '版权归作者所有，没有作者本人的书面许可任何人不得转载或使用整体或任何部分的内容。\r\n');
INSERT INTO `recipes` VALUES ('20', '蒜蓉秋葵', 'http://owkq4s9d1.bkt.clouddn.com/1506511890172.jpeg', '秋葵营养丰富，吃法很多，我独爱这一种。', '4', '0', '15', '2017-09-27', '好喜欢这样的小清新');
INSERT INTO `recipes` VALUES ('21', '薏米冬瓜汤', 'http://owkq4s9d1.bkt.clouddn.com/1506513935218.jpeg', '薏米能健脾益胃，利水除湿，夏天多吃一些对身体很有好处。 \r\n除了单独煮薏米水，也可以搭配冬瓜、鸡骨煲一锅靓汤，味道清淡鲜美，补充炎热天气身体流失的水份，清热又解暑~~', '43', '2', '15', '2017-09-27', '1、煲汤的时候，保留冬瓜皮可以更有效的保留其中的营养成分，不过现在农药残留的问题也很严重，选择去皮更安全些。 \r\n2、鸡骨架可以用猪骨头代替，煲汤的时间要适当增加。');
INSERT INTO `recipes` VALUES ('22', '通透金沙月饼', 'http://owkq4s9d1.bkt.clouddn.com/1506514544280.jpeg', '烤过后也会晶莹透亮，不同于广月口感，吃着沙沙的，也不会甜腻，奶香扑鼻，未使用吉士粉增香，无任何添加剂，保质期未知，尽快食用，如置放冷藏，会增加硬度，喜欢吃软糯的可回温，或微波叮一下。', '6', '0', '15', '2017-09-27', '建议：密封，放干燥剂保存，建议冷藏尽快食用！\r\n\r\n回油：自我感觉放冰箱冷藏后总体会变硬，回温或微波，即可回复口感，冷藏及回温的口感各不同，但都好吃。\r\n\r\n月饼如果内馅太湿又没有放冰箱，可能会出现返潮、粘皮、烂底，所以在拿捏馅料软硬度、干湿度是需要一定经验的.\r\n');
INSERT INTO `recipes` VALUES ('23', '酸辣藕丁', 'http://owkq4s9d1.bkt.clouddn.com/1506516290817.jpeg', '下饭必备', '74', '1', '3', '2017-09-27', '奉劝各位不要加番茄酱，口味太奇怪了……可能是个人原因，我一直觉得热的番茄酱口味太独特……');
INSERT INTO `recipes` VALUES ('24', '虾扯蛋——台湾夜市小吃', 'http://owkq4s9d1.bkt.clouddn.com/1506516744812.jpeg', '几年前去台湾夜市吃到这款之后就念念不忘，脆香的面糊加上鹌鹑蛋和鲜虾做出来的半球状配上沙拉酱和台湾的奶白甜菠萝，酥甜香为一体的小吃。后来在鼓浪屿也有看到简直鸡冻啊~', '11', '1', '3', '2017-09-27', '模具可以直接放燃气灶上加热');
INSERT INTO `recipes` VALUES ('25', '春游小吃（丸子篇）', 'http://owkq4s9d1.bkt.clouddn.com/1506517150988.jpeg', '小伙伴们都开始蠢蠢欲动，准备走出家门，享受和煦的春风，灿烂的春日。\r\n\r\n那就一起来做一些快手又美味的春游小食吧～无论是去春游踏青，还是朋友小聚，抑或是工作日的自制便当，都可以大显身手。\r\n\r\n简单几步让这些圆滚滚的丸子们变身可爱的春游小食～', '57', '0', '3', '2017-09-27', '1、配菜和饭团的调味可以根据自己的喜好随意变化，根据需要制作的量来调整用料的分量。\r\n2、选择暖男厨房的这款潮汕手工肉丸三拼来制作，首先因为肉丸调味适中，加入到各种料理都很提味，而且口感劲道，特别适合做成小吃。并且三拼肉丸，每一种口感和味道都很独特，牛肉丸千锤百炼劲道十足，猪肚丸采用新鲜猪肚和猪肉，运用潮汕手打牛丸的捶打技法，加上胡椒和潮汕鱼露的调味，鲜弹爽口，吃起来很过瘾。\r\n3、潮汕手工肉丸是8成熟的，所以只需过滚水汆烫就可以了，用来制作各种料理快手简便，随意搭配出中西式各色小吃，节省时间精力，也足够美味美貌，');
INSERT INTO `recipes` VALUES ('26', '家常炒酱', 'http://owkq4s9d1.bkt.clouddn.com/1506517451646.jpeg', '今天的这道炒酱，几乎家家都会做，各家有各家的做法，也没个定规。不过呢，一碗炒酱里，至少要有肉丁、香菇、豆腐干、笋丁、花生米。通常这个季节我也喜欢用茭白代替笋丁，毛豆米代替花生米。虽然做法简单，却是极好的下饭小菜，平常日子里做上一大碗，配饭配面条都非常开胃，有着浓浓的家的味道~~', '0', '0', '3', '2017-09-27', '极好的下饭小菜');
INSERT INTO `recipes` VALUES ('27', '焦糖松露巧克力', 'http://owkq4s9d1.bkt.clouddn.com/1506520771773.jpeg', '2008年，我为我的奶奶建立了一个美食博客。她热爱美食，喜欢和大家分享烹饪的乐趣，而我负责给她录像。和她一起，我们完成了100多个美食视频，我们也有幸上了报纸和电视。不幸的是在2010的十月她过世了，为了延续她对美食的热爱，我决定继续这个美食博客，现在我们已经有180多个视频啦。今天，我想在中国分享我的美食之旅，因为我觉得你们可能会喜欢法国美食。', '0', '1', '16', '2017-09-27', '松露巧克力在铁盒子里可以保存半个月左右。有可能在滚成圆球的时候巧克力又变软。如果出现这种情况，再放到冰箱里一阵子再拿出来操作。');
INSERT INTO `recipes` VALUES ('28', '极味岛西柚茶', 'http://owkq4s9d1.bkt.clouddn.com/1506561362912.jpeg', '更多品种请关注：http://www.naichafood.com/', '0', '0', '16', '2017-09-28', '');
INSERT INTO `recipes` VALUES ('29', '西柚酸奶', 'http://owkq4s9d1.bkt.clouddn.com/1506561716270.jpeg', '西柚甜中带苦，有些酸涩味道。有次在超市买了西柚酸奶，被这种奇特的感觉深深吸引了，所以决定拿来西柚一试~不过想尝试西柚减肥法的朋友们还是放弃这个做法吧，酸奶其实不宜用于减肥……', '0', '0', '16', '2017-09-28', '');
INSERT INTO `recipes` VALUES ('30', '西柚汁', 'http://owkq4s9d1.bkt.clouddn.com/1506561979600.jpeg', '酸酸甜甜！还能减肥', '0', '0', '16', '2017-09-28', '水加少了味道会很重的，我喜欢淡淡的味道，所以半个西柚能做一大杯果汁');
INSERT INTO `recipes` VALUES ('31', '鸡肉粥', 'http://owkq4s9d1.bkt.clouddn.com/1506562071721.jpeg', '粥粥粥', '1', '1', '3', '2017-09-28', '平时买来的鸡腿去骨后肉用来炒菜，骨头不要丢，冷冻起来，随时可以取来煮粥，一举两得');
INSERT INTO `recipes` VALUES ('34', '完美沙拉公式', 'http://owkq4s9d1.bkt.clouddn.com/1506563220393.jpeg', '沙拉大法好！好吃好做好看，姑娘们都爱他~\r\n刚好在pinterest上看到了这个完美沙拉公式，传上来分享给大家~', '0', '0', '15', '2017-09-28', '1. 蔬菜类洗完一定要晾干或者用厨房纸吸干\r\n2.其实总体上来讲就是你家冰箱里有啥就放啥吧，按这些大类放在一起总不会差太多的，一碗下来基本什么营养都有了，我自己最喜欢放的是芝麻菜，罗马生菜，紫叶生菜，西兰花，迷你萝卜，什锦坚果，无花果干，巴马臣或水牛奶酪球\r\n3.调味汁这些随各人爱好吧，我自己最喜欢的是油醋汁，有一瓶好的呆梨黑醋基本沙拉就成功了一半，至于黑醋怎么选择基本上是年份越久就越甜，或者简单粗暴一点就是超市货架上在接受的价格范围内买瓶最贵的好了。。。\r\n4.写完这个方子发现基本揪出一坨放在面包上就可以去刷夫人的开放三明治公式了哈哈，果然好吃的东西都是相通哒');
INSERT INTO `recipes` VALUES ('35', '梅森瓶沙拉', 'http://owkq4s9d1.bkt.clouddn.com/1506563496591.jpeg', '天气快要暖和起来了，就快要脱掉棉衣了。整个冬天胖了N斤的兔儿蕾有些紧脏。为了赶紧甩肉，坚持锻炼自不用说，饮食上也需要稍加注意。中午单位食堂的菜高油高盐，非常不适合减肥，于是决定带一罐沙拉到单位当做午饭。\r\n       满满的一罐沙拉，有菜，有肉，有蛋，还可以放些主食，低脂低热量的同时还做到了营养满满，对于管不住嘴的兔儿蕾来讲，总之是一个比较好的减脂方法啦！\r\n       由于梅森瓶的密封性比较好，所以可以晚上一口气做两天的沙拉，一罐放在冷藏，第二天吃；另一罐放在冷冻，第二天晚上拿出来放冷藏，第三天吃。\r\n       可以作为灌装沙拉的食材有：\r\n藜麦、通心面、土豆、红薯、南瓜、芸豆、鹰嘴豆、红腰豆、番茄、红椒、青椒、樱桃萝卜、黄瓜、各类蘑菇、西兰花、花菜、生菜、芝麻菜、菠菜、苦菊、甘蓝菜、玉米、胡萝卜、鸡胸肉排、牛肉、火腿、豆腐干、欧芹、各种坚果、洋葱、牛油果（要用柠檬汁浸先）、奶酪以及各种水果', '0', '0', '15', '2017-09-28', '需要放置的沙拉制作起来有如下一些注意事项：\r\n首先要将玻璃罐高温消毒，以免滋生细菌，降低食物保质期\r\n其次是蔬菜，菜叶上的水一定要晾干或用厨房纸巾擦干，否则容易腐烂\r\n再次是沙拉汁，可以先做好沙拉汁，铺在罐子最底部，然后上面先放置不太容易被水份浸泡软烂的食材，如胡萝卜之类。也可以带上沙拉汁吃的时候再浇上去。\r\n最后除了可以生吃的食材，其余都要用水灼熟，以大幅降低亚硝酸盐的含量');
INSERT INTO `recipes` VALUES ('36', '荷塘小菜', 'http://owkq4s9d1.bkt.clouddn.com/1506563803498.jpeg', '这道菜很多爱美的女性朋友一定会喜欢，因为它是一道怎么吃都不担心发胖的荷塘小菜。选用上好的莲藕，东北黑木耳及清脆的荷兰豆来搭配。不仅从营养上满足了人体需要，而且清淡爽品，能消除之前几道菜的油腻感。让家宴中多了几分清凉和畅快的感觉。', '0', '0', '15', '2017-09-28', '焯水时，可在水中加少许色拉油，这样蔬菜色泽更好看。');
INSERT INTO `recipes` VALUES ('37', '披萨蛋（快速早餐）', 'http://owkq4s9d1.bkt.clouddn.com/1506564154624.jpeg', '对于早上会晚起的人来说早饭太单调，中饭太油腻。来个简单的Brunch才最好。\r\n偶然学了这个披萨蛋，对喜欢蛋料理和肉的我来说是个好东西。\r\n不太会摆盘也不太会拍照，画面感不太有，但味道不错，很容易上手。\r\n希望也会晚起，也爱吃肉和蛋的朋友喜欢。', '0', '0', '15', '2017-09-28', '1.打蛋液的时候可以加入稍许的黄酒解除蛋的腥味。\r\n2.锅盖最好用透明的，闷的过程中有时蛋会胀起，注意调整时间。\r\n3.家里的早餐芝士用完了所以改用了马苏里拉芝士，喜欢拉丝感的朋友可以用马苏里拉的芝士。');
INSERT INTO `recipes` VALUES ('38', '《Tinrry下午茶》教你做蛋黄酥', 'http://owkq4s9d1.bkt.clouddn.com/1506564749063.jpeg', '如果制作中有什么疑问可以添加我的微信：tinrry-com，在对应的视频下留言，另外新视频发布也会第一时间推送。', '0', '0', '15', '2017-09-28', '全部包好之后盖上保鲜膜最后松弛15分钟左右，这样是为了让油酥皮可以松弛，有延展性，烘烤的时候不会爆太开，另外一个是让冷藏过的馅料恢复室温，否则热胀冷缩同样很容易爆开的');
INSERT INTO `recipes` VALUES ('39', '不干不硬的冰皮月饼', 'http://owkq4s9d1.bkt.clouddn.com/1506577252868.jpeg', '我先说，这个方子不干不硬呀！第二天第三天都还是口感很好呀！下厨房里冰皮的方子很多，很多第二天就不能吃了，这个是参考了很多方子之后总结的几乎最优版本，方便以后查看。\r\n\r\n不似广式多糖苏式多油，冰皮月饼少油少糖，算是最健康的月饼了，而且好看好操作，特别适合新手。如果有家人血糖值比较高又想吃月饼，给他做冰皮月饼吧！\r\n\r\n重点：有用其他品牌材料的小伙伴试过偏软，请严格按照品牌及用量来。成品的皮是几乎不粘手的，放心操作。\r\n\r\n方子的量做50g的月饼36个', '0', '0', '3', '2017-09-28', '做好的月饼拍几张照赶紧放保鲜袋里冰箱冷藏或冷冻保存吧！ 冷冻再回温的口感更好，更加湿润！');
INSERT INTO `recipes` VALUES ('40', '减脂便当', 'http://owkq4s9d1.bkt.clouddn.com/1506578612330.jpeg', '便当盒是Asvel的。平均一份的热量大概在500Kcal左右，都是挺适合减脂期的妹子的便当。', '0', '0', '15', '2017-09-28', '便当盒是Asvel的。平均一份的热量大概在500Kcal左右，都是挺适合减脂期的妹子的便当。');
INSERT INTO `recipes` VALUES ('41', '圣诞节系列糖霜饼干', 'http://owkq4s9d1.bkt.clouddn.com/1506579455490.jpeg', '圣诞节系列之圣诞老人糖霜饼干。\r\n姜饼屋的做法可以查看上一篇，这一篇主要是介绍圣诞人糖霜饼干的做法，圣诞节系列的糖霜饼干我做的花型有很多，圣诞老人的算是其中最难的一个，所以发出来给需要的亲们参考，掌握了圣诞老人的做法对于雪人和圣诞节树真的就是小菜了，如果有需要我再一一发出来。\r\n饼干胚的做法和我前面发过的食谱《糖霜饼干胚翻糖饼干胚》的做法是一样的，需要的可以查阅，那个是单独发出来的可能会比较详尽，这次根据饼干模的大小我用量减半了。', '0', '0', '15', '2017-09-28', '1、糖霜的稠度多试几次就好掌握，根据自己的熟练程序来调试即可\r\n2、做糖霜是一个需要细心和耐心的过程，耗时比较大一些，要想做的好就不能心急');
INSERT INTO `recipes` VALUES ('42', '家常红烧牛肉面', 'http://owkq4s9d1.bkt.clouddn.com/1506585163972.jpeg', '前几天在一个美食论坛里无意中看到一个网友发的帖子，说，这是他爷爷做的红烧牛肉面，是他家的祖传秘方，因为他爷爷现在老了，小店也不开了，所以他把这个方子告诉了大家，教大家怎么做最好吃的红烧牛肉面。这位网友还说他只要出门在外就会特别想念爷爷的红烧牛肉面，到了家，一吃上爷爷的面条，就像还魂了一样，找到了回家的感觉！一开始不怎么相信，但是觉得反正试试也没什么损失！好家伙，居然就是那个味，我喜欢的红烧牛肉面的味道！那今天我也把这个方子分享给大家。', '0', '0', '15', '2017-09-28', '1.最大的难点是这碗红烧牛肉面调料多才会有那个味，好的红烧牛肉面在于有好的配方，这个方子值得大家收藏！ \r\n2.牛肉一定要买肥瘦相间的，那样才不柴，咬起来酥烂； \r\n3.牛肉多浸泡可以把血水浸泡出来，所以至少也得浸泡四个小时； \r\n4.说说肉的焯水：冷水下牛肉，这样能更好把里面脏物稀释出来，热水下锅一般适合已经浸泡好的牛肉，里面脏物已经浸泡出来，因为肉遇热会收缩，所以这就是用冷水和热水焯水的区别，所以整体来说，肉类还是用冷水焯水比较好； \r\n5.调料一起炒才会味道更香浓，但是这里特别强调一点就是冰糖不能加太多，越少越好，因为后面的番茄酱也是甜的，如果太多，汤会有点甜了，但是有一点我要告诉大家，外面好多好吃的红烧牛肉面都是放点糖的，虽然你吃的时候感觉不到，但是适量的糖让汤的味道更鲜美； \r\n6.根据个人口味放入适量的辣椒或者辣椒粉都可以，咸淡自己调节，酱油是咸的，到最后盐不要加太多； \r\n7.红烧牛肉面里别的料看你喜欢，可以把料再次煮开后放点香菜，青菜或者西红柿都可以，看你喜欢什么了。 \r\n8.吃面条完全是个人喜好，有了这个红烧牛肉汤，面条怎么做都好吃，挂面，湿面都可以，外面卖的面条都是把面条煮好后放入汤料，但是有些人喜欢把面条和汤料一起煮，这些人其实也是吃客呢！这样煮出的面条虽然不好看，但味道也很好的呢，所以啊，做我们中式美食嘛，不要那么苛刻，怎么喜欢怎么来吧！\r\n');
INSERT INTO `recipes` VALUES ('43', '家常菜干锅牛蛙快手菜', 'http://owkq4s9d1.bkt.clouddn.com/1506586127052.jpeg', '简单煮意', '0', '0', '15', '2017-09-28', '粘锅的朋友，你油放少了');
INSERT INTO `recipes` VALUES ('44', '最爱下饭菜——五香带鱼', 'http://owkq4s9d1.bkt.clouddn.com/1506586961928.jpeg', '制作时间：30分钟    制作简易度：★★	口味：咸中带甜', '0', '0', '15', '2017-09-28', '1.炒香料的时侯不要炒太长时间，下锅的同时可以放鱼块煎了，因为煎鱼的时侯也同时在煎香料，如果炒的时间过长，香料容易糊了。\r\n\r\n2.五香粉在最后洒才不会煮的汤糊糊的。');
INSERT INTO `recipes` VALUES ('45', '排骨莲藕汤羹', 'http://owkq4s9d1.bkt.clouddn.com/1506587488919.jpeg', '排骨藕汤跟热干面一样，差不多是湖北人的一个情结了。如果你问生活在异乡的湖北人，最想念家乡的什么？我想，多半会回答：藕啊。 \r\n湖北的藕确实好吃，花样也多，藕圆子，藕夹，卤藕，干煸藕丝，清炒藕带，还有排骨藕汤。排骨藕汤应该是湖北人家最普遍，最喜欢煨的汤了——对，在我们湖北，都说“煨汤”，不说炖汤或煲汤的。 ', '0', '0', '15', '2017-09-28', '湖北的土法煨汤，排骨是不焯水的，只是将排骨浸泡，反复换水以去掉血水。去血水后的排骨在锅里炒香，再放进汤罐子里煨。至于放藕的时机，也没有定法，喜欢吃粉藕的就早一点下藕，喜欢脆一点口感的就晚一点下。');
INSERT INTO `recipes` VALUES ('46', '猪肉水饺', 'http://owkq4s9d1.bkt.clouddn.com/1506600032315.jpeg', '误打误撞的美食，芹菜胡萝卜鲜肉水饺，怎么就这么好吃呢！昨天想做芹菜水饺结果调完馅料发现菜烧肉多，从冰箱拿了两个胡萝卜，去皮切丝用油煸炒后凉透切末，加入馅料中，煮熟饺子试探着吃了一个大喜过望啊，真美味！', '0', '0', '15', '2017-09-28', '煮熟饺子试探着吃了一个大喜过望啊，真美味！');
INSERT INTO `recipes` VALUES ('47', '甜品渐变蓝莓冻芝士蛋糕', 'http://owkq4s9d1.bkt.clouddn.com/1506605153579.jpeg', '盛夏，蓝莓季，莫要辜负这好时光。\r\n蓝莓渐变冻芝士蛋糕，不用开烤箱，免去燥热。\r\n自己新鲜熬制的蓝莓酱，纯天然无添加，不使用任何色素却给这款蛋糕带来了天然优雅的渐变色。', '0', '0', '15', '2017-09-28', '蓝莓酱加入奶酪糊中建议分几次加，观察一下颜色哈，一不小心下重手了，渐变层颜色就不明显了~~这次熬制的蓝莓酱还有剩余。\r\n做渐变奶酪糊是放冰箱冷冻层25分钟！菜谱主自己有计时，这个时间正好可以凝固而且比冷藏节约时间！！！');
INSERT INTO `recipes` VALUES ('48', '黑胡椒杏鲍菇牛肉粒', 'http://owkq4s9d1.bkt.clouddn.com/1506646596841.jpeg', '牛肉营养丰富，高蛋白低脂肪，是孩子们生长发育的好食物。饭店里的牛柳粒鲜嫩无比，但多用了“嫩肉粉”。其实选料好，工艺精的话，用在家一样能做出鲜嫩多汁的牛肉粒。不喜欢半生不熟的牛排，那我们试试用牛排做成牛肉粒，此道菜绝对不会让你失望的。', '0', '0', '9', '2017-09-29', '牛排吸干血水即可，无需水洗，如有强迫症，可用清水快速冲洗一下下，即刻用厨房纸吸干表层水分');
INSERT INTO `recipes` VALUES ('49', '青蛙挤挤小面包', 'http://owkq4s9d1.bkt.clouddn.com/1506648356533.jpeg', '菠菜汁的做法，只取菠菜叶，洗干净之后，不加水打成液体，然后过滤，这样做出来的菠菜汁纯度最高~\r\n表皮起皱的，是没有烤熟的原因，怕上色可以盖上锡纸多烤会，但是一定要烤熟，不然口感会很黏，注意锡纸不要直接蒙在面包上，可以在上一层再架一个晾网，把锡纸挡在上面~', '0', '0', '7', '2017-09-29', '');
INSERT INTO `recipes` VALUES ('51', '紫薯蔓越莓银耳羹', 'http://owkq4s9d1.bkt.clouddn.com/1506740102397.jpeg', '因为工作的关系，最近一直在做各种胶原蛋白，每天这么补，补得我心力交瘁。\r\n然后，我能怎么办呢，谁让这是工作。好在多做一些糖水之后，渐渐也掌握了一些炖煮的方式，顺序和时机。\r\n\r\n有时候我们煮紫薯时候会变蓝绿色，煮出来会特别丑。\r\n这里我要科普一下（看小黑板），紫薯花青素较多，这里涉及到一个化学原理，花青素是一种水溶性色素，特性有点类似石蕊，所以大家一定记得初中的知识点，蓝色的石蕊试剂遇酸变红，遇碱变蓝。是的，如果煮紫薯到后面呈现蓝绿色，那应该是搭配的食材里面微微偏碱性了，这个时候可以尝试加入一点点白醋或者柠檬汁就不绿啦。（胃酸倒是属于强酸性，所以理论上来说吃进去后在胃里面会变红的）……但是你看不到\r\n\r\n说到柠檬汁，那真是巧了，柠檬在我店里就有卖的（防不胜防的植入）', '1', '0', '3', '2017-09-30', '银耳需要炖2个小时左右才会出胶，所以把握一下时间，可以先煮银耳，之后更具个人喜好，再看时机放入紫薯。');

-- ----------------------------
-- Table structure for `recipe_list`
-- ----------------------------
DROP TABLE IF EXISTS `recipe_list`;
CREATE TABLE `recipe_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(1500) DEFAULT NULL,
  `cover_pic` varchar(1500) DEFAULT NULL,
  `descripe` varchar(1500) DEFAULT NULL,
  `creater_id` int(11) DEFAULT NULL,
  `collect_times` int(11) DEFAULT '0',
  `creater_time` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `creater3_fk` (`creater_id`),
  CONSTRAINT `creater3_fk` FOREIGN KEY (`creater_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recipe_list
-- ----------------------------
INSERT INTO `recipe_list` VALUES ('1', '肉肉大联盟', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E5%8F%AF%E4%B9%90%E9%B8%A1%E7%BF%85.jpg-215136', '鸡肉、猪肉、牛肉，羊肉，总之就是地上跑的肉。', '7', '104', '2017-09-20');
INSERT INTO `recipe_list` VALUES ('2', '生活就是无肉不欢', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E9%BE%99%E4%BA%95%E8%99%BE%E4%BB%81.jpg', '无肉不欢依旧要有清淡相伴?\r\n——追求简单又酷爱美食的虾米献上?', '7', '13', '2017-09-07');
INSERT INTO `recipe_list` VALUES ('3', '素素素素素食', 'http://owigmgx25.bkt.clouddn.com/cover_pic%E8%87%AA%E5%88%B6%E5%85%B3%E4%B8%9C%E7%85%AE.jpg-215136', '没错我就是爱吃素菜', '3', '14', '2017-09-15');
INSERT INTO `recipe_list` VALUES ('4', '早餐蛋白质类(动物+植物)', 'http://owkq4s9d1.bkt.clouddn.com/6bdba0608b0d11e6a9a10242ac110002_1013w_675h.jpg', '动物蛋白:鸡胸肉、牛肉、鸡蛋、培根、鳕鱼、虾仁、驴肉、基围虾、河虾、江虾、鸭蛋、火腿\r\n\r\n植物蛋白:黄豆、鹰嘴豆、荷兰豆、豆浆、青豆、绿豆、红豆、黑豆、奇亚籽、豌豆', '9', '12', '2017-09-22');
INSERT INTO `recipe_list` VALUES ('5', '营养美食', 'http://owkq4s9d1.bkt.clouddn.com/cad833ca4a5811e7947d0242ac110002_5760w_3840h.jpg', '美！', '15', '15', '2017-09-29');
INSERT INTO `recipe_list` VALUES ('9', '想想都好吃', 'http://owkq4s9d1.bkt.clouddn.com/1507546053582.png', '有菜又有肉啊', '7', '0', '2017-10-09');
INSERT INTO `recipe_list` VALUES ('10', '我的最爱', 'http://owkq4s9d1.bkt.clouddn.com/1507599806900.jpeg', '我的菜单', '3', '0', '2017-10-10');

-- ----------------------------
-- Table structure for `steps`
-- ----------------------------
DROP TABLE IF EXISTS `steps`;
CREATE TABLE `steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(2000) DEFAULT NULL,
  `recipe_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recipe_sfk` (`recipe_id`),
  CONSTRAINT `recipe_sfk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=372 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of steps
-- ----------------------------
INSERT INTO `steps` VALUES ('9', '鸡翅冷水下锅，煮沸后再煮3分钟，除去血水和杂质，捞出备用。ps：注意冷水下锅，否则肉质不嫩。', '3');
INSERT INTO `steps` VALUES ('10', '锅内加入油，中小火放入花椒、大料、葱姜、干辣椒炝锅。', '3');
INSERT INTO `steps` VALUES ('11', '炝锅爆出香味后，加入焯好的鸡翅翻炒3分钟除去一些水汽。', '3');
INSERT INTO `steps` VALUES ('12', '加入可乐没过鸡翅', '3');
INSERT INTO `steps` VALUES ('13', '加入盐、酱油调味，中火炖至汤汁浓稠，鸡翅被浓稠的汤汁包裹的程度即可', '3');
INSERT INTO `steps` VALUES ('14', '用厨房剪刀或者陶瓷刀把鸡腿骨剔出来。骨头不要扔，可以做高汤用~', '4');
INSERT INTO `steps` VALUES ('15', '用肉锤或者刀背把肉锤松，带皮的一面朝上，在皮上均匀撒上粗盐。三块一组，每组1 tsp（5ml）的盐', '4');
INSERT INTO `steps` VALUES ('16', '将1 tsp（5ml）动物油放进铸铁锅，中火热锅融化（美国的电磁炉大概是7.5的火）', '4');
INSERT INTO `steps` VALUES ('17', '等锅热以后将三块鸡大腿放入锅中，带皮面朝下.', '4');
INSERT INTO `steps` VALUES ('18', '重点来了！在不带皮的这面豪迈地撒盐酥鸡粉！图有点模糊，是我在这边买到的盐酥鸡粉，感觉主要是香料盐很少，所以可劲儿撒没关系。', '4');
INSERT INTO `steps` VALUES ('19', '不要动鸡肉，让他们呆在那里保持7.5中火煎8分钟，直到皮金黄酥脆。如果是美国电炉，煎到一半的时候把锅调转180度，为了受热均匀.', '4');
INSERT INTO `steps` VALUES ('20', '反面，同样的火，继续煎3分钟', '4');
INSERT INTO `steps` VALUES ('21', '出锅后放在烤架上晾凉，用盘子接住滴下来的油和液体，到时候和鸡肉一起冷冻保存，再加热的时候风味会保存得比较好哈~', '4');
INSERT INTO `steps` VALUES ('23', '排骨焯水后。锅内倒入适量油，将排骨干炒，再放入花椒，干辣椒，姜片同炒。排骨稍出油后，放入酱油和糖。', '5');
INSERT INTO `steps` VALUES ('24', '加入一罐啤酒和适量水，不要盖锅盖烧开，再盖上锅盖转小火炖1小时左右。', '5');
INSERT INTO `steps` VALUES ('25', '待锅内汁子收稠，排骨出油后，加适量生抽和盐出锅。', '5');
INSERT INTO `steps` VALUES ('26', '还在为内酯豆腐脱不完整而苦恼吗！（其实这个方子无需摆盘 可自动跳到步骤6）', '6');
INSERT INTO `steps` VALUES ('27', '盒子对角处各剪一个小口', '6');
INSERT INTO `steps` VALUES ('28', '剪完口豆腐就应该已经脱落了 没脱不要紧 往口里吹个气儿 包豆腐脱的溜干净！', '6');
INSERT INTO `steps` VALUES ('29', '倒过来把封膜撕掉再倒扣出来 没毛病 那行除了我拍虚了-_-#', '6');
INSERT INTO `steps` VALUES ('30', '自己吃取一半豆腐切成薄片', '6');
INSERT INTO `steps` VALUES ('31', '把豆腐铺在碗底\r\n（当然平时不用摆盘的话直接拿勺子挖盒里的豆腐就好了！！）', '6');
INSERT INTO `steps` VALUES ('32', '倒入两只打散的鸡蛋', '6');
INSERT INTO `steps` VALUES ('33', '放一小勺白胡椒 2—3大勺生抽 均匀撒在表面 最后放熟的西兰花（西兰花要焯熟再放阿 可以前一晚焯好冷藏保存 也可以早上现煮 西兰花在开水里过一下断生就可以了）', '6');
INSERT INTO `steps` VALUES ('34', '盖保鲜膜中高火微波3—4分钟左右 至鸡蛋全熟 炒鸡鲜嫩', '6');
INSERT INTO `steps` VALUES ('35', '准备辅料 随心改刀 ', '7');
INSERT INTO `steps` VALUES ('36', '鸡腿肉洗净 切合适大小 锅里加少许油 冷油放入白糖', '7');
INSERT INTO `steps` VALUES ('37', '小火炒出糖色', '7');
INSERT INTO `steps` VALUES ('38', '加入鸡腿肉 加两勺料酒 翻炒至变色 加入姜片 红辣椒段 葱花 酱油两勺', '7');
INSERT INTO `steps` VALUES ('39', '翻炒均匀  加入洋葱翻炒', '7');
INSERT INTO `steps` VALUES ('40', '如果喜欢颜色深一点 可以加一滴老抽上色     加入没过鸡肉的清水  放入香菇片  加少许白胡椒粉  小火炖15-20分钟', '7');
INSERT INTO `steps` VALUES ('41', '注意不要干锅     收汤后 尝咸淡 可用少许盐调味 再加入尖椒断', '7');
INSERT INTO `steps` VALUES ('42', '翻炒2分钟断生就可以啦', '7');
INSERT INTO `steps` VALUES ('43', '青口买回来以后拿清水泡一泡，再用硬刷子刷一刷，清洗干净以后就可以直接拿来炒了。或者也可以先用开水稍微煮一下，这样青口的口就会微微张开一点。', '8');
INSERT INTO `steps` VALUES ('44', '葱斜着切段（可以多切一些个人觉得葱多一点炒出来更好吃），葱白葱绿尽量分开；姜切粗一点的丝即可，大蒜6，7头拿到拍扁即可（不爱吃蒜的也可以不放）。', '8');
INSERT INTO `steps` VALUES ('45', '油烧热后，放入葱白、姜、蒜爆香，加入豆豉酱（喜欢吃辣也可以加入一点豆瓣酱和小红剁椒），翻炒出香味。', '8');
INSERT INTO `steps` VALUES ('46', '青口入锅，开大火使劲翻炒把酱炒匀，加入少许糖少许料酒。豆豉酱应该咸味很足了，够咸就不用再放酱油或盐了。', '8');
INSERT INTO `steps` VALUES ('47', '加入葱绿，炒至青口张开角度30度左右也就可以出锅了，不要炒的太久，太老了就不好吃了。', '8');
INSERT INTO `steps` VALUES ('48', '酱香十足的青口出锅了~不要太惬意！ ', '8');
INSERT INTO `steps` VALUES ('49', '香菇洗干净，泡入水中，提前一晚泡发。香菇水要用来煮饭，所以香菇洗干净一点，再泡发，香菇水千万不要倒掉！', '9');
INSERT INTO `steps` VALUES ('50', '淘好米，加入香菇水（水量比平时煮饭量少一点点，因为炒好的扁豆肉有汤汁） ', '9');
INSERT INTO `steps` VALUES ('51', '开始煮饭。（我加了一些黑豆，因为没有买到扁豆籽。）', '9');
INSERT INTO `steps` VALUES ('52', '所以材料切丁。家乡扁豆肉饭的做法 ', '9');
INSERT INTO `steps` VALUES ('53', '肉丁中加一些料酒生姜腌制一下。', '9');
INSERT INTO `steps` VALUES ('54', '起油锅，油热后放入??肉丁快速翻炒。', '9');
INSERT INTO `steps` VALUES ('55', '加入老抽，糖，生抽，蚝油。翻炒一下出锅备用。', '9');
INSERT INTO `steps` VALUES ('56', '重新起锅，锅内倒油，翻炒扁豆。', '9');
INSERT INTO `steps` VALUES ('57', '加入香菇和虾米，再一起翻炒。', '9');
INSERT INTO `steps` VALUES ('58', '加入肉丁，一起翻炒，加一小碗水，炖一下，再倒入蚝油一大勺，豆辨酱一大勺，生抽两瓶盖，老抽一瓶盖～两瓶盖（颜色要深，因为后面要和米饭混合在一起，要让饭也上色。）盐2小勺，糖一大勺。（要咸一些，因为要加入饭里面的。）', '9');
INSERT INTO `steps` VALUES ('59', '倒入煮好饭的电饭煲中，翻拌均匀后，闷20分钟。', '9');
INSERT INTO `steps` VALUES ('60', '然后就可以吃啦～香喷喷的有木有。（这样的颜色才有食欲嘛） \r\n好爱吃扁豆饭呐??????～', '9');
INSERT INTO `steps` VALUES ('61', '鸡肉切1cm小丁', '10');
INSERT INTO `steps` VALUES ('62', '洋葱切1cm小丁', '10');
INSERT INTO `steps` VALUES ('63', '蘑菇切5mm小片', '10');
INSERT INTO `steps` VALUES ('64', '蒜切沫', '10');
INSERT INTO `steps` VALUES ('65', '牛肉汤块切片【没有就不放，或者后面放一点高汤】', '10');
INSERT INTO `steps` VALUES ('66', '青豆过水', '10');
INSERT INTO `steps` VALUES ('67', '鸡蛋两个打散，加入一勺淡奶油或者奶', '10');
INSERT INTO `steps` VALUES ('68', '锅中加少许油，倒入蒜末', '10');
INSERT INTO `steps` VALUES ('69', '洋葱炒至发黄变色，加入鸡肉丁', '10');
INSERT INTO `steps` VALUES ('70', '鸡肉变色，加入蘑菇', '10');
INSERT INTO `steps` VALUES ('71', '加入一勺白葡萄酒【没有就不加，减些风味】', '10');
INSERT INTO `steps` VALUES ('72', '加入番茄酱【原方用了自制番茄糊+番茄酱】', '10');
INSERT INTO `steps` VALUES ('73', '加入牛肉汤块和一片香叶', '10');
INSERT INTO `steps` VALUES ('74', '翻炒均匀，加入青豆', '10');
INSERT INTO `steps` VALUES ('75', '翻炒至汤汁基本收干【提前炒番茄酱，让材料更入味，炒过的番茄酱也更美味！】', '10');
INSERT INTO `steps` VALUES ('76', '加入米饭翻炒均匀', '10');
INSERT INTO `steps` VALUES ('77', '盛出备用', '10');
INSERT INTO `steps` VALUES ('78', '锅中加入少许油，倒入鸡蛋液', '10');
INSERT INTO `steps` VALUES ('79', '筷子快速搅动', '10');
INSERT INTO `steps` VALUES ('80', '转动锅子，摊成蛋皮【注意小火】', '10');
INSERT INTO `steps` VALUES ('81', '加入米饭', '10');
INSERT INTO `steps` VALUES ('82', '蛋皮两边向中间包起【这样的包法比起对折法可以包入更多的饭】', '10');
INSERT INTO `steps` VALUES ('83', '将蛋包饭推到锅边，盘子准备！', '10');
INSERT INTO `steps` VALUES ('84', '将蛋包饭倒扣入盘中', '10');
INSERT INTO `steps` VALUES ('85', '用厨房用纸整形', '10');
INSERT INTO `steps` VALUES ('86', '番茄酱装饰，随意加配菜', '10');
INSERT INTO `steps` VALUES ('87', '水里放一勺盐和油，意大利面煮10分钟左右捞出过冷水。', '11');
INSERT INTO `steps` VALUES ('88', '热锅热油炒香洋葱和蘑菇，加入芦笋翻炒。', '11');
INSERT INTO `steps` VALUES ('89', '三文鱼用黑胡椒碎和盐腌制15分钟后煎熟倒入2。', '11');
INSERT INTO `steps` VALUES ('90', '加入淡奶油翻炒均匀，小火煮至浓稠即可。和意大利面拌匀就可以吃吃吃啦。', '11');
INSERT INTO `steps` VALUES ('91', '烤箱预热到170度。黄油和奶油奶酪从冰箱拿出室温软化。在活底蛋糕模具下包一层锡纸。如果不是不粘模，模具要涂黄油撒粉防粘。', '12');
INSERT INTO `steps` VALUES ('92', '消化饼干装进保鲜袋用擀面杖压成碎屑，也可以用食品加工机绞碎。加入融化的黄油、糖粉、盐，和黑芝麻搅拌均匀。将混合的饼干屑铺满模具底部用汤勺压平压实，饼干底放入烤箱170度烤8-10分钟。之后将模具取出放置冷却', '12');
INSERT INTO `steps` VALUES ('93', '奶油奶酪用打蛋器搅打均匀蓬松。然后依次加入糖——酸奶油——香草精——鸡蛋,直到完全混合。最后筛入低粉，用刮刀搅拌均匀。', '12');
INSERT INTO `steps` VALUES ('94', '将搅打好的奶油奶酪糊分成2份。分别加入抹茶粉和黑芝麻粉搅拌均匀。在模具中先倒入黑芝麻芝士糊稍微刮平。然后轻柔的倒入抹茶芝士糊。不要用力哦，不然就没有漂亮的分层了。（想成品2层差不多就要抹茶糊的分量多一点哦！）', '12');
INSERT INTO `steps` VALUES ('95', '\r\n模具放进一个深盘，盘内注入热水约3CM厚。中下层水浴法170度25分钟。关掉烤箱，烤箱门开一条缝，让蛋糕在烤箱里静置40分钟。(原方子是烘烤25分钟，不放心怕不熟的话可以酌情加时5-10分钟。做八寸的烘烤时间也要延长)', '12');
INSERT INTO `steps` VALUES ('96', '\r\n之后取出放冰箱冷藏4小时以上或隔夜。食用前撒上抹茶粉装饰。', '12');
INSERT INTO `steps` VALUES ('102', '准备好所有材料。', '14');
INSERT INTO `steps` VALUES ('103', '将低粉、红曲粉、可可粉一起过筛。', '14');
INSERT INTO `steps` VALUES ('104', '准备2个干净无水的容器，将蛋白和蛋黄分离，蛋白中切记不可混入水、油或蛋黄。', '14');
INSERT INTO `steps` VALUES ('105', '蛋黄加10克红糖，用手抽搅打均匀，直至没有糖颗粒。', '14');
INSERT INTO `steps` VALUES ('106', '倒入牛奶，搅拌均匀。', '14');
INSERT INTO `steps` VALUES ('107', '倒入玉米油，搅拌均匀。', '14');
INSERT INTO `steps` VALUES ('108', '用叉子将香蕉压成泥。', '14');
INSERT INTO `steps` VALUES ('109', '将香蕉泥倒入蛋黄液里，搅拌均匀。', '14');
INSERT INTO `steps` VALUES ('110', '加入养乐多和蜂蜜', '15');
INSERT INTO `steps` VALUES ('111', '放入冰块，加入搅拌机打碎', '15');
INSERT INTO `steps` VALUES ('112', '柚子去皮，将果肉取出来', '15');
INSERT INTO `steps` VALUES ('113', '螃蟹冲洗干净，洗掉外壳粘附的海泥\r\n    掀开蟹背后，挖掉蟹鳃（哈米水），一只切4块（保留蟹脚尖）\r\n    生姜切丝，葱切段', '16');
INSERT INTO `steps` VALUES ('114', '用少许料酒、盐、姜丝、葱段研制螃蟹（5分钟）', '16');
INSERT INTO `steps` VALUES ('115', '咸蛋黄蒸熟后切碎，备用', '16');
INSERT INTO `steps` VALUES ('116', '腌制的螃蟹撇去生姜和葱段，蟹身拍上干生粉\r\n蟹背挖去内脏部分，撒上生粉', '16');
INSERT INTO `steps` VALUES ('117', '取一口小锅，倒入色拉油，等油温8成热\r\n放入螃蟹，油炸至微黄捞出备用', '16');
INSERT INTO `steps` VALUES ('118', '另取一锅，色拉油微热后放入咸蛋黄，少许细盐，中火翻炒至咸蛋黄气泡', '16');
INSERT INTO `steps` VALUES ('119', '放入炸制过的螃蟹，翻炒，使螃蟹均匀焗上咸蛋黄', '16');
INSERT INTO `steps` VALUES ('120', '出锅，装盘，凹造型', '16');
INSERT INTO `steps` VALUES ('125', '虾剥壳，去掉虾线，切成小粒', '18');
INSERT INTO `steps` VALUES ('126', '猪肉绞碎', '18');
INSERT INTO `steps` VALUES ('127', '猪肉碎加虾仁加入切好的葱粒，盐、糖、酱油、生粉、胡椒粉、姜汁、麻油等加入', '18');
INSERT INTO `steps` VALUES ('128', '用筷子向同一方向搅拌至上劲', '18');
INSERT INTO `steps` VALUES ('129', '开始包云吞，一手拿皮，加入适量馅料（不能太多，不然比较难熟）', '18');
INSERT INTO `steps` VALUES ('130', '手指蘸水往云吞皮内侧扫上一点水，向一个点进行折叠。', '18');
INSERT INTO `steps` VALUES ('131', '最后收口，成一个袋子的形状', '18');
INSERT INTO `steps` VALUES ('132', '最简单的是酱油麻油汤底，最后撒葱花！简单美味！', '18');
INSERT INTO `steps` VALUES ('133', '烧开水，放入云吞，看见皮变色后转小火，盖上盖子，将肉馅煮熟即可', '18');
INSERT INTO `steps` VALUES ('138', '备好蒜蓉，适量酱油，盐，白糖加少量清水搅拌成料汁。热锅放油，爆香蒜蓉，倒入料汁炒香', '20');
INSERT INTO `steps` VALUES ('139', '淋在装盘的秋葵上', '20');
INSERT INTO `steps` VALUES ('140', '完成', '20');
INSERT INTO `steps` VALUES ('141', '秋葵洗干净去蒂，烧一锅开水滴入几滴植物油，放小半勺盐，秋葵入锅烫一两分钟捞出装盘', '20');
INSERT INTO `steps` VALUES ('142', '1.薏米提前浸泡2-3小时。 \r\n2.冬瓜洗净去皮切大块（冬瓜也可不去皮）。 \r\n3.鸡架冲洗干净，冷水下锅，煮开之后捞出冲净血沫。', '21');
INSERT INTO `steps` VALUES ('143', '4、另取一锅加冷水，把汆烫过的鸡架、拍散的姜块和薏米一起放入。先用大火将汤水煮沸，再改小火煲1小时，过程中要不时捞出汤表面的油水及血沫。 \r\n5、放入切块的冬瓜，继续炖煮十几分钟至冬瓜熟透。 \r\n6、食用前调入盐和胡椒粉即可', '21');
INSERT INTO `steps` VALUES ('144', '美味上桌~~', '21');
INSERT INTO `steps` VALUES ('145', '', '21');
INSERT INTO `steps` VALUES ('146', '首先我们把转化糖浆跟油倒在一起乳化，用手抽搅拌即可。形成乳化液。', '22');
INSERT INTO `steps` VALUES ('147', '所有粉类过筛后加入乳化液中，搅拌均匀，无干粉。', '22');
INSERT INTO `steps` VALUES ('148', '把白莲蓉馅料加入面团中，继续揉至均匀，莲蓉馅料与面团混合一体。装袋，放入冰箱冷藏即可。请带手套操作。', '22');
INSERT INTO `steps` VALUES ('149', '然后我们来制作金沙月饼馅，我们先将A料中的细砂糖与全蛋液混合均匀，然后加入玉米淀粉、奶粉、杏仁粉、混合均匀，搅拌成浆糊状态，无明显干粉，如有粉结可用粗格网筛过滤下，记得是粗格，粉筛是过不去的。备用', '22');
INSERT INTO `steps` VALUES ('150', 'B料淡奶油、椰子油、细砂糖、黄油一并加入，我是用麦饭石超过直接加热，并就在里面直接炒馅了。', '22');
INSERT INTO `steps` VALUES ('151', '小火加热，并煮沸，再加入已经准备好的蛋黄浆，一边加热一边搅拌，小火哈，火大了馅料会上色，就不好看了，发红。', '22');
INSERT INTO `steps` VALUES ('152', '翻炒过程中会逐渐从液体变成团，直至炒制出油出沙，（一粒一粒的感觉）然后加入已经提前碾碎的咸蛋黄，如果家里有挤蒜器这个工具，用它就可以，推荐宜家的金属挤蒜器，又便宜又好用，必须挤碎，要么炒馅的时候就能看见粒，馅料就没那么好看了。', '22');
INSERT INTO `steps` VALUES ('153', '馅料必须炒干，因为太湿的馅料在烘焙过程中极易爆裂，影响美观，而且我们吃的这个月饼的卖点就是沙沙的口感，甜香软糯。虽然能炒到沙沙粉粉的，但我们还是可以用手轻易捏成团即可。放凉备用。', '22');
INSERT INTO `steps` VALUES ('154', '馅料炒好放凉后，我们即可称重，75克月饼模具可以21克皮，54克馅，广月包法，皮因为冷藏过，非常好推皮，能均匀包裹，然后用面粉滚球，压模具脱模即可。还是戴手套操作。', '22');
INSERT INTO `steps` VALUES ('155', '进烤箱之前喷水，烘焙温度：烤箱提前预热150度，先烘焙5分钟 ，取出轻刷蛋黄液，蛋黄液可用一点点水勾兑稀释，再刷，一定要轻轻一层刷隆起的纹理，即可光亮。', '22');
INSERT INTO `steps` VALUES ('156', '月饼烤过不会上色，刚出炉是软的，不要移动，等冷却后密封保存', '22');
INSERT INTO `steps` VALUES ('157', '冷藏后，也会有硬度的，冷藏后再切面比较好看.', '22');
INSERT INTO `steps` VALUES ('158', '所有材料洗净，将藕去皮切丁，将切好的藕丁浸泡在清水中，水中加一勺白醋（防止藕变色）', '23');
INSERT INTO `steps` VALUES ('159', '青椒切丝，生姜切细丝，干红辣椒斜刀切段，小葱切末', '23');
INSERT INTO `steps` VALUES ('160', '准备一锅开水，将藕丁下入开水中焯水，2-3分钟后即可捞起（先焯水可以缩短藕丁炒制的时间）', '23');
INSERT INTO `steps` VALUES ('161', '调配酱汁：将1勺醋，1勺老干妈辣椒酱，1勺番茄酱，1/3勺酱油，1/2勺白糖，少许黑胡椒粉混合均匀，备用；（可惜俺没有这么多的勺子，要不一字排开也直观些）', '23');
INSERT INTO `steps` VALUES ('162', '锅中放适量油，下青椒丝，生姜丝，红辣椒，煸炒出香味后，下入藕丁翻炒', '23');
INSERT INTO `steps` VALUES ('163', '翻炒1分钟左右，倒入调好的酱汁，加入适量盐调味，翻炒至酱汁均匀包裹在藕丁上即可', '23');
INSERT INTO `steps` VALUES ('164', '起锅后撒上葱花', '23');
INSERT INTO `steps` VALUES ('165', '', '23');
INSERT INTO `steps` VALUES ('166', '这是我在夜市的时候吃到的，是不是很诱人', '24');
INSERT INTO `steps` VALUES ('167', '面粉类混合加入清水搅拌至无颗粒静置半小时', '24');
INSERT INTO `steps` VALUES ('168', '面粉类混合加入清水搅拌至无颗粒静置半小时', '24');
INSERT INTO `steps` VALUES ('169', '鲜虾去壳，虾最好买尽量小只一点的，买不到小的也可以切，就是有尾巴比较好看', '24');
INSERT INTO `steps` VALUES ('170', '章鱼小丸子模具加热用刷子刷上油', '24');
INSERT INTO `steps` VALUES ('171', '倒入面糊，面糊高度不要超过1/3。不然等下加蛋就溢出来了', '24');
INSERT INTO `steps` VALUES ('172', '放上虾', '24');
INSERT INTO `steps` VALUES ('173', '再打入蛋，调整虾尾巴离起来，过程中一直保持小火。盖上一个差不多的锅盖，这样蛋容易熟。也可以不盖就是比较久', '24');
INSERT INTO `steps` VALUES ('174', '当蛋凝固是出锅，撒上海苔粉，挤沙拉酱就可以啦。趁热吃哈~', '24');
INSERT INTO `steps` VALUES ('175', '', '24');
INSERT INTO `steps` VALUES ('176', '肉丸根据需要做的量解冻。', '25');
INSERT INTO `steps` VALUES ('177', '做一锅开水加入蒜酥，肉丸下锅煮5分钟，捞出备用。暖男厨房肉丸附赠有蒜酥和沙茶酱，味道不错，不仅仅可以吃潮汕牛肉丸，做野餐春游便当小食都可以用得上。', '25');
INSERT INTO `steps` VALUES ('178', '小食1:牛肉丸mini汉堡，依次将面包+樱桃水萝卜切片+潮汕牛肉丸+芝士片+樱桃番茄片+生菜+面包用小竹签串起来固定～可以根据喜好加入蛋黄酱芥末酱或者沙茶酱。', '25');
INSERT INTO `steps` VALUES ('179', '小食2:葱香猪肚丸饭团，切开猪肚丸加入一点沙茶酱。米饭（我用的薏仁、麦仁米饭）加入香葱碎。', '25');
INSERT INTO `steps` VALUES ('180', '用葱香米饭包住沙茶酱调味的猪肚丸，团成一个圆团团，或者根据喜好捏成各种饭团形状都可以。', '25');
INSERT INTO `steps` VALUES ('181', '香喷喷的葱香猪肚丸饭团就完成了，猪肚丸内涵胡椒调味和Q弹的米粒以及清新的香葱味特别登对。', '25');
INSERT INTO `steps` VALUES ('182', '小食3:牛筋海苔握寿司，米饭加入一勺寿司醋拌匀，再加入拌饭海苔碎（用海苔碎和芝麻那就加入一点点盐和糖来调味）拌匀。', '25');
INSERT INTO `steps` VALUES ('183', '寿司饭捏成长圆形，牛筋丸切片铺在寿司饭上，挤上沙茶酱或其他喜欢的酱料。', '25');
INSERT INTO `steps` VALUES ('184', '配菜可以做成沙拉，作为午餐便当或是聚会小吃、春游小食都特别适合，既好看又美味，简单快手。', '25');
INSERT INTO `steps` VALUES ('185', '猪肉、香菇（提前泡软）、茭白、香干切成大小一致的丁丁，毛豆米洗净沥干；生姜切末备用。酱料准备好，喜欢吃辣的可以在甜面酱里加点辣酱。', '26');
INSERT INTO `steps` VALUES ('186', '锅内油烧热爆香姜末，将肉丁放入，炒至变白出油。依次倒入香菇丁、茭白丁、豆干丁和毛豆翻炒。', '26');
INSERT INTO `steps` VALUES ('187', '锅子中央留空加入甜面酱、辣豆瓣酱小火慢慢炒香。 \r\n然后烹入黄酒、加入白糖翻炒均匀，倒入适量的清水（泡香菇的水如果留着的话也可以加进去，水不要太多，大概到食材的2/3左右），大火烧开转中小火继续烧15-20分钟，中间要时不时翻炒一下，以免糊底。', '26');
INSERT INTO `steps` VALUES ('188', '最后大火收浓汤汁，注意不要收得太干，留一点汤汁才好。', '26');
INSERT INTO `steps` VALUES ('189', '把稀奶油煮沸', '27');
INSERT INTO `steps` VALUES ('190', '在一个锅里准备焦糖，不加水哦. 一点点加入砂糖，同时充分的搅拌以防粘在锅底。', '27');
INSERT INTO `steps` VALUES ('191', '一次性加入所有半盐黄油。', '27');
INSERT INTO `steps` VALUES ('192', '当糖开始变成焦糖的颜色，加入煮沸的稀奶油：要小心别溅到身上！慢慢的倒进去同时要不停的搅拌，这个很重要。', '27');
INSERT INTO `steps` VALUES ('193', '加入准备好的两种巧克力。(90%的黑巧克力和牛奶巧克力）', '27');
INSERT INTO `steps` VALUES ('194', '在一个盘子上铺一层保鲜膜，把上一步的混合物倒在保鲜膜上。 晾凉后，再用一层保鲜膜包起来，然后放在冰箱里冷藏一宿。', '27');
INSERT INTO `steps` VALUES ('195', '', '28');
INSERT INTO `steps` VALUES ('196', '', '28');
INSERT INTO `steps` VALUES ('197', '', '28');
INSERT INTO `steps` VALUES ('198', '', '28');
INSERT INTO `steps` VALUES ('199', '第一步：泡茶', '28');
INSERT INTO `steps` VALUES ('200', '第二步：\r\n雪克杯中加入西柚汁，茉香绿茶、冰块、糖、适量的鲜西柚果汁摇晃均匀，装杯', '28');
INSERT INTO `steps` VALUES ('201', '第三步：鲜西柚切片，放入杯中装饰，出杯即可', '28');
INSERT INTO `steps` VALUES ('202', '西柚去皮，取出果肉', '29');
INSERT INTO `steps` VALUES ('203', '和酸奶搅拌，可选择性加入少量蜂蜜，完成~', '29');
INSERT INTO `steps` VALUES ('204', '', '30');
INSERT INTO `steps` VALUES ('205', '', '30');
INSERT INTO `steps` VALUES ('206', '', '30');
INSERT INTO `steps` VALUES ('207', '加蜂蜜，用料理棒/料理机弄碎', '30');
INSERT INTO `steps` VALUES ('208', '加水，根据自己口感加..水加少了味道会很重的，我喜欢淡淡的味道，所以半个西柚能做一大杯果汁', '30');
INSERT INTO `steps` VALUES ('209', '', '30');
INSERT INTO `steps` VALUES ('210', '西柚切半，把果肉掰出来', '30');
INSERT INTO `steps` VALUES ('211', '鸡腿去骨去皮', '31');
INSERT INTO `steps` VALUES ('212', '准备一锅凉水，将鸡腿肉和鸡腿骨放入锅中煮开后捞出', '31');
INSERT INTO `steps` VALUES ('213', '大米洗净后放入粥锅，放入鸡腿骨、适量盐和水开始煮粥', '31');
INSERT INTO `steps` VALUES ('214', '另外的锅里将鸡腿肉加料酒、花椒、八角、姜片、适量盐煮２０分钟左右至筷子可扎透', '31');
INSERT INTO `steps` VALUES ('215', '粥煮好后盛出，将鸡肉撕成细丝放进碗里，撒香葱即可', '31');
INSERT INTO `steps` VALUES ('224', 'Pick a base\r\n选择一个基础菜打底\r\n可以选择洋白菜，球生菜，芝麻菜，罗马生菜，紫叶生菜等等等', '34');
INSERT INTO `steps` VALUES ('225', 'Add a extra green\r\n加一份额外的绿色\r\n可以选择牛油果，黄瓜，西兰花，萝卜苗等等', '34');
INSERT INTO `steps` VALUES ('226', 'Add a pop of color\r\n添加一点颜色\r\n可选胡萝卜，彩椒，紫洋葱，小番茄，迷你水萝卜，水果等', '34');
INSERT INTO `steps` VALUES ('227', 'Give it some crunch\r\n添加一些脆片、坚果\r\n可选水果脆片，核桃，杏仁，瓜子等', '34');
INSERT INTO `steps` VALUES ('228', 'power up with protein\r\n添加蛋白质\r\n豆类（大红豆，鹰嘴豆等），烤鸡肉，三文鱼，虾，火腿片，鯷鱼，金枪鱼等等', '34');
INSERT INTO `steps` VALUES ('229', 'Mix in healty extras\r\n添加更多的营养\r\n可选玉米粒，奶酪，葡萄干，蔓越莓干等', '34');
INSERT INTO `steps` VALUES ('230', '拌好，找一个漂亮餐具装起来（或者先装再拌。。。）拍照，开吃！', '34');
INSERT INTO `steps` VALUES ('231', 'Don\'t forget to dress it up\r\n添加调味\r\n可选预调的沙拉汁，橄榄油，红酒醋，盐，黑胡椒等', '34');
INSERT INTO `steps` VALUES ('232', '摆能够经得起浸渍和口感较硬的食材：如胡萝卜、黄瓜、甜椒、豆类等', '35');
INSERT INTO `steps` VALUES ('233', '首先摆沙拉酱和谷物（藜麦、通心面等等）', '35');
INSERT INTO `steps` VALUES ('234', '蔬菜和蘑菇：如樱桃萝卜、土豆、玉米、洋葱、西兰花、菇类等', '35');
INSERT INTO `steps` VALUES ('235', '蛋白质类：肉、蛋、芝士、坚果', '35');
INSERT INTO `steps` VALUES ('236', '最后盖上绿叶菜', '35');
INSERT INTO `steps` VALUES ('237', '莲藕、胡萝卜去皮洗净后改刀切片，荷兰豆去根对半切；黑木耳用温水泡40分钟；大蒜切碎', '36');
INSERT INTO `steps` VALUES ('238', '小锅烧水，水开后滴点色拉油，再依次把莲藕、胡萝卜、荷兰豆、黑木耳过水焯一下', '36');
INSERT INTO `steps` VALUES ('239', '过凉水捞出沥干水份待用', '36');
INSERT INTO `steps` VALUES ('240', '放大蒜末，加盐、鸡精、糖、白醋调味，最后滴香油拌匀即可', '36');
INSERT INTO `steps` VALUES ('241', '青椒，红椒，洋葱和培根切丝备用', '37');
INSERT INTO `steps` VALUES ('242', '2只打成蛋液，加入少许盐', '37');
INSERT INTO `steps` VALUES ('243', '打好的蛋液里加入面粉，搅拌成没有颗粒的蛋糊。', '37');
INSERT INTO `steps` VALUES ('244', '大约40S后关火，轻轻的均匀铺上培根丝。', '37');
INSERT INTO `steps` VALUES ('245', '热锅，小火往锅里刷薄薄一层油。然后小火倒入蛋液。', '37');
INSERT INTO `steps` VALUES ('246', '然后依次铺上青椒丝、红椒丝和洋葱。最后均匀撒上芝士。', '37');
INSERT INTO `steps` VALUES ('247', '打开锅盖，芝士融化，轻轻晃动锅子蛋饼会自动脱离。', '37');
INSERT INTO `steps` VALUES ('248', '盖上盖子小火闷2-3分钟。', '37');
INSERT INTO `steps` VALUES ('249', '然后把水倒出来，倒至看见红豆沙就差不多了，剩余的水和红豆焖一会，让红豆吸收一下水分，然后回锅煮，不停画圈圈，红豆沙就会出来了，这是带皮的红豆沙；', '38');
INSERT INTO `steps` VALUES ('250', '把红豆沙炒成团之后，把无盐黄油加进去，加进去之后红豆沙又会变稀了，要再次把红豆沙炒成团', '38');
INSERT INTO `steps` VALUES ('251', '先来制作馅料，这里我用到蜜红豆来制作红豆沙，首先把蜜红豆和水加入奶锅中煮沸腾，把红豆煮软，因为刚开封的蜜红豆很硬的', '38');
INSERT INTO `steps` VALUES ('252', '把豆沙铺开，盖上保鲜膜冷却备用，一定要盖，否则表面会干的', '38');
INSERT INTO `steps` VALUES ('253', '烤箱上下火180预热。把泡过油咸蛋黄平铺早烤盘然后送入烤箱：上下火180度，中层，5~8分钟 ，直到蛋黄表面冒油，半熟就可以了，拿出来之后让蛋黄在烤盘上放凉，烤盘的预热会让蛋黄全熟', '38');
INSERT INTO `steps` VALUES ('254', '红豆沙放凉之后平均分成20小份，每一份大约25g，称量肯定是有出入的，所以我配方做出来不是25的倍数，多一点少一点问题不大', '38');
INSERT INTO `steps` VALUES ('255', '把熟的咸蛋黄全部包进红豆沙之后上下一张保鲜膜封住，送入冰箱冷藏备用，这样馅料会变得结实一点，更好包，馅料部分就做好了', '38');
INSERT INTO `steps` VALUES ('256', '接着做油皮的部分，猪油和热水用手动打蛋器混匀，做一下乳化，这样可以保证大家的状态都跟我一样，因为猪油室温软化的软硬度，取决于室温，软硬度不一样，加进去的水也会不一样，水只是暂时和油混合，所以混合完要马上使用', '38');
INSERT INTO `steps` VALUES ('257', '接着我们把油酥全部团圆，方便包入油皮里，根据视频的方法把油酥包入油皮里面', '38');
INSERT INTO `steps` VALUES ('258', '接着把油酥和油皮平均分成20小份，油皮18克，油酥12克，同样多一点少一点问题不大，我的量是有预多的，所以大家保证每一份足称就可以', '38');
INSERT INTO `steps` VALUES ('259', '全部包好之后盖上保鲜膜最后松弛15分钟左右，这样是为了让油酥皮可以松弛，有延展性，烘烤的时候不会爆太开，另外一个是让冷藏过的馅料恢复室温，否则热胀冷缩同样很容易爆开的', '38');
INSERT INTO `steps` VALUES ('260', '蛋黄酥我配方是做的20颗，需要分开烘烤，未烘烤的蛋黄酥需要盖上保鲜膜等待，这个时间问题不大，只要盖好保鲜膜不让表皮干掉就可以了，那我们把需要烘烤的蛋黄酥刷上蛋黄液撒上芝麻，不烤的不要刷，烤的时候再刷，否则蛋黄干掉，会有密集的裂纹', '38');
INSERT INTO `steps` VALUES ('261', '蛋黄酥热切的时候馅料边缘都是湿润的，这是正常的，还有咸蛋黄有白心其实也是正常的，室温放置一两天，品质好的蛋黄，白心部分会自动变得不白心的，做出来记得交作业哦~~', '38');
INSERT INTO `steps` VALUES ('262', '糯米粉、粘米粉都是用三象，澄粉，也叫小麦淀粉、澄面，各超市都有的。', '39');
INSERT INTO `steps` VALUES ('263', '糯米粉粘米粉澄粉糖粉混合，用手抽搅拌均匀。\r\n粉类先混合再分成6份，加色粉或者果汁调的颜色，想更精确的话可以粉类各取10g，从一开始就分成6份操作，费点事儿但是成功率高。', '39');
INSERT INTO `steps` VALUES ('264', '现在已经分成了6个小碗了，建议用瓷碗，导热比较均匀。\r\n紫薯芒果可可抹茶粉加入，搅拌均匀。然后依次加入牛奶，玉米油，炼乳，搅拌均匀静置备用。（注意：倒入牛奶之后颜色会比单纯粉类的时候深很多，所以别加太多了，要不就不美啦） \r\n图片玫红色那个用红心火龙果榨汁代替了牛奶，再加玉米油炼乳搅拌均匀就可以了。\r\n原色的直接牛奶玉米油炼乳就可以', '39');
INSERT INTO `steps` VALUES ('265', '蒸锅烧开水，上锅蒸8-10分钟，蒸到熟为止。（只拍了这三种，颜色漂亮那三碗忘记拍了）\r\nPS：如果只做一种颜色的，要蒸25分钟左右哦。', '39');
INSERT INTO `steps` VALUES ('266', '蒸好的面团用筷子扎一扎，稍稍放凉之后倒进保鲜袋里，捏一捏揉一揉，这时候软硬度延展性都特别好，可以稍揪一块尝一口味道，很好吃的，尤其是抹茶的，特别清香，我尝了好几口，直接导致后来皮不够用了-_-#', '39');
INSERT INTO `steps` VALUES ('267', '1、土豆煮熟后切片，撒上盐和黑胡椒；\r\n2、平底不粘锅烧热，放入一茶匙油后放入鸡胸；\r\n3、中火煎至两面焦黄，中间熟透；\r\n4、用盐和黑胡椒调味。\r\n（鸡胸旁边的菜是紫包菜和包菜丝，土豆上的绿色粉末是欧芹粉，可以不用）', '40');
INSERT INTO `steps` VALUES ('268', '1、西蓝花和虾焯熟后过冷水冷却，撒少许盐拌匀；\r\n2、土豆煮熟后压碎，淋入半茶匙油和少许黑胡椒还有一小撮盐；\r\n3、鸡胸肉煮熟过冷水后撕成丝，与焯过水的蟹味菇混合后淋入酱油和半茶匙油。', '40');
INSERT INTO `steps` VALUES ('269', '1、喜欢的蔬菜切丝，鸡胸肉煮熟后撕成丝备用；\r\n2、放入煮熟且过了凉水完全冷却的粉丝，淋入酱油、白醋和半茶匙白糖拌匀；\r\n3、水浸金枪鱼罐头用辣椒粉、黑胡椒和半茶匙油（橄榄油为好，玉米油、葵花籽油、色拉油等无较大特殊气味的油也行）拌匀；\r\n（如果是油浸金枪鱼罐头就不需要放油了，还需要尽量撇点儿油走）', '40');
INSERT INTO `steps` VALUES ('270', '1、玉米粒、毛豆粒、胡萝卜粒焯水后过冷水；\r\n2、放入黑胡椒和盐拌匀；\r\n3、鸡胸煮熟撕成丝，淋入酱油、白醋和小半茶匙油，与香菜和辣椒拌匀。', '40');
INSERT INTO `steps` VALUES ('271', '\r\n\r\n\r\n搜索菜谱、食材\r\n搜菜谱\r\n首页菜谱分类 菜单作品动态\r\n白晓-1314的厨房\r\n首页 便当 减脂便当 \r\n减脂便当\r\n减脂便当的做法\r\n8.6 综合评分 30 人做过这道菜 收藏\r\n伊斯特艾格的厨房  伊斯特艾格\r\n便当盒是Asvel的。平均一份的热量大概在500Kcal左右，都是挺适合减脂期的妹子的便当。\r\n用料  \r\n各类蔬菜	适量\r\n低脂肪肉类	适量\r\n减脂便当的做法  \r\n1、西蓝花和虾焯熟后过冷水冷却，撒少许盐拌匀；\r\n2、土豆煮熟后压碎，淋入半茶匙油和少许黑胡椒还有一小撮盐；\r\n3、鸡胸肉煮熟过冷水后撕成丝，与焯过水的蟹味菇混合后淋入酱油和半茶匙油。减脂便当的做法 步骤1\r\n1、土豆煮熟后切片，撒上盐和黑胡椒；\r\n2、平底不粘锅烧热，放入一茶匙油后放入鸡胸；\r\n3、中火煎至两面焦黄，中间熟透；\r\n4、用盐和黑胡椒调味。\r\n（鸡胸旁边的菜是紫包菜和包菜丝，土豆上的绿色粉末是欧芹粉，可以不用）减脂便当的做法 步骤2\r\n1、喜欢的蔬菜切丝，鸡胸肉煮熟后撕成丝备用；\r\n2、放入煮熟且过了凉水完全冷却的粉丝，淋入酱油、白醋和半茶匙白糖拌匀；\r\n3、水浸金枪鱼罐头用辣椒粉、黑胡椒和半茶匙油（橄榄油为好，玉米油、葵花籽油、色拉油等无较大特殊气味的油也行）拌匀；\r\n（如果是油浸金枪鱼罐头就不需要放油了，还需要尽量撇点儿油走）减脂便当的做法 步骤3\r\n1、玉米粒、毛豆粒、胡萝卜粒焯水后过冷水；\r\n2、放入黑胡椒和盐拌匀；\r\n3、鸡胸煮熟撕成丝，淋入酱油、白醋和小半茶匙油，与香菜和辣椒拌匀。减脂便当的做法 步骤4\r\n1、煮杂粮饭（我用的红豆、小米和燕麦，需要提前泡好）；\r\n2、西蓝花焯水，胡萝卜和黄瓜切片，与去壳的水煮虾混合后淋入柠檬汁、盐和黑胡椒拌匀；\r\n3、水浸金枪鱼罐头和切碎的水煮蛋混合，加入一小勺沙拉酱和一小撮辣椒粉拌匀（如果用的油浸金枪鱼罐头就不需要沙拉酱）。\r\n（别一看到沙拉酱就觉得是减肥的敌人，这一小勺沙拉酱10g都不到，这份便当里的脂肪基本就靠它了）', '40');
INSERT INTO `steps` VALUES ('272', '1、胡萝卜、牛蒡切片后焯水；\r\n2、煮熟过一道冷水后淋入酱油和半茶匙油，撒上芝麻和小葱拌匀；\r\n3、豆皮切成合适尺寸，稍微涂抹黄豆酱后卷入自己喜欢的蔬菜及肉类；\r\n4、水煮虾仁与生菜混合后淋入柠檬汁，撒上盐和黑胡椒即可。', '40');
INSERT INTO `steps` VALUES ('273', '准备好所有材料，黄油切小块软化，室温低的放烤箱开启发酵功能十几二十分钟就可以了', '41');
INSERT INTO `steps` VALUES ('274', '软化好的黄油加入糖粉用电动打蛋器打成膏状，手法可以打几下拌几下，以防糖粉飞溅', '41');
INSERT INTO `steps` VALUES ('275', '鸡蛋液和黄油一起打成膏状如图', '41');
INSERT INTO `steps` VALUES ('276', '筛入低筋面粉，调入盐（也可不加）', '41');
INSERT INTO `steps` VALUES ('277', '取出面团，硅胶垫上刷上薄薄的一层玉米淀粉，放上面团后盖上一层保鲜膜，轻轻的擀开，擀成0.3-0.5厚的片', '41');
INSERT INTO `steps` VALUES ('278', '戴上食品手套，用手抓捏成团，看不到干粉即可，盖上保鲜膜放冰箱冷藏半小时', '41');
INSERT INTO `steps` VALUES ('279', '分次加入常温鸡蛋液，每加入一次打至混合方可再次加入', '41');
INSERT INTO `steps` VALUES ('280', '借助橡皮刮板，轻轻把压好的饼干转移到铺了油布的烤盘中来', '41');
INSERT INTO `steps` VALUES ('281', '提前根据饼干的大小用可食用铅笔在纸上画好圣诞老人，然后剪下来，贴在饼干上，用糖霜搅拌针在纸上轻轻向饼干上面根据线条大致戳出一些小孔', '41');
INSERT INTO `steps` VALUES ('282', '相邻糖霜填充时一定要等到上一步的糖霜干后再操作为佳，画上胡子', '41');
INSERT INTO `steps` VALUES ('283', '圣诞雪人和下面的比起圣诞老人就简单很多了。', '41');
INSERT INTO `steps` VALUES ('284', '买回来肥瘦相间的牛肉先用水彻底表面的血水和脏物把牛肉放在清水里浸泡，每过一个小时换一次水，我浸泡了5个小时', '42');
INSERT INTO `steps` VALUES ('285', '把牛肉剁成大块锅中加入冷水放入牛肉', '42');
INSERT INTO `steps` VALUES ('286', '煮开后看到牛肉里稀释出很多浮沫，把牛肉在锅里清洗干净后拿出备用', '42');
INSERT INTO `steps` VALUES ('287', '加入一小块冰糖翻炒到融化，加入一勺番茄酱', '42');
INSERT INTO `steps` VALUES ('288', '准备好调料,小茴香和大茴香不一样，长得象稻谷，就是下图大蒜下面的。热锅冷油', '42');
INSERT INTO `steps` VALUES ('289', '加入辣椒丝，大蒜，生姜，香叶，陈皮，八角，小茴香，桂皮和洋葱', '42');
INSERT INTO `steps` VALUES ('290', '加入一勺豆瓣酱，加入香葱继续翻炒到香味浓郁', '42');
INSERT INTO `steps` VALUES ('291', '牛肉和其他放一起的调料放入高压锅，水量到锅的三分之二满左右，盖上锅盖', '42');
INSERT INTO `steps` VALUES ('292', '在另一锅里放水煮开，把面条煮到你喜欢的软硬程度，放到上面煮好的汤料里就成了，可以在汤料里再煮点青菜或者西红柿更好', '42');
INSERT INTO `steps` VALUES ('293', '热锅中放入足量油，至6成热下土豆条以小火炸熟后捞出备用', '43');
INSERT INTO `steps` VALUES ('294', '牛蛙请摊主活杀后去除内脏、皮、脚趾，洗净后切成块土豆、莴笋分别去皮切成条，香菜、葱切段；蒜去除外衣剥出蒜头，姜切片', '43');
INSERT INTO `steps` VALUES ('295', '牛蛙放入碗里，加少许盐和胡椒粉拌匀腌制15分钟', '43');
INSERT INTO `steps` VALUES ('296', '腌好的牛蛙拍些干淀粉，将其放入油锅炸至微黄捞出备用', '43');
INSERT INTO `steps` VALUES ('297', '锅中倒去多余的油，留少许底油，放入葱、姜、干辣椒、花椒和蒜头爆香', '43');
INSERT INTO `steps` VALUES ('298', '将一大勺川湘牛肉辣酱或者其他辣酱下锅炒香，放入莴笋和土豆略微翻炒', '43');
INSERT INTO `steps` VALUES ('299', '加入适量料酒、生抽、糖调味，将炸好的牛蛙放入，迅速翻炒均匀后，撒入香菜段即可', '43');
INSERT INTO `steps` VALUES ('300', '在带鱼段两面都刻上花刀，以便入味。', '44');
INSERT INTO `steps` VALUES ('301', '用盐1小匙，将鱼块腌制10分钟。', '44');
INSERT INTO `steps` VALUES ('302', '炒锅烧热，放入油加入香叶，八角，姜，蒜，花椒小火炒出香味', '44');
INSERT INTO `steps` VALUES ('303', '加入带鱼段，用小火煎至表面金黄色。', '44');
INSERT INTO `steps` VALUES ('304', '翻面再煎另一面，直至两面成金黄色。', '44');
INSERT INTO `steps` VALUES ('305', '加入热开水，水量至鱼的1/2处，加入料酒、生抽、老抽、冰糖、陈醋', '44');
INSERT INTO `steps` VALUES ('306', '大火煮开后，加盖小火焖20分钟，10分钟时将鱼翻面一次。', '44');
INSERT INTO `steps` VALUES ('307', '最后将里面的香料夹出，大火煮至汤汁浓稠即可，盛盘后在表面洒上少量五香粉。', '44');
INSERT INTO `steps` VALUES ('308', '将焯过水的排骨和生姜片放进砂锅煲中，加入足够量的清水，水量要没过排骨还略高1cm左右。——因为煲汤的过程中会流失掉一小部分水分，所以水要一次加足', '45');
INSERT INTO `steps` VALUES ('309', '生姜刷干净，去皮，切片。将生姜皮和排骨一起下入清水锅中，煮开后继续煮三四分钟，将排骨捞起沥干，水和姜皮就倒掉不用了', '45');
INSERT INTO `steps` VALUES ('310', '莲藕去皮，切滚刀块，撒上少许盐，杀一下——也就是用盐拌匀，腌10分钟左右', '45');
INSERT INTO `steps` VALUES ('311', '烧开后加盖转小火炖1小时左右', '45');
INSERT INTO `steps` VALUES ('312', '将莲藕下入汤煲中，继续小火炖1小时', '45');
INSERT INTO `steps` VALUES ('313', '肉烂藕粉之时，加适量盐，转中火滚开煮10分钟左右，撒上葱花即可', '45');
INSERT INTO `steps` VALUES ('314', '花椒用油慢火炸香凉透，海米用清水浸泡一会滤干水份', '46');
INSERT INTO `steps` VALUES ('315', '芹菜洗净控水，香芹洗干净切碎，如果是大芹菜切碎撒少许盐攥干水份', '46');
INSERT INTO `steps` VALUES ('316', '胡萝卜去皮切丝再切末用油煸炒凉透，胡萝卜丁加入肉馅', '46');
INSERT INTO `steps` VALUES ('317', '肉馅拌匀腌制十分钟，鸡蛋加适清水和匀，加入适量面粉，和好的面团盖上盖醒1小时以上开始包饺子', '46');
INSERT INTO `steps` VALUES ('318', '猪肉剁碎，加适量的盐和酱油，葱姜末，香油食盐和鸡精拌均匀。加入过滤后的花椒油和海米', '46');
INSERT INTO `steps` VALUES ('319', '奶酪奶酪切成小块，夏季可以直接放在室内软化。冬季隔热水软化', '47');
INSERT INTO `steps` VALUES ('320', '制作蓝莓果酱：蓝莓洗净擦干水分。在一个小锅里将细砂糖和蓝莓混合在一起，用木勺压碎成糊。静置1小时，让糖和蓝莓的味道充分融合。之后开小火煮，倒入柠檬汁边煮边搅拌，煮至粘稠状态即可。', '47');
INSERT INTO `steps` VALUES ('321', '制作奥利奥饼干底：奥利奥饼干拜碎，放入食物料理机中打碎成渣。加入融化的黄油拌匀。把饼干渣倒入模具底部铺匀，用勺子等工具细细的压平整。连模具一起放入冰箱冷藏备用。', '47');
INSERT INTO `steps` VALUES ('322', '制作奶酪糊：软化的奶油奶酪加糖粉放入容器打发至光滑无颗粒，加入浓稠酸奶和柠檬汁搅匀。', '47');
INSERT INTO `steps` VALUES ('323', '取一只小碗放冷水把吉利丁片先泡软后沥干水分。碗里加入30ML牛奶微波炉30秒，使吉利丁片融化在牛奶里搅匀。把牛奶液加入4步骤的奶酪糊里拌匀。', '47');
INSERT INTO `steps` VALUES ('324', '淡奶油坐冰水打发至6分发的状态（打蛋头可以留下痕迹）。\r\n倒入奶酪糊中拌匀。', '47');
INSERT INTO `steps` VALUES ('325', '从冰箱取出冷藏好的模具，先倒入深紫色的奶酪糊，在台面上轻磕几下磕出气泡。入冰箱冷冻层25分钟至奶酪层凝固，之后拿出来再倒入浅紫色奶酪糊再冷冻25分钟。最后拿出来倒入最后一层原味奶酪糊，放冰箱冷藏6小时以上彻底凝固。', '47');
INSERT INTO `steps` VALUES ('326', '最后取出脱模，可用吹风机围绕模具一圈吹一下就很好脱模了。表面可以装饰一些新鲜蓝莓，大家发挥想象吧！', '47');
INSERT INTO `steps` VALUES ('327', '杏鲍菇洗净切块，约3cm见方待用；', '48');
INSERT INTO `steps` VALUES ('328', '起油锅，待油温六七分热时将杏鲍菇分批倒入锅内文火慢煎，煎至四面金黄色，撒少许盐盛出待用；', '48');
INSERT INTO `steps` VALUES ('329', '牛排解冻后提前30分钟置于室温，用厨房纸吸干表层血水；', '48');
INSERT INTO `steps` VALUES ('330', '起油锅，油温十分热时煎牛排，每15秒翻面，来回三次，取出，待五分钟后用刀切开3cm见方待用；', '48');
INSERT INTO `steps` VALUES ('331', '将牛肉粒倒入煎过牛排的锅里，快速翻炒，六面去生即可，倒入杏鲍菇，加入生抽少许、白砂糖适量，快速翻炒，出锅前加少许老抽上色；', '48');
INSERT INTO `steps` VALUES ('332', '盛出杏鲍菇牛肉粒，撒上研磨黑胡椒即可。', '48');
INSERT INTO `steps` VALUES ('333', '先揉成一个光滑的有韧性\r\n的面团，然后放入室温软\r\n化的黄油。', '49');
INSERT INTO `steps` VALUES ('334', '把主面团中除黄油之外的\r\n食材全部放入厨师机桶里，按照底层液体、中层粉类、上层干酵母的顺序。', '49');
INSERT INTO `steps` VALUES ('335', '继续揉至可以抻出薄膜的\r\n扩展阶段即可。', '49');
INSERT INTO `steps` VALUES ('336', '然后进行发酵，把面团放\r\n入一个干净的容器内，盖\r\n上保鲜膜，建议温度30度，发酵一个小时。', '49');
INSERT INTO `steps` VALUES ('337', '等待发酵的时候来做欧克\r\n皮。把欧克皮中所有材料\r\n混合到一起，揉成一个光\r\n滑的面团备用，注意盖好\r\n保鲜膜。', '49');
INSERT INTO `steps` VALUES ('338', '然后平均分成25个小面团。', '49');
INSERT INTO `steps` VALUES ('339', '揉圆之后放入模具中，如\r\n图所示~\r\n然后进行二次发酵，建议\r\n温度32度，30分钟。', '49');
INSERT INTO `steps` VALUES ('340', '发酵结束后，把面团在案\r\n板上按压排气。', '49');
INSERT INTO `steps` VALUES ('341', '把欧克皮面团平均分成\r\n50份，揉圆。', '49');
INSERT INTO `steps` VALUES ('342', '烤箱开始预热，上下火170度。\r\n预热好之后，把模具放入烤箱，上下火160度，烤30分钟，中途注意加盖锡纸，防止上色过深。\r\n烤好之后立即取出，脱模之后在烤架上晾凉。\r\n凉了之后用巧克力或者烘焙色素笔画上表情就可以了~', '49');
INSERT INTO `steps` VALUES ('348', '把银耳撕成小朵小朵的', '51');
INSERT INTO `steps` VALUES ('349', '先将银耳入锅，加入足量的水小火满炖至浓稠，在放入切小的紫薯一起煮。这样紫薯不会煮到太过烂', '51');
INSERT INTO `steps` VALUES ('350', '起锅前放入冰糖和蔓越莓干，就OK了', '51');
INSERT INTO `steps` VALUES ('351', '准备好食材，银耳提前浸泡好。', '51');

-- ----------------------------
-- Table structure for `tag`
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `category_id` int(10) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryfk` (`category_id`),
  CONSTRAINT `categoryfk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES ('1', '特色食品', '小吃', '1', '10001');
INSERT INTO `tag` VALUES ('2', '特色食品', '酱', '1', '10002');
INSERT INTO `tag` VALUES ('3', '特色食品', '沙拉', '1', '10003');
INSERT INTO `tag` VALUES ('4', '特色食品', '凉菜', '1', '10004');
INSERT INTO `tag` VALUES ('5', '特殊场合', '早餐', '1', '10005');
INSERT INTO `tag` VALUES ('6', '特殊场合', '下午茶', '1', '10006');
INSERT INTO `tag` VALUES ('7', '特殊场合', '便当', '1', '10007');
INSERT INTO `tag` VALUES ('8', '特殊场合', '圣诞节', '1', '10008');
INSERT INTO `tag` VALUES ('9', '菜式', '家常菜', '1', '10009');
INSERT INTO `tag` VALUES ('10', '菜式', '快手菜', '1', '10010');
INSERT INTO `tag` VALUES ('11', '菜式', '下饭菜', '1', '10011');
INSERT INTO `tag` VALUES ('12', '菜式', '素菜', '1', '10012');
INSERT INTO `tag` VALUES ('13', '功效', '减肥', '1', '10013');
INSERT INTO `tag` VALUES ('14', '功效', '美容', '1', '10014');
INSERT INTO `tag` VALUES ('15', '功效', '润肺抗燥', '1', '10015');
INSERT INTO `tag` VALUES ('16', '人群', '儿童', '1', '10016');
INSERT INTO `tag` VALUES ('17', '人群', '婴幼儿', '1', '10017');
INSERT INTO `tag` VALUES ('18', '人群', '老人', '1', '10018');
INSERT INTO `tag` VALUES ('19', null, '烘焙', '2', '10019');
INSERT INTO `tag` VALUES ('20', null, '甜品', '2', '10020');
INSERT INTO `tag` VALUES ('21', null, '甜品', '2', '10021');
INSERT INTO `tag` VALUES ('22', null, '蛋糕', '2', '10022');
INSERT INTO `tag` VALUES ('23', null, '布丁', '2', '10023');
INSERT INTO `tag` VALUES ('24', null, '咖啡', '2', '10024');
INSERT INTO `tag` VALUES ('25', null, '面包', '2', '10025');
INSERT INTO `tag` VALUES ('26', null, '冷饮', '2', '10026');
INSERT INTO `tag` VALUES ('27', null, '豆浆', '2', '10027');
INSERT INTO `tag` VALUES ('28', null, '饼干', '2', '10028');
INSERT INTO `tag` VALUES ('29', null, '果酱', '2', '10029');
INSERT INTO `tag` VALUES ('30', null, '奶茶', '2', '10030');
INSERT INTO `tag` VALUES ('31', null, '土司', '2', '10031');
INSERT INTO `tag` VALUES ('32', null, '糖水', '2', '10032');
INSERT INTO `tag` VALUES ('33', null, '酒', '2', '10033');
INSERT INTO `tag` VALUES ('34', null, '猪肉', '3', '10034');
INSERT INTO `tag` VALUES ('35', null, '鸡', '3', '10035');
INSERT INTO `tag` VALUES ('36', null, '牛', '3', '10036');
INSERT INTO `tag` VALUES ('37', null, '羊', '3', '10037');
INSERT INTO `tag` VALUES ('38', null, '鸭', '3', '10038');
INSERT INTO `tag` VALUES ('39', '果实类蔬菜', '番茄', '4', '10039');
INSERT INTO `tag` VALUES ('40', '果实类蔬菜', '南瓜', '4', '10040');
INSERT INTO `tag` VALUES ('41', '果实类蔬菜', '玉米', '4', '10041');
INSERT INTO `tag` VALUES ('42', '果实类蔬菜', '茄子', '4', '10042');
INSERT INTO `tag` VALUES ('43', '果实类蔬菜', '黄瓜', '4', '10043');
INSERT INTO `tag` VALUES ('44', '根茎蔬菜', '土豆', '4', '10044');
INSERT INTO `tag` VALUES ('45', '根茎蔬菜', '萝卜', '4', '10045');
INSERT INTO `tag` VALUES ('46', '根茎蔬菜', '紫薯', '4', '10046');
INSERT INTO `tag` VALUES ('47', '根茎蔬菜', '胡萝卜', '4', '10047');
INSERT INTO `tag` VALUES ('48', '根茎蔬菜', '山药', '4', '10048');
INSERT INTO `tag` VALUES ('49', '根茎蔬菜', '藕', '4', '10049');
INSERT INTO `tag` VALUES ('50', '叶类蔬菜', '芹菜', '4', '10050');
INSERT INTO `tag` VALUES ('51', '叶类蔬菜', '白菜', '4', '10051');
INSERT INTO `tag` VALUES ('52', '叶类蔬菜', '韭菜', '4', '10052');
INSERT INTO `tag` VALUES ('53', null, '汤羹', '5', '10053');
INSERT INTO `tag` VALUES ('54', null, '饭', '5', '10054');
INSERT INTO `tag` VALUES ('55', null, '饼', '5', '10055');
INSERT INTO `tag` VALUES ('56', null, '粥', '5', '10056');

-- ----------------------------
-- Table structure for `thumb_tb`
-- ----------------------------
DROP TABLE IF EXISTS `thumb_tb`;
CREATE TABLE `thumb_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `work_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `workid_fk` (`work_id`),
  KEY `userid1_fk` (`user_id`),
  CONSTRAINT `userid1_fk` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thumb_tb
-- ----------------------------
INSERT INTO `thumb_tb` VALUES ('1', '1', '4');
INSERT INTO `thumb_tb` VALUES ('2', '2', '4');
INSERT INTO `thumb_tb` VALUES ('5', '7', '3');
INSERT INTO `thumb_tb` VALUES ('8', '2', '4');
INSERT INTO `thumb_tb` VALUES ('9', '6', '4');
INSERT INTO `thumb_tb` VALUES ('12', '1', '5');
INSERT INTO `thumb_tb` VALUES ('13', '2', '5');
INSERT INTO `thumb_tb` VALUES ('14', '3', '6');
INSERT INTO `thumb_tb` VALUES ('18', '3', '6');
INSERT INTO `thumb_tb` VALUES ('76', '6', '7');
INSERT INTO `thumb_tb` VALUES ('89', '9', '7');
INSERT INTO `thumb_tb` VALUES ('95', '10', '3');
INSERT INTO `thumb_tb` VALUES ('101', '4', '15');
INSERT INTO `thumb_tb` VALUES ('102', '1', '15');
INSERT INTO `thumb_tb` VALUES ('104', '5', '3');
INSERT INTO `thumb_tb` VALUES ('113', '10', '7');
INSERT INTO `thumb_tb` VALUES ('119', '6', '3');
INSERT INTO `thumb_tb` VALUES ('120', '9', '3');
INSERT INTO `thumb_tb` VALUES ('135', '1', '3');
INSERT INTO `thumb_tb` VALUES ('145', '12', '3');
INSERT INTO `thumb_tb` VALUES ('152', '13', '7');
INSERT INTO `thumb_tb` VALUES ('161', '2', '7');
INSERT INTO `thumb_tb` VALUES ('185', '8', '7');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) NOT NULL,
  `password` varchar(800) NOT NULL,
  `name` varchar(20) DEFAULT '味蕾网用户wl283712',
  `cometime` datetime DEFAULT NULL,
  `signature` varchar(100) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `homecity_id` int(10) DEFAULT '5',
  `nowcity_id` int(10) DEFAULT '5',
  `profession` varchar(20) DEFAULT NULL,
  `production_number` int(11) DEFAULT '0',
  `collection_number` int(11) DEFAULT '0',
  `user_icon` varchar(1500) DEFAULT 'http://owigmgx25.bkt.clouddn.com/head_pic02.jpg',
  PRIMARY KEY (`id`),
  KEY `homecityfk` (`homecity_id`),
  KEY `nowcityfk` (`nowcity_id`),
  CONSTRAINT `homecityfk` FOREIGN KEY (`homecity_id`) REFERENCES `city` (`id`),
  CONSTRAINT `nowcityfk` FOREIGN KEY (`nowcity_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', '18362202331', '03f13efa7a650f1556daa1e79865bd9f', 'CcccccC', '2017-09-14 11:04:36', 'ddsad', '男', '5', '32', '学生', '0', '0', 'http://owigmgx25.bkt.clouddn.com/headpic01.jpg');
INSERT INTO `userinfo` VALUES ('2', '17706248670', 'e10adc3949ba59abbe56e057f20f883e', '叫我甜甜君1', '2017-09-11 11:05:44', '哈哈哈哈哈', '男', '81', '81', 'java工程师', '0', '0', 'http://owigmgx25.bkt.clouddn.com/headpic01.jpg');
INSERT INTO `userinfo` VALUES ('3', '18506130604', '03f13efa7a650f1556daa1e79865bd9f', '剑龙在草地散步', '2017-09-20 20:48:47', '啦啦啦啦啦啦  我是卖报的小行家~~~', '男', '9', '54', 'IT/互联网', '10', '5', 'http://owkq4s9d1.bkt.clouddn.com/1506739929302.jpeg');
INSERT INTO `userinfo` VALUES ('4', '17706248671', '54a13118b01d123109cf02360ffe3354', '我吃大西瓜', '2017-09-13 11:13:54', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic02.jpg');
INSERT INTO `userinfo` VALUES ('5', '17706248679', '03f13efa7a650f1556daa1e79865bd9f', '我怎么这么萌', '2017-09-20 11:13:11', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic05.jpg');
INSERT INTO `userinfo` VALUES ('6', '17706248677', '54a13118b01d123109cf02360ffe3354', '我怎么这么帅', '2017-09-20 12:19:40', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic06.jpg');
INSERT INTO `userinfo` VALUES ('7', '18852981539', '720c52d5491335a1636d41d4c4ddc8db', '叫我甜甜君', '2017-09-20 15:09:42', '终于可以更新信息了', '女', '252', '179', '学生', '1', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506651942821.jpeg');
INSERT INTO `userinfo` VALUES ('8', '17706248678', '03f13efa7a650f1556daa1e79865bd9f', '我吃大苹果', '2017-09-22 12:37:32', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic06.jpg');
INSERT INTO `userinfo` VALUES ('9', '17775484985', '720c52d5491335a1636d41d4c4ddc8db', '小沐小宸', '2017-09-22 13:57:03', '姚超是个大笨蛋', '女', '186', '99', '学生', '1', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506581483726.jpeg');
INSERT INTO `userinfo` VALUES ('10', '18506130609', '54a13118b01d123109cf02360ffe3354', '味蕾网用户wl283712', '2017-09-24 15:00:04', null, null, '5', '5', null, '0', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506431946419.jpeg');
INSERT INTO `userinfo` VALUES ('11', '18506130610', '54a13118b01d123109cf02360ffe3354', '味蕾网用户wl283712', '2017-09-24 15:06:07', null, null, '5', '5', null, '0', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506431946419.jpeg');
INSERT INTO `userinfo` VALUES ('12', '18506130687', '03f13efa7a650f1556daa1e79865bd9f', '味蕾网用户wl283712', '2017-09-24 15:08:49', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic05.jpg');
INSERT INTO `userinfo` VALUES ('13', '17706248422', '720c52d5491335a1636d41d4c4ddc8db', '味蕾网用户wl283712', '2017-09-24 15:13:42', null, null, '5', '5', null, '0', '0', 'http://owigmgx25.bkt.clouddn.com/head_pic02.jpg');
INSERT INTO `userinfo` VALUES ('14', '18080751167', '720c52d5491335a1636d41d4c4ddc8db', '我吃大葡萄', '2017-09-24 15:16:50', '你好，我喜欢吃苹果！', '男', '21', '22', '小学生', '0', '0', 'http://owigmgx25.bkt.clouddn.com/headpic01.jpg');
INSERT INTO `userinfo` VALUES ('15', '18862166873', 'f5867bed9e81bbfb5043c7fa4afde0a9', '吃肉的来报道', '2017-09-27 11:25:59', '吃吃吃吃', '女', '253', '100', 'IT/互联网', '13', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506484051564.jpeg');
INSERT INTO `userinfo` VALUES ('16', '15150124531', '720c52d5491335a1636d41d4c4ddc8db', '此露非彼陆', '2017-09-27 11:39:27', '.。。', '女', '118', '99', '学生', '5', '0', 'http://owkq4s9d1.bkt.clouddn.com/1506737187637.jpeg');

-- ----------------------------
-- Table structure for `works`
-- ----------------------------
DROP TABLE IF EXISTS `works`;
CREATE TABLE `works` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `cover_pic` varchar(500) DEFAULT NULL,
  `reciper_id` int(11) DEFAULT NULL,
  `descripe` varchar(1500) DEFAULT NULL,
  `creater_id` int(11) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `thumb_numbers` int(100) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `reciper5_fk` (`reciper_id`),
  KEY `creater5_fk` (`creater_id`),
  CONSTRAINT `creater5_fk` FOREIGN KEY (`creater_id`) REFERENCES `userinfo` (`id`),
  CONSTRAINT `reciper5_fk` FOREIGN KEY (`reciper_id`) REFERENCES `recipes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of works
-- ----------------------------
INSERT INTO `works` VALUES ('3', '可乐鸡翅', 'http://owigmgx25.bkt.clouddn.com/%E5%8F%AF%E4%B9%90%E9%B8%A1%E7%BF%8503.jpg-280280\r\n', '3', '第一次做可乐鸡翅，还不错，味道还是棒棒哒', '5', '2017-09-17', '17');
INSERT INTO `works` VALUES ('4', '豆腐鸡蛋羹', 'http://owigmgx25.bkt.clouddn.com/%E8%B1%86%E8%85%90%E9%B8%A1%E8%9B%8B%E7%BE%B901.png-280280', '6', '#早餐?2017年5月2日#豆腐鸡蛋羹 ??', '3', '2017-08-17', '12');
INSERT INTO `works` VALUES ('5', '豆腐鸡蛋羹', 'http://owigmgx25.bkt.clouddn.com/%E9%B8%A1%E8%9B%8B%E8%B1%86%E8%85%90%E7%BE%B902.png-280280', '6', '吃时加入一丢丢老干妈?? #早餐?2017年3月21日##那些拼起来就很美味的食物#', '7', '2017-08-18', '23');
INSERT INTO `works` VALUES ('6', '酱爆青口', 'http://owigmgx25.bkt.clouddn.com/%E9%85%B1%E7%88%86%E9%9D%92%E5%8F%A301.jpg-280280', '8', '今天又做啦！加了朝天椒和豆瓣酱 香辣味儿 更好吃！', '3', '2017-08-19', '41');
INSERT INTO `works` VALUES ('7', '酱爆青口', 'http://owigmgx25.bkt.clouddn.com/%E9%85%B1%E7%88%86%E9%9D%92%E5%8F%A302.jpg-280280', '8', '海虹好便宜，可是我不会炒… #午餐?2016年3月13日#', '2', '2017-09-07', '63');
INSERT INTO `works` VALUES ('8', '永不失败之黄焖鸡', 'http://owigmgx25.bkt.clouddn.com/%E6%B0%B8%E4%B8%8D%E5%A4%B1%E8%B4%A5%E4%B9%8B%E9%BB%84%E7%84%96%E9%B8%A101.png-280280', '7', '有它，可以吃一大碗饭～?? #午餐?2016年8月1日#', '7', '2017-08-17', '82');
INSERT INTO `works` VALUES ('9', '永不失败之黄焖鸡', 'http://owigmgx25.bkt.clouddn.com/%E6%B0%B8%E4%B8%8D%E5%A4%B1%E8%B4%A5%E4%B9%8B%E9%BB%84%E7%84%96%E9%B8%A102.jpg-280280', '7', '我太爱这个菜谱的主人了！！！！！真的好好吃啊啊啊啊qwq #晚餐?2017年2月5日#', '2', '2017-09-09', '221');
INSERT INTO `works` VALUES ('20', '啤酒烧排骨', 'http://owkq4s9d1.bkt.clouddn.com/1507507510040.jpeg', '5', '哈哈哈哈', '7', '2017-10-09', '0');
INSERT INTO `works` VALUES ('23', '紫薯蔓越莓银耳羹', 'http://owkq4s9d1.bkt.clouddn.com/1507546370005.jpeg', '51', '我的作品', '3', '2017-10-09', '0');
INSERT INTO `works` VALUES ('25', '啤酒烧排骨', 'http://owkq4s9d1.bkt.clouddn.com/1507599843500.jpeg', '5', '俄今天姐姐姐姐', '3', '2017-10-10', '0');
INSERT INTO `works` VALUES ('26', '通透金沙月饼', 'http://owkq4s9d1.bkt.clouddn.com/1507601223874.jpeg', '22', '美味哟！', '15', '2017-10-10', '0');

-- ----------------------------
-- View structure for `recipe_num`
-- ----------------------------
DROP VIEW IF EXISTS `recipe_num`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `recipe_num` AS select count(1) AS `COUNT(1)` from (`recipe_list` join `addrecipes`) where (`recipe_list`.`id` = `addrecipes`.`list_id`) ;

-- ----------------------------
-- Procedure structure for `del_recipe`
-- ----------------------------
DROP PROCEDURE IF EXISTS `del_recipe`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `del_recipe`(p_recipeId int)
BEGIN
DECLARE t_error  int;           
DECLARE  CONTINUE HANDLER FOR SQLEXCEPTION SET t_error = 1;
start transaction;
	delete from addrecipes where recipe_id = p_recipeId;
    delete from collect_recipe where recipe_id = p_recipeId;
    delete from dosage where reciper_id = p_recipeId;
    delete from material where recipe_id = p_recipeId;
    delete from steps where recipe_id = p_recipeId;
    delete from works where reciper_id = p_recipeId;
    delete from recipes where id = p_recipeId;
     if t_error = 1 then
     rollback;  -- 撤销全部操作
   else
     commit;    -- 提交全部操作
   end if;
END
;;
DELIMITER ;
