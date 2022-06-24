var assert = require("assert");

const BlocksService = require("./mockups/BlocksService");
const main = require("../main");
const UNORDERED = [
  "Lunes", // El primero debe estar en pocision correcta
  "Jueves",
  "Domingo",
  "Martes",
  "Sabado",
  "Miercoles",
  "Viernes",
];

const ORDERED = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

describe("Check", () => {
  it("order blocks correctly", async () => {
    const mockService = new BlocksService(UNORDERED, ORDERED);

    const { check } = main(mockService);

    const ordered = await check(UNORDERED, "SOME_TOKEN");

    assert.equal(JSON.stringify(ordered), JSON.stringify(ORDERED));
  });
});
