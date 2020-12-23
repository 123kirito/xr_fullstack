//云数据库
const db=wx.cloud.database()
//userInfo表
const userInfo=db.collection('userInfo')
Page({
  data:{
    userList:[]
  },
    navigatTo(){

    },
    getUserInfo(result){
     //console.log(result.detail.userInfo);
     //一切的云开发未来都是从调用一个函数开始
     //登录
     wx.cloud.callFunction({
      name: 'getOpenId',
      //回调函数
      complete: res => {
        //继续怎么做
        console.log(res)
        //在哪里 mysql where 条件查询
        userInfo.where({
          // 去云端就是为了拿openId
          // 用户的openId是唯一的，
          _openid:res.result.openId
        }).count().then( res => {
          //console.log(res);
          //新用户
          if(res.total==0){
            //插入用户
            //Insert 插入
            userInfo.add({
              //一定要有一个data 一个JSON
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })
           
          } else {
            wx.navigateTo({
              url: '../add/add',
            })
          }
        })
      }
    })
    }
})