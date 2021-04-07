// miniprogram/pages/orderstatus/orderstatus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      order: {
        order_no: 'SA02201703052988',
        create_time: '2021.02.01 18:30',
        order_goods: [{
          goods_img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073939.80384505.jpg',
          goods_name: '小米10',
          goods_price: '3599',
          goods_weight: '/部',
          goods_status: '已支付',
        }, {
          goods_img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587873641.99835805.jpg',
          goods_name: '小米10 青春版 5G',
          goods_price: '2099',
          goods_weight: '/部',
          goods_status: '已支付',
        }],
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