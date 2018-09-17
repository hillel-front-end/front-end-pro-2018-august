console.log('Lection 8');

// + Обьекты основы
// + Свойства обьектов, методы обьектов
// + Вложенные обьекты
// + Перебор обьекта(for in), манипуляции свойствами, оператор delete



arr = [ 1, 2, 3];

// console.log( arr[0] );

obj = {
    name: 'Vasya',
    'age': 20,
    adress: {
        city: 'Kiev',
        street: 'Mechnikova',
        postalCode: 03054,
        siblings: [1, 2, 3]
    }
}

key = 'city'

// console.log( obj[key] );


// console.log( obj.adress );
// for(i = 0; i < obj.adress.siblings.length; i++) {

// }

// obj.surname = 'Ivanov';
// delete obj.adress;

// console.log(obj)

// ------------------

// var data = {
//     sum: function(a, b){
//         return a + b;
//     }
// }

// data.sum(2, 3);

// ------------------

// перебор
// console.log(obj);
// for(key in obj) {
//     console.log( key, obj[key] );
// }

// ----------------------------------------------

function sumSource(a, b){
    // this -> context
    console.log(this);
    return a + b + this.x;
}




var data = {
    x: 10,
    y: 20,
    sum: sumSource
}

var data2 = {
    x: 20,
    sum: sumSource
}

sumSource(2, 8);
data.sum(1, 2);
console.log(sumSource === data.sum)

// z = 200;
// console.log(window.z);
// window
// console.log(res);
// window.alert();
// document.write();
// window.prompt();