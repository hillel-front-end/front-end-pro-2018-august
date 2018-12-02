console.log('Lection_1');


/*
- Scoping
- Arrow Functions
- Template Literals // tag templates

- Object Properties
- Destructuring

- Classes
- Generators
- Extended Parameter Handling // rest, spread (home)
- Promises
*/

// var x = 10;

// function f() {
//     var x;

//     console.log(x);

//     return x;
// }

// f();


// let, const

// if (true) {
//     // let x = 10;

//     let x = 20;
    

//     if (true) {
//         console.log(x);
//     }
// }


// console.log(x);


// const x = 10;
// const str = 'hello';
// const flag = false;
// const obj = {
//     z: 20,
//     t: 30
// };
// // x = 20;
// obj.z = 60;
// // delete obj.t;
// obj = false;

// console.log(x, obj);


// ----------------------


// function f(){

// }

// f1 = function(item) {
//     return item * 2;
// }

// f12 = (item, pos) => {
//     console.log(item);

//     return item * 2
// };

// let obj = {
//     // bad
//     sum: (a, b) => {
//         console.log(this);

//         return a + b;
//     }
// }


// -------------------


// let arr = [21, 71, 8, 74, 8, 3, 4, 12];

// let res = arr
//             .map(function (item) { 
//                 return item*item;
//             })
//             .filter(item => item > 100)
//             .reduce((prev, item) => item + prev, 0);

// console.log(res);


// -------------------


// function f(a = 0, b = { value: 0 }) {
//     // b = b === undefined ? b : 20;
//     // if (b === undefined) b = 20;
//     // if (!b || !b.value) return;
//     console.log(b.value);
//     console.log(b + 10);

//     console.log(a, b);
// }

// f(2);



// -------------------

// let text = '100';
// var x = -10;

// var str = `sdfns
// ${ x > 0 ? x*x : 0 }
// dkf`;

// console.log(str);
// let string = `2 + 4 = ${text - 4}`

// ----------------------------------
window.onload = function() {
    let list = [
        'Vasya',
        'Petya',
        'Vasya',
        'Petya',
        'Vasya',
        'Petya',
        'Ignat'
    ];


    
    let str = `<hr />${genList(list)}<hr />`;
    
    document.body.innerHTML = str;
}



function genList(list) {
    return `
        <ul>
        ${list.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}



// ------------------------------------

// let x = 20;
let str = 'str';

let foobar = [1, 8, 8, 5];
function sum() {
    console.log(this);
}

let obj = { 
    x, 
    str,
    foobar: foobar,
    innerSum: sum
 }

// console.log(obj);



// ------------------------------------


var { x, y = 2000, list, inner: { foo } } = { 
    list: [5,8,8,8,2], 
    a: 10, 
    x: 60, 
    str: 'hello',
    inner: {
        x: 70,
        foo: function(){}
    }
};

console.log(x, y, list, foo);

// init({x: 10, y: 70, name: 'vasya', length: 80, foo: 20});

function init(data){
    var { length, name } = data;
    // var length = data.length;
    // var name = data.name;

    // length = data.length2;

    // console.log(length, name);
}


// ------------------------------------

var arr = [2, 8, 4, 9, 5, 7, 4, 7, 9,8 ,3];

// var [a] = arr;
// console.log(a);

// var {length} = arr;

// console.log(length);


console.log(arr);
// let buffer = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = buffer;
//  var maxI = 8;
//  var minI = 4;
 [arr[4], arr[8]] = [arr[8], arr[4]];
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

console.log(arr);
// let last = arr.length-1;

// [arr[0], arr[last]] = [arr[last], arr[0]]

// console.log(arr);