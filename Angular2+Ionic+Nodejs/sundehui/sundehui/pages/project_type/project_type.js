var app = getApp();
var area = require('../../data/area');
var util = require('../../utils/util.js');
var p = 0, c = 0, d = 0;

Page({
  data: {
    // 用户信息
    openId: wx.getStorageSync('openId'),
    poject_id: "",
    project_name: "",
    project_user: "",
    project_phone: "",
    project_company: "",
    project_type: "",
    project_provinceNmae: "",
    project_cityName: "",
    project_require: "",
    project_public: "true",
    self_capacity: "",
    self_area: "",
    self_electricity: "",
    self_elec_distance: "",
    self_discount: "",
    sum_capacity: "",
    sum_area: "",
    sum_distance: "",
    sum_rent: "",
    self_shuini: "",
    self_zhuankuai: "",
    self_qita: "",
    sum_shuini: "",
    sum_zhuankuai: "",
    sum_qita: "",
    country_number: "",
    country_capacity: "",
    project_pic1: "",
    project_pic2: "",
    project_pic3: "",


    /** 
        * 页面配置 
        */
    nameFLAG: true,
    userFLAG: true,
    phoneFLAG: true,
    _value: [],
    winWidth: 0,
    winHeight: 0,
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

    // value:0,
    imageList: [],
    // sourceTypeIndex: 2,
    // sourceType: ['拍照', '相册', '拍照或相册'],

    // sizeTypeIndex: 2,
    // sizeType: ['压缩', '原图', '压缩或原图'],
    countIndex: 2,
    count: [1, 2, 3]
  },




  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      // sourceType: sourceType[this.data.sourceTypeIndex],
      // sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      sizeType: ['compressed'],
      success: function (res) {
        if (res.tempFilePaths[2]) {
          that.setData({
            project_pic1: res.tempFilePaths[0],
            project_pic2: res.tempFilePaths[1],
            project_pic3: res.tempFilePaths[2]
          })
        } else if (res.tempFilePaths[1]) {
          that.setData({
            project_pic1: res.tempFilePaths[0],
            project_pic2: res.tempFilePaths[1]
          })
        } else if (res.tempFilePaths[0]) {
          that.setData({
            project_pic1: res.tempFilePaths[0]
          })
        }
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage: function (e) {
    var that = this
    var current = e.target.dataset.src

    wx.previewImage({

      current: current,
      urls: that.data.imageList
    })
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
  onLoad: function (options) {
    var that = this;
    that.setAreaData();
    that.setData({
      new_status: options.status,
    });
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth / 750 * (750 / 4),
          winHeight: res.windowWidth / 750 * (750 / 4),
        });
      }
    });
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
    this.setData({
      showDistpicker: true
    });
  },
  distpickerCancel: function () {
    this.setData({
      showDistpicker: false
    })
  },
  distpickerSure: function () {
    this.setData({
      provinceSelIndex: p,
      citySelIndex: c,
      districtSelIndex: d
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
    } else if (data.tel == '') {
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
  formSubmit: function (e) {
    var that = this;
    var param = e.detail.value;
    var time = util.formatTime(new Date());
    if (param.project_name) {
      this.setData({
        nameFLAG: true
      })

    } else {
      this.setData({
        nameFLAG: false
      })

    };
    if (param.project_user) {
      this.setData({
        userFLAG: true
      })

    } else {
      this.setData({
        userFLAG: false
      })

    };
    if (param.project_phone) {
      this.setData({
        phoneFLAG: true
      })

    } else {
      this.setData({
        phoneFLAG: false
      })
    };
    if (this.data.nameFLAG && this.data.userFLAG && this.data.phoneFLAG) {
      wx.request({
        url: 'https://www.sundehui.com/project/newProject',
        data: {
          project_name: param.project_name,
          project_user: param.project_user,
          project_type: that.data.new_status,
          project_provinceNmae: param.province,
          project_cityName: param.city,
          project_require: param.project_require,
          project_public: that.data.project_public,
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
          project_phone: param.project_phone,
          project_time: time,
          self_shuini: that.data.self_shuini,
          self_zhuankuai: that.data.self_zhuankuai,
          self_qita: that.data.self_qita,
          sum_shuini: that.data.sum_shuini,
          sum_zhuankuai: that.data.sum_zhuankuai,
          sum_qita: that.data.sum_qita,
          user_openid: wx.getStorageSync('openId')
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function (res) {
          that.end_();
          for (var i = 0, len = that.data.imageList.length; i < len; i++) {
            wx.uploadFile({
              url: 'https://www.sundehui.com/project/updata',
              filePath: that.data.imageList[i],
              name: 'pic',
              header: { "Content-Type": "multipart/form-data" },
              formData: {
                'index': i,
                'project_id': res.data.project_id
              },
              success: function (res) {
              }
            })
          }
        }
      })
    }

  },
  // 材质选择
  self_shuini: function () {
    if (this.data.self_shuini == '水泥') {
      this.setData({
        self_shuini: ''
      });
    } else {
      this.setData({
        self_shuini: '水泥'
      });
    }
  },
  self_zhuankuai: function () {
    if (this.data.self_zhuankuai == '彩钢') {
      this.setData({
        self_zhuankuai: ''
      });
    } else {
      this.setData({
        self_zhuankuai: '彩钢'
      });
    }
  },
  self_qita: function () {
    if (this.data.self_qita == '其它') {
      this.setData({
        self_qita: ''
      });
    } else {
      this.setData({
        self_qita: '其它'
      });
    }
  },
  sum_shuini: function () {
    if (this.data.sum_shuini == '水泥') {
      this.setData({
        sum_shuini: ''
      });
    } else {
      this.setData({
        sum_shuini: '水泥'
      });
    }
  },
  sum_zhuankuai: function () {
    if (this.data.sum_zhuankuai == '彩钢') {
      this.setData({
        sum_zhuankuai: ''
      });
    } else {
      this.setData({
        sum_zhuankuai: '彩钢'
      });
    }
  },
  sum_qita: function () {
    if (this.data.sum_qita == '其它') {
      this.setData({
        sum_qita: ''
      });
    } else {
      this.setData({
        sum_qita: '其它'
      });
    }
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
  end_: function () {
    wx.switchTab({
      url: '../my_project/my_project'
    })
  },


})  
