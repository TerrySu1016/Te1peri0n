// page/signIn/signIn.js
Page({

  /**
   * Page initial data
   */
  data: {
    input1: '',
    input2: '',
    whitelisted: {'test1': 'testpass', 'test2': 'testpass2'},
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
    if (this.data.whitelisted[this.data.input1]) {
      if (this.data.whitelisted[this.data.input1] == this.data.input2) {
        wx.redirectTo({
          url: '/page/profiles/profiles',
        })
      } else {
        wx.showToast({
          title: 'Incorrect password',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: 'Email not found',
        icon: 'none'
      })
    }
    this.setData({
      input1: '',
      input2: ''
    })
    // const that = this
    // wx.getUserProfile({
    //   desc: 'We need you to fill this',
    //   success: function(res) {
    //     wx.showModal({
    //       title: res,
    //       content: res,
    //       complete: (res) => {}
    //     })
    //     that.setData({info: res})
    //   }
    // })
    // console.log("hi")
    // this.data = that.data
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