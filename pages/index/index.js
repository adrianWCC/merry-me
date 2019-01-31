const AV = require('../../libs/av-weapp-min');
const app = getApp()
var touchDot = 0; //触摸时的原点  
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = ""; // 记录/清理时间记录 
const myMusic = wx.createInnerAudioContext()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		animationData: "",
		userInfo: {},
		mainInfo: {},
		music: '',
		cover: '',
		isPlayingMusic: true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//创建动画
		var animation = wx.createAnimation({
			duration: 3600,
			timingFunction: "ease",
			delay: 600,
			transformOrigin: "50% 50%",
		})
		animation.scale(0.9).translate(10, 10).step(); //边旋转边放大
		//导出动画数据传递给组件的animation属性。
		this.setData({
			animationData: animation.export(),
		})
		wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
			title: '加载中',
			icon: 'loading',
		});
		// 创建查询
		var query = new AV.Query('wx_mylove')
		var _this = this
		// 添加查询条件
		query.equalTo('signature', 'b7c1388379200ec75862f4a3b12b22ea4ed59799');
		query.find().then(function(res){
			app.globalData.mainInfo = res[0].attributes
			wx.hideLoading();
			console.log(app.globalData.mainInfo)
			_this.setData({
				mainInfo: app.globalData.mainInfo.baseInfo,
				cover: app.globalData.mainInfo.cover,
				music: app.globalData.mainInfo.music
			})
			_this.playMusic()
		}, function(err){
			console.log(err)
		})
	},
	playMusic() {
		myMusic.src = this.data.music
		myMusic.play()
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
			phoneNumber: this.data.mainInfo.he_tel
		})
	},
	callshe: function (event) {
		wx.makePhoneCall({
			phoneNumber: this.data.mainInfo.she_tel
		})
	},
	togglePlay: function (event) {
		if (this.data.isPlayingMusic) {
			myMusic.pause();
			this.setData({
				isPlayingMusic: false
			})
		} else {
			myMusic.play()
			this.setData({
				isPlayingMusic: true
			})
		}
	},
})