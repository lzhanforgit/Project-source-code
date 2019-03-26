package com.whw.ssmsboot.constant;

/**
 * 
 * 
 * @author 杨尚君
 *
 */
public class Constant9 {
	/**
	 * 举报记录 0 表示未处理 ,作品状态 0表示正常, 用户状态0表示正常 ,0举报, 是否为绘师 0否
	 * */
	public static final Integer STATUS_CODE_0 = 0;
	/**
	 * 举报记录 1 表示未通过, 作品状态 1表示拉黑, 用户状态1表示拉黑 , 1申诉 ,申诉记录 2 表示未通过, 是否是绘师 1是
	 * */
	public static final Integer STATUS_CODE_1 = 1;
	/**
	 * 举报记录 2 表示通过 ,申诉记录 2 表示通过
	 * */
	public static final Integer STATUS_CODE_2 = 2;
	/**
	 * 默认文件上传路径
	 */
	public static final String UPLOAD_PATH = "image/";
	/**
	 * 图片源地址
	 * */
	public static final String SOURCE_PATH = "f:/upimgs/";
	/**
	 * 状态码 901
	 * 
	 * @author 杨尚君:9xx LOGIN_SUCCESS 登录成功
	 * */
	public static final Integer LOGIN_SUCCESS = 901;
	/**
	 * LOGIN_FAIL 登录失败 902
	 * */
	public static final Integer LOGIN_FAIL = 902;
	/**
	 * REGIST_SUCCESS 注册成功 903
	 * */
	public static final Integer REGIST_SUCCESS = 903;
	/**
	 * REGIST_FAIL 注册失败 904
	 * */
	public static final Integer REGIST_FAIL = 904;
	/**
	 * EXIST_YES : 查询信息已存在 905
	 * */
	public static final Integer EXIST_YES = 905;

	/**
	 * EXIST_NO : 查询信息不存在 906
	 * */
	public static final Integer EXIST_NO = 906;
	/**
	 * FIELD_VAILD_FAIL 属性验证失败(格式不正确或者为空) 907
	 * */
	public static final Integer FIELD_VAILD_FAIL = 907;
	/**
	 * VAILD_CODE_FAIL 验证码验证失败 908
	 * */
	public static final Integer VAILD_CODE_FAIL = 908;
	/**
	 * UPDATE_SUCCESS 修改成功 909
	 * */
	public static final Integer UPDATE_SUCCESS = 909;
	/**
	 * UPDATE_FAIL 修改失败 910
	 * */
	public static final Integer UPDATE_FAIL = 910;
	/**
	 * LOGIN_STATUS_NO 用户未登录 911
	 * */
	public static final Integer LOGIN_STATUS_NO = 911;
	/**
	 * SELECT_SUCCESS 查询成功 912
	 * */
	public static final Integer SELECT_SUCCESS = 912;
	/**
	 * SELECT_FAIL 查询失败 913
	 * */
	public static final Integer SELECT_FAIL = 913;
	/**
	 * PARAM_ERROR 参数错误 914
	 * */
	public static final Integer PARAM_ERROR = 914;
	/**
	 * EXIST_DRAW 表示此用戶已經是绘师 915
	 * */
	public static final Integer EXIST_DRAW = 915;

	/**
	 * EXIST_CERT 表示已有記錄 916
	 * */
	public static final Integer EXIST_CERT = 916;
	/**
	 * ADD_SUCCESS 信息添加成功 917
	 * */
	public static final Integer ADD_SUCCESS = 917;
	/**
	 * ADD_FAIL 信息添加失败 918
	 * */
	public static final Integer ADD_FAIL = 918;
	/**
	 * UPLOAD_SUCCESS 文件上传成功 919
	 * */
	public static final Integer UPLOAD_SUCCESS = 919;
	/**
	 * UPLOAD_FAIL 文件上传失败920
	 * */
	public static final Integer UPLOAD_FAIL = 920;
	/**
	 * DEL_SUCCESS 删除成功 921
	 * */
	public static final Integer DEL_SUCCESS = 921;
	/**
	 * DEL_FAIL 删除失败 922
	 * */
	public static final Integer DEL_FAIL = 922;
}
