var a = 420; //the variable a is declared and its value assigned
var b = 12 + 12; //you can initially assign values using mathematical expressions
var c = a + b; //in those expressions you can use other variables as well

console.log(a);
console.log(b);
console.log(c);

let a = "Some value"; //the variable whose value can be modified
a = "New value, also a string"; //that's ok
const b = 111; //constant
b = 666; //and that's not ok, will throw error and not work

a = "Some value"; //undeclared variable, bad practice in general


var a = 10;
var a = 11; //actually variable a = 11

let b = "Alpha";
let b = "Beta"; //can't be done, throws an error