
var area = require('../../data/area (1)')
var p = 0, c = 0, d = 0

Page({

  /**
 * 页面的初始数据
 */
  data: {
    // 初始化传值
    openId: wx.getStorageSync('openId'),
    list_id: "",
    list_pic: "",
    list_name: "",
    list_user: "",
    user_provinceName: "",
    user_cityName: "",
    list_sum: "",
    list_self: "",
    list_country: "",
    list_public: "",

    showModal: false,
    focus: false,
    isShowView: true,
    userInfo: {},
    result: {},
    text: '',
    tab: 0,

    // 筛选数据
    self_capacity: 0,
    self_shuini: true,
    self_zhuankuai: true,
    self_qita: true,
    self_discount: 20,
    sum_capacity: 0,
    sum_distance: 99999,
    sum_rent: 99999,
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

    add_list: [],
    add_id: [],




    // 侧边栏动画

    open: false,
    mark: 0,
    newmark: 0,
    istoright: true,
    projectInfo2: [],
    projectInfo3: [],
  },
  onShareAppMessage: function (res) {
    var list_id = this.data.list_id;
    var list_user = this.data.list_user;
    var list_pic = this.data.list_pic;
    var list_name = this.data.list_name;
    var user_provinceName = this.data.user_provinceName;
    var user_cityName = this.data.user_cityName;
    var list_sum = this.data.list_sum;
    var list_self = this.data.list_self;
    var list_country = this.data.list_country;
    var list_public = this.data.list_public;
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '让项目不再难找，让投资直接找你',
      path: '/pages/share_list/share_list?list_id=' + list_id + '&list_user=' + list_user + '&list_pic=' + list_pic + '&list_name=' + list_name + '&user_provinceName=' + user_provinceName + '&user_cityName=' + user_cityName + '&list_sum=' + list_sum + '&list_self=' + list_self + '&list_country=' + list_country + '&list_public=' + list_public,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
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
    var sum_rent = this.data.sum_rent;
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
          if (this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent) {
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
            if (this.data.projectInfo1[i].project_provinceName == provinceName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          } else if (this.data.projectInfo1[i].self_texture == '其他' && self_qita) {
            if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].self_capacity >= self_capacity && this.data.projectInfo1[i].self_discount <= self_discount) {
              selectResult.push(this.data.projectInfo1[i]);
            }

          }



        } else if (this.data.projectInfo1[i].project_type == '全额上网' && sum) {
          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent) {
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
          if (this.data.projectInfo1[i].project_provinceNmae == provinceName && this.data.projectInfo1[i].project_cityName == cityName && this.data.projectInfo1[i].sum_capacity >= sum_capacity && this.data.projectInfo1[i].sum_distance <= sum_distance && this.data.projectInfo1[i].sum_rent <= sum_rent) {
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setAreaData();
    var that = this;
    that.setData({
      new_status: options.status,
      list_id: options.list_id,
      list_pic: options.list_pic,
      list_name: options.list_name,
      list_user: options.list_user,
      user_provinceName: options.user_provinceName,
      user_cityName: options.user_cityName,
      list_sum: options.list_sum,
      list_self: options.list_self,
      list_country: options.list_country,
      list_public: options.list_public,
    })
    wx.request({
      url: 'https://www.sundehui.com/project/listProject',
      data: {
        list_id: options.list_id
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
    wx.request({
      url: 'https://www.sundehui.com/project/myProject',
      data: {
        openId: wx.getStorageSync('openId')
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          projectInfo3: res.data
        })
      },
      fail: function (res) {
      }
    });
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight * (930 / 1334),

        });

      }

    });
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
  // onShareAppMessage: function () {

  // },


  /**
    * 弹窗
    */
  showDialogBtn: function () {
    var resert_list = this.data.projectInfo3;
    for (var i = 0; i < this.data.projectInfo1.length; i++) {
      for (var j = 0; j < resert_list.length; j++) {
        if (resert_list[j].project_id == this.data.projectInfo1[i].project_id) {
          resert_list.splice(j, 1);
          j--;
        }
      }
    }

    this.setData({
      projectInfo3: resert_list,
      add_id: []
    })

    this.setData({
      showModal: true,
      add_list: []
    })
  },

  /**
 * 对话框确认按钮点击事件
 */
  onConfirm: function () {
    var that = this;
    that.hideModal();
    var add_list = that.data.add_list;
    for (var item in add_list) {
      that.data.projectInfo1.unshift(that.data.add_list[item]);
    }
    that.setData({
      projectInfo2: that.data.projectInfo1
    })
    var resert_list = that.data.projectInfo3;
    for (var i = 0; i < that.data.projectInfo2.length; i++) {
      for (var j = 0; j < resert_list.length; j++) {
        if (resert_list[j].project_id == that.data.projectInfo2[i].project_id) {
          resert_list.splice(j, 1);
          j--;
        }
      }
    }
    this.setData({
      projectInfo3: resert_list
    })
    if (that.data.add_id.length) {
      wx.request({
        url: 'https://www.sundehui.com/project/inesertOthers',
        method: 'POST',
        data: {
          list_id: that.data.list_id,
          project_id: that.data.add_id
        },
        success:function(res){
        }
      })
    }
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
  * 隐藏模态对话框
  */
  hideModal: function () {
    this.setData({
      showModal: false,

    });
  },


  showDialogBtn1: function (e) {
    var that = this;
    if (this.data.tab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: '1',
      })
    }

  },
  checkboxgroupBindchange: function (e) {
    var temp1 = e;
    var temp2 = ''
    if (temp1.length != 0) {
      for (var i = 0, len = temp1.length; i < len; i++) {
        temp2 = temp2 + temp1[i] + ','
      }
      this.setData({
        text: '您选择了：' + temp2
      })
    } else {
      this.setData({
        text: ''
      })
    }
  },
  add: function (e) {
    var FLAG = false;
    var n = e.target.id;
    var count;
    var add_project = this.data.projectInfo3[n];
    var add_id = this.data.projectInfo3[n].project_id;
    for (var i = 0; i < this.data.add_list.length; i++) {
      if (add_project.project_id == this.data.add_list[i].project_id) {
        FLAG = !FLAG;
        count = i;

      }
    }
    if (FLAG) {
      this.data.add_list.splice(count, 1);
      this.data.add_id.splice(count, 1);

    } else {
      this.data.add_list.push(add_project);
      this.data.add_id.push(add_id);
    }
  },
  next_guidepage: function () {
    wx.navigateTo({
      url: '../guide_page/guide_page',
    })
  }

})