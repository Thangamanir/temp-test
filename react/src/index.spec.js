let greetings = require("./index");

describe("Greeting", () => {
  it("knows that hello returns Hi", () => {
    expect(greetings.hello()).toBe("Hi");
  });
});
