console.log('Lection_5');



// arr = [1, 7, 34,83,6,35 ];


n = 10;
m = 10;

// create
arr = new Array(n);
for( i = 0; i < arr.length; i++ ){
    arr[i] = new Array(m);
}

// fill and output
console.log(arr, 'END');

for(i = 0; i < arr.length; i++){
    // arr[i] == array
    // console.log(arr[i])
    for(j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random()*90 + 10);
        document.write(arr[i][j] + ' ');
    }

    document.write('<br />');
}

console.log(arr);

// --------------------------------
document.write('<hr />');
for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++) {
        if (arr[i][j] < 50) {
            arr[i][j] = '00';
        }
        document.write(arr[i][j] + ' ');
    }
    document.write('<br />');
}

