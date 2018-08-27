console.log('Lection_4');


// + Массивы основы
// + array через блок инициализации
// + array через конструктор
// + работа с индексами + свойство length
// + перебор массива, задачки



// for(i = 5; i <= 20; i += 1) {
//     console.log(i);
//     if (i == 18) {
//         i = 30;
//     }
// }

// ----------------------------


// A = [8, 9, true, 'str', false, 20]; // new array

// A.length -> размерность массива

// console.log(A);

// for(i = 0; i < A.length; i++){
//     console.log( A[i] );
// }

// A[5] = 'FOOOO';

// --------------------
// array через блок инициализации
// A = [10, 20];
// // console.log(A.length);
// A[5] = 50;
// // console.log(A.length);
// console.log(A);

// for(i = 0; i < A.length; i++){
//     console.log( A[i] );
//     // A[i] = 10; 
// }

// ----------------------------------

// array через конструктор

// Arr = new Array(10);
// console.log(Arr);
// // ------------- 


// Arr2 = []
// Arr2.length = 10;
// console.log(Arr2);


// ----------------

var arr = [16,7,4,64,6,46,23,47,74,7474,47,74];

console.log(arr);

// arr.length = 5;
console.log(arr);

// -------------------

// remove last elem
arr.length--;
console.log(arr);

// add last elem
arr[arr.length] = 'LAST';
console.log(arr);