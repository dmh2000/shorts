// var declaration is hoisted to top of scope
// assignment is NOT visible to usage
// 'a' is declared but is undefined in console.log

console.log("a", a);
var a = 1;
