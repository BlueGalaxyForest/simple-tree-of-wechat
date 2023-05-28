let lawBusinessData = [ //假如这是后端返回的数据
  {
    "ATID": 93,
    "TypeName": "《常年法律顾问合同》（0）",
    "FatherID": 25,
    "isParent": null
  },
  {
    "ATID": 95,
    "TypeName": "《利益冲突同意书》（0）",
    "FatherID": 25,
    "isParent": null
  },
  {
    "ATID": 87,
    "TypeName": "《利益冲突同意书》（0）",
    "FatherID": 28,
    "isParent": null
  },
  {
    "ATID": 90,
    "TypeName": "《民事授权委托书》（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 79,
    "TypeName": "《民事委托合同》（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 80,
    "TypeName": "《民事委托合同》补充协议（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 81,
    "TypeName": "《民事委托合同》解除协议（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 83,
    "TypeName": "《民事委托合同》委托人变更协议（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 82,
    "TypeName": "《民事委托合同》转委托协议（0）",
    "FatherID": 74,
    "isParent": null
  },
  {
    "ATID": 92,
    "TypeName": "《刑事授权委托书》（0）",
    "FatherID": 28,
    "isParent": null
  },
  {
    "ATID": 86,
    "TypeName": "《刑事委托合同》（0）",
    "FatherID": 28,
    "isParent": null
  },
  {
    "ATID": 94,
    "TypeName": "《专项法律顾问合同》（0）",
    "FatherID": 25,
    "isParent": null
  },
  {
    "ATID": 42,
    "TypeName": "办理记录范本（1）",
    "FatherID": 32,
    "isParent": null
  },
  {
    "ATID": 60,
    "TypeName": "变更法律意见书（1）",
    "FatherID": 41,
    "isParent": null
  },
  {
    "ATID": 43,
    "TypeName": "材料清单（1）",
    "FatherID": 32,
    "isParent": null
  },
  {
    "ATID": 52,
    "TypeName": "财产份额转让协议书（公证处参考格式，适用于合伙企业）（1）",
    "FatherID": 31,
    "isParent": null
  },
  {
    "ATID": 57,
    "TypeName": "代理专利申请投标文件范例（1）",
    "FatherID": 29,
    "isParent": null
  },
  {
    "ATID": 30,
    "TypeName": "档案事务（4）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 59,
    "TypeName": "登记法律意见书（3）",
    "FatherID": 41,
    "isParent": null
  },
  {
    "ATID": 25,
    "TypeName": "法律顾问（2）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 41,
    "TypeName": "法律意见书范本（4）",
    "FatherID": 32,
    "isParent": true
  },
  {
    "ATID": 103,
    "TypeName": "非诉讼业务（4）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 54,
    "TypeName": "各类专利委托合同（2）",
    "FatherID": 29,
    "isParent": null
  },
  {
    "ATID": 53,
    "TypeName": "各类转让协议书范本（3）",
    "FatherID": 31,
    "isParent": null
  },
  {
    "ATID": 56,
    "TypeName": "各项专利官费（1）",
    "FatherID": 29,
    "isParent": null
  },
  {
    "ATID": 102,
    "TypeName": "公函/介绍信模板（3）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 31,
    "TypeName": "公司业务（8）",
    "FatherID": 5,
    "isParent": true
  },
  {
    "ATID": 38,
    "TypeName": "国晖信息资料（8）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 32,
    "TypeName": "基金法律意见书（22）",
    "FatherID": 5,
    "isParent": true
  },
  {
    "ATID": 100,
    "TypeName": "见证业务（1）",
    "FatherID": 103,
    "isParent": null
  },
  {
    "ATID": 96,
    "TypeName": "律师函业务（3）",
    "FatherID": 103,
    "isParent": null
  },
  {
    "ATID": 26,
    "TypeName": "民事诉仲裁/行政诉讼业务（3）",
    "FatherID": 5,
    "isParent": true
  },
  {
    "ATID": 74,
    "TypeName": "民事委托合同（0）",
    "FatherID": 26,
    "isParent": null
  },
  {
    "ATID": 39,
    "TypeName": "内控制度（14）",
    "FatherID": 32,
    "isParent": null
  },
  {
    "ATID": 49,
    "TypeName": "破产清算业务工作标准指引（1）",
    "FatherID": 31,
    "isParent": null
  },
  {
    "ATID": 101,
    "TypeName": "诉讼文书模板（2）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 50,
    "TypeName": "香港上市公司章程必备条款（1）",
    "FatherID": 31,
    "isParent": null
  },
  {
    "ATID": 28,
    "TypeName": "刑事诉讼业务（5）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 51,
    "TypeName": "有限责任公司股东会决议参考样式（1）",
    "FatherID": 31,
    "isParent": null
  },
  {
    "ATID": 37,
    "TypeName": "招标/投标业务（7）",
    "FatherID": 5,
    "isParent": null
  },
  {
    "ATID": 29,
    "TypeName": "知识产权申请业务（7）",
    "FatherID": 5,
    "isParent": true
  },
  {
    "ATID": 55,
    "TypeName": "专利授权委托书（2）",
    "FatherID": 29,
    "isParent": null
  },
  {
    "ATID": 40,
    "TypeName": "专项顾问合同（1）",
    "FatherID": 32,
    "isParent": null
  },
  {
    "ATID": 34,
    "TypeName": "综合（11）",
    "FatherID": 5,
    "isParent": null
  }
]


export default lawBusinessData;
