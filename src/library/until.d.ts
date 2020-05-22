import { DynamicIndex } from '@/types';
declare const until: {
    arrayToTree: (source: any[], option: import("../types/ArrayToTree/ArrayToTreeOption").Options) => any[];
    getParams: (url: string) => DynamicIndex;
    getParamByName: (url: string, name: string) => any;
    base64ToUint8Array: (source: string, subMark?: boolean) => Uint8Array;
    byteArrayToBase64: (source: ArrayBuffer) => string;
};
export default until;
