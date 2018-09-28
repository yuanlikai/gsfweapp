// pages/rests/survey/survey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruit1: [{
      id: 1,
      name: 'A. 25及以下',
    }, {
      id: 2,
      name: 'B. 26~35'
    }, {
      id: 3,
      name: 'C. 35~45'
    }, {
      id: 4,
      name: 'D. 45以上',
    }],

    fruit2: [{
      id: 1,
      name: 'A. 机关、事业单位',
    }, {
      id: 2,
      name: 'B. 企业'
    }, {
      id: 3,
      name: 'C. 个体经营或私营企业户'
    }, {
      id: 4,
      name: 'D. 其他',
    }],

    fruit3: [{
      id: 1,
      name: 'A. 100W以内',
    }, {
      id: 2,
      name: 'B. 100-500W'
    }, {
      id: 3,
      name: 'C. 500-1000W'
    }, {
      id: 4,
      name: 'D. 1000W以上',
    }],

    fruit4: [{
      id: 1,
      name: 'A. 二室一厅',
    }, {
      id: 2,
      name: 'B. 三室二厅'
    }, {
      id: 3,
      name: 'C. 四室二厅'
    }, {
      id: 4,
      name: 'D. 复式',
    }],

    fruit5: [{
      id: 1,
      name: 'A. 不需要，想自己装修',
    }, {
      id: 2,
      name: 'B. 提供厨卫的装修'
    }, {
      id: 3,
      name: 'C. 根据开放商提供的多种装修方案再做选择'
    }, {
      id: 4,
      name: 'D. 全面的室内装修',
    }],

    fruit6: [{
      id: 1,
      name: 'A. 开发商',
    }, {
      id: 2,
      name: 'B. 代理公司'
    }, {
      id: 3,
      name: 'C. 中介公司'
    }, {
      id: 4,
      name: 'D. 互联网购房平台',
    }],

    fruit7: [{
      id: 1,
      name: 'A. 3%左右',
    }, {
      id: 2,
      name: 'B. 5%左右'
    }, {
      id: 3,
      name: 'C. 10%左右'
    }, {
      id: 4,
      name: 'D. 20%乃至更多',
    }],
    fruit8: [{
      id: 1,
      name: 'A. 中介',
    }, {
      id: 2,
      name: 'B. 代理公司'
    }, {
      id: 3,
      name: 'C. 销售人员'
    }, {
      id: 4,
      name: 'D. 以上都有',
    }],
    fruit9: [{
      id: 1,
      name: 'A. 愿意',
    }, {
      id: 2,
      name: 'B. 不愿意'
    }, {
      id: 3,
      name: 'C. 看情况'
    }],
    fruit10: [{
      id: 1,
      name: 'A. 愿意',
    }, {
      id: 2,
      name: 'B. 不愿意'
    }, {
      id: 3,
      name: 'C. 金额太高了'
    }],
    fruit11: [{
      id: 1,
      name: 'A. 户外广告/路牌',
    }, {
      id: 2,
      name: 'B. 电视'
    }, {
      id: 3,
      name: 'C. 网络广告'
    }, {
      id: 4,
      name: 'D. 朋友/亲人介绍'
    }],

    fruit12: [{
      id: 1,
      name: 'A. 送优惠券',
    }, {
      id: 2,
      name: 'B. 送家具'
    }, {
      id: 3,
      name: 'C. 送精装'
    }, {
      id: 4,
      name: 'D. 其他'
    }],

    fruit13: [{
      id: 1,
      name: 'A. 非常满意',
    }, {
      id: 2,
      name: 'B. 基本满意'
    }, {
      id: 3,
      name: 'C. 不满意'
    }],

    fruit14: [{
      id: 1,
      name: 'A. 有帮助，可以直接了解项目信息，省去中介费用',
    }, {
      id: 2,
      name: 'B. 没有帮助，中介带看房更方便'
    }, {
      id: 3,
      name: 'C. 都可以，多一种找房渠道更好选择'
    }],

    fruit15: [{
      id: 1,
      name: 'A. 账户的安全性',
    }, {
      id: 2,
      name: 'B. 线下兑换的实用性'
    }, {
      id: 3,
      name: 'C. 若退款，是否方便'
    }],

    fruit16: [{
      id: 1,
      name: 'A. 房源的真实性（不能和实际情况相差很大）',
    }, {
      id: 2,
      name: 'B. 可靠性（入住项目需有五证）'
    }, {
      id: 3,
      name: 'C. 直播看房功能（会让线上比线下看房更方便）'
    }, {
      id: 4,
      name: 'D.要有成熟的平台交互体验感'
    }],

    fruit17: [{
      id: 1,
      name: 'A. 非常好',
    }, {
      id: 2,
      name: 'B. 一般'
    }, {
      id: 3,
      name: 'C. 不感兴趣'
    }],

    fruit18: [{
      id: 1,
      name: 'A. 肯定会',
    }, {
      id: 2,
      name: 'B. 不会'
    }, {
      id: 3,
      name: 'C. 可以考虑'
    }],

    fruit19: [{
      id: 1,
      name: 'A. 非常大',
    }, {
      id: 2,
      name: 'B. 一般'
    }, {
      id: 3,
      name: 'C. 不太大'
    }],

    fruit20: [{
      id: 1,
      name: 'A. 房产知识',
    }, {
      id: 2,
      name: 'B. 房价趋势'
    }, {
      id: 3,
      name: 'C. 财经动态'
    }, {
      id: 4,
      name: 'D. 时事热点'
    }],



    current: {
      current1: '',
      current2: '',
      current3: '',
      current4: '',
      current5: '',
      current6: '',
      current7: '',
      current8: '',
      current9: '',
      current10: '',
      current11: '',
      current12: '',
      current13: '',
      current14: '',
      current15: '',
      current16: '',
      current17: '',
      current18: '',
      current19: '',
      current20: '',
    },

    position: 'left',
    checked: false,
    disabled: false
  },
  handleFruitChange1({
    detail = {}
  }) {
    this.setData({
      'current.current1': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange2({
    detail = {}
  }) {
    this.setData({
      'current.current2': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange3({
    detail = {}
  }) {
    this.setData({
      'current.current3': detail.value,
    });
    console.log(this.data.current)
  },

  handleFruitChange4({
    detail = {}
  }) {
    this.setData({
      'current.current4': detail.value,
    });
    console.log(this.data.current)
  },

  handleFruitChange5({
    detail = {}
  }) {
    this.setData({
      'current.current5': detail.value,
    });
    console.log(this.data.current)
  },

  handleFruitChange6({
    detail = {}
  }) {
    this.setData({
      'current.current6': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange7({
    detail = {}
  }) {
    this.setData({
      'current.current7': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange8({
    detail = {}
  }) {
    this.setData({
      'current.current8': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange9({
    detail = {}
  }) {
    this.setData({
      'current.current9': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange10({
    detail = {}
  }) {
    this.setData({
      'current.current10': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange11({
    detail = {}
  }) {
    this.setData({
      'current.current11': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange12({
    detail = {}
  }) {
    this.setData({
      'current.current12': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange13({
    detail = {}
  }) {
    this.setData({
      'current.current13': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange14({
    detail = {}
  }) {
    this.setData({
      'current.current14': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange15({
    detail = {}
  }) {
    this.setData({
      'current.current15': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange16({
    detail = {}
  }) {
    this.setData({
      'current.current16': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange17({
    detail = {}
  }) {
    this.setData({
      'current.current17': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange18({
    detail = {}
  }) {
    this.setData({
      'current.current18': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange19({
    detail = {}
  }) {
    this.setData({
      'current.current19': detail.value,
    });
    console.log(this.data.current)
  },
  handleFruitChange20({
    detail = {}
  }) {
    this.setData({
      'current.current20': detail.value,
    });
    console.log(this.data.current)
  },



  handleClick() {
    let v = this;
    var data = this.data.current;
    var arr = [];
    var state = 0;

    for (var i in data) {
      if (data[i].split('.')[0] === '') {
        wx.showModal({
          title: '友情提示',
          showCancel: false,
          content: '您第' + i.split('t')[1] + '选项未填写！'
        })
        state = 1
        break
      } else {
        arr.push(data[i].split('.')[0])
      }
    }
    if (state === 0) {
      wx.request({
        url: 'https://app.gsfzd.com/index.php/huodo/huo/wen',
        method:'POST',
        data:{
          info: arr.join(',')
        },
        success:(res,req)=>{
          if(res.data.error===true){
            wx.switchTab({
              url: '/pages/home/home',
              success:function(){
                wx.showToast({
                  title: '提交成功'
                })
              }
            })
          }else{
            wx.showToast({
              title: '提交失败',
              icon:'error'
            })
          }
        }
      })
    } else {
      console.log('有选项未填写')
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '调查问券',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})