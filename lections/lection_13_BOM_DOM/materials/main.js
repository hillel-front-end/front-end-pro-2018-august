/*


+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/
    

window.onload = function(){
    // var block = document.getElementById('block');

    // console.dir(block);

    // setTimeout(function(){
    //     block.align = 'FOO';
    //     block.innerText += "<hr /> Underline"
    // }, 2000)

    // var blocks = document.getElementsByClassName('blocks');
    // console.log(blocks);

    // for(i = 0; i < blocks.length; i++){
    //     blocks[i].innerHTML += " selected";
    // }

     //---------------------------

    //  var block = document.querySelector('.blocks');

    //  block.innerHTML += 'selected';
    //  console.dir(block);

    //  var blocks = document.querySelectorAll('.blocks');
    //  if (blocks.length == 1) {
    //      blocks = blocks[0]
    //  }
    // blocks.innerHTML += 'selected';
    // console.log(blocks);

    
    // class

    // --------------------------------------------

    block = document.querySelector('.block');

    // block.className += ' selected'
    // block.classList.add('selected', 'fofo', 'fofo1');
    // block.classList.remove('fofo', 'fofo1');
    // block.classList.value = '';
//    var isSelected = block.classList.contains('selected');
//    console.log(isSelected);
    // block.classList.toggle('selected');   
}

