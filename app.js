//app.js
App({
  onLaunch: function () {
    wx.getSetting({
      success:res=> {
        if (!res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.getUser.userInfo = res.userInfo;
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res); 
              }
            },
            fail:err=>{
              console.log(err)
            }
          });
        }
      }
    })
  },
  getUser:{
    userInfo:null
  }
})