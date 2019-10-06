import R from 'ramda';
import { Integer } from './integer';

/**
 * Returns 0 if two bits are equals, 1 otherwise
 * @param x 
 * @param y 
 */
const bitwiseEquivalence = (x: boolean, y: boolean) : number => x === y ? 0 : 1;

/**
 * Returns the bits of information content about N equally-probabile
 * choice (each with probability 1/N) after received data the narrows
 * the number of choices down to M
 * @param n equiprobable choices
 * @param m narrowed choices
 */
export function informationContent(n: number, m: number): number {
  return Math.log2(n / m);
}

/**
 * Returns the average amount of information in bits
 * @param data { choice_i: probability_i }
 */
export function entropy(data: Record<string, number>): number {
  /**
   * functional equivalent of:
   * let sum = 0;
   * for (const p of Object.values(data)) {
   *   sum += p * Math.log2(1/p)
   * }
   * return sum;
  **/
  return Object.values(data).reduce((sum, p) => sum + p * Math.log2(1/p), 0);
}

/**
 * Returns the Hamming distance between two numbers;
 * @param int1 
 * @param int2 
 */
export function hamming(int1: Integer, int2: Integer): number {
  return R.sum(R.zipWith(bitwiseEquivalence, int1.toBool(), int2.toBool()));
}
