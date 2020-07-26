"use strict";
exports.__esModule = true;
var user = 'hellsadao';
console.log(user);
var x = 10;
var y = 20;
var title = 'Web Developer';
var Bool = true;
var Num = 20;
var sentence = "hello " + title + " how are you";
console.log(sentence);
var n = null;
var s = undefined;
console.log(n, s);
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var person = ['John', 22];
var X;
(function (X) {
    X[X["Red"] = 0] = "Red";
    X[X["Green"] = 1] = "Green";
    X[X["Blue"] = 2] = "Blue";
})(X || (X = {}));
;
var r = X.Green;
console.log(r);
var myVaribale = 'Ali';
var a = myVaribale.toLowerCase();
console.log(a);
var b;
b = 10;
b = true;
var multyType;
multyType = 20;
multyType = true;
var anyType;
anyType = true;
anyType = 'sd';
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
var f = add(2, 3);
console.log(f);
add(8);
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: "John",
    lastname: "Hanks"
};
fullname(p);
