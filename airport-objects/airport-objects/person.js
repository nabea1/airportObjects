class Person {
  constructor(name, bags) {
    this.name = name;
    this.bags = [];
  }
  addBag(bag) {
    this.bags.push(bag);
  }
}

module.exports = Person;
