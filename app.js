//app.js
App({
  //全局共享数据
  globalData:{
    userInfo:null
  },
  onLaunch: function () {
    console.log('App launch');
    // TODO: 登录验证
  },
  // getUserInfo:function(cb){
  //   var that = this;
  //   if(this.globalData.userInfo){
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   }else{
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo;
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     });
  //   }
  // },
  // 应用程序全局函数 ：api接口调用
  // fetchApi( url, cb ) {
  //   wx.request( {
  //     url,
  //     data: {},
  //     header: {
  //       "Content-Type": "application/json"
  //     },
  //     success( res ) {
  //       if( cb && typeof cb == 'function' ) {
  //         cb( null, res.data )
  //       }
  //     },
  //     fail( e ) {
  //       callback( e );
  //     }
  //   }
  // }
  fetchApi (url, callback) {
    // return callback(null, top250)
    wx.request({
      url,
      data: {},
      header: { 'Content-Type': 'application/json' },
      success (res) {
        callback(null, res.data)
      },
      fail (e) {
        callback(e)
      }
    })
  },
})
