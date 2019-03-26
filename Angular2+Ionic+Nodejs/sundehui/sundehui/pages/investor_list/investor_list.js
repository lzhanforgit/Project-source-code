// pages/my_project/my_project.js
var area = require('../../data/area (1)')
var p = 0, c = 0, d = 0

Page({

  /**
 * 页面的初始数据
 */
  data: {
    del_id:'',
    // 筛选数据
    list_id: wx.getStorageSync('list_id'),
    self_capacity: 0,
    self_shuini: true,
    self_zhuankuai: true,
    self_qita: true,
    self_discount: 20,
    sum_capacity: 0,
    sum_distance: 99999,
    sum_rent_max: 99999,
    country_number: 0,
    self: true,
    sum: true,
    country: true,

    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    scrollHeight: 0,
    // tab切换  
    search_fold: false,
    // 城市二级联动
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


    // 输入框动态提示
    inputValue: '',//点击结果项之后替换到文本框的值
    adapterSource: ["123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "321", "666", "weixin", "WeiXin", "wechat", "android", "Android", "ios", "iOS", "java", "javascript", "微信小程序", "微信公众号", "微信开发者",
      "微信开发者工具"],//本地匹配源
    bindSource: [],//绑定到页面的数据，根据用户输入动态变化



    // 侧边栏动画

    open: false,
    mark: 0,
    newmark: 0,
    istoright: true,
    projectInfo2: [],
    projectInfo1: [],
  },
  refresh:function(e){
    this.setData({
      projectInfo2:this.data.projectInfo1
    })
  },
  DelMsg:function(e) {
    var that = this;
    var n = e.currentTarget.id;
    var del_id=that.data.projectInfo2[n].project_id;
    this.setData({
      del_id: del_id
    })
    
    var list = this.data.projectInfo2;
    wx.showModal({
      content: "是否删除？",
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm == true) {
          list.splice(n, 1);
          wx.request({
            url:'https://www.sundehui.com/project/deleteProject' ,
            data:{
              list_id: wx.getStorageSync('list_id'),
              project_id: that.data.del_id
            },
            method:'POST',
            success: function (res){
            }
          })
        }
        that.setData({
          projectInfo2: list
        });
        
      }
    })


  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  self_type: function (e) {
    if (this.data.self) {
      this.setData({
        self: false
      });
    } else {
      this.setData({
        self: true
      });
    }
  },
  sum_type: function (e) {
    if (this.data.sum) {
      this.setData({
        sum: false
      });
    } else {
      this.setData({
        sum: true
      });
    }
  },
  country_type: function (e) {
    if (this.data.country) {
      this.setData({
        country: false
      });
    } else {
      this.setData({
        country: true
      });
    }
  },
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  tap_start: function (e) {
    // touchstart事件
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },
  tap_drag: function (e) {
    // touchmove事件

    /*
     * 手指从左向右移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    this.data.newmark = e.touches[0].pageX;
    if (this.data.mark < this.data.newmark) {
      this.istoright = true;
    }
    /*
     * 手指从右向左移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    if (this.data.mark > this.data.newmark) {
      this.istoright = false;

    }
    this.data.mark = this.data.newmark;

  },
  tap_end: function (e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    if (this.istoright) {
      this.setData({
        open: true
      });
    } else {
      this.setData({
        open: false
      });
    }
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
    })
  },
  distpickerCancel: function () {
    this.setData({
      showDistpicker: false
    })
  },


  //当键盘输入时，触发input事件
  bindinput: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      inputValue: prefix
    });



    var newSource = []//匹配的结果
    if (prefix != "") {
      this.setData({
        search_fold: true
      });
      for (var i = 0; i < this.data.projectInfo1.length; i++) {

        if (this.data.projectInfo1[i].project_name.indexOf(prefix) != -1) {
          newSource.push(this.data.projectInfo1[i].project_name)
        }
      }
    } else {
      this.setData({
        search_fold: false
      });
    }
    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource
      })
    } else {
      this.setData({
        bindSource: []
      })
    }
  },
  itemtap: function (e) {
    this.setData({
      inputValue: e.target.id,
      bindSource: [],
      search_fold: false
    })
  },

  // 搜索功能模块
  search: function (e) {
    var inputValue = this.data.inputValue;
    var SourceResult = []//搜索的结果
    if (inputValue != '') {
      for (var i = 0; i < this.data.projectInfo1.length; i++) {
        if (this.data.projectInfo1[i].project_name.indexOf(inputValue) != -1) {
          SourceResult.push(this.data.projectInfo1[i]);
        }
      }
      this.setData({
        projectInfo2: SourceResult,
        search_fold: false
      });
    } else {
      this.setData({
        projectInfo2: this.data.projectInfo1
      });
    }

  },

  // 筛选
  formReset: function () {
    this.setData({
      self_capacity: 0,
      self_shuini: true,
      self_zhuankuai: true,
      self_qita: true,
      self_discount: 20,
      sum_capacity: 0,
      sum_distance: 99999,
      sum_rent_max: 99999,
      country_number: 0,
      self: true,
      sum: true,
      country: true,
    })
  },
  self_capacity: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      self_capacity: prefix
    });
  },
  self_discount: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      self_discount: prefix
    });
  },
  sum_capacity: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      sum_capacity: prefix
    });
  },
  sum_elec_distance: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      sum_elec_distance: prefix
    });
  },
  sum_rent_max: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      sum_rent_max: prefix
    });
  },
  country_number: function (e) {
    var prefix = e.detail.value//用户实时输入值
    this.setData({
      country_number: prefix
    });
  },

  self_shuini: function () {
    if (this.data.self_shuini) {
      this.setData({
        self_shuini: false
      });
    } else {
      this.setData({
        self_shuini: true
      });
    };
  },
  self_zhuankuai: function () {
    if (this.data.self_zhuankuai) {
      this.setData({
        self_zhuankuai: false
      });
    } else {
      this.setData({
        self_zhuankuai: true
      });
    };
  },
  self_qita: function () {
    if (this.data.self_qita) {
      this.setData({
        self_qita: false
      });
    } else {
      this.setData({
        self_qita: true
      });
    };
  },

  distpickerSure: function () {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    };
    var selectResult = [];
    var self = this.data.self;
    var sum = this.data.sum;
    var country = this.data.country;
    var self_capacity = this.data.self_capacity;
    var self_shuini = this.data.self_shuini;
    var self_zhuankuai = this.data.self_zhuankuai;
    var self_qita = this.data.self_qita;
    var self_discount = this.data.self_discount;
    var sum_capacity = this.data.sum_capacity;
    var sum_distance = this.data.sum_distance;
    var sum_rent_max = this.data.sum_rent_max;
    var country_number = this.data.country_number;
    var provinceName = this.data.provinceName[p];
    var cityName = this.data.cityName[c];
    if (provinceName == '-不限-') {
      for (var i = 0; i < this.data.projectInfo1.length; i++) {

        if (this.data.projectInfo1[i].project_type == '自发用电' && self) {
          if (this.data.projectInfo1[i].self_texture == '水泥' && self_shuini) {
            if (this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '彩钢' && self_zhuankuai) {
            if (this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '其他' && self_qita) {
            if (this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          }



        } else if (this.data.projectInfo1[i].project_type == '全额上网' && sum) {
          if (this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent_max) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        } else if (this.data.projectInfo1[i].project_type == '农村光伏' && country) {

          if (this.data.projectInfo1[i].country_number >= country_number) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        }
      }

    } else if (cityName == '-不限-') {
      for (var i = 0; i < this.data.projectInfo1.length; i++) {

        if (this.data.projectInfo1[i].project_type == '自发用电' && self) {
          if (this.data.projectInfo1[i].self_texture == '水泥' && self_shuini) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '彩钢' && self_zhuankuai) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '其他' && self_qita) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          }



        } else if (this.data.projectInfo1[i].project_type == '全额上网' && sum) {
          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent_max) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        } else if (this.data.projectInfo1[i].project_type == '农村光伏' && country) {

          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].country_number >= country_number) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        }
      }
    } else {
      for (var i = 0; i < this.data.projectInfo1.length; i++) {

        if (this.data.projectInfo1[i].project_type == '自发用电' && self) {
          if (this.data.projectInfo1[i].self_texture == '水泥' && self_shuini) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '彩钢' && self_zhuankuai) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '其他' && self_qita) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          }



        } else if (this.data.projectInfo1[i].project_type == '全额上网' && sum) {
          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent_max) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        } else if (this.data.projectInfo1[i].project_type == '农村光伏' && country) {

          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].country_number >= country_number) {
            selectResult.push(this.data.projectInfo1[i]);
          }

        }
      }
    }
    this.setData({
      projectInfo2: selectResult,
    });
  },

  //跳转 传值 
  navigate: function (e) {

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
      url: '../project_details/project_details?project_id=' + project_id + '&project_name=' + project_name + '&project_user=' + project_user + '&project_user=' + project_user + '&project_phone=' + project_phone + '&user_openid=' + user_openid + '&project_type=' + project_type + '&project_provinceNmae=' + project_provinceNmae + '&project_cityName=' + project_cityName + '&project_require=' + project_require + '&project_public=' + project_public + '&self_capacity=' + self_capacity + '&self_area=' + self_area + '&self_shuini=' + self_shuini + '&self_zhuankuai=' + self_zhuankuai + '&self_qita=' + self_qita + '&self_electricity=' + self_electricity + '&self_elec_distance=' + self_elec_distance + '&self_discount=' + self_discount + '&sum_capacity=' + sum_capacity + '&sum_area=' + sum_area + '&sum_distance=' + sum_distance + '&sum_rent=' + sum_rent + '&sum_shuini=' + sum_shuini + '&sum_zhuankuai=' + sum_zhuankuai + '&sum_qita=' + sum_qita + '&country_number=' + country_number + '&country_capacity=' + country_capacity  + '&project_pic1=' + project_pic1 + '&project_pic2=' + project_pic2 + '&project_pic3=' + project_pic3,
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
    wx.request({
      url: 'https://www.sundehui.com/project/listProject',
      data: {
        list_id: wx.getStorageSync('list_id')
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          projectInfo1: res.data ,
          projectInfo2: res.data
        })
      },
      fail: function (res) {
      }
    });
    var projectInfo1 = that.data.projectInfo1;
    that.setData({
    projectInfo2: projectInfo1
    });
    that.setAreaData();
    
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight * (1188 / 1334),

        });

      }

    });
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
      url: 'https://www.sundehui.com/project/listProject',
      data: {
        list_id: wx.getStorageSync('list_id')
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          projectInfo1: res.data,
          projectInfo2: res.data
        })
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