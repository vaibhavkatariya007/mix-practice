// `function multiply(a: number, b: number): number {
// 	return a * b;
// }

// const a = 7;
// const b = 7;

// console.log(`${a} * ${b} = ${multiply(a, b)}`);

interface Animal {
	name: string;
	group: string | undefined;
	setgroup(group: string): void;
}

class Cat implements Animal {
	name: string;
	group: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	setgroup(group: string): void {
		this.group = group;
	}
}

class Dog implements Animal {
	name: string;
	group: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	setgroup(group: string): void {
		this.group = group;
	}
	bark() {
		console.log('bhu bhu');
	}
}

interface AnimalConstructor {
	new (name: string): Animal;
}

function initializeAnimal(Animal: AnimalConstructor, name: string) {
	const animal = new Animal(name);
	return animal;
}

const cat = initializeAnimal(Cat, 'meo');

const dog = initializeAnimal(Dog, 'bhu');
