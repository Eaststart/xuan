const url = require('../../utils/url.js');



Page({
  data: {
    imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520
    }, {
      latitude: 23.099994,
      longitude: 113.304520
    }]
  },
  onLoad(){
    // const carU=url+'/api/focus';
    // wx.request({
    //   url: carU,
    //   success:data=>{
    //     let d = data.data.result,
    //         p=[];
    //     for(let x=0;x<d.length;x++){
    //         let tem=d[x].pic.split('\\');
    //         p.push(tem.join('/'));
    //     }
    //     this.setData({
    //       imgUrls: p
    //     })
    //   }
    // })
  },
})
