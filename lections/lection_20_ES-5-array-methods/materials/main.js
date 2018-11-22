console.log('Lection_19');



// var arr = [1, 8, 9, 5, 8];
// arr[20] = 100;

// for(var i = 0; i < arr.length; i++){
//     console.log(i, arr[i])
// }

// console.log('------------------');

// for(var i in arr){
//     console.log(i, arr[i])
// }


// console.log('------------------');


// ------------------------


// forEach
// var arr = [1, 8, 9, 5, 8];
// arr[20] = 100;

// var res = arr.forEach(function(value, pos, source){
   
    // console.log(pos, value, source);
    // if (pos == 1) {
        // source[20] = 'last';
        // source.length = 3;
    // }
//     return value;
// });


var btns = document.querySelectorAll('.btn');

// for(var i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', function(){
//         // ...

//         console.log(i);
//     });
// }

// btns.forEach(function(item, pos){
//     item.addEventListener('click', function(){
//         // ... pos
//     });
// });



// console.log(res);

// ------------------------------------------------------
// filter 

// arr = [1, -8, 9, 5, 8 -6];

// var res = arr.filter(function(item, pos, source){
//     return item > 0;
// });

// console.log(res);
// console.log(arr);

list = [
    {
        id: '1',
        price: 0
    },
    {
        id: '2',
        price: 0
    },
    {
        id: '7',
        price: 123
    },
    {
        id: '9',
        price: 25
    },
    {
        id: '4',
        price: 0
    }
];

var mapList = list.map(function(item){
    return item.price;
});
// console.log(mapList);

window.onload = function(){
    list
    .filter(function(item){
        return item.id && (item.price > 0);
    })
    .forEach(function(item){
        var block = document.createElement('div')

        block.innerHTML = item.id + '_' + item.price + '$';
        document.body.appendChild(block);
    });
}


// ----------------------------------

// map

arr = [1, -8, 9, 5, 8, -6];

res = arr.map(function(item, pos, source){
    return {
        id: pos,
        value: item
    }
});

// console.log(res);
// console.log(arr);

strs = ['12helloafs', 'fjl;hkdfgo/', ';hellokh', '55ew'];

// var results = strs.filter(function(str){
//     return str.indexOf('hello') != -1;
// })

var results = strs.map(function(str){
    return str.replace('hello', '');
})

// console.log(results);


// --------------------------------

// every, some


var every = list.every(function(item, pos, source){
    return item.price;
})

// console.log(every);

var some = list.some(function(item, pos, source){
    return item.price;
})

//  console.log(some);


 // ------------------------------------------
 // reduce


arr = [1, -8, 9, 5, 8, -6];

var res = arr.reduce(function(prev, item){
    return prev + item;
}, 0);


 
res = list.reduce(function(prev, item){
    return prev + item.price;
}, 0);
 


res = list
    .filter(function(item){
        return (item.price > 0) && item.id;
    })
    .reduce(function(prev, item){
        prev.push(item.id);
        return prev;
    }, []);

console.log(res)

