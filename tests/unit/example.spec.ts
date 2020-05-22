import { expect } from 'chai';

import until from '@/library/until';

const httpString =
  'https: //zhidao.baidu.com/question/1768422895052400180.html?fr=iks&word=slice&ie=gbk';

describe('解析Url参数为对象', () => {
  const source = {
    fr: 'iks',
    word: 'slice',
    ie: 'gbk'
  };
  const result = until.getParams(httpString);
  it('解析属性fr', () => {
    expect(result.fr, '属性:fr').equal(source.fr);
  });
  it('解析属性word', () => {
    expect(result.word, '属性:word').equal(source.word);
  });
  it('解析属性ie', () => {
    expect(result.ie, '属性:ie').equal(source.ie);
  });

  it('解析属性te', () => {
    expect(result.te, '属性:te').equal(source.ie);
  });
});
