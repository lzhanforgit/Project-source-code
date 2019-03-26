//index.js
//获取应用实例
var focus
var isShowView
var app = getApp()
Page({
  data: {
    openId: wx.getStorageSync('openId'),
    // text:"这是一个页面"
    focus: false,
    isShowView: true,
    userInfo: {},
    //控制分页查询
    pageNumber:0,
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    imgUrls: [
      'https://www.sundehui.com/uploads/pic2.jpg',
      'https://www.sundehui.com/uploads/pic3.jpg',
      'https://www.sundehui.com/uploads/pic1.jpg'
    ],
    //显示轮播图面板指示点
    indicatorDots: true,
    //开启自动切换
    autoplay: true,
    //设置轮播循环时间
    interval: 3000,
    //设置滑动动画时间
    duration: 1000,

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    


    wx.request({
      url: 'https://www.sundehui.com/project/index',
      method: 'POST',
      data: {
        pageNumber: 0
      },
      success: function (res) {
        that.setData({
          projectInfo0: res.data
        })
      },
      fail: function (res) {
      }
    });
    wx.request({
      url: 'https://www.sundehui.com/project/index_right',
      method: 'POST',
      data: {
        pageNumber: 0
      },
      success: function (res) {
        that.setData({
          projectInfo1: res.data
        })
      },
      fail: function (res) {
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight * 0.99,
          swipHeight: res.windowHeight * 0.44,
        });
      }
    });
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;

    wx.request({
      url: 'https://www.sundehui.com/project/index',
      method: 'POST',
      data: {
        pageNumber: 0
      },
      success: function (res) {
        that.setData({
          projectInfo0: res.data
        })
      },
      fail: function (res) {
      }
    });
    wx.request({
      url: 'https://www.sundehui.com/project/index_right',
      method: 'POST',
      data: {
        pageNumber: 0
      },
      success: function (res) {
        that.setData({
          projectInfo1: res.data
        })
      },
      fail: function (res) {
      }
    });
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
    that.setData({
      pageNumber: 0,
    })
  },
  //上拉触发底部事件
  onReachBottom:function(){
    var that = this;
    var pageNumber = that.data.pageNumber + 10;
    that.setData({
      pageNumber: pageNumber,
    })

    wx.request({
      url: 'https://www.sundehui.com/project/index',
      method: 'POST',
      data: {
        pageNumber: that.data.pageNumber
      },
      success: function (res) {
        if (res.data != null) {
          that.setData({
            projectInfo0: that.data.projectInfo0.concat(res.data)
          })}
      },
      fail: function (res) {
      }
    });
    wx.request({
      url: 'https://www.sundehui.com/project/index_right',
      method: 'POST',
      data: {
        pageNumber: that.data.pageNumber
      },
      success: function (res) {
        if (res.data != null){
        that.setData({
          projectInfo1: that.data.projectInfo1.concat(res.data)
          })
        }
      },
      fail: function (res) {
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    wx.request({
      url: 'https://www.sundehui.com/project/getListid',
      data: {
        openId: wx.getStorageSync('openId')
      },
      method: 'POST',
      success: function (res) {
        wx.setStorage({
          key: 'list_id',
          data: res.data.list_id
        });
      },
      fail: function (res) {
      }
    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

    if (this.data.currentTab === 0) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }

  },

  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  navigate_share_list: function (e) {

    // 获取当前下标
    var target_id = e.currentTarget.id;
    var list_id = this.data.projectInfo0[target_id].list_id;
    var list_user = this.data.projectInfo0[target_id].list_user;
    var list_pic = this.data.projectInfo0[target_id].list_pic;
    var list_name = this.data.projectInfo0[target_id].list_name;
    var user_provinceName = this.data.projectInfo0[target_id].user_provinceName;
    var user_cityName = this.data.projectInfo0[target_id].user_cityName;
    var list_sum = this.data.projectInfo0[target_id].list_sum;
    var list_self = this.data.projectInfo0[target_id].list_self;
    var list_country = this.data.projectInfo0[target_id].list_country;
    var list_public = this.data.projectInfo0[target_id].list_public;

    wx.navigateTo({
      url: '../share_list/share_list?list_id=' + list_id +'&list_user=' +list_user+ '&list_pic=' + list_pic + '&list_name=' + list_name + '&user_provinceName=' + user_provinceName + '&user_cityName=' + user_cityName + '&list_sum=' + list_sum + '&list_self=' + list_self + '&list_country=' + list_country + '&list_public=' + list_public,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  next_project_details: function (e) {

    // 获取当前下标
    var target_id = e.currentTarget.id;
    var project_id = this.data.projectInfo1[target_id].project_id;
    var project_name = this.data.projectInfo1[target_id].project_name;
    var project_user = this.data.projectInfo1[target_id].project_user;
    var project_user = this.data.projectInfo1[target_id].project_user;
    var project_phone = this.data.projectInfo1[target_id].project_phone;
    var user_openid = this.data.projectInfo1[target_id].user_openid;
    var project_type = this.data.projectInfo1[target_id].project_type;
    var project_provinceNmae = this.data.projectInfo1[target_id].project_provinceNmae;
    var project_cityName = this.data.projectInfo1[target_id].project_cityName;
    var project_require = this.data.projectInfo1[target_id].project_require;
    var project_public = this.data.projectInfo1[target_id].project_public;
    var self_capacity = this.data.projectInfo1[target_id].self_capacity;
    var self_area = this.data.projectInfo1[target_id].self_area;
    var self_shuini = this.data.projectInfo1[target_id].self_shuini;
    var self_zhuankuai = this.data.projectInfo1[target_id].self_zhuankuai;
    var self_qita = this.data.projectInfo1[target_id].self_qita;
    var self_electricity = this.data.projectInfo1[target_id].self_electricity;
    var self_elec_distance = this.data.projectInfo1[target_id].self_elec_distance;
    var self_discount = this.data.projectInfo1[target_id].self_discount;
    var sum_capacity = this.data.projectInfo1[target_id].sum_capacity;
    var sum_area = this.data.projectInfo1[target_id].sum_area;
    var sum_distance = this.data.projectInfo1[target_id].sum_distance;
    var sum_rent = this.data.projectInfo1[target_id].sum_rent;
    var sum_shuini = this.data.projectInfo1[target_id].sum_shuini;
    var sum_zhuankuai = this.data.projectInfo1[target_id].sum_zhuankuai;
    var sum_qita = this.data.projectInfo1[target_id].sum_qita;
    var country_number = this.data.projectInfo1[target_id].country_number;
    var country_capacity = this.data.projectInfo1[target_id].country_capacity;
    var project_pic1 = this.data.projectInfo1[target_id].project_pic1;
    var project_pic2 = this.data.projectInfo1[target_id].project_pic2;
    var project_pic3 = this.data.projectInfo1[target_id].project_pic3;
    wx.navigateTo({
      url: '../project_details/project_details?project_id=' + project_id + '&project_name=' + project_name + '&project_user=' + project_user + '&project_user=' + project_user + '&project_phone=' + project_phone + '&user_openid=' + user_openid + '&project_type=' + project_type + '&project_provinceNmae=' + project_provinceNmae + '&project_cityName=' + project_cityName + '&project_require=' + project_require + '&project_public=' + project_public + '&self_capacity=' + self_capacity + '&self_area=' + self_area + '&self_shuini=' + self_shuini + '&self_zhuankuai=' + self_zhuankuai + '&self_qita=' + self_qita + '&self_electricity=' + self_electricity + '&self_elec_distance=' + self_elec_distance + '&self_discount=' + self_discount + '&sum_capacity=' + sum_capacity + '&sum_area=' + sum_area + '&sum_distance=' + sum_distance + '&sum_rent=' + sum_rent + '&sum_shuini=' + sum_shuini + '&sum_zhuankuai=' + sum_zhuankuai + '&sum_qita=' + sum_qita + '&country_number=' + country_number + '&country_capacity=' + country_capacity + '&project_pic1=' + project_pic1 + '&project_pic2=' + project_pic2 + '&project_pic3=' + project_pic3,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
})


