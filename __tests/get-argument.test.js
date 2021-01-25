const getArgument = require("../lib/get-argument");

test("Should return filter arguments", () => {
  const [param, val] = getArgument("--filter=test");

  expect(param).toBe("--filter");
  expect(val).toBe("test");
});

test("Should return count arguments", () => {
  const [param] = getArgument("--count");

  expect(param).toBe("--count");
});

test("Should throw an error", () => {
  expect(() => {
    getArgument("--badArg");
  }).toThrowError(
    new Error(
      "Argument is required and should be --count or --filter=<your filter>"
    )
  );
});
