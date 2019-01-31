// pages/map/index.js

const app = getApp()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		mainInfo: {},
		markers: [{
			iconPath: "/images/nav.png",
			id: 0,
			latitude: 23.13, // 页面初始化 options为页面跳转所带来的参数 
			longitude: 113.27,
			width: 50,
			height: 50
		}],
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			mainInfo: app.globalData.mainInfo.baseInfo
		})
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		var that = this;
		//console.log(that.data);
		return {
			title: that.data.mainInfo.share,
			imageUrl: that.data.mainInfo.thumb,
			path: 'pages/index/index',
			success: function (res) {
				wx.showToast({
					title: '分享成功',
				})
			},
			fail: function (res) {
				// 转发失败
				wx.showToast({
					title: '分享取消',
				})
			}
		}
	},
	callhe: function (event) {
		wx.makePhoneCall({
			phoneNumber: this.data.mainInfo.male_tel
		})
	},
	callshe: function (event) {
		wx.makePhoneCall({
			phoneNumber: this.data.mainInfo.female_tel
		})
	}
})