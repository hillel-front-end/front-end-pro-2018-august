console.log('Lection_19');


var asyncElement = 
    new Promise(function(resolve, reject){
        setTimeout(function(){
            // async
            var x = Math.floor(Math.random()*50) - 25;

            if(x > 0) {
                resolve(x);
            }

            reject(x);
        }, 2000)
    });


asyncElement
    .then(
        function(value){
            // console.log('resolve', value);

            var res = fact(value);

            // console.log(res)
        }, 
        function(value){
            // console.log('reject', value);
        }
    )


function fact(n){
    if ( n == 1 ) {
        return n;
    }

    return n*fact(n-1);
}


// ------------------------

new Promise(function(resolve, reject){
    // console.log('promise start');
    // setTimeout(function(){
        
    //     resolve(10);       
    //     console.log('promise end'); 
    // }, 1500)
})
.then(
    function(value){
        console.log('then 1', value);

        return value;
    },
    function(value){
        console.log('reject then 1')

        // return new Promise(function(resolve, reject){
        //     reject();
        // });
        return Promise.reject(value);
    }
)
.then(
    function(value){
        console.log('then 2', value)
    },
    function(value){
        console.log('reject then 2', value)
    }
)
.then(function(value){
    console.log('then 3')
})

// console.log('in body');


// -----------------------------


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(1);
        resolve()
    }, 1000)
})
.then(function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(2)

            resolve();
        }, 2000)
    })
})
.then(function(){
    setTimeout(function(){
        console.log(3)
    }, 1000)

    return Promise.resolve();
})


// -----------------------------


