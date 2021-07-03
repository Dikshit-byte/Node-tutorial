// >> So, now to purpose of using add in this file, we have to import it in this file by using ./
// const add = require('./operator');
// console.log(add(5,5));

// console.log(add);

// .. so in order to import and access all properties of operator.js file module 

// const oper = require('./operator');

// console.log(oper);
// console.log(`The addition of 5 and 0 is ${oper.add(5,0)}`);
// console.log(`The subtraction of 10 and 5 is ${oper.sub(10,5)}`);

// >> Here have a problem that whenever we do some mathematical work then we have to call all property of maths like addition, subtraction, multiplication and division

// so, we can use here property structuring like we learn in JavaScript 

const {add,sub,name} = require('./operator');

console.log(`The addition of 5 and 0 is ${add(5,0)}`);
console.log(`The subtraction of 10 and 5 is ${sub(10,5)}`);
console.log(`Your name is ${name}`);