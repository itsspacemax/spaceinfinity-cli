#! /usr/bin/env node
const yargs = require("yargs");
const usage = "\nUsage: spaceinfinity <option>";

yargs
  .usage(usage)
  .help(true)
  .option("test", {
    alias: "t",
    choices: ["test", "production"],
  })
  .parse();

switch (yargs.argv.t) {
  case "test":
    console.log("You got the test!");
    break;
  case "production":
    console.log("You got the production!");
    break;
}
