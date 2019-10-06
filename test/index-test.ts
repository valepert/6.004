import { informationContent, entropy, hamming } from '../src/index';
import { Integer } from '../src/integer';

import { expect } from 'chai';

const approx = 0.01;

describe('Information Content', (): void => {
  it('information in one coin flip', (): void => {
    expect(informationContent(2, 1)).to.equal(1);
  });

  it('cart drawn from fresh deck is a heart', (): void => {
    const cards = 52;
    const hearts = 13;

    expect(informationContent(cards, hearts)).to.equal(2);
  });

  it('roll of two dice', (): void => {
    const combinations = 36;
    const expected = 5.17;

    expect(informationContent(combinations, 1)).to.closeTo(expected, approx);
  });
});

describe('Entropy', (): void => {
  it('entropy function', (): void => {
    const choices = { A: 1/3, B: 1/2, C: 1/12, D: 1/12 }; // eslint-disable-line
    const expected = 1.626;
    
    expect(entropy(choices)).to.closeTo(expected, approx);
  });
});

describe('Hamming', (): void => {
  it('hamming distance of sequences', (): void => {
    const s1 = Integer.fromBinary("0110010");
    const s2 = Integer.fromBinary("0100110");

    expect(hamming(s1, s2)).to.equal(2);
  });

  it('hamming distance of same number', (): void => {
    const answer = new Integer(42); // eslint-disable-line

    expect(hamming(answer, answer)).to.equal(0);
  });
});
