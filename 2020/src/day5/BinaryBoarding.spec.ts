import { traveseBinary } from './BinaryBoarding';

describe('traveseBinary', () => {
  test('Ex 1', () => {
    const res = traveseBinary(0, 127, 'FBFBBFF');
    expect(res).toBe(44);
  });
  test('Ex 2', () => {
    const res = traveseBinary(0, 7, 'RLR');
    expect(res).toBe(5);
  });
});
