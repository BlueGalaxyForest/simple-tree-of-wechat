// components/iconfont/iconfont.js
import {
  baseUrl
} from '../../utils/config'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    baseUrl: { // 图片的base路径,用于服务器的显示
      type: String
    },
    src: { // 图片的url,用于服务器或者静态图片的显示
      type: String,
    },
    type: {
      type: String,
      value: 0, //0代表服务器形式的图片;1代表小程序的静态图片
    },
    size: { // 图片的尺寸
      type: String,
      value: '15'
    },
    pt: { // 设置padding-top的值
      type: String,
      value: "0"
    },
    mr: { // 设置margin-right的值
      type: String,
      value: "0"
    }
  },
  attached() {
    if (this.data.type == 0 || this.data.type == '') {
      this.setData({
        url: baseUrl + this.data.src
      })
      return
    }

    if (this.data.type == 1) {
      this.setData({
        url: this.data.src
      })
    }

  
  },
  /**
   * 组件的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})