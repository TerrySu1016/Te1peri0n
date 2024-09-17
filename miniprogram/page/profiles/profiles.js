const db = wx.cloud.database()
// page/profiles/profiles.js
Page({

  /**
   * Page initial data
   */
  data: {
    show: true
  },

  getDataFromCloud() {
    db.collection('advisors').get({
      success: (res) => {
        console.log('Data retrieved:', res.data);
        this.setData({
          profiles: res.data
        });
      },
      fail: (err) => {
        console.error('Error retrieving data:', err);
      }
    });
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