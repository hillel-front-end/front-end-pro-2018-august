console.log('Lection 11');



function Person(x, y) {
    var privat = 200;

    this.x = x + privat;
    this.y = y;

    if (!Person.prototype.getPrivat) {
        // console.log('GETTER declaration');
        Person.prototype.getPrivat = function(){
            return privat;
        }
    }
    // this.sleep = function(){} // bad
}

Person.prototype.sleep = function(){}


var p = new Person(10, 'string');

var d = new Person(20, 'string');

console.log( p.sleep === Person.prototype.sleep );
console.log(p, d);