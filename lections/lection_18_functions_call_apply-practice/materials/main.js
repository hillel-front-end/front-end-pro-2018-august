console.log('Lection 18');

// call, apply, bind
// изменение контекста выполнения функций


function sum(x, y){
    console.log(this, x, y);
    return x + y + this.z;
}

var data = {
    z: 20
};



// sum(5, 9);
// sum.call(data, 5, 9);
// data = null;
// sum.call(data, 5, 9);
// sum.call(null, 5, 9);
// sum.call(window, 5, 9);
// sum.call({ z: 50 }, 5, 9);

// одалживание методов


function getCentralElems(){
    var mid = Math.ceil(arguments.length / 2) - 1;

    console.log(arguments)
    if (arguments.length % 2) {
        // return arguments.splice(mid, 1);

        // #1
        return Array.prototype.slice.call(arguments, mid, mid+1);
    }
    // #2
    return [].slice.call(arguments, mid, mid+2);
}

// var res = getCentralElems(1, 2, 3, 4, 5, 6);
// console.log(res);
// getCentralElems(1, 2, 3, 4, 5, 6, 7);


// strings

var str = "Hello world";
// console.log(str, str.length, str[7], 'p'.toUpperCase());
// console.dir(String, );




// apply


function sum(x, y){
    console.log(this, x, y);
    return x + y + this.z;
}

// sum.call(data, 60, 100);
// sum.apply(data, [60, 100]);

// bind

var sumCtx = sum.bind(data, 2);
sumCtx(9);


// ------------------------------------

