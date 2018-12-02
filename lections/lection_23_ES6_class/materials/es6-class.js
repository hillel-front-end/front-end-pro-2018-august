console.log('Lection_23');

class Animal {
    constructor(size){
        this.size = size;
    }

    foo(){}
    getP(){
        return 20;
    }

    static eat(){
        console.log('eat');
    }
}


class Human extends Animal {
    constructor(name, age, size){
        super(size);
        this.name = name;
        this.age = age;

        var _counter = 200;

        this.run = function() {
            console.log(this.name, 'run', _counter);

            _counter++;
        }
        
        this.getFoo = () => _counter;
        this.setFoo = value => _counter = value;
    }

    static getCount() {
        console.log('count: ****');
    }

    sleep() {
        console.log(this.name, 'sleep');
    }
}

var p1 = new Human('Vasya', 25, 50);
// console.log(p1);


// var p = new Animal('vasya');
// console.log(p);
// console.log(new Animal().getP())
// Animal.eat();


// -----------------------------


class Parent{
    constructor(x) {
        this.x = x;
    }
}

class Child extends Parent {
    // constructor(){
    //     super();
    // }

    calc(){}
}

class Child2 extends Parent {
    constructor(value) {
        super(value);

        this.x = value*2;
    }
}
var p2 = new Child(20);
var p3 = new Child2(20)
console.log(p2, p3)