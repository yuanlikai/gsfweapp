// pages/verify/verify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buycode: '',
    key: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '消码页',
    })
  },

  bindKeyInput: function(e) {
    this.setData({
      buycode: e.detail.value
    })
  },
  bindKeyInput1: function(e) {
    this.setData({
      key: e.detail.value
    })
  },

  submit() {
    let v = this;
    wx.showModal({
      title: '贵上提示',
      content: '是否确定继续消除该抵用券，确定后本券将失效。',
      success: function(res) {
        wx.showLoading({
          title: '验证中',
        })
        wx.request({
          url: 'https://app.gsfzd.com/index.php/huodo/huodo/index',
          method: 'POST',
          data: {
            buycode: v.data.buycode,
            key: v.data.key
          },
          success: function (res) {
            if (res.data.error === true) {
              setTimeout(function () {
                wx.hideLoading({
                  success:function(){
                    wx.reLaunch({
                      url: '/pages/verify/success/success?mobile=' + res.data.data.mobile + '&idcard=' + res.data.data.idcard,
                    })
                  }
                });
              }, 200)
            } else {
              setTimeout(function () {
                wx.hideLoading();
                wx.showToast({
                  title: res.data.errMsg,
                  icon:'none'
                })
              }, 200)
            }
          }
        })

      }
    })
  },

  sacode() {
    let v = this;

    wx.showLoading({
      title: '请稍后...',
    })
    wx.scanCode({
      success: function(res) {
        v.setData({
          buycode: res.result.split('~')[0],
          key: res.result.split('~')[1],
        });
        wx.hideLoading();
      },
      fail: function () {
        wx.hideLoading();
      }
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
    wx.stopPullDownRefresh()
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