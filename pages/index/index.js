// pages/index/index.js
import lawBusinessData  from '../../datas/lawBusiness'    //模拟后端返回的数据
import {toTreeAny} from '../../utils/util'                //把后端返回的数据转为一颗树
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawTree:[]  //树形对象数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init()
  },
  init(){
    let lawTree = toTreeAny(lawBusinessData,"ATID","FatherID")  //ATID是每个对象的唯一标识,"FatherID"是指向父级的ID
    console.log(lawTree,123)
    this.setData({
      lawTree
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})