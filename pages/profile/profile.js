const app = getApp()
const API_URL = "http://mob.vip-test.doumi.com/api/v1/bclient/merchCenter"
Page({
  data: {
    userInfo: {},
    hidden: false,//加载中
    modalHidden: true
  },
  onLoad: function () {
    //FIXME use app.fetchApi
    var that = this;
    wx.request( {
      url: API_URL,
      data: {
        uid: 100035//FIXME
      },
      method :"POST",
      header: {
        'Content-Type': 'application/json'
      },
      success: function( res ) {
        that.setData({
          userInfo: res.data.data,
          hidden: true
        })
      }
    })   
  },
  showCallPhoneModel: function(){
    var that = this ;
    that.setData({modalHidden :false})
  },
  hideModal:function(){
    var that = this;
    that.setData({modalHidden : true})
  },
  callPhone: function(){
    //TODO: call phone
  },
  go2companyInfo: function(){
    // wx.navigateTo({
    //   url: '../companyInfo/companyInfo'  
    // })
  },
  go2Wallet: function(){
    // wx.navigateTo({
    //   url: '../postdetail/postdetail'  
    // })
  }
})


