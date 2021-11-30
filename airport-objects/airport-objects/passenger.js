const Person = require("./person");

class Passenger extends Person {
  constructor(name, passportNumber, seatNumber) {
    super(name);
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }

  callAttendant() {
    console.log("Excuse me");
  }
}

module.exports = Passenger;
