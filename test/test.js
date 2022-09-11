// Priscilla Akumu
// Gabriel Ekodo

let chai = require("chai");
let assert = require("chai").assert;
let mocha = require("mocha");
let describe = mocha.describe;
let expect = chai.expect;

chai.should();
let fibonacci = require("./fibonacci");

describe("Test the return values of the Fibonacci method", () => {
  // describe('test the VALID return values of the Fibonacci method', () => {
  //     // let fib;
  //     // beforeEach(() => {
  //     //     fib = new fibonacci();
  //     });
  it("Test 1 should return 0", () => {
    expect(fibonacci(0)).to.eql([0]);
  });

  it("Test 2 should return 0, 1", () => {
    expect(fibonacci(1)).to.eql([0, 1]);
  });

  it("Test 3 should return 0, 1, 1", () => {
    expect(fibonacci(2)).to.eql([0, 1, 1]);
  });

  it("Test 4 should return 0, 1, 1, 2", () => {
    expect(fibonacci(3)).to.eql([0, 1, 1, 2]);
  });

  it("Test 5 should return 0, 1, 1, 2, 3", () => {
    expect(fibonacci(4)).to.eql([0, 1, 1, 2, 3]);
  });

  it("Test 6 should return 0, 1, 1, 2, 3, 5", () => {
    expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5]);
  });

  it("Test 7 should return 0, 1, 1, 2, 3, 5, 8", () => {
    expect(fibonacci(6)).to.eql([0, 1, 1, 2, 3, 5, 8]);
  });

  it("Test 8 should return 0, 1, 1, 2, 3, 5, 8, 13", () => {
    expect(fibonacci(7)).to.eql([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("Test 9 should return 0, 1, 1, 2, 3, 5, 8, 13, 21", () => {
    expect(fibonacci(8)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });

  // it('Test 10 should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
  //     expect(fibonacci(9)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  // });

  // it('Test 11 should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55', () => {
  //     expect(.fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  // });
});
