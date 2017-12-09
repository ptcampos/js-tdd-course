/**
 * Desafio FizzBuzz
 */
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('should return `Fizz` if number is 9', () => {
    expect(FizzBuzz(9)).to.be.equal('Fizz');
  });
  it('should return `Buzz` if number is 20', () => {
    expect(FizzBuzz(20)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` if number is 15', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return `8` if number is 8', () => {
    expect(FizzBuzz(8)).to.be.equal(8);
  });
  it('should return `0` if number is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
