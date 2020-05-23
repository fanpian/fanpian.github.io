declare const _default: {
    until: {
        arrayToTree: (source: any[], option: import("./GenerateType/ArrayToTree/ArrayToTreeOption").Options) => any[];
        getParams: (url: string) => import("./GenerateType").DynamicIndex;
        getParamByName: (url: string, name: string) => any;
        base64ToUint8Array: (source: string, subMark?: boolean) => Uint8Array;
        byteArrayToBase64: (source: ArrayBuffer) => string;
    };
    validate: {
        cardNo: {
            validate: (value: string) => boolean;
        };
        fixedPhone: {
            validate: (value: string) => boolean;
        };
        idCard: {
            validate: (value: string) => boolean;
        };
        phone: {
            validate: (value: string, regExpType?: string, customRegExp?: RegExp | undefined) => boolean;
        };
    };
};
export default _default;
