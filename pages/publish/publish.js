
Page({


  data: {
    address:'点击选择  要选我呦'
  },
  obj:{
   type:'sell'
  },

  onLoad: function (options) {

  },
 typeChange(e){
   this.obj.type=e.detail.value;
   console.log(this.obj)
 },

  //-勾选地址-点击选择---
  selAddress() {
    wx.chooseLocation({
      success: (res) => {
        console.log(res)
        this.setData({
          address: res.address
        })
//--------------------

        Object.assign(this.obj, {
          address: res.address,
          longitude: res.longitude,
          latitude: res.latitude

        })
        console.log(this.obj)
      }

    })
  },


 inputcontact(e){
   this.obj.contact=e.detail.value;
 },
 inputdesc(e){
   this.obj.desc=e.detail.value;
 },

 //--输入的内容传送到db.json里面---
 save(){
  //  console.log(this.obj)
  if(!this.obj.desc){
    wx.showToast({
      title: '请输入描述',
      icon:'loading',
      duration:2000,
      mask:true
    })
    return
  }
  wx.request({
    url: 'http://localhost:3000/list',
    data:this.obj,
    header:{'content-type':'application/json'},
    method:'POST',
    success:(res)=>{
      this.setData({
        suc:true
      })
    }
  })
 },

 //-路由的跳转---
 go(){
   wx.navigateBack({
     delta:1
   })
 },

 re(e){
    //  console.log(e.delet.c)
 }
})