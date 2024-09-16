// page/profiles/profiles.js
Page({

  /**
   * Page initial data
   */
  data: {
    profiles: [{'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/play.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}, {'name': 'Terry Su', 'desc': 'UC Berkeley', 'img': '/image/logo.png'}],
    show: true
  },

  pop(e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: `/page/info/info?data=${index}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})