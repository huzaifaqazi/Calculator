"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("enter your first number:"));
var n2 = parseInt(prompt("enter your second number:"));
var operator = (prompt("enter your operator(+,-,*,/):"));
if (operator = "+") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, "= ").concat(n1 + n2));
}
if (operator = "-") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, "= ").concat(n1 - n2));
}
if (operator = "*") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, "= ").concat(n1 * n2));
}
if (operator = "/") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, "= ").concat(n1 / n2));
}
else {
    console.log("please select correct operator");
}
