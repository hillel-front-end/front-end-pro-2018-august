console.log('Lection_9');


function renderObj(){
    for(var item in this){
        if(this[item] === arguments.callee){
            continue;
        }
        if(typeof this[item] === 'object'){
            this[item].inner = arguments.callee;

            this[item].inner();
            continue;
        }

        document.write(item +': ' + this[item] + '<br />');
    }
}



var obj = {
    x: 10,
    y: 20,
    list: [1, 7, 8, 9],
    adress: {
        city: 'Kiev'
    },
    renderObj: renderObj,
    sum: function(){}
}

obj.renderObj();