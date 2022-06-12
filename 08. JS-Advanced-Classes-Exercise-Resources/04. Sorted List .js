class List {
  constructor(array) {
    this.array = [];
    this.size = this.array.length;
  }
  add(element) {
    this.array.push(element);
    this.array.sort((a, b) => a - b);
    this.size++;
    return new List();
  }
  remove(index) {
    if (index >= 0 && index < this.array.length) {
      this.array.splice(index, 1);
      this.array.sort((a, b) => a - b);
      this.size--;
      return new List();
    } else {
      throw new Error("Invalid index");
    }
  }
  get(index) {
    if (index >= 0 && index < this.array.length) {
      this.array.sort((a, b) => a - b);
      return this.array[index];
    } else {
      throw new Error("Invalid index");
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
