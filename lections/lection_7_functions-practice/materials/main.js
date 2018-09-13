console.log('Lection_7');

function f(a, b) {
    // console.log( arguments ); // -> [2, 6]
    
    // for(var i = 0; i < arguments.length; i++){
    //     console.log(arguments[i]);
    // }

    return a + b;
}

var res = f(2, 6, 8, {}, 5, false,65);
// console.log(res);

// -------------------------------------------

function func(a, b, callback) { // b = sum
    // console.log( b == sum);
    // console.log(callback);
    // var res = callback(a, 300);
    // console.log(res);
    // return a*a;
    var p = 100;
    return callback(a, b);
}




// res = func(10);
// console.log( typeof sum );
// func(10, true);
var p = 200;
// console.log( func(10, 23, sum), func(10, 23,  div) );


function sum(x, y){
    return x + y + p;
}

function div(x, y){
    return x / y + p;
}


// -------------------------------------------


function f0() {
    var z = 0;
    f1(80);

    function f1(a) {
        var x = 200;
    
        f2();
    
    
        function f2() {
            console.log(x, y, a, z);
            // debugger;
        }
    }
}

y = 12;

// f0();


// ----------------------------------------


// function addFunc() {

// }

// function factory(a) {
//     var z = 10;

//     // return function(){
//     //     console.log(z);
//     // }

//     if (a) {
//         return function() {

//         }
//     }
    
//     return addFunc;
// }

// var some = factory();

// console.log(some === addFunc);


// ----------------------------------------

