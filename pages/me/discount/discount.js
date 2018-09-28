// pages/me/discount/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    quan: 'https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/quan.png',
    quan1: 'https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/quan1.png',
    list:[],
  },

  tabcode(options){
    wx.previewImage({
      urls: [
        options.currentTarget.dataset.dataset
      ]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
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
    let v= this;
    wx.getStorage({
      key: 'userName',
      success: function (res) {
        v.data.mobile = res.data;
        v.getQ()
      },
    })
    wx.setNavigationBarTitle({
      title: '优惠券',
    })

  },

  getQ(){
    let v = this;
    wx.request({
      url: 'https://app.gsfzd.com/index.php/huodo/huodo/indexs',
      method: 'POST',
      data: {
        token: v.data.mobile
      },
      success: function (res) {
        v.setData({
          list: res.data.data
        })
        wx.hideLoading();
        wx.stopPullDownRefresh()
      }
    })
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
    this.getQ()
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