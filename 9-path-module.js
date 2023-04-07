const { log } = require("console");
const path = require("path");

log(path.sep);

const filePath = path.join("content", "subfolder", "text.txt");
log(filePath);

const base = path.basename(filePath);
log(base);
console.log(__dirname);
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
log(absolute);
