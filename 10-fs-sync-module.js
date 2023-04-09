// File System
// Two flavours
// Asynchronous - Non blocking
// Synchronous - Blocking

const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

log(first, second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first} , ${second}`
// );

// This will append data to the text file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} , ${second}`,
  { flag: "a" }
);
