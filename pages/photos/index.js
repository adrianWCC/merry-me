//index.js
//获取应用实例
const app = getApp()
Page({
	data: {
		userInfo: {},
		slideList: []
	},
	onLoad: function() {
		this.setData({
			slideList: app.globalData.mainInfo.picList
		})
		console.log(this.data)
	},
	onShareAppMessage: function(res) {
		var that = this;
		//console.log(that.data);
		return {
			title: that.data.mainInfo.share,
			imageUrl: that.data.mainInfo.thumb,
			path: 'pages/index/index',
			success: function(res) {
				wx.showToast({
					title: '分享成功',
				})
			},
			fail: function(res) {
				// 转发失败
				wx.showToast({
					title: '分享取消',
				})
			}
		}
	}
	/**
	 * 点击图片预览
	 */
	// previewImage: function (e) {
	// 	var imgsurl = []
	// 	var imgObj = this.data.slideList
	// 	for (var i = 0; i < imgObj.length; i++) {
	// 		imgsurl[i] = imgObj[i]['image']
	// 	}
	// 	var current = e.target.dataset.src;
	// 	wx.previewImage({
	// 		current: current, // 当前显示图片的http链接  
	// 		urls: imgsurl // 需要预览的图片http链接列表
	// 	})
	// },
})