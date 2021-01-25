const { data } = require("../data");
const count = require("../lib/count");

test("Count should transform data by adding children length", () => {
  expect(data[0].name).toBe("Dillauti");
  expect(data[0].people[0].name).toBe("Winifred Graham");

  const results = count(data);

  expect(results[0].name).toBe("Dillauti[5]");
  expect(results[0].people[0].name).toBe("Winifred Graham[6]");
});
