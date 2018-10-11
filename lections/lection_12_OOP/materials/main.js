console.log('Lection 12');

// function Animal(x, y, z){
//     var privat = 'hello'; 

//     this.x = x;
//     this.y = y + z;
//     this.some = [2, 7 ,3, 4];

//     // getter
//     this.getPrivat = function(){
//         return privat;
//     }

//     // setter
//     this.setPrivat = function(value){
//         privat = value;
//     }
// }

// Animal.prototype.run = function(){}

// var p = new Animal('Name', 'Surname', 20);
// console.log(p);

// Наследование


// ----------------

function God() {}

function Parent(x){
    if (x) {
        Parent.prototype.foo = function(){}
    }
}
// Parent.prototype = new God();
Parent.prototype = Object.create(God.prototype);
Parent.prototype.run = function(){}

function Child(){}
// Child.prototype = new Parent(10);
Child.prototype = Object.create(Parent.prototype)
Child.prototype.sleep = function(){}



var child = new Child();
child.sleep();
child.run();


var data = {
    x: 20,
    str: 'sads'
}

var d = Object.create(data);

// ---------------------------------------------

function getRand(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}

function SuperArray(n, m, options){
    var arr = new Array(n);
    for(var i = 0; i < arr.length; i++){
        arr[i] = new Array(m);

        for(var j = 0; j < arr[i].length; j++){
            arr[i][j] = getRand(options.min, options.max);
        }
    }

    this._arr = arr;
}

SuperArray.prototype.render = function(separator){

}







var data = new SuperArray(10, 10, { min: -10, max: 10 });
console.log(data);