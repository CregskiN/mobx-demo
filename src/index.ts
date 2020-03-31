document.write('hello world!');

function Animal() { }
function Dog() { }

console.log('Dog.prototype', Dog.prototype); // Dog{}
console.log('Animal.prototype', Animal.prototype); // Animal{}

Dog.prototype = Object.create(Animal.prototype);

// const dog = new Dog();

console.log('Dog.prototype', Dog.prototype.__proto__); // Animal
console.log('Animal.prototype', Animal.prototype); // 
// console.log(dog instanceof Animal); // true
console.log('Dog.prototype === Animal.prototype', Dog.prototype === Animal.prototype); // false


