var hero = {
    name: 'Superman',
    sayName: function () {
        return 'I am ' + this.name;
    }
};
console.log(hero.sayName());

/*this*/

function Hero() {
    this.occupation = 'Ninja';
};
var hero = new Hero();
console.log(hero.occupation);



function Hero(name) {
    this.name = name,
        this.occupation = 'Ninja',
        this.whoAreYou = function () {
            return 'I am ' + this.name + ' and I am ' + this.occupation;
        };
}
var hero1 = new Hero('Leonardo');
var hero2 = new Hero('Mikelandjelo');

console.log(hero1.whoAreYou());
console.log(hero2.whoAreYou());



/* The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. */

// syntax: object instanceof constructor

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); //true
console.log(auto instanceof Object); //true



// functions that return objects

function factory(name) {
    return {
        name: name
    };
}

var o = factory('one');
console.log(o.name); //one


// passing objects

var original = { howmany: 1 };
var myCopy = original;

console.log(myCopy.howmany); //1

myCopy.howmany = 100;
console.log(myCopy.howmany); //100

console.log(original.howmany); //100



var original = { howmany: 100 };
var nullify = function (o) { o.howmany = 0; };
nullify(original);
console.log(original.howmany); //0