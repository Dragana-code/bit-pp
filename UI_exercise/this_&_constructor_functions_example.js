var hero={
    name:'superhero',
    sayName: function(){
        console.log('Hi I am '+ this.name);
    }
};

hero.sayName();

function Hero(name,occupation, kind){
    this.kind=kind;
    this.name=name;
    this.occupation=occupation;
    this.sayName=function(){
        return 'Hi I am ' + this.name;
    }
};

var hero1=new Hero('Leonardo', 'Ninja', 'Turtla');
var hero2=new Hero('Donatelo', 'Ninja','Turtle');
var hero3=new Hero('Rafaelo', 'Ninja', 'Turtle');
var hero4=new Hero('Splinter', 'Ninja', 'Rat');

console.log(hero1, hero4);