class Rectangle {
  constructor(width, height, color) {
    (this.height = height), (this.width = width), (this.color = color);
  }
  calcArea() {
    return this.height * this.width;
  }
}
let rect = new Rectangle(30, 35, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
