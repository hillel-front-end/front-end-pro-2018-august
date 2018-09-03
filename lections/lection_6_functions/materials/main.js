console.log('Lection_6');


// foo(5, 10);
// bar();

// function declaration
function foo(a, b) {
    console.log(a, b);
}

// function expression
bar = function() {
    console.log('bar');
} 

// формальные параметры принимают значение 
// фактических соответственно


a = 'ddjshjflksd';

// foo(a, [87,2 ,3, 4]);
// bar();


// -------------------------------------


// console.log();

function sum(a, b) {
    var res = 20 + a - b;
    console.log(b);
    return res;
}

// console.log(res);
// console.log(sum(12, 7) + sum(2, 9));

res = sum(sum(2, 10), 203);

console.log(res);


// ------------------------------

function concat(a1, a2, a3){
    return a1.concat( a2.concat(a3) );
}

arr = concat([1, 2], [9, 2, 9], [2]);

// for(i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }




