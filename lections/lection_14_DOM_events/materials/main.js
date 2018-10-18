console.log('Lection_14');


function fooBar(){
    alert();
}

function f2(){
    console.log(this)
}

window.onload = function(){
   block = document.querySelector('.block');

//    console.log(block);

    // block.onclick = fooBar;

    // dom level 0
//    block.onclick = function(event){
//        console.log(event);
//    }

   //dom level 2

    // block.addEventListener('click', function(event){
    //     console.log(event);
    // }); 

    // block.addEventListener('click', function(event){
    //     console.log(this == event.target);
    // }); 


    // events


    block.addEventListener('click', function(event){
        console.log(event.type, event);
    });

    block.addEventListener('dblclick', function(event){
        console.log(event.type, event);
    });

    // block.addEventListener('mouseover', function(event){
    //     console.log(event.type, event);
    // });

    // block.addEventListener('mouseout', function(event){
    //     console.log(event.type, event);
    // });

    // block.addEventListener('mousemove', function(event){
    //     console.log(event.type, event);
    // });

    block.addEventListener('mousedown', function(event){
        console.log(event.type, event);
    });

    block.addEventListener('mouseup', function(event){
        console.log(event.type, event);
    });


    

}




