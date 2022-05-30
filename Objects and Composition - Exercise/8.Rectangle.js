function rectangle(width, height, color) {
  class Rectangle {
    constructor(width1, height1, color1) {
      this.width = width1;
      this.height = height1;
      this.color = color1;
    }
    calcArea() {
      return this.width * this.height;
    }
  }
  return new Rectangle(width, height, color[0].toUpperCase() + color.slice(1));
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
