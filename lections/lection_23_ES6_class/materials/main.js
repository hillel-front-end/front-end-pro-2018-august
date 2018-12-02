console.log('Lection_23');


function Animal(name) {
    this.size = 10;
    this.name = name;
}

Animal.prototype.foo = function () {

}

Animal.prototype.p = 20;

Animal.eat = function() { // static
    console.log('eat');
}

// Animal.eat();


function Human(name, age) {
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

Human.prototype = Object.create(Animal.prototype);

Human.getCount = function() {
    console.log('count: ****');
}

Human.prototype.sleep = function() {
    console.log(this.name, 'sleep');
}

var p1 = new Human('Vasya', 25);

// p1.run();
// p1.run();
// p1.getCount();


// ----------------------


var list = [ { value: 10 }, { value: 12 }, { value: 3 }, { value: 17 }];




list.sort((src1, src2) => src1.value - src2.value);

list = list.filter(item => {
    for(let i = 2; i <= item.value - 1; i++){
        if ( item.value % i == 0 ){
            return false;
        }
    }

    return true;
})

console.log(list);