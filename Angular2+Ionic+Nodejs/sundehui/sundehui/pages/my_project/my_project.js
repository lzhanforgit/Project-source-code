var area = require('../../data/area (1)')
var p = 0, c = 0, d = 0

Page({

  /**
 * 页面的初始数据
 */
  data: {
    stateCode:'',
    // 删除数据
    openId: wx.getStorageSync('openId'),
    nickname: wx.getStorageSync('nickname'),
    token:'',
    del_id:'',
   

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
 





    // 侧边栏动画

    open: false,
    mark: 0,
    newmark: 0,
    istoright: true,
    projectInfo2: [],
  },
  next_guidepage: function () {
    wx.navigateTo({
      url: '../guide_page/guide_page',
    })
  },

  DelMsg(e) {
    var that = this;
    var n = e.currentTarget.id;
    var list = this.data.projectInfo1;
    var del_id=this.data.projectInfo1[n].project_id;
    this.setData({
      del_id:del_id
    })
    wx.showModal({
      content: "是否删除？",
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm == true) {
          list.splice(n, 1);
          wx.request({
            url: 'https://www.sundehui.com/project/deleteMyProject',
            data: {
              project_id: that.data.del_id
            },
            method: 'POST',
            success: function (res) {
            }
          })
        }
        that.setData({
          projectInfo1: list
        });
      }
    })
    


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
    var that = this;
    if (that.data.nickname){
      that.setData({
        token:false
      });
    }else{
      that.setData({
        token: true
      })
    }
    var projectInfo1 = that.data.projectInfo1;
    that.setData({
      projectInfo2: projectInfo1
    });
    that.setAreaData();
    wx.request({
      url: 'https://www.sundehui.com/project/myProject',
      data:{
        openId: wx.getStorageSync('openId')
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          projectInfo1: res.data
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
      url: 'https://www.sundehui.com/project/myProject',
      data: {
        openId: wx.getStorageSync('openId')
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          projectInfo1: res.data
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

  }
})