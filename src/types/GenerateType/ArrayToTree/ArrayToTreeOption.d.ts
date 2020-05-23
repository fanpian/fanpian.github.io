/**
 * 配置项
 */
export interface Options {
    /** 数据源的主键 */
    idFrom: string;
    /** 导出数据的主键 */
    idTo: string;
    /** 数据源表示数据名称字段 */
    labelFrom: string;
    /** 导出数据名称字段 */
    labelTo: string;
    /** 导出数据子节点字段 */
    childTo: string;
    /** 数据源父节点主键 */
    parentFrom: string;
    /** 导出数据父节点主键 */
    parentTo: string;
    /** 在导出数据时,是否删除空的子节点字段 */
    deleteEmptyChildrenAttr: boolean;
    /** 删除指定的节点.删除父节点后，子节点因没有父节点，将无法导出.(这里记录的是主键值) */
    deleteNodes: Array<any>;
    /** 标记哪些节点需要禁用 */
    disabledNodes: DisabledNode[];
    /**
     * 根节点的父级主键值,默认值是[undefined, null, 0];
     * 当父节点的值是其中一个，那么这个节点为根节点
     */
    rootParentVal: Array<any>;
}
/**
 * 标识禁用节点接口
 */
export interface DisabledNode {
    /**
     * 需要禁用的主键
     */
    key: string | number | any;
    /**
     * 指定禁用的字段名称
     */
    fieldName: string;
    /**
     * 指定禁用的字段值
     */
    fieldVaule: any;
}
export declare class DefaultOption implements Options {
    /** 数据源的主键 */
    idFrom: string;
    /** 导出数据的主键 */
    idTo: string;
    /** 数据源表示数据名称字段 */
    labelFrom: string;
    /** 导出数据名称字段 */
    labelTo: string;
    /** 导出数据子节点字段 */
    childTo: string;
    /** 数据源父节点主键 */
    parentFrom: string;
    /** 导出数据父节点主键 */
    parentTo: string;
    /** 在导出数据时,是否删除空的子节点字段 */
    deleteEmptyChildrenAttr: boolean;
    /** 删除指定的节点.删除父节点后，子节点因没有父节点，将无法导出 */
    deleteNodes: string[];
    /** 标记哪些节点需要禁用 */
    disabledNodes: DisabledNode[];
    /**
     * 根节点的父级主键值,默认值是[undefined, null, 0];
     * 当父节点的值是其中一个，那么这个节点为根节点
     */
    rootParentVal: (number | null | undefined)[];
}
