const { expect } = require("chai");
const { rgbToHexColor } = require("./rgbtohex");

describe("rgb color testing", () => {
  it("to return black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
  it("to return white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("to miss  params", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("to miss  params", () => {
    expect(rgbToHexColor(0)).to.be.undefined;
  });

  it("to miss  params", () => {
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("to miss  params", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
  });
  it("out of upper bound", () => {
    expect(rgbToHexColor(2222, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 299)).to.be.undefined;
    expect(rgbToHexColor(0, 2222, 0)).to.be.undefined;
  });

  it("out of lower bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });
});
