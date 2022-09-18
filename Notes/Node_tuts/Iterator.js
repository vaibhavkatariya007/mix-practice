var i = [1, 2, 3, 4, 5];

// How to Pause a function
var iterator = i[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//--------------

function* generarator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

var iterator = i[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* gen() {
  yield 1;
  yield* anotherGen();
  yield 3;
}

function* anotherGen() {
  yield 2;
}
