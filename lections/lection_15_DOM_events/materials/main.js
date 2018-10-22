window.onload = function() {
    // document
    //     .querySelector('.block')
    //     .addEventListener('click', function(event){
    //         console.log('block', event)
    //     }, true)

    // document
    //     .querySelector('body')
    //     .addEventListener('click', function(event){
    //         console.log('body', event)
    //     }, true)

    //  -----------------------------------------

    var list = [1, 25, 7, 3, 5, 2];

    // creation
    var divElem = document.createElement('div');

    // fill and configuration
    divElem.classList.add('some_element');
    divElem.innerHTML = "some element";

    var spanElem = document.createElement('span')
    spanElem.innerHTML = 'inner span';

    // insert to

    divElem.appendChild(spanElem); // prepare fragment


    // insert list to div
    var ulElem = document.createElement('ul');

    function onLiElick(ev){
        // this.remove();
        // ev.target.remove();

        // var id = ev.target.getAttribute('data-id');
        // console.log(id);
        console.log(ev.target.dataset.myId);
    }

    var liElem;
    for(i = 0; i < list.length; i++){
        liElem = document.createElement('li');

        liElem.classList.add('item');
        liElem.innerHTML = "item_" + list[i];

        // set attribute

        // liElem.setAttribute('data-foo', "YOOO");
        // liElem.removeAttribute('data-foo');

        // dataset
        // liElem.setAttribute('data-id', i)
        liElem.dataset.myId = i;



        liElem.addEventListener('click', onLiElick);

        ulElem.appendChild(liElem);
    }
    
    divElem.appendChild(ulElem);

    document.body.appendChild(divElem);

    console.log(divElem);

    // document.querySelectorAll('.item')
}