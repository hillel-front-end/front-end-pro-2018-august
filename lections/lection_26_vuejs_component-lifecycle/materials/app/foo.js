
var app=new Vue({
  el: '.container',
  data:{
    list:[
      {height:100,color:ChangeColor()},
      {height:200,color:ChangeColor()},
      {height:150,color:ChangeColor()},
      {height:120,color:ChangeColor()},
      {height:100,color:ChangeColor()},
      {height:140,color:ChangeColor()},
      {height:100,color:ChangeColor()}],
  },
  created() {
    // let localData = {};
    // if (localStorage['mixing']){
    //   localData = JSON.parse(localStorage['mixing'])
    // }

    let localData = localStorage['mixing'] ? JSON.parse(localStorage['mixing']) : {};
    
    for(let key in localData){
      this.list[key].height = +localData[key];
    }
  },
  methods: {
    getList(){
      return this.list;
    },
    onChange(index, value){
      // let localData = {};

      // if (localStorage['mixing']){
      //   localData = JSON.parse(localStorage['mixing']);
      // }
      let localData = localStorage['mixing'] ? JSON.parse(localStorage['mixing']) : {};

      localData[index] = value;
      localStorage['mixing'] = JSON.stringify(localData);
    },
    filter(){
      this.list = this.getList().sort((a, b) => a.height - b.height);
    }
  }
})

function getRand(min, max){
  return  Math.floor(Math.random()*(max - min) + min);
}
function ChangeColor(evnt){
  return 'rgb('+ getRand(0, 256) +', ' + getRand(0, 256) +', ' + getRand(0, 256) + ')';
}
