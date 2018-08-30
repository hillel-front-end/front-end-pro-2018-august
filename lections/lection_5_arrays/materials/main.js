console.log('Lection_5');



// arr = [1, 7, 34,83,6,35 ];


n = 21;
m = 21;

// create
arr = new Array(n);
for( i = 0; i < arr.length; i++ ){
    arr[i] = new Array(m);
}

// fill and output
// console.log(arr, 'END');

// for(i = 0; i < arr.length; i++){
//     // arr[i] == array
//     // console.log(arr[i])
//     for(j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Math.floor(Math.random()*90 + 10);
//         document.write(i+''+j + ' ');
//     }

//     document.write('<br />');
// }

// console.log(arr);

// --------------------------------

n = arr.length;
k = Math.ceil(n / 2);
console.log(k)
document.write('<hr />');
for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++) {
        // if (i + j <= n-1 && j >= k && i >= k/2) {
        //     document.write('1' + ' ');
        // } else 
        //     document.write('0' + ' ');

        // if (i >= j && i+j>= n - 1) {
        //     document.write('1' + ' ');
        // } else 
        //     document.write('0' + ' ');

        if ((i + j <= n - 1 && i >= k/2 && i <= k + k/2 && j <= k) || (i >= k + k/2 && (j >= k + k/2)) )  {
            document.write('1' + ' ');
        } else 
            document.write('0' + ' ');
    }
    document.write('<br />');
}

// --------------------------------

