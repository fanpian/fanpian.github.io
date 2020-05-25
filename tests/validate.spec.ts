import { expect } from 'chai';
import phone from '../src/library/validate/phone';

describe('验证方法', () => {
  it('手机号码验证', () => {
    const result = phone.validate('17783006783');
    expect(true, '请输入有效的手机号码').eq(result);
  });
});
