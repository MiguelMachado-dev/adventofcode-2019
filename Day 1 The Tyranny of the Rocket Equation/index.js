const fs = require("fs");
const readline = require("readline");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
  output: process.stdout,
  console: false
});

readInterface.on("line", function(line) {
  const fuel = Math.floor(line / 3) - 2;
  console.log(`${fuel}`);
});
