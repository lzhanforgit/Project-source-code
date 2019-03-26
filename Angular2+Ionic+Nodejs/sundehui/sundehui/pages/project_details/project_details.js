var app = getApp();
var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];
var area = require('../../data/area');
var util = require('../../utils/util.js');
var p = 0, c = 0, d = 0;

Page({
  
  

  /**
   * 页面的初始数据
   */
  data: {
    phoneFLAG: true,
    userFLAG: true,
    nameFLAG: true,
    openId: wx.getStorageSync('openId'),
    // openId:1,
    project_id: "",
    project_name: "",
    project_user: "",
    project_phone: "",
    user_openid: "",
    project_type: "",
    project_provinceNmae: "",
    project_cityName: '',
    project_require: "",
    project_public: "",
    self_capacity: "",
    self_area: "",
    self_shuini: "",
    self_zhuankuai: "",
    self_qita: "",
    self_electricity: "",
    self_elec_distance: "",
    self_discount: "",
    sum_capacity: "",
    sum_area: "",
    sum_distance: "",
    sum_rent: "",
    sum_shuini: "",
    sum_zhuankuai: "",
    sum_qita: "",
    country_number: "",
    country_capacity: "",
    pic1: "",
    pic2: "",
    pic3: "",
    project_pic1: "",
    project_pic2: "",
    project_pic3: "",

    // 1st配置
    flag: 1,
    bool: true,
    windowWidth: 0,
    windowHeight: 0,
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
    items: [
      { name: 'shuini', value: '水泥' },
      { name: 'caigang', value: '彩钢' },
      { name: 'qita', value: '其他' }
    ],
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
    if (this.data.flag == 2) {
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
      project_provinceNmae: this.data.provinceName[p],
      project_cityName: this.data.cityName[c],
    })
    this.distpickerCancel()
  },
  savePersonInfo: function (e) {
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
    if (data.name == '') {
      this.showMessage('请输入姓名')
    } else if (!nameRule.test(data.name

    )) {
      this.showMessage('请输入中文名')
    } else if (data.tel

      == '') {
      this.showMessage('请输入手机号码')
    } else if (!telRule.test(data.tel

    )) {
      this.showMessage('手机号码格式不正确')
    } else if (data.province == '') {
      this.showMessage('请选择所在地区')
    } else if (data.city == '') {
      this.showMessage('请选择所在地区')
    } else if (data.district == '') {
      this.showMessage('请选择所在地区')
    } else if (data.address == '') {
      this.showMessage('请输入详细地址')
    } else {
      this.showMessage(' 保存成功')
    }
  },
  showMessage: function (text) {
    var that = this
    that.setData({
      showMessage: true,
      messageContent: text
    })
    setTimeout(function () {
      that.setData({
        showMessage: false,
        messageContent: ''
      })
    }, 3000)
  },

  // 材质选择
  self_shuini: function () {
    if (this.data.flag == 2) {
      if (this.data.self_shuini == '水泥') {
        this.setData({
          self_shuini: ''
        })
      } else {
        this.setData({
          self_shuini: '水泥'
        })
      }
    }
  },
  self_zhuankuai: function () {
    if (this.data.flag == 2) {
      if (this.data.self_zhuankuai == '彩钢') {
        this.setData({
          self_zhuankuai: ''
        })
      } else {
        this.setData({
          self_zhuankuai: '彩钢'
        })
      }
    }
  },
  self_qita: function () {
    if (this.data.flag == 2) {
      if (this.data.self_qita == '其他') {
        this.setData({
          self_qita: ''
        })
      } else {
        this.setData({
          self_qita: '其他'
        })
      }
    }
  },
  sum_shuini: function () {
    if (this.data.flag == 2) {
      if (this.data.sum_shuini == '水泥') {
        this.setData({
          sum_shuini: ''
        })
      } else {
        this.setData({
          sum_shuini: '水泥'
        })
      }
    }
  },
  sum_zhuankuai: function () {
    if (this.data.flag == 2) {
      if (this.data.sum_zhuankuai == '彩钢') {
        this.setData({
          sum_zhuankuai: ''
        })
      } else {
        this.setData({
          sum_zhuankuai: '彩钢'
        })
      }
    }
  },
  sum_qita: function () {
    if (this.data.flag == 2) {
      if (this.data.sum_qita == '其他') {
        this.setData({
          sum_qita: ''
        })
      } else {
        this.setData({
          sum_qita: '其他'
        })
      }
    }
  },
  project_public: function () {
    if (this.data.project_public) {
      this.setData({
        project_public: ''
      });
    } else {
      this.setData({
        project_public: 'true'
      });
    }
  },
  project_require: function (e) {

    this.setData({
      project_require: e.detail.value
    })
  },

  calling: function () {
    var phoneNumber = this.data.project_phone;
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
      success: function () {
      },
      fail: function () {
      }
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
      project_id: options.project_id,
      project_name: options.project_name,
      project_user: options.project_user,
      project_phone: options.project_phone,
      user_openid: options.user_openid,
      project_type: options.project_type,
      project_provinceNmae: options.project_provinceNmae,
      project_cityName: options.project_cityName,
      project_require: options.project_require,
      project_public: options.project_public,
      self_capacity: options.self_capacity,
      self_area: options.self_area,
      self_shuini: options.self_shuini,
      self_zhuankuai: options.self_zhuankuai,
      self_qita: options.self_qita,
      self_electricity: options.self_electricity,
      self_elec_distance: options.self_elec_distance,
      self_discount: options.self_discount,
      sum_capacity: options.sum_capacity,
      sum_area: options.sum_area,
      sum_distance: options.sum_distance,
      sum_rent: options.sum_rent,
      sum_shuini: options.sum_shuini,
      sum_zhuankuai: options.sum_zhuankuai,
      sum_qita: options.sum_qita,
      country_number: options.country_number,
      country_capacity: options.country_capacity,
      pic1: options.project_pic1,
      pic2: options.project_pic2,
      pic3: options.project_pic3,
      project_pic1: 'https://www.sundehui.com/uploads/' + options.project_pic1,
      project_pic2: 'https://www.sundehui.com/uploads/' + options.project_pic2,
      project_pic3: 'https://www.sundehui.com/uploads/' + options.project_pic3,
    })
    var project_type = that.data.project_type;
    if (project_type == '全额上网') {
      that.setData({
        new_status: '全额上网'
      })
    } else if (project_type == '自发自用') {
      that.setData({
        new_status: '自发自用'
      })

    } else {
      that.setData({
        new_status: '农村光伏'
      })

    };
    if (this.data.user_openid != wx.getStorageSync('openId')) {
      that.setData({
        flag: 3
      })
    } else {
      that.setData({
        flag: 1
      })

    };

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth / 750 * (750 / 4),
          winHeight: res.windowWidth / 750 * (750 / 4),
        });
      }
    });

  },

  show: function () {
    this.setData({
      flag: 2,
      bool: false
    })
  },
  hidden: function () {
    var that = this;
    
    if (this.data.project_name) {
      this.setData({
        nameFLAG: true
      })

    } else {
      this.setData({
        nameFLAG: false
      })

    };
    if (this.data.project_user) {
      this.setData({
        userFLAG: true
      })

    } else {
      this.setData({
        userFLAG: false
      })

    };
    if (this.data.project_phone) {
      this.setData({
        phoneFLAG: true
      })

    } else {
      this.setData({
        phoneFLAG: false
      })
    };
    if (this.data.nameFLAG && this.data.userFLAG && this.data.phoneFLAG) {
      that.setData({
        flag: 1,
        bool: true
      })
      var time = util.formatTime(new Date());
      wx.request({
        url: 'https://www.sundehui.com/project/updateProject',
        data: {
          project_name: that.data.project_name,
          project_user: that.data.project_user,
          project_provinceNmae: that.data.project_provinceNmae,
          project_cityName: that.data.project_cityName,
          project_require: that.data.project_require,
          self_capacity: that.data.self_capacity,
          self_area: that.data.self_area,
          self_electricity: that.data.self_electricity,
          self_elec_distance: that.data.self_elec_distance,
          self_discount: that.data.self_discount,
          sum_capacity: that.data.sum_capacity,
          sum_area: that.data.sum_area,
          sum_distance: that.data.sum_distance,
          sum_rent: that.data.sum_rent,
          country_number: that.data.country_number,
          country_capacity: that.data.country_capacity,
          project_phone: that.data.project_phone,
          project_time: time,
          self_shuini: that.data.self_shuini,
          self_zhuankuai: that.data.self_zhuankuai,
          self_qita: that.data.self_qita,
          sum_shuini: that.data.sum_shuini,
          sum_zhuankuai: that.data.sum_zhuankuai,
          sum_qita: that.data.sum_qita,
          project_id: that.data.project_id,
          project_public: that.data.project_public
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function (res) {
        }
      })
    }
  },
  project_name: function (e) {
    this.setData({
      project_name: e.detail.value
    })
  },
  project_phone: function (e) {
    this.setData({
      project_phone: e.detail.value
    })
  },
  project_user: function (e) {
    this.setData({
      project_user: e.detail.value
    })
  },
  province: function (e) {
    this.setData({
      project_provinceNmae: e.detail.value
    })
  },
  city: function (e) {
    this.setData({
      project_cityName: e.detail.value
    })
  },
  self_capacity: function (e) {
    this.setData({
      self_capacity: e.detail.value
    })
  },
  self_area: function (e) {
    this.setData({
      self_area: e.detail.value
    })
  },
  self_electricity: function (e) {
    this.setData({
      self_electricity: e.detail.value
    })
  },
  self_elec_distance: function (e) {
    this.setData({
      self_elec_distance: e.detail.value
    })
  },
  self_discount: function (e) {
    this.setData({
      self_discount: e.detail.value
    })
  },
  sum_capacity: function (e) {
    this.setData({
      sum_capacity: e.detail.value
    })
  },
  sum_area: function (e) {
    this.setData({
      sum_area: e.detail.value
    })
  },
  sum_distance: function (e) {
    this.setData({
      sum_distance: e.detail.value
    })
  },
  sum_rent: function (e) {
    this.setData({
      sum_rent: e.detail.value
    })
  },
  country_number: function (e) {
    this.setData({
      country_number: e.detail.value
    })
  },
  country_capacity: function (e) {
    this.setData({
      country_capacity: e.detail.value
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