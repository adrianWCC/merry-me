var picList = [
  'http://lc-hfjzvymi.cn-n1.lcfile.com/390e9b9b34e41cef505d.JPG',
  'http://lc-hfjzvymi.cn-n1.lcfile.com/e32fe33af9e34e05027f.JPG',
  'http://lc-hfjzvymi.cn-n1.lcfile.com/e32fe33af9e34e05027f.JPG',
  'http://lc-hfjzvymi.cn-n1.lcfile.com/503ad2fb8eee294df8d5.JPG',
  'http://lc-hfjzvymi.cn-n1.lcfile.com/77772e4526498d1c0097.JPG',
  'http://lc-hfjzvymi.cn-n1.lcfile.com/815d3f5718f65d72c391.JPG'
]
var WxMain = AV.Object.extend('wx_mylove')
var wxMain = new WxMain()
wxMain.set('baseInfo', {
  male: '梁山伯',
  male_tel: '13813813800',
  female_tel: '13813813800',
  female: '祝英台',
  date: '2019-01-01',
  lunar: '腊月二十八',
  hotel: '人民广场吃炸鸡',
  address: '人民广场',
  lat: '',
  lan: ''
})
wxMain.set('cover', 'https://lc-hfjzvymi.cn-n1.lcfile.com/a41681cef841e78b4d7e.JPG')
wxMain.set('picList', picList)
wxMain.set('music', '')
wxMain.set('signature', app.globalData.signature)
wxMain.set('blessList', [
  app.globalData.userInfo
])
wxMain.set('blessList', [{
  message: '恭喜发财',
  cus: app.globalData.userInfo
}])
wxMain.save().then(function(res){
  console.log(res)
}, function(err){
  console.log(err)
})