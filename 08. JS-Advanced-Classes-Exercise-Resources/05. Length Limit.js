class Stringer {
  constructor(string, length) {
    (this.innerString = string), (this.innerLength = length);
  }
  increase(value) {
    this.innerLength += value;
  }
  decrease(value) {
    if (this.innerLength - value <= 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= value;
    }
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      let differenceInLength = this.innerString.length - this.innerLength;

      let arr = Array.from(this.innerString);
      arr.reverse().splice(0, differenceInLength, "...");
      return arr.reverse().join("");
    } else {
      return this.innerString;
    }
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
