console.log('Lection_17');


// var list = [1,6, 8, 9];
// var str = '12312fazvfdghh';

// console.log(localStorage.x)
// window.localStorage['saveList'] = list;
// localStorage.setItem('str', str);

// window.sessionStorage['saveList'] = list;
// sessionStorage.setItem('str', str);

// console.log(window.localStorage);

window.onload = function(){
    var list;
    var separator = '.';

    var btn = document.querySelector('.action');
    var btn_push = document.querySelector('.push_me');
    var push_text = document.querySelector('.push_text');

    btn_push.addEventListener('click', function(){
        if (!push_text.value) return;

        var storageData = [];
        if (localStorage.list) {
            storageData = localStorage.list.split(separator);
        }
        // get
        storageData.push(push_text.value); // change
        localStorage.list = storageData.join(separator); // set
        push_text.value = '';
    })



    btn.addEventListener('click', function(){
        localStorage.list = [7, 9, 8,4 ,23, 23,4, 32,4].join(separator);
    })

    if (localStorage.list){
        list = localStorage.list.split(separator);
    } else {
        list = [1, 2, 3];
    }

    // list = localStorage.list ? localStorage.list : [1, 2, 3];

    // var container = document.querySelector('#container');
    // var li;
    // for(var i = 0; i < list.length; i++){
    //     li = document.createElement('li');
    //     li.innerHTML = list[i];
    //     container.appendChild(li);
    // }



    var blocks = document.querySelectorAll('.block');

    for(var i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('click', function(){
            var id = "data-id-" + this.dataset.id;
            if (!localStorage[id]) {
                localStorage[id] = 1;
            } else{
                localStorage[id]++;
            }
        });
    }

    var shows = document.querySelectorAll('.show');

    for(var i = 0; i < shows.length; i++){
        shows[i].addEventListener('click', function(){
            var id = "data-id-" + this.dataset.id;

            document
                .querySelector('span[data-id="'+ this.dataset.id +'"]')
                .innerHTML = localStorage[id];
        });
    }
}

function clearCounters(){
    var blocks = document.querySelectorAll('.block');
    for(var i = 0; i < blocks.length; i++){
        localStorage["data-id-" + blocks[i].dataset.id] = 0;
    }
}