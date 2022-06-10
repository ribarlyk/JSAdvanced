const { expect } = require("chai");
const { lookupChar } = require("./3.Char Lookup");

describe("Unit Test lookupChar", () => {
  it("test param isString", () => {
    expect(lookupChar(1, 2)).to.be.undefined;
  });
  it("test param2 isNumber", () => {
    expect(lookupChar(1, "asd")).to.be.undefined;
  });
  it("test both params to be strings", () => {
    expect(lookupChar("asd", "asd")).to.be.undefined;
  });
  it("test index out of bound", () => {
    expect(lookupChar("asd", 1.12)).to.be.undefined
  });

  it("test index out of bound", () => {
    expect(lookupChar("asd", 123312)).to.equal("Incorrect index");
  });
  it("test index out of bound", () => {
    expect(lookupChar("asd", -4)).to.equal("Incorrect index");
  });
  it("test index out of bound", () => {
    expect(lookupChar("asd", 3)).to.equal("Incorrect index");
  });
  it("test index to equal char", () => {
    expect(lookupChar("asd", 0)).to.equal("a");
  });
  it("test index to equal char", () => {
    expect(lookupChar("asd", 1)).to.equal("s");
  });
});
