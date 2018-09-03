b = 40;
a = 10;

function f1(){
    var b = 20;
    var c = 80;
    console.log('f1', a, b);
}

function f2(p2){
    var k = 100;
    console.log('f2', a, b);

    f3('p3');
    function f3(p3){
        console.log('f3', k, b, p3, p2);
    }
}


f1();
f2('p2');