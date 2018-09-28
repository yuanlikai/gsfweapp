// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../map/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    color: 1,
    latitude: "",
    longitude: "",
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  makertap: function(e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function(options) {

    wx.setNavigationBarTitle({
      title: options.name
    })

    this.setData({
      latitude: options.latitude,
      longitude: options.longitude,

      markers: [{
        id: 0,
        latitude: options.latitude,
        longitude: options.longitude,
        width: 18,
        height: 35
      }],
    })
    this.BMap()
  },
  search(e) {

    let v = this;
    v.setData({
      placeData: {
        title: '',
        address: '',
        telephone: ''
      }
    });
    wx.showLoading({
      title: '加载中',
    })
    console.log(e.currentTarget.dataset.alphaBeta)
    switch (e.currentTarget.dataset.alphaBeta) {
      case '楼盘':
        v.setData({
          color:1
        })
        v.BMap()
        break;
      case '酒店':
        v.setData({
          color: 2
        })
        v.BMap('酒店')
        break;
      case '医院':
        v.setData({
          color: 3
        })
        v.BMap('医院')
        break;
      case '公交':
        v.setData({
          color: 4
        })
        v.BMap('公交')
        break;
      case '银行':
        v.setData({
          color: 5
        })
        v.BMap('银行')
        break;
      case '地铁':
        v.setData({
          color: 6
        })
        v.BMap('地铁')
        break;

    };
  },
  BMap(str) {

    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'RqhyfBAvoUGY1HX2x7BRFmX1LYZGRcd8'
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }


    if (str) {
      console.log('11')
      BMap.search({
        "query": str,
        fail: fail,
        location: that.data.latitude + "," + that.data.longitude,
        success: success,
        width: 15,
        height: 30,
        iconPath: '../../img/marker_red.png',
        
        iconTapPath: '../../img/marker_red.png'
      });
    } else {

      that.setData({
        placeData: {
          title: '名称：' + that.options.name + '\n',
          address: '地址：' + that.options.address + '\n',
          telephone: '电话：' + that.options.mobile
        }
      });

      that.setData({
        latitude: that.options.latitude,
        longitude: that.options.longitude,

        markers: [{
          id: 0,
          latitude: that.options.latitude,
          longitude: that.options.longitude,
          width: 18,
          height: 35
        }],
      })
    }
    wx.hideLoading()
  },

  showSearchInfo: function(data, i) {
    var that = this;
    console.log
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function(data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      }
      markers[j](data[j]);
    }
    that.setData({
      markers: markers
    });
  }
})