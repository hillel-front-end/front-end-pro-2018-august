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

// var arr = [16,7,4,64,6,46,23,47,74,7474,47,74];

// console.log(arr);

// // arr.length = 5;
// console.log(arr);

// -------------------

// remove last elem
// arr.length--;
// console.log(arr);

// // add last elem
// arr[arr.length] = 'LAST';
// console.log(arr);

// -------------------

// arr = [];
// // arr.length = +prompt('input length', 10);
// arr.length = 20;
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random()*66) - 20;
//     console.log(arr[i]);

//     if  (
//         (arr[i] >= -99 && arr[i] <= -10) ||
//         (arr[i]>=10 && arr[i] <= 99)
//         ) {
//             document.write( arr[i] + '<hr />' );
//         }
// }

// -------------


// arr = [];
// // arr.length = +prompt('input length', 10);
// arr.length = 20;
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random()*66) - 20;
// }

// if (arr.length) {
//     min = arr[0];
//     max = arr[0];
// }

// for(i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] < min) {
//         min = arr[i];
//     }

//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(arr, min, max);


// ------------------------

// arr = [];
// arr.length = 21;

// for (i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random()*66) - 20;
// }


// for(i = 0, min = arr[0], imin = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         imin = i;
//     }
// }


// central = Math.floor(arr.length / 2);

// console.log(arr);

// // swap
// swap = arr[central];
// arr[central] = arr[imin];
// arr[imin] = swap;

// console.log(arr);

// --------------------


// a^n

a = 12;
n = 4;

for(i = 1, res = 1; i <= n; i ++){
    res *= a;
}

console.log(res);