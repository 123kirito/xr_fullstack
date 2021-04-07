// pages/pay/pay.js
Page({
  data:{
    popUpHidden: true,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      order:{
        order_no: 'SA02201703052988',
        create_time: '2021.02.01 18:30',
        order_goods: [{
          goods_img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073939.80384505.jpg',
          goods_name: '小米10',
          goods_price: '3599',
          goods_weight: '/部',
          goods_num: 1,
        }, {
          goods_img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587873641.99835805.jpg',
          goods_name: '小米10 青春版 5G',
          goods_price: '2099',
          goods_weight: '/部',
          goods_num: 1,
        }],
        order_sum:5698,
        customer:{
          customer_name: '小米商城旗舰店',
          good_address: '江西省-南昌市-东华理工大学菜鸟驿站',
          good_receiver: '王小明',
          good_phone: '135****5555'  
        },
        remarks: '请快点发货！'
      }
    })
  },
  toPay() {
    wx.showToast({
      title: '已支付完成',
    })
    this.setData({
      popUpHidden: true
    })
  },
  toPay:function(){
    wx.navigateTo({
      url: '/pages/result/result',
    })
  },
onReady: function() {
  // 页面渲染完成
},
onShow: function() {
  // 页面显示
},
onHide: function() {
  // 页面隐藏
},
onUnload: function() {
  // 页面关闭
}
  
})
