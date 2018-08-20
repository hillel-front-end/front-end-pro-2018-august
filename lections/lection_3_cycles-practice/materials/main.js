console.log('lection_3');

// p = 1;
// for(i = 1, j = 1 ; i < 20; p*=i, i+=2, j = i*2 ) {
//     console.log(i, j);
// }

// console.log(p);

// a = 1;
// b = 70;

// str1 = str2 = '';
// for(i = a; i <= b; i++){
//     if ( i % 2 == 0 ) {
//         str2 += i;
//     } else {
//         str1 += i;
//     }
// }


// document.write(`<table border="1">
// <tr><td>' + str1 +'</td></tr>
// <tr><td>' + str2 + '</td></tr>
// </table>`);




// x = 2;
// y = 20;

// sum = 0;
// i = x;
// while (i == y){
//     if (x <= y && i%2){
//         sum += i;
//     } else if (x > y && !i%2) {
//         sum += i;
//     }

//     if (x < y) {
//         i++;
//     } else {
//         i--;
//     }
// }



// -------------

// x = 1;
// y = 50;
// data = 23;

// for(i = x; i <= y; i++){
//     if(i >= data - 5 && i <= data + 5){
//         console.log(i);
//     }
// }   

// -------------


// n = 20;
// m = 15;

// // document.write('*');
// for(i = 1; i <= n; i++){
//     document.write('*');
// }
// document.write('<br />');

// for(i = 1; i <= m-2; i++){
//     for(j = 1; j <= n; j++){
//         if (j == 1 || j == n) {
//             document.write('*');
//         } else {
//             document.write('&nbsp;');
//         }
//     }
//     document.write('<br />');
// }
// for(i = 1; i <= n; i++){
//     document.write('*');
// }
// document.write('<br />');

// -------------------------
// n = 10;
// m = 5;
// sym = '*';
// separator = '&nbsp;'

// fullLine = '';
// for(i = 1; i <= n; i++){
//     fullLine += sym;
// } 

// spaceLine = '';
// for(i = 1; i <= n; i++){
//     if (i == 1 || i == n){
//         spaceLine += sym;
//     } else {
//         spaceLine += separator;
//     }
// } 
// // document.write(fullLine);
// // document.write('<br />');
// // document.write(spaceLine);


// document.write(fullLine + '<br />');
// for (i = 1; i <= m - 2; i++) {
//     document.write(spaceLine + '<br />');
// }
// document.write(fullLine + '<br />');


// ------------------------- 
n = 10;
m = 5;

for(i = 1; i <= m; i++) {
    for(j = 1; j <= n; j++) {
        if (i == 1 || i == m || j == 1 || j == n) {
            document.write('*');
        } else {
            document.write('&nbsp;');
        }
    }
    document.write('<br />');
}