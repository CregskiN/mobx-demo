document.write('hello world!');

function Animal() { }
function Dog() { }

console.log('Dog.prototype', Dog.prototype); // Dog{}
console.log('Animal.prototype', Animal.prototype); // Animal{}

// 继承
Dog.prototype = Object.create(Animal.prototype);



// console.log('Dog.prototype', Dog.prototype.__proto__); // Animal.prototype
// console.log('Animal.prototype', Animal.prototype); // Animal.prototype
// console.log('Dog.prototype.__proto__ === Animal.prototype', Dog.prototype.__proto__ === Animal.prototype);
// console.log('dog instanceof Animal', dog instanceof Animal); // true
// console.log('Dog.prototype === Animal.prototype', Dog.prototype === Animal.prototype); // false

Object.defineProperties(Animal.prototype, {
    name: {
        value() {
            return 'animal';
        }
    },
    say: {
        value() {
            return `i am ${this.name()}`;
        }
    }
})
let dog = new Dog();
console.log(dog.say()); // 'i am animal'

Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value() {
            return 'dog'
        }
    }
})

dog = new Dog();
console.log(dog.say()); // 'i am dog'

// 到此，实现一个完整的继承