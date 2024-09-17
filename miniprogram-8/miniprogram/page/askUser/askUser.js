// page/askUser/askUser.js
Page({

  /**
   * Page initial data
   */
  data: {
    options: [{ name: '初一', value: '初一', checked: false }, { name: '初二', value: '初二', checked: false }, { name: '初三', value: '初三', checked: false }, { name: '高一', value: '高一', checked: false }, { name: '高二', value: '高二', checked: false }, { name: '高三', value: '高三', checked: false }]
  },

  trigger() {
    this.setData({showChoice: true})
  },

  onRadioChange(e) {
    this.setData({
      showChoice: false,
      selected: e.detail.value
    })
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
    if (this.data.input1 && this.data.input2) {
      wx.redirectTo({
        url: '/page/profiles/profiles',
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