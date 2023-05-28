 /**
 * 任何一个有关系数组,配置后都能变成树
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

module.exports = {
  toTreeAny
}