//app.js
App({
  //------地图
  onLaunch: function () {
    var res=wx.getSystemInfoSync();
    this.globalData.windowWidth=res.windowWidth;
    this.globalData.windowHeight=res.windowHeight;
  },
  globalData: {
    userInfo: null
   }
   
})