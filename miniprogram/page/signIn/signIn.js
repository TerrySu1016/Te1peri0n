const db = wx.cloud.database()
// page/signIn/signIn.js
Page({

  /**
   * Page initial data
   */
  data: {
    input1: '',
    input2: '',
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

  search(keys, url) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i]['username'] == this.data.input1) {
        if (keys[i]['password'] == this.data.input2) {
          this.setData({fail: false})
          wx.redirectTo({
            url: url,
          })
          getApp().globalData.user = this.data.input1
          console.log(getApp().globalData.user)
          return
        } else {
          wx.showToast({
            title: 'Incorrect password',
            icon: 'none'
          })
          this.setData({
            input1: '',
            input2: ''
          })
          this.setData({fail: false})
          return
        }
      }
    }
    this.setData({fail: true})
  },

  onSubmit() {
    const keys = this.data.whitelisted
    const keys2 = this.data.whitelisted2
    this.search(keys, '/page/profiles/profiles')
    if (this.data.fail) {this.search(keys2, '/page/info-edit/info')}
    if (this.data.fail) {
      wx.showToast({
        title: 'Username not found',
        icon: 'none'
      })
      this.setData({
        input1: '',
        input2: ''
      })
    }
  },

  toMake() {
    wx.redirectTo({
      url: '/page/register/register',
    })
  },

  getDataFromCloud() {
    db.collection('users').get({
      success: (res) => {
        console.log('Data retrieved:', res.data);
        this.setData({
          whitelisted: res.data
        });
      },
      fail: (err) => {
        console.error('Error retrieving data:', err);
      }
    });
    db.collection('advisors').get({
      success: (res) => {
        console.log('Data retrieved:', res.data);
        this.setData({
          whitelisted2: res.data
        });
      },
      fail: (err) => {
        console.error('Error retrieving data:', err);
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.getDataFromCloud()
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