//app.js
App({
  config: {
    host: 'www.sundehui.com' // 这个地方填写你的域名
  },
  onLaunch: function () {
    var that=this;
    console.log('App.onLaunch()');
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          //获取openId
          wx.request({
            url: 'https://www.sundehui.com/project/wx/onlogin',
            data: { code: code },
            method: 'GET',
            success: function (openIdRes) {
              // 判断openId是否为空
              console.log(openIdRes)
              if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                wx.setStorage({
                  key: 'openId',
                  data: openIdRes.data.openid
                });
                wx.getUserInfo({
                  success: function (data) {
                    wx.request({
                      url: 'https://www.sundehui.com/project/login', //登录的接口
                      data: {
                        user_openid: wx.getStorageSync('openId'),
                        user_nickname: data.userInfo.nickName,
                        user_headpic: data.userInfo.avatarUrl,
                        user_name: '',
                        user_phone: '',
                        user_provinceName: '',
                        user_cityName: '',
                        user_company: '',
                        list_user: '',
                        list_sum: "全额上网",
                        list_self: "自发自用",
                        list_country: "农村光伏",
                        list_public: "true"
                      },
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      },
                      method: "POST",
                      success: function (res) {
                      }
                    });
                  }, fail: function () {
                    wx.showModal({
                      title: '警告通知',
                      content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
                      success: function (res) {
                        if (res.confirm) {
                          wx.openSetting({
                            success: function (data) {
                              //判断 用户是否同意授权
                              if (data.authSetting["scope.userInfo"] == true) {
                                wx.getUserInfo({
                                  success: function (res) {
                                    wx.request({
                                      url: 'https://www.sundehui.com/project/login', //登录的接口
                                      data: {
                                        user_openid: wx.getStorageSync('openId'),
                                        user_nickname: res.userInfo.nickName,
                                        user_headpic: res.userInfo.avatarUrl,
                                        user_name: '',
                                        user_phone: '',
                                        user_provinceName: '',
                                        user_cityName: '',
                                        user_company: '',
                                        list_user: '',
                                        list_sum: "全额上网",
                                        list_self: "自发自用",
                                        list_country: "农村光伏",
                                        list_public: "true"
                                      },
                                      header: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                      },
                                      method: "POST",
                                      success: function (res) {
                                      }
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
            }
          })
        }
      }
    });
  },
  globalData: {
    userInfo: null
  }
})