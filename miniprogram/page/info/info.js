const db = wx.cloud.database()
// page/info/info.js
Page({

  /**
   * Page initial data
   */
  data: {
    exp: [["Frontend Developer", "bilibili Group", "Jun 2024 - Aug 2024", "During my internship, I was responsible for an innovative 3D animation project using the company's built-in bilibili/chronos-pkg rendering engine."], ["Frontend Developer", "bilibili Group", "Jun 2024 - Aug 2024", "During my internship, I was responsible for an innovative 3D animation project using the company's built-in bilibili/chronos-pkg rendering engine."], ["Frontend Developer", "bilibili Group", "Jun 2024 - Aug 2024", "During my internship, I was responsible for an innovative 3D animation project using the company's built-in bilibili/chronos-pkg rendering engine."]],
    edu: [["UC Berkeley", "BA Data Science", "Aug 2022 - May 2026", "Activities and societies: CS61A, CS61B, DATA8, MATH 54，DATA100, MATH53, UGBA102A,INDENG120"], ["UC Berkeley", "BA Data Science", "Aug 2022 - May 2026", "Activities and societies: CS61A, CS61B, DATA8, MATH 54，DATA100, MATH53, UGBA102A,INDENG120"], ["UC Berkeley", "BA Data Science", "Aug 2022 - May 2026", "Activities and societies: CS61A, CS61B, DATA8, MATH 54，DATA100, MATH53, UGBA102A,INDENG120"]]
  },

  getDataFromCloud(x) {
    console.log(x)
    db.collection('advisors').where({username: x}).get({
      success: (res) => {
        console.log('Data retrieved:', res.data[0]);
        this.setData({
          profile: res.data[0]
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
    const passed = options.data
    this.getDataFromCloud(passed)
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