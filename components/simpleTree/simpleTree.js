// tree.js
const app = getApp()
Component({
  properties: {
    treeData: { //需要展示的树
      type: Array,
      value: [],
    },
    options: {
      type: Object,
      value: {
        clickActive: true, //点击某一个节点,会显示点击的印记
        clickActiveColor: '#AAAAAA',
        clickRadio: false, //默认是false,radio直译为收音机,如果为true,意味着不能有多个root节点处于展开状态,类似于排他思想
        iconConfig: { //左侧图标配置
          type: '1', //0代表服务器模式展示图标;1代表本地静态资源展示图标
          icon1: '/images/加号.png', //初始状态
          icon2: "/images/减号.png", //点击状态
          iconSize: '16' //图标的长,宽都是16px
        }
      }
    },
    key: { //唯一确定一个对象,例如ATID,BranchId,UserId等等
      type: String,
      value: ''
    },
    fatherId: { //指向父亲的字符串,例如"FatherID"等等
      type: String,
      value: '',
    },
    titleName: { //节点展示的名称
      type: String,
      value: ''
    }

  },
  attached() {

  },
  data: {

  },

  methods: {

    /**
     * 得到当前node的祖先数组(全级)
     * 按照id递增的顺序排列
     * @param {*} treeData 树
     * @param {*} item 树的一片叶子
     */
    getAncestors(treeData, item) {
      let ancestors = [];
      let parent = this.getParent(treeData, item);
      while (parent) {
        ancestors.push(parent);
        parent = this.getParent(treeData, parent);
      }
      return ancestors.reverse();
    },
    /**
     * 找到当前node的父亲
     * @param {*} treeData 
     * @param {*} item 
     */
    getParent(treeData, item) {
      for (let i = 0; i < treeData.length; i++) {
        const parent = treeData[i];
        if (parent.children && parent.children.find(child => child[this.data.key] === item[this.data.key])) {
          return parent;
        }
        if (parent.children) {
          const grandParent = this.getParent(parent.children, item);
          if (grandParent) {
            return grandParent;
          }
        }
      }
      return null;
    },
    /**
     * 从treeData找到这个node,其中ATID作为元素的唯一标识id;在treeData找到这个node后,
     * 设置treeData[i].isClick=true;并且treeData[i]的父亲,treeData[i]父亲的父亲,
     * 都要加一个expend=true,表示元素展开的意思.
     * @param {*} treeData 
     * @param {*} node 
     */
    setIsClickTrue(treeData, node, originTree) {
      for (let i = 0; i < treeData.length; i++) {
        const item = treeData[i];
        if (item[this.data.key] === node[this.data.key]) { // 找到目标元素
          this.data.options.clickActive ? item.isClick = true : ''
          /**
           * 然后看当前节点是不是root父节点,如果clickRadio为true的话,意味着root父节点
           * 不能有多个处于展开状态;
           * 如果当前节点hasFather为true,不是root,就不理
           */
          item.hasFather ? "" : (this.data.options.clickRadio ? this.collapsedAllNode(treeData, item) : '')
          item.expanded = !item.expanded
          // 依次设置祖先元素的expend属性
          let parent = this.getParent(originTree, item);
          while (parent) {
            parent.expanded = true;
            parent = this.getParent(treeData, parent);
          }
          return;
        }
        if (item.children) {
          this.setIsClickTrue(item.children, node, treeData); // 递归遍历子节点
        }
      }
    },
    /**
     * 把treeData的isClick属性设为false,如果没有isClick属性就跳过
     * @param {*} treeData 
     */
    resetIsClick(treeData) {
      // console.log(treeData, "resetIsClick")
      for (let i = 0; i < treeData.length; i++) {
        let node = treeData[i];
        if (node.hasOwnProperty('isClick')) {
          node.isClick = false;
        }
        if (Array.isArray(node.children) && node.children.length > 0) {
          this.resetIsClick(node.children);
        }
      }
    },
    /**
     * 点击哪个节点,还需要保留被点击节点的印记(需要排他)
     * @param {*} node 
     */
    addClickSign(node) {
      let treeData = this.data.treeData //组件当前的业务树
      /**重置isClick */
      this.resetIsClick(treeData)
      /**点击某个click */
      this.setIsClickTrue(treeData, node, treeData)
      this.setData({
        treeData
      })
    },
    /**
     * 点击儿子node节点触发的函数
     * @param {*} e 
     */
    handleNode(e) {
      let node = e.detail
      this.addClickSign(node) //标记点击引号
      if (node.hasFather) {
        let ancestors = this.getAncestors(app.globalData.treeList, node)
        node.ancestors = ancestors
        this.triggerEvent('getnode', node);
        return
      }
    },
    /**
     * 点击父级node节点触发的函数
     * @param {*} e 
     */
    getInfo(e) {
      let node = e.mark.node //被点击的节点
      if (node.hasFather) {
        this.triggerEvent('getnode', node);
        return
      }
      this.addClickSign(node) //标记点击引号
      this.triggerEvent('getnode', node);

    },
    /**
     * 仅仅点击箭头触发的函数
     * @param {*} e 
     */
    toggleNode(e) {
      let treeData = this.data.treeData
      const node = e.mark.node;
      this.expandNode(treeData, node);
    },
    /**
     * 收缩所有的节点
     * @param {*} treeData 
     * @param {*} node 
     */
    collapsedAllNode(treeData, node) {
      for (let i = 0; i < treeData.length; i++) {
        node[this.data.key] == treeData[i][this.data.key] ? '' : treeData[i].expanded = false //除了被点本身外,其他的都收缩
        if (treeData[i].children) { //如果当前节点,有孩子还得继续往下
          this.collapsedAllNode(treeData[i].children, node)
        }
      }

    },
    /**
     * 找到被点击的项,决定是否展开
     * @param {*} treeData 树
     * @param {*} node 被点击的项
     */
    expandNode(treeData, node) {
      for (let i = 0; i < treeData.length; i++) {
        if (treeData[i][this.data.key] == node[this.data.key]) {
          treeData[i].expanded = !treeData[i].expanded
          this.setData({
            treeData: treeData
          })
          break;
        }
        if (treeData[i].children) { //有孩子
          this.expandNode(treeData[i].children, node)
        } else {

        }
      }
    },
    /**
     * 由父组件直接调用子组件这个方法
     * @param {*} value 文本
     * @param {*} treeDataCopy 父组件传来的tree副本
     */
    _businessTypeSearch(value, treeDataCopy) {
      let resultTreeData = []
      this.searchValue(value, treeDataCopy, resultTreeData)
      let resultTree = this.toTree(resultTreeData)
      this.setData({
        treeData: resultTree
      })
      /**如果resultTree为空数组,通知父组件展示空信息,不为空就不展示 */
      this.triggerEvent("getbt", resultTree.length)
    },
    /**
     * 关键字搜索
     * @param {*} value 
     * @param {*} treeDataCopy 
     * @param {*} resultTreeData 
     */
    searchValue(value, treeDataCopy, resultTreeData, father) {
      treeDataCopy.forEach(item => {
        if (item[this.data.titleName].includes(value)) {
          value ? item.active = true : '' //激活关键字,空串除外
          value ? item.expanded = !item.expanded : '' //空串除外
          value ? (father ? father.expanded = true : '') : '' //一个父亲对应多个儿子
          resultTreeData.push(item)

          father ? (father.children ? father.children = undefined : '') : '' //把children属性去掉,后面把结果生成树
          father ? (resultTreeData.some(item => item[this.data.key] === father[this.data.key]) ? '' : resultTreeData.push(father)) : ''
        }
        if (item.children) { //有孩子   
          this.searchValue(value, item.children, resultTreeData, item)
        }
      })
    },
    toTree(data) {
      const map = new Map();
      const result = [];
      data.forEach((node) => {
        map.set(node[this.data.key], node);
        node.hasFather = true;
      });
      data.forEach((node) => {
        const parent = map.get(node[this.data.fatherId]);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(node);
        } else {
          node.hasFather = false;
          result.push(node);
        }
      });

      return result;
    },
  },
});