const {expect} = require("chai");
const isSymmetric = require("./symmetric");

describe("HelloError", () => {
  it("expect to be symmetric numeric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("expect to be non-symmeric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it("HelloTest4", () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it("HelloTest3", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });
  it("expect to be symmetric string array", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });
  it("HelloTest1", () => {
    expect(isSymmetric("abba")).to.be.false;
  });
  
  it("HelloTest2", () => {
    expect(isSymmetric([1, 3, "3",1])).to.be.false;
  });
});
