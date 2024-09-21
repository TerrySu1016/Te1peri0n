const db = wx.cloud.database()
// page/modify/modify.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  getDataFromCloud(x) {
    console.log(x)
    db.collection('advisors').where({username: x}).get({
      success: (res) => {
        console.log('Data retrieved:', res.data[0]);
        this.setData({
          profile: res.data[0]
        });
        if (res.data[0]['exp']) {
          this.setData({exp: res.data[0]['exp']})
        } else {
          this.setData({exp: []})
        }
        if (res.data[0]['edu']) {
          this.setData({edu: res.data[0]['edu']})
        } else {
          this.setData({edu: []})
        }
      },
      fail: (err) => {
        console.error('Error retrieving data:', err);
      }
    });
  },

  modifyExp(user, arr) {
    db.collection('advisors').where({username: user}).update({
      data: {
        exp: arr
      },
      success: (res) => {
        console.log('Data modified successfully:', res);
      },
      fail: (err) => {
        console.error('Error modifying data:', err);
      }
    });
  },

  modifyEdu(user, arr) {
    db.collection('advisors').where({username: user}).update({
      data: {
        edu: arr
      },
      success: (res) => {
        console.log('Data modified successfully:', res);
      },
      fail: (err) => {
        console.error('Error modifying data:', err);
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.getDataFromCloud(options.user)
    this.setData({page: options.data})
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