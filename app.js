// app.js
const AV = require('./libs/av-weapp-min');
const appId = 'HfJzvYmInaLcGgIeKYHU2xiK-gzGzoHsz'
const appkey = 'sEM6i1sE9eEPpGIh9xJLPipY'
AV.init(appId, appkey)
App({
	onLaunch: function () {
		var that = this;
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			// 调用登录接口
			wx.login({
				success: function () {
					wx.getUserInfo({
						success: function (res) {
							that.globalData.userInfo = res.userInfo;
							that.globalData.signature = res.signature;
						}
					})
				}
			});
		}

	},
	onHide: function () {
		wx.pauseBackgroundAudio();
	},
	onShow: function () {
		wx.playBackgroundAudio()
	},
	globalData: {
		userInfo: null,
		signature: null,
		mainInfo: {}
	}
});