// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    removeShow: true,
    controlsText:'编辑',
    selectAll: {
      one: false,
      two: false
    },
    cartNum: [
      {
        name: '0',
        select: '0',
        sum: 2,
        price: 0,
        checked: false
      },
      {
        name: '1',
        select: '0',
        sum: 2,
        price: 1,
        checked: false
      },
      {
        name: '2',
        select: '0',
        sum: 2,
        price: 2,
        checked: false
      },
      {
        name: '3',
        select: '0',
        sum: 2,
        price: 3,
        checked: false
      },
      {
        name: '4',
        select: '0',
        sum: 2,
        price: 4,
        checked: false
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
      onlyFromCamera: true,
      success: res => {

      }
    })
  },
  selectFn(e) {
    let index = e.currentTarget.dataset.index;
    let temp = this.data.cartNum;
    let selectStatus = temp[index]['select'];
    let selectNum = 0;
    let tempAll = this.data.selectAll;
    if (selectStatus == '0') {
      temp[index]['select'] = '1';
      temp[index]['checked'] = true;
    } else {
      temp[index]['select'] = '0';
      temp[index]['checked'] = false;
    }
    this.setData({
      cartNum: temp
    })
    for (let x = 0; x < this.data.cartNum.length; x++) {
      if (this.data.cartNum[x]['select'] == '1') {
        selectNum++;
      }
    }
    if (selectNum == this.data.cartNum.length) {
      tempAll = {
        one: true,
        two: true
      }
    } else {
      tempAll = {
        one: false,
        two: false
      }
    }
    this.setData({
      selectAll: tempAll
    });
  },
  selectAllFn(e) {
    let tempData = this.data.cartNum;
    let tempSelect = this.data.selectAll;
    for (let x = 0; x < tempData.length; x++) {
      tempData[x]['select'] == '0' ? (tempData[x]['select'] = '1') : (tempData[x]['select'] = '0');
    }
    for (let y = 0; y < tempData.length; y++) {
      if (tempData[y]['select'] == 1) {
        tempData[y]['checked'] = true;
      } else {
        tempData[y]['checked'] = false;
      }
    }
    this.setData({
      cartNum: tempData
    });
    if ((tempSelect.one == false) && (tempSelect.two == false)) {
      if (e.currentTarget.dataset.index == '0') {
        tempSelect.two = true;
      } else {
        tempSelect.one = true;
      }
    } else {
      tempSelect = {
        one: false,
        two: false
      }
    }
    this.setData({
      selectAll: tempSelect
    })
    console.log(this.data.cartNum)
  },
  removeFn(e) {
    let tempData = this.data.cartNum;
    let index = e.currentTarget.dataset.index;
    tempData.splice(index, 1);
    this.setData({
      cartNum: tempData
    });
  },
  showControls() {
    let temp = this.data.removeShow;
    let tempText = this.data.controlsText;
    temp = !temp;
    tempText= tempText=='编辑' ? '完成' : '编辑';
    this.setData({
      removeShow:temp,
      controlsText:tempText
    });
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