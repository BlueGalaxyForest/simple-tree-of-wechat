# 项目背景

> 层级树是项目开发比较常见的问题,后端往往会返回一个具有层级关系的数组,然后需要前端把这个层级关系的数组展示出来.本项目主要是做这方面相关的工作.
>
> ```js
> const tree = [
>   {
>     id: 1,
>     name: 'Node 1',
>     children: [
>       {
>         id: 2,
>         name: 'Node 1.1',
>         children: [
>           {
>             id: 3,
>             name: 'Node 1.1.1',
>             children: []
>           },
>           {
>             id: 4,
>             name: 'Node 1.1.2',
>             children: []
>           }
>         ]
>       },
>       {
>         id: 5,
>         name: 'Node 1.2',
>         children: []
>       }
>     ]
>   },
>   {
>     id: 6,
>     name: 'Node 2',
>     children: []
>   }
> ];
> ```
>
> 

# 项目截图:

> ![image-20230612162148792](C:\Users\Administrator\Desktop\GitHub项目\simple-tree-of-wechat\README.assets\image-20230612162148792.png)

# 项目技术

> 微信小程序

# 使用说明

## 1.拿到后端返回的层级数组(原始数据)

![image-20230612162425416](C:\Users\Administrator\Desktop\GitHub项目\simple-tree-of-wechat\README.assets\image-20230612162425416.png)

## 2.调用utils里面的toTreeAny()方法把原始数据变为一颗层级树

![image-20230612162649830](C:\Users\Administrator\Desktop\GitHub项目\simple-tree-of-wechat\README.assets\image-20230612162649830.png)

## 3.在index.js引入simpleTree组件

```json
{
  "usingComponents": {
    "simpleTree":"/components/simpleTree/simpleTree"
  }
}
```

## 4.在index.js里面配置simpleTree的一些相关信息

![image-20230612162946551](C:\Users\Administrator\Desktop\GitHub项目\simple-tree-of-wechat\README.assets\image-20230612162946551.png)

## 5. 在index.wxml直接引入simpleTree组件,然后使用传给simpleTree一些必要参数

![image-20230612163124819](C:\Users\Administrator\Desktop\GitHub项目\simple-tree-of-wechat\README.assets\image-20230612163124819.png)

# 相关代码说明

## 1.utils的toTreeAny()方法

| data         | 后端返回的元素数据,每个对象有有指针指向他的父级元素 |
| ------------ | --------------------------------------------------- |
| **key**      | **每个对象都会有一个唯一的标识id**                  |
| **fatherId** | **每一个对象都有一个字段,指向父级**                 |



```js
 /**
 * 任何一个有关系数组,简单配置后都能变成树
 * @param {Array} data 具有指针关系的对象数组
 * @param {String} key 唯一id,例如BranchId,ATID
 * @param {String} fatherId 父级id,例如FatherID
 */
function toTreeAny(data, key, fatherId) {
  const map = new Map();
  const result = [];
  data.forEach((node) => {
    map.set(node[key], node);
    node.hasFather = true;
  });
  data.forEach((node) => {
    const parent = map.get(node[fatherId]);
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
}
```

## 2.simpleTree组件

**组件属性:**

| 参数      | 说明                                                         | 类型   | 默认值          |
| --------- | ------------------------------------------------------------ | ------ | --------------- |
| treeData  | 经过toTreeAny()方法处理过的层级数组,也就是说每个元素有children和fatherId属性 | Array  | []              |
| options   | 详见options说明                                              | Object | 详见options说明 |
| key       | 每个对象的唯一标识字段,例如"UserId","CardId"等,可以唯一确定一个对象的字符串 | String | ''              |
| fatherId  | 每一个对象找到他的父亲的标识字段,例如"FatherId"等,也是一个字符串 | String | ''              |
| titleName | 对象自身需要展示的文本                                       | String | ''              |



**options属性:**

```js
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
```



## 3.iconfont组件

> iconfont组件是用来设置树左边的图标风格的

| 参数    | 说明                                                         | 类型   | 默认值 |
| ------- | ------------------------------------------------------------ | ------ | ------ |
| baseUrl | 图片的base路径,用于服务器的显示;例如http://www.example.com/images | String | ''     |
| src     | 图片的路径,例如:/images/加号.png 或者 /online/online-icon-02.png | String | ''     |
| type    | 是针对采取哪种风格的src,例如type=0,采取baseUrl+src的风格;type=1,采取src的风格;一般type=0是服务器风格的图片展示,type=1是项目本地图片的展示 | String | 0      |
| size    | 例如size=16,设置图片的宽高为16px                             | String | 16     |
| pt      | 设置padding-top的值                                          | String | 0      |
| mr      | 设置margin-top的值                                           | String | 0      |

