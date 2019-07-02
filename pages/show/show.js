// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    ele: "A",
    currentInd: 0,
    tops: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.request({
      url: "https://www.easy-mock.com/mock/5ceb8bac32cfe337f96fe748/example/car#!method=get",
      success: ({
        data
      }) => {
        this.setData({
          dataList: data.data.items
        }, () => {
          let {tops} = this.data
          const query = wx.createSelectorQuery()
          query.selectAll(".content").boundingClientRect(res => {
            // console.log(res)
            let last = res[res.length - 1]
            res.map(item => {
              tops.push(item.top)  
            })
            this.setData({
              tops: tops.concat([last.top+last.height])
            })
          }).exec()
        })
      }
    })
  },
  scrollFn({ detail}){
    let { scrollTop} = detail
    let {tops} = this.data
    // console.log(scrolTop)
    tops.forEach((item,index) => {
      if (scrollTop > item && scrollTop < tops[index+1]){
        // console.log(index)
        this.setData({
          currentInd: index
        })
      }
    })
  },
  clickFn({
    target
  }) {
    let {
      ind,
      index
    } = target.dataset
    this.setData({
      currentInd: index,
      ele: ind
    }, () => {

    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})