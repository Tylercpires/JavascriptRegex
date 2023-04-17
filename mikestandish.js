var string = "Mike Standish";
var string2 = "Mike_Standish"

var format = /^[a-zA-Z][a-zA-Z0-9]*_?[a-zA-Z0-9]+$/gm;

console.log(format.test(string));
console.log(format.test(string2));