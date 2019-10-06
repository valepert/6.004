import { Sign, Integer } from '../src/integer';

import { strict as assert } from 'assert';

describe('Integer from binary string', (): void => {
  it('011 = 3', (): void => {
    const result = Integer.fromBinary("011");
    const expected = new Integer(3, Sign.None); // eslint-disable-line

    assert.deepEqual(result, expected);
    assert.strictEqual(result.isSigned(), false);
  });

  it('1000 = 8', (): void => {
    const result = Integer.fromBinary("1000");
    const expected = new Integer(8, Sign.None); // eslint-disable-line

    assert.deepEqual(result, expected);
    assert.strictEqual(result.isSigned(), false);
  });

  it('00101010 = 42', (): void => {
    const result = Integer.fromBinary("00101010");
    const expected = new Integer(42, Sign.None); // eslint-disable-line

    assert.deepEqual(result, expected);
    assert.strictEqual(result.isSigned(), false);
  });
});

describe('Signed integer from string', (): void => {
  it('011111010000 = 2000', (): void => {
    const signed = "011111010000";
    const result = Integer.fromBinary(signed, true);
    const expected = new Integer(2000, Sign.Positive); // eslint-disable-line

    assert.deepEqual(result, expected);
    assert.strictEqual(result.isSigned(), true);
    assert.strictEqual(result.toBinary(), signed);
  });

  it('111111010000 = -2000', (): void => {
    const signed = "111111010000";
    const result = Integer.fromBinary(signed, true);
    const expected = new Integer(2000, Sign.Negative); // eslint-disable-line

    assert.deepEqual(result, expected);
    assert.strictEqual(result.isSigned(), true);
    assert.strictEqual(result.toBinary(), signed);
  });
});

describe('Hexadecimal notation', (): void => {
  it('42 = 0x2A', (): void => {
    const integer = new Integer(42); // eslint-disable-line
    const result = integer.toHex();

    assert.strictEqual(result, "2a");
  });

  it('2000 = 0x7D0', (): void => {
    const integer = new Integer(2000); // eslint-disable-line
    const result = integer.toHex();

    assert.strictEqual(result, "7d0");
  });
});
