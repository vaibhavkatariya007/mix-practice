"use strict";
// `function multiply(a: number, b: number): number {
// 	return a * b;
// }
class Cat {
    constructor(name) {
        this.name = name;
    }
    setgroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setgroup(group) {
        this.group = group;
    }
    bark() {
        console.log('bhu bhu');
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    return animal;
}
const cat = initializeAnimal(Cat, 'meo');
const dog = initializeAnimal(Dog, 'bhu');
