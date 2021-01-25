const { data } = require("../data");
const filter = require("../lib/filter");

test("Filter should return rows that contain animals correspondig to input", () => {
  expect(data.length).toBe(5);
  expect(data[0].name).toBe("Dillauti");

  const results = filter(data, "ry");

  expect(results.length).toBe(2);
  expect(results[0].name).toBe("Uzuzozne");
});
