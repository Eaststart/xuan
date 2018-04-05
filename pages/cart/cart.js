// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartNum:[
      {
        name:'1',
        select:'0'
      },
      {
        name: '1',
        select: '0'
      },
      {
        name: '1',
        select: '0'
      },
      {
        name: '1',
        select: '0'
      },
      {
        name: '1',
        select: '0'
      }
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  },
  scanFn() {
    wx.scanCode({
      onlyFromCamera:true,
      success: res => {
        
      }
    })
  },
  selectFn(e){
    let index = e.currentTarget.dataset.index;
    let temp = this.data.cartNum;
    let selectStatus=temp[index]['select'];
    if (selectStatus=='0'){
      temp[index]['select']='1';
    }else{
      temp[index]['select'] = '0';
    }
    this.setData({
      cartNum: temp
    })
  },
  selectAllFn(){
    let tempData = this.data.cartNum;
    for (let x = 0; x < tempData.length;x++){
      tempData[x]['select'] == '0' ? (tempData[x]['select'] = '1') : (tempData[x]['select'] = '0');
    }
    this.setData({
      cartNum:tempData
    });
    console.log(this.data.cartNum)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})