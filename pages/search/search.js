
Page({


  data: {
    
  },
 obj: {
   inputvalue:''
 },
  input(e) {
    this.obj.inputvalue = e.detail.value;
    // console.log(this.obj.inputvalue)
  },
 search(){
   wx.request({
     url: 'http://localhost:3000/list',
     data: {
       q:this.obj.inputvalue
     },
     header:{'content-type':'application/json'},
     method:'GET',
     success:(res)=>{
       this.setData({
         list:res.data
       })
     }
   })
 },

//点击跳转至详情页-------------
  go(e){
  wx.navigateTo({
    url: '/pages/delet/delet?id=' + e.currentTarget.id
  })
},

})
