const { data } = require("./data");
const getArgument = require("./lib/get-argument");
const count = require("./lib/count");
const filter = require("./lib/filter");

const [arg] = process.argv.slice(2);
const [param, val] = getArgument(arg);

switch (param) {
  case "--count":
    console.log(count(data));
    break;
  case "--filter":
    console.log(filter(data, val));
    break;
  default:
    console.error("No parameter found");
}
