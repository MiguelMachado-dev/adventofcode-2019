const fs = require("fs");
const inputFile = "input.txt";

// Part One
function partOne() {
  let total_fuel = 0;
  // Use trim to avoid any extra newlines being parsed as NaN by parseInt
  // Create an array of the masses from the input file
  let masses = fs
    .readFileSync(inputFile, { encoding: "utf-8" })
    .trim()
    .split("\n");
  for (let i = 0; i < masses.length; i++) {
    total_fuel += Math.floor(parseInt(masses[i]) / 3) - 2;
  }
  return total_fuel;
}

module.exports = partOne;
