// pages/index/index.js
import lawBusinessData from '../../datas/lawBusiness' //模拟后端返回的数据
import {
  toTreeAny
} from '../../utils/util' //把后端返回的数据转为一颗树
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawTree: [], //树形对象数组
    options: {
      clickActive: true, //默认是true,true代表需要印记;false代表不需要印记
      clickActiveColor: "#00DDDD", //当clickActive为true时才有效,可以设置印记的颜色,默认是灰色
      clickRadio: false, //默认是false,radio直译为收音机,如果为true,意味着不能有多个父节点/root节点处于展开状态,类似于排他思想
      iconConfig: { //左侧图标配置
        type: '1', //0代表服务器模式展示图标;1代表本地静态资源展示图标
        icon1: '/images/加号.png', //初始状态
        icon2: "/images/减号.png", //点击状态
        iconSize:'16' //图标的长,宽都是16px
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init()
  },
  init() {
    let lawTree = toTreeAny(lawBusinessData, "ATID", "FatherID") //ATID是每个对象的唯一标识,"FatherID"是指向父级的ID
    console.log(lawTree, 123)
    this.setData({
      lawTree
    })
    app.globalData.treeList = lawTree //加入到全局缓存
  },
  /**
   * 获取子组件被点击的节点信息
   * @param {*} e 
   */
  getNode(e){
    console.log(e.detail,"index.js_getNode")
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