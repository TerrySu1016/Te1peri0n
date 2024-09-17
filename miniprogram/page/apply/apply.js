const db = wx.cloud.database()
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
    //TO DO: make page to wait during application process
    //TO DO: handle non-permission code applications
    if (this.data.input1 && this.data.input2 && this.data.input3 && this.data.input4 && this.data.input5) {
      if (this.data.input5 == "g2r" || this.data.input5 == "G2R") {
        db.collection('advisors').add({
          data: {
            username: this.data.input1,
            password: this.data.input2,
            college: this.data.input3,
            major: this.data.input4,
            name: this.data.input1
          },
          success: (res) => {
            wx.redirectTo({
              url: '/page/info-edit/info',
            })
            console.log('Data added successfully:', res);
          },
          fail: (err) => {
            wx.showToast({
              title: 'Error making account. Please try again',
              icon: 'none'
            })
            console.error('Error adding data:', err);
          }
        })
      } else {
        wx.showToast({
          title: 'Invalid permission code',
          icon: 'none'
        })
        this.setData({
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
        })
      }
    } else {
      wx.showToast({
        title: 'Items not filled',
        icon: 'none'
      })
      this.setData({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
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