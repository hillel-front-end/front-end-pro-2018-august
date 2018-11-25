console.log('Lection_21');

var data = {
    x: 12,
    str: 'hello',
    m: function(){},
    get foo(){
        // console.log('getter foo', this, arguments);
        // if (this.x > 0) {
        //     return this.x;
        // } else {
        //     return 0;
        // }
        var list = [1, 2, 3, 4];
        var i = 0;

        return function(){
            return list[i++];
        }
    }
}
// var step = data.foo;
// console.log( step() );
// console.log( step() );
// console.log( step() );

// console.log( data.foo() );

// console.log(data);

// console.log( data.foo );

// data.x = data.x + data.foo - 5;
// console.log(data.x)



// ----------------------------------------------------------


var source = {
    a: 6,
    str: 'Hello',
    b: 9,
    set foo(value){
        console.log('setter foo', this, arguments);
        this.a = value;
    },
    set init(data){
        this.a = data.a;
        this.z = data.f;
    }
}

// source.foo = 600;


// source.init = { ... }



//----------------------------------
// дескриптор

const struct = {
    x: 10,
    str: 'hello'
}

var descriptor = {
    value:  60, // default value = undefined
    writable: false, // default = false
    // enumerable: false, // default = false
    configurable: false 
};

Object.defineProperty(struct, 'foo', descriptor);
console.log(struct)
struct.foo = 100;
console.log(struct);
Object.defineProperty(struct, 'foo', {
    // writable: true 
});
// console.log(struct)

// for(var item in struct){
//     console.log(item)
// }
// delete struct.foo
// console.log(struct)


// get, set

Object.defineProperty(struct, 'specificValue', {
    get(){
        return 200;
    },
    set(value){
        this.dd = value;
    }
})

console.log(struct.specificValue)

struct.specificValue = 700;