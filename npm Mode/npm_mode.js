const chalk = require("chalk");
console.log(chalk.green.underline.inverse("Hello World!"));
console.log(chalk.red.inverse("False"));


const validator = require("validator");
const res = validator.isEmail("dikshit@singh.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));