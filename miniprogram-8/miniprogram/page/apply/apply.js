// page/apply/apply.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  onInputChange1(e) {
    this.setData({
      input1: e.detail.value
    });
  },

  onInputChange2(e) {
    this.setData({
      input2: e.detail.value
    });
  },

  onInputChange3(e) {
    this.setData({
      input3: e.detail.value
    });
  },

  onInputChange4(e) {
    this.setData({
      input4: e.detail.value
    });
  },

  onInputChange5(e) {
    this.setData({
      input5: e.detail.value
    });
  },

  onSubmit() {
    //TO DO: REGISTER USER IN CLOUD
    // TO DO: make page to wait during application process
    // wx.redirectTo({
    //   url: '/page/waiting/waiting',
    // })
    if (this.data.input5 == "g2r" || this.data.input5 == "G2R") {
      wx.redirectTo({
        url: '/page/info-edit/info',
      })
    }
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