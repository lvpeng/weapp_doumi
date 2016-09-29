//posts.js
//获取应用实例
const app = getApp()
// const API_URL = "mob.vip-test.doumi.com/postlist"
const API_URL = "http://mob.vip-test.doumi.com/api/v1/bclient/postlist?userId=100035&status=1&page=1"
Page({
  data:{
    title: '加载中',
    listdata: [],
    indicatorDots: true,
    autoplay: true,
    hidden: false,//加载中
    imgUrls: [
           'http://sta.doumi.com/src/image/jianzhi/mobile/banner/b_banner_fuwu.jpg',//FIXME: current is hard code
          // "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    ]
  },
  onLoad:function(options){
    var that = this;
    //get posts list data
    app.fetchApi(API_URL, 'GET', {},function(err,res){
      //render template
      //更新数据
      that.setData({ listdata: res.data.list, hidden: true })
    }) 
  },
  start: function(){
    wx.navigateTo({
      url: '../profile/profile'
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})