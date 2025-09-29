// ==============================
// 1. Class with constructor and methods
// ==============================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const p1 = new Person("Alice", 25);
p1.greet();

// ==============================
// 2. Class inheritance
// ==============================
class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    work() {
        console.log(`${this.name} is working as a ${this.job}.`);
    }
}
const e1 = new Employee("Bob", 30, "Developer");
e1.greet();
e1.work();

// ==============================
// 3. Constructor function using 'this'
// ==============================
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.show = function() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}
const car1 = new Car("Toyota", "Corolla");
car1.show();

// ==============================
// 4. Prototype methods in constructor function
// ==============================
Car.prototype.honk = function() {
    console.log(`${this.brand} goes Beep Beep!`);
}
car1.honk();

// ==============================
// 5. Custom prototype object
// ==============================
const animalProto = {
    speak: function() {
        console.log(`${this.name} makes a sound.`);
    },
    eat: function(food) {
        console.log(`${this.name} eats ${food}.`);
    }
};

const dog = Object.create(animalProto);
dog.name = "Buddy";
dog.speak();
dog.eat("bone");

// ==============================
// 6. Object literal with methods
// ==============================
const rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height;
    },
    perimeter() {
        return 2 * (this.width + this.height);
    }
};
console.log(rectangle.area());
console.log(rectangle.perimeter());

// ==============================
// 7. Object.create with custom prototype
// ==============================
const vehicleProto = {
    start() {
        console.log(`${this.type} is starting`);
    },
    stop() {
        console.log(`${this.type} is stopping`);
    }
};
const bike = Object.create(vehicleProto);
bike.type = "Motorbike";
bike.start();
bike.stop();

// ==============================
// 8. ES6 Getters and Setters
// ==============================
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if(amount >= 0) this._balance = amount;
        else console.log("Invalid balance");
    }
}
const acc = new BankAccount("Sam", 5000);
console.log(acc.balance);
acc.balance = 6000;
console.log(acc.balance);

// ==============================
// 9. Static methods
// ==============================
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(Calculator.add(5, 3));
console.log(Calculator.multiply(5, 3));

// ==============================
// 10. Real-life example: Library system
// ==============================
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(`${this.title} by ${this.author}`);
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach(book => book.info());
    }
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Sapiens", "Yuval Harari");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.showBooks();

// ==============================
// 11. Prototype chaining example
// ==============================
function Shape(type) {
    this.type = type;
}
Shape.prototype.describe = function() {
    console.log(`This is a ${this.type}`);
};

function Circle(radius) {
    this.radius = radius;
    this.type = "circle";
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
};

const c1 = new Circle(5);
c1.describe();
console.log(c1.area());

// ==============================
// 12. Real-life example: Food ordering system
// ==============================
function MenuItem(name, price) {
    this.name = name;
    this.price = price;
}
MenuItem.prototype.order = function() {
    console.log(`You ordered ${this.name} for $${this.price}`);
};

function Combo(items) {
    this.items = items;
}
Combo.prototype = Object.create(MenuItem.prototype);
Combo.prototype.constructor = Combo;
Combo.prototype.totalPrice = function() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
};

const burger = new MenuItem("Burger", 5);
const fries = new MenuItem("Fries", 2);
const combo = new Combo([burger, fries]);
combo.order(); // inherited
console.log(combo.totalPrice());
