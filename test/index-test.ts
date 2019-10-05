import { informationContent, entropy } from '../src/index';

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
    /* eslint-disable-next-line */
    const choices = { A: 1/3, B: 1/2, C: 1/12, D: 1/12 };
    const expected = 1.626;
    
    expect(entropy(choices)).to.closeTo(expected, approx);
  });

});