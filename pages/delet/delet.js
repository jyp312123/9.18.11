
Page({

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 
   * 将选中的地址传送到详情页
   */
 onLoad:function(options) {
   wx.request({
     url: 'http://localhost:3000/list/'+options.id,
     header: {'content-type':'application/json'},
     method:'GET',
     success:(res)=>{
       console.log(res);
       this.setData({
         address:res.data.address,
         type:res.data.type,
         desc:res.data.desc,
         constact:res.data.contact
       })
     }
   })
 }



})

