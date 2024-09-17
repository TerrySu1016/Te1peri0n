const db = wx.cloud.database()
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

  onSubmit() {
    //TO DO: REGISTER USER IN CLOUD
    if (this.data.input1 && this.data.input3 && this.data.input4 && this.data.selected) {
      db.collection('users').add({
        data: {
          username: this.data.user,
          password: this.data.pass,
          country: this.data.input1,
          year: this.data.selected,
          major: this.data.input3,
          targetSchool: this.data.input4
        },
        success: (res) => {
          wx.redirectTo({
            url: '/page/profiles/profiles',
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
        title: 'Items not filled',
        icon: 'none'
      })
      this.setData({
        input1: '',
        input3: '',
        input4: '',
        selected: ''
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.setData({
      user: options.user,
      pass: options.pass
    })
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