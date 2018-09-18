//地图  接受app。js传过来的额数据
var app=getApp()
Page({
  data:{
    //-定位图标-- 必须给宽高 不然图片不出来----
    controls: [
      {
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth - 30) / 2,
        top: (app.globalData.windowHeight - 30) / 2 - 35,
        width: 30,
        height: 30
      },
      clickable: false
    },
    {
      id: 1,
      iconPath: '/resources/center.png',
      position: {
        left: 40,
        top: app.globalData.windowHeight - 120,
        width: 30,
        height: 30
      },
      clickable: true
    }
    ]
  },
  controltap() {
    this.mapCtx.moveToLocation()
  },


  //--------
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  onShareAppMessage: function (res) {
    return {
      title: '亚萍宝贝的分享',
      path: '/page/index/index'
    }
  },

  //----路由的跳转
  go() {
   wx:wx.navigateTo({
     url: '/pages/publish/publish',
  
   })
  },


//----维度--------获取定位-----
  onShow(){
    wx.getLocation({
      type:'gcj02',
      altitude:true,
      success:(res)=>{
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      }
    })
  //--获取信息    在最后写后面--记录你输入的地点  用小图标显示-----------------------------
   wx:wx.request({
     url: 'http://localhost:3000/list',
     header: { 'content-type':'application / json'},
     method: 'GET',
     success:(res)=> {
       console.log(res.data)
       let markers = res.data.map((item) => {
         return {
           iconPath: "/resources/" + item.type + ".png",
           id: item.id,
           latitude: item.latitude,
           longitude: item.longitude,
           width: 30,
           height: 30
         }
       })
       this.setData({
         markers: markers
       })
     },
   })
  },



//--跳转详情页-------
  markertap(e) {
    wx.navigateTo({
      url: '/pages/delet/delet?id=' + e.markerId
    })
  }, 
//--点击搜索 跳转页面---------
search() {
  wx.navigateTo({
    url: '/pages/search/search',
  })
}
})
