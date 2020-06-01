import { Options, DefaultOption } from './ArrayToTreeOption';

/**
 * 将原数组的字段扩展成Tree必须要的字段
 * @param {Array} source 数据源
 * @param {Object} option 配置对象
 */
const extendArray = (source: Array<any>, option: Options) => {
  const filterDelete = source.filter(item => {
    return option.deleteNodes.some(function some(nodeKey) {
      return nodeKey !== item[option.idFrom];
    });
  });

  return filterDelete.map(item => {
    item[option.idTo] = item[option.idFrom];
    item[option.labelTo] = item[option.labelFrom];
    item[option.parentTo] = item[option.parentFrom];
    item[option.childTo] = [];
    const disabledItem = option.disabledNodes.find(function find(node) {
      return node.key === item[option.idTo];
    });
    if (disabledItem) {
      item[disabledItem.fieldName] = disabledItem.fieldVaule;
    }
    return item;
  });
};

/**
 * 将数据源转成具有上下级结构的数组
 * @param {Array} source 数据源
 * @param {Object} parentNode 父节点对象
 * @param {Object} option 配置对象
 */
const toTree = function toTree(
  source: Array<any>,
  parentNode: any,
  option: Options
) {
  const childrens = source.filter(filter => {
    return filter[option.parentTo] === parentNode[option.idTo];
  });

  childrens.map(children => {
    const hasChildren = source.some(item => {
      return item[option.parentTo] === children[option.idTo];
    });
    if (hasChildren) {
      toTree(source, children, option);
    } else {
      if (option.deleteEmptyChildrenAttr) {
        delete children[option.childTo];
      }
    }
    parentNode[option.childTo].push(children);
  });
};

/**
 * 将数组转换成Tree节点
 * 因为该操作会改变对象属性，请务必在传参前进行深度拷贝
 * @param source 源数据
 * @param option 配置项
 */
const arrayToTree = (source: Array<any>, option: Options) => {
  const defaultOption = new DefaultOption();
  const options = Object.assign({}, defaultOption, option);

  const node = extendArray(source, options);
  return node
    .filter(filter => {
      return options.rootParentVal.includes(filter[options.parentTo]);
    })
    .map(parentNode => {
      toTree(node, parentNode, options);
      return parentNode;
    });
};

/**
 * 将Array转换成ArrayTree结构
 */
export default arrayToTree;
