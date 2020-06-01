import { expect } from 'chai';
import ip from '../../src/library/validate/ip';

describe('IP地址验证', () => {
  it('IPV4验证', () => {
    const result = ip.validate('192.168.7.110', 2);
    expect(true, '请输入正确的IP地址').eq(result);
  });
});
