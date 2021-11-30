const Airport = require("./airport");
const Plane = require("./plane");
const Bag = require("./bag");
const Passenger = require("./passenger");
const Person = require("./person");
const { JestHook } = require("jest-watcher");
jest.setTimeout(10000);

describe("Airport object", () => {
  const testAirport = new Airport("DFW");

  const testPlane = new Plane("jumbo jet", "912");

  const testPerson = new Person("Damon", [6]);

  const testBag = new Bag(55);

  test("airport has a name", () => {
    expect(testAirport.name).toBe("DFW");
  });

  test("airport has planes", () => {
    expect(Array.isArray(testAirport.planes)).toBe(true);
  });

  test("airport can add planes", () => {
    testAirport.addPlane(testPlane);
    expect(testAirport.planes.length).toBe(1);
  });

  /*test("airport can have planes with passengers with bags", () => {
    testPerson.addBag(testBag);
    testPlane.addPassenger(testPerson);
    testAirport.addPlane(testPlane);
    expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(55);
  }); */
  /*test("airports have a country", (done) => {
    //run getInfo method
    testAirport.getInfo((err, info) => {
      //log this airport info to console
      console.log(info);
      //expect error to be null
      expect(err).toBeNull();
      //expect the airport country to be FR
      expect(info.country).toEqual("FR");
      //end asynchrounous test
      done();
    });
  });
});
