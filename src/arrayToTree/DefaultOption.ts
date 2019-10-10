import { IOption, DisabledNode } from './IOption';
/**
 * 默认配置项类
 */
export class DefaultOption implements IOption {
  /** 数据源的主键 */
  idFrom = 'id';

  /** 导出数据的主键 */
  idTo = 'id';

  /** 数据源表示数据名称字段 */
  labelFrom = 'name';

  /** 导出数据名称字段 */
  labelTo = 'name';

  /** 导出数据子节点字段 */
  childTo = 'children';

  /** 数据源父节点主键 */
  parentFrom = 'parentId';

  /** 导出数据父节点主键 */
  parentTo = 'parentId';

  /** 在导出数据时,是否删除空的子节点字段 */
  deleteEmptyChildrenAttr = false;

  /** 删除指定的节点.删除父节点后，子节点因没有父节点，将无法导出 */
  deleteNodes = new Array<string>();

  /** 标记哪些节点需要禁用 */
  disabledNodes = new Array<DisabledNode>();

  /**
   * 根节点的父级主键值,默认值是[undefined, null, 0];
   * 当父节点的值是其中一个，那么这个节点为根节点
   */
  rootParentVal = [undefined, null, 0];
}
