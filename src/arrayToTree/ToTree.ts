import { extend } from 'lodash';
import { IOption } from './IOption';
import { DefaultOption } from './DefaultOption';

/**
 * 将原数组的字段扩展成Tree必须要的字段
 * @param {Array} source 数据源
 * @param {Object} option 配置对象
 */
const extendArray = (source: Array<any>, option: IOption) => {
  const filterDelete = source.filter(item => {
    return option.deleteNodes.some(function some(nodeKey) {
      return nodeKey !== item[option.idFrom];
    });
  });

  return filterDelete.map(item => {
    const target = extend({}, item);
    target[option.idTo] = item[option.idFrom];
    target[option.labelTo] = item[option.labelFrom];
    target[option.parentTo] = item[option.parentFrom];
    target[option.childTo] = [];
    const disabledItem = option.disabledNodes.find(function find(node) {
      return node.key === target[option.idTo];
    });
    if (disabledItem) {
      target[disabledItem.fieldName] = disabledItem.fieldVaule;
    }
    return target;
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
  option: IOption
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
 * @param source 源数据
 * @param option 配置项
 */
const arrayToTree = (source: Array<any>, option: IOption) => {
  const defaultOption = new DefaultOption();
  const options = extend(defaultOption, option);

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
