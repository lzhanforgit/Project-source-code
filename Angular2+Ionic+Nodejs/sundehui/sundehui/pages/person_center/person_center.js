var app = getApp()
var area = require('../../data/area')
var p = 0, c = 0, d = 0



Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始化传值
    openId: wx.getStorageSync('openId'),
    user_name: "",
    user_phone: "",
    list_id: "",
    list_pic: "",
    list_name: "",
    list_user: "",
    list_provinceName: "",
    list_cityName: "",
    user_company: "",
    list_sum: "全额上网",
    list_self: "自发自用",
    list_country: "农村光伏",
    list_public: "true",
    // tab切换  
    currentTab: 0,
    provinceName: [],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    districtSelIndex: '',
    showMessage: false,
    messageContent: '',
    showDistpicker: false,


    currentTab1: true,
  },
  setAreaData: function (p, c, d) {
    var p = p || 0 // provinceSelIndex
    var c = c || 0 // citySelIndex
    var d = d || 0 // districtSelIndex
    // 设置省的数据
    var province = area['100000']
    var provinceName = [];
    var provinceCode = [];
    for (var item in province) {
      provinceName.push(province[item])
      provinceCode.push(item)
    }
    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode
    })
    // 设置市的数据
    var city = area[provinceCode[p]]
    var cityName = [];
    var cityCode = [];
    for (var item in city) {
      cityName.push(city[item])
      cityCode.push(item)
    }
    this.setData({
      cityName: cityName,
      cityCode: cityCode
    })
    // 设置区的数据
    var district = area[cityCode[c]]
    var districtName = [];
    var districtCode = [];
    for (var item in district) {
      districtName.push(district[item])
      districtCode.push(item)
    }
    this.setData({
      districtName: districtName,
      districtCode: districtCode
    })
  },
  changeArea: function (e) {
    p = e.detail.value[0]
    c = e.detail.value[1]
    d = e.detail.value[2]
    this.setAreaData(p, c, d)
  },
  showDistpicker: function () {
    if (!this.data.currentTab1) {
      this.setData({
        showDistpicker: true
      });
    }
  },
  distpickerCancel: function () {
    this.setData({
      showDistpicker: false
    })
  },
  distpickerSure: function () {
    this.setData({
      user_provinceName: this.data.provinceName[p],
      user_cityName: this.data.cityName[c],
      // provinceSelIndex: p,
      // citySelIndex: c,
      // districtSelIndex: d
    })
    this.distpickerCancel()
  },
  list_name: function (e) {
    this.setData({
      list_name: e.detail.value
    })
  },
  user_name: function (e) {
    this.setData({
      user_name: e.detail.value
    })
  },
  user_phone: function (e) {
    this.setData({
      user_phone: e.detail.value
    })
  },
  user_company: function (e) {
    this.setData({
      user_company: e.detail.value
    })
  },
  list_public: function () {
    if (!this.data.currentTab1) {
      if (this.data.list_public) {
        this.setData({
          list_public: ''
        });
      } else {
        this.setData({
          list_public: 'true'
        });
      }
    } else {
      if (this.data.list_public) {
        this.setData({
          list_public: 'true'
        });
      } else {
        this.setData({
          list_public: ''
        });
      }
    }
  },
  list_self: function () {
    if (!this.data.currentTab1) {
      if (this.data.list_self == '自发自用') {
        this.setData({
          list_self: ''
        });
      } else {
        this.setData({
          list_self: '自发自用'
        });
      }
    }
  },
  list_sum: function () {
    if (!this.data.currentTab1) {
      if (this.data.list_sum == '全额上网') {
        this.setData({
          list_sum: ''
        });
      } else {
        this.setData({
          list_sum: '全额上网'
        });
      }
    }
  },
  list_country: function () {
    if (!this.data.currentTab1) {
      if (this.data.list_country == '农村光伏') {
        this.setData({
          list_country: ''
        });
      } else {
        this.setData({
          list_country: '农村光伏'
        });
      }
    }
  },
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab1) {
      that.setData({
        currentTab1: false
      })
    } else {
      that.setData({
        currentTab1: true
      })
    }
  },

  swichNav1: function (e) {
    var that = this;
    var list_name = e.target.value;
    if (that.data.currentTab1) {
      that.setData({
        currentTab1: false
      })
    } else {
      that.setData({
        currentTab1: true
      })
    }
    wx.request({
      url: 'https://www.sundehui.com/project/infomation',
      data: {
        list_name: that.data.list_name,
        user_name: that.data.user_name,
        user_phone: that.data.user_phone,
        provinceName: that.data.user_provinceName,
        cityName: that.data.user_cityName,
        user_company: that.data.user_company,
        list_self: that.data.list_self,
        list_sum: that.data.list_sum,
        list_country: that.data.list_country,
        list_public: that.data.list_public,
        openid: wx.getStorageSync('openId')
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
      }
    })
  },

  navigate_share_list: function (e) {

    // 获取当前下标
    var list_id = wx.getStorageSync('list_id');
    var list_user = this.data.user_name;
    var list_pic = this.data.user_headpic;
    var list_name = this.data.list_name;
    var user_provinceName = this.data.user_provinceName;
    var user_cityName = this.data.user_cityName;
    var list_sum = this.data.list_sum;
    var list_self = this.data.list_self;
    var list_country = this.data.list_country;
    var list_public = this.data.list_public;

    wx.navigateTo({
      url: '../share_list/share_list?list_id=' + list_id + '&list_user=' + list_user + '&list_pic=' + list_pic + '&list_name=' + list_name + '&user_provinceName=' + user_provinceName + '&user_cityName=' + user_cityName + '&list_sum=' + list_sum + '&list_self=' + list_self + '&list_country=' + list_country + '&list_public=' + list_public,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setAreaData();
    that.setData({
      new_status: options.status,
    });
    var openId = (wx.getStorageSync('openId'))
    if (openId) {
      wx.getUserInfo({
        success: function (res) {
          wx.request({
            url: 'https://www.sundehui.com/project/getUserInfo',
            data: {
              openId: wx.getStorageSync('openId'),
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
              that.setData({
                list_country: res.data.list_country,
                list_name: res.data.list_name,
                list_public: res.data.list_public,
                list_self: res.data.list_self,
                list_sum: res.data.list_sum,
                user_cityName: res.data.user_cityName,
                user_company: res.data.user_company,
                user_name: res.data.user_name,
                user_phone: res.data.user_phone,
                user_provinceName: res.data.user_provinceName
              })
            }
          }),
            that.setData({
              user_nickname: res.userInfo.nickName,
              user_headpic: res.userInfo.avatarUrl,
            })
        }, fail: function () {
          wx.showModal({
            title: '警告通知',
            content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。', success: function (res) {
              if (res.confirm) {
                wx.openSetting({
                  success: function (data) {
                    //判断 用户是否同意授权
                    if (data.authSetting["scope.userInfo"] == true) {
                      wx.getUserInfo({
                        success: function (data) {
                          wx.request({
                            url: 'https://www.sundehui.com/project/login', //登录的接口
                            data: {
                              user_openid: wx.getStorageSync('openId'),
                              user_nickname: data.userInfo.nickName,
                              user_headpic: data.userInfo.avatarUrl,
                              user_name: that.data.user_name, 
                              user_phone: that.data.user_phone, 
                              user_provinceName: that.data.list_provinceName, 
                              user_cityName: that.data.list_cityName, 
                              user_company: that.data.user_company, 
                              list_user: that.data.list_user, 
                              list_sum: that.data.list_sum, 
                              list_self: that.data.list_self, 
                              list_country: that.data.list_country, 
                              list_public: that.data.list_public
                            },
                            header: {
                              "Content-Type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            success: function (res) {
                              wx.request({
                                url: 'https://www.sundehui.com/project/getUserInfo',
                                data: {
                                  openId: openId,
                                },
                                header: {
                                  "Content-Type": "application/x-www-form-urlencoded"
                                },
                                method: "POST",
                                success: function (res) {
                                  that.setData({
                                    list_country: res.data.list_country,
                                    list_name: res.data.list_name,
                                    list_public: res.data.list_public,
                                    list_self: res.data.list_self,
                                    list_sum: res.data.list_sum,
                                    user_cityName: res.data.user_cityName,
                                    user_company: res.data.user_company,
                                    user_name: res.data.user_name,
                                    user_phone: res.data.user_phone,
                                    user_provinceName: res.data.user_provinceName
                                  })
                                }
                              })
                            }
                          }),
                            that.setData({
                              user_nickname: data.userInfo.nickName,
                              user_headpic: data.userInfo.avatarUrl
                            });
                        }, fail: function () {
                        }, complete: function () {
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }
      })
    }
  },
  login() {
    var that = this;
    wx.openSetting({
      success: function (data) {
        //判断 用户是否同意授权
        if (data.authSetting["scope.userInfo"] == true) {
          wx.getUserInfo({
            success: function (data) {
              wx.request({
                url: 'https://www.sundehui.com/project/login', //登录的接口
                data: {
                  user_openid: wx.getStorageSync('openId'),
                  user_nickname: data.userInfo.nickName,
                  user_headpic: data.userInfo.avatarUrl,
                  user_name: that.data.user_name,
                  user_phone: that.data.user_phone,
                  user_provinceName: that.data.list_provinceName,
                  user_cityName: that.data.list_cityName,
                  user_company: that.data.user_company,
                  list_user: that.data.list_user,
                  list_sum: that.data.list_sum,
                  list_self: that.data.list_self,
                  list_country: that.data.list_country,
                  list_public: that.data.list_public
                },
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                  wx.request({
                    url: 'https://www.sundehui.com/project/getUserInfo',
                    data: {
                      openId: wx.getStorageSync('openId'),
                    },
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function (res) {
                      that.setData({
                        list_country: res.data.list_country,
                        list_name: res.data.list_name,
                        list_public: res.data.list_public,
                        list_self: res.data.list_self,
                        list_sum: res.data.list_sum,
                        user_cityName: res.data.user_cityName,
                        user_company: res.data.user_company,
                        user_name: res.data.user_name,
                        user_phone: res.data.user_phone,
                        user_provinceName: res.data.user_provinceName
                      })
                    }
                  })
                }
              }),
                that.setData({
                  user_nickname: data.userInfo.nickName,
                  user_headpic: data.userInfo.avatarUrl
                });
            }, fail: function () {
            }, complete: function () {
            }
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})