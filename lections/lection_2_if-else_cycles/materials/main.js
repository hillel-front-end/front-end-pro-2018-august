console.log("Lection_2");

/*
+ if else
+ тернарный оператор ?
+ циклы основы
+ while () {}
+ do {} while()
+ for(){}
+ switch case
+ break; continue;

*/


// console.log(1);

// // prompt();

// document.write();

//  bool -----------------------

// console.log(true, false);
// s

// console.log( a == +prompt() );

// -----------------


// условный оператор

// y = 10;

// console.log('before');

// if ( y > 0 ) {
//     console.log('y > 0');
// }

// console.log('after');


// // ---------------

// res = y != 20;

// if (res) {
//     console.log('y != 20');
// }

// // -------------------------

// x = -23;

// if (x > 0) {
//     console.log('x > 0');
// } else {
//     console.log('x <= 0');
// }


// // ---------------------------

// console.log('before');

// if (10 != 0) {
//     console.log('10 != 7');
// }
    
// console.log('after');


// ---------------------------
a = true;
b = 1;
c = 0;
d = -1;
strEmpty = '';
str = '!';

// true - всё, кроме нуля // из чисел
if (strEmpty) {
    // console.log('is True');
}

// -----------------
// x = 10;
// y = x % 5; // 0
// z = y - 1;

// if ( (x > 0 || z) && (y >= 0) ) {
//     console.log('true');
// }


// ----------------

// res = 0;

// value = +prompt();

// if ( isNaN(value) ) {
//     console.log('error');
// } else {
//     res = value * 2;
// }

// console.log(res);


// ----------------

// циклы


// цикл с предусловием

// while(условие) { если true -> в блок кода, иначе -> выходим из цикла
    // блок кода
// }

// i = 0;
// while(i <= 10) { // условие выполнения цикла
//     i = i + 1;

//     console.log(i);
// }

// console.log('after ' + i);

// -------------------------
// цикл с постусловием

// i = 0;
// do { // условие выполнения цикла
//     console.log(i);
//     i++;
// } while(i <= 10);

// console.log('after ' + i);

// ----------------------

// // цикл с счетчиком

// for ( i = 0; i <= 10; i++ ) {
//     console.log(i);
// }
// // 1 -> 2? -> если true -> 4 -> 3 -> 2
// //      2? -> если false -> exit


// // smart operation
// // инкримент, декримент

// a = a + 20;
// a += 20;

// a = a - 20;
// a -= 20;

// a = a * 20;
// a *= 20;

// a = a / 20;
// a /= 20;

// a = a % 20;
// a %= 20;


// --------------

// i = i + 1; // i += 1;
// i++; // постфиксная
// ++i; // префиксная

// x = 5;
// console.log( (x++ * 20) - 10 );

// x = 5;
// console.log( (++x * 20) - 10 );

// ---------------------------

do {
    a = +prompt();
    b = +prompt();

    isError = isNaN(a) || isNaN(b);
    if (isError) {
        confirm('incorrect');
    }
} while(isError);

// do {
//     b = +prompt();

//     isError =  isNaN(b);
//     if (isError) {
//         confirm('incorrect');
//     }
// } while(isError);









for(i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i*i)
    }
}








