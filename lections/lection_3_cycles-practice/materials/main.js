console.log('lection_3');

p = 1;
for(i = 1, j = 1 ; i < 20; p*=i, i+=2, j = i*2 ) {
    console.log(i, j);
}

console.log(p);