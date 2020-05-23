import { Options } from '@/GenerateType/ArrayToTree/ArrayToTreeOption';
/**
 * 将数组转换成Tree节点
 * @param source 源数据
 * @param option 配置项
 */
declare const arrayToTree: (source: Array<any>, option: Options) => any[];
/**
 * 将Array转换成ArrayTree结构
 */
export default arrayToTree;
