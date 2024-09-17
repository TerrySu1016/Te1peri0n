// page/register/register.js
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

  onSubmit() {
    //TO DO: REGISTER USER IN CLOUD
    if (this.data.input1 && this.data.input2) {
      wx.redirectTo({
        url: '/page/askUser/askUser',
      })
    } else {
      wx.showToast({
        title: 'Items not filled',
        icon: 'none'
      })
      this.setData({
        input1: '',
        input2: ''
      })
    }
  },

  toJoin() {
    wx.redirectTo({
      url: '/page/apply/apply',
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