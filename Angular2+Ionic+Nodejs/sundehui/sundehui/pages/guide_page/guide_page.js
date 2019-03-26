var app = getApp()
Page({
  data: {
    status: '',
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  // peijian_information: function () {
  //   wx.navigateTo({
  //     url: './../user_information/peijian_information/peijian_information',
  //   })
  // },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,

        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

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


  // 传值
  quane: function (e) {

    // 获取当前下标
    this.setData({
      status: '全额上网'
    })
    var _status = this.data.status;
    wx.navigateTo({
      url: '/pages/project_type/project_type?status=' + _status,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  zifa: function (e) {
    // 获取当前下标
    this.setData({
      status: '自发自用'
    })
    var _status = this.data.status;
    wx.navigateTo({
      url: '/pages/project_type/project_type?status=' + _status,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  nongcun: function (e) {
    // 获取当前下标
    this.setData({
      status: '农村光伏'
    })
    var _status = this.data.status;
    wx.navigateTo({
      url: '/pages/project_type/project_type?status=' + _status,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  }

})  
