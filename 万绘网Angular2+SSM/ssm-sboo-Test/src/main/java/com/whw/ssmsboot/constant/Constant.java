package com.whw.ssmsboot.constant;

/**
 * description 描述 1 成功 2 失败
 * 
 * @author 赵彦霖
 *
 *
 */
public class Constant {
    /**
     * 举报记录 0 表示未处理 ,作品状态 0表示正常, 用户状态0表示正常 ,0举报, 是否为绘师 0否
     * */
    public static final Integer STATUS_CODE_0 = 0;
    /**
     * 方法執行 1表示成功, 举报记录 1 表示未通过, 作品状态 1表示拉黑, 用户状态1表示拉黑 , 1申诉 ,申诉记录 2 表示未通过,
     * 是否是绘师 1是
     * */
    public static final Integer STATUS_CODE_1 = 1;
    /**
     * 方法執行 2表示失败 ,举报记录 2 表示通过 ,申诉记录 2 表示通过
     * */
    public static final Integer STATUS_CODE_2 = 2;
    /**
     * 验证码错误
     * */
    public static final Integer STATUS_CODE_3 = 3;
    /**
     * 文件上传失败
     * */
    public static final Integer UPLOAD_STATUS_4 = 4;
    /**
     * 文件上传成功
     * */
    public static final Integer UPLOAD_STATUS_5 = 5;
    /**
     * 表示此用戶已經是繪師
     * */
    public static final Integer EXIST_7 = 7;
    /**
     * 表示已有記錄
     * */
    public static final Integer EXIST_8 = 8;
    /**
     * 默认文件上传路径
     */
    public static final String UPLOAD_PATH = "localhost:8080/";
    /**
     * 图片源地址
     * */
    public static final String SOURCE_PATH = "f:/upimgs/";

    /**
     * 已读未读状态 谢重阳 12.12上午9.30 添加
     */
    public static final Integer COMMENT_READ_YES = 1;

    public static final Integer SOURCE_PATH_NO = 0;
    /**
     * 用户已登录
     * */
    public static final Integer LOGIN_STATUS_YES = 9;
    /**
     * 用户未登录
     * */
    public static final Integer LOGIN_STATUS_NO = 10;
}
