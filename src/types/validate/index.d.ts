declare const validate: {
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
export default validate;
