//Modules

// CommonJS - every file in Node is a module by default
// Modules - Encapsulated Code (only share minimum  )

const names = require("./4-names");
const john = names.john;
const peter = names.peter;

const sayHi = require("./5-utils");
// console.log(names);

const data = require("./6-alternative-flavour");
// console.log(data);

require("./7-mind-grenade");

// sayHi("Susan");
// sayHi(john);
// sayHi(peter);
