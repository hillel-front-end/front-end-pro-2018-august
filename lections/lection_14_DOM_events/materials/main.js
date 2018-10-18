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


    // block.addEventListener('click', function(event){
    //     console.log(event.type, event);
    // });

    // block.addEventListener('dblclick', function(event){
    //     console.log(event.type, event);
    // });

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

        x0 = event.target.offsetLeft;
        y0 = event.target.offsetTop;

        mx = event.clientX;
        my = event.clientY;

        document.addEventListener('mouseup', function(){
            document.removeEventListener('mousemove', MoveElem);
        });

        document.addEventListener('mousemove', MoveElem);

        function MoveElem(ev){
            mx2 = ev.clientX;
            my2 = ev.clientY;
            // console.log(mx2, my2)

            diffx = mx2 - mx;
            diffy = my2 - my;

            event.target.style.left = x0 + diffx + 'px';
            event.target.style.top = y0 + diffy + 'px';

        }
    });

    // block.addEventListener('mouseup', function(event){
    //     console.log(event.type, event);
    // });


    

}




