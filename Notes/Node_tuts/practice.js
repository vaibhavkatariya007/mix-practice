// first Problem
console.log(a);
var a = 10;
function print() {
  console.log(a);
  var a = 20;
}
print();
console.log(a);

/** OutPut
 * Basically Due to hoisting
 * var a;
 * function print() {
 * console.log(a);
 * var a = 20;
 * }
 * console.log(a);
 * a = 10;
 * print();
 * console.log(a);
 *
 *
 *
 * undefined
 * undefined
 * 10
 * Hoisting
 */

// Problem 2

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
// this loop for confusion
for (var i = 0; i < 1000000; i++) {}
// O/P remain same
console.log(3);

// var profile = {
//   fName: '',
//   lName: '',
//   setName: function (fName, lName) {
//     const setting = (f, l) => {
//       this.fName = fName;
//       this.lName = lName;
//     };
//     setting(fName, lName);
//   },
// };

// profile.setName('Vaibhav', 'Katariya');

//Fourth
console.log('1______________');
console.log([] + []);
console.log('2______________');
console.log({} + []);
console.log('3______________');
console.log([] + {});
console.log('4______________');
console.log(String([]));
console.log('5______________');
console.log({} + {});

//Fifth

function test() {
  return 'Hello!';
}

// This will call a function
const sentence = test`hi`;
console.log(sentence);

function test2() {
  return 'Hello!';
}

const sentence2 = test2;
console.log(sentence2);

//Sixth
// How to make webpage editable
//document.body.contentEditable = true;

// Seventh

function y() {
  console.log(this.length);
}

var x = {
  length: 5,
  method: function (y) {
    arguments[0]();
  },
};

x.method(y, 1, 3);

// o/P == 3 , because this refers to arguments array.

// Eight
console.log('8-------');
const m = 'constructor';
console.log(m[m](01));
console.dir(m);

//nine
var A = {
  x: function () {
    console.log('x');
    return this;
  },
  y: function () {
    console.log('y');
    return this;
  },
  z: function () {
    console.log('z');
  },
};

A.x().y().z();
