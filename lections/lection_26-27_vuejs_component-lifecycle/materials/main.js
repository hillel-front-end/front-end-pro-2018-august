var obj = {
  x: 22
}

var appData = {
  list: [1, 2, 3, 4],
  str: '123',
  ctx: {}
}
console.log(appData);
// debugger;
var app = new Vue({
  el: '#app',
  data: appData,
  created: function(){
    console.log('created', this.$el);
    // console.log(appData);
    // debugger;
  },
  beforeUpdate: function(){
    console.log('beforeUpdated');
    console.log(appData);
    // debugger;

    this.$nextTick(function(){
      console.log('nextTick beforeUpdated')
      // debugger;
    });
  },
  updated: function(){
    console.log('updated');
    console.log(appData);

    this.$nextTick(function(){
      console.log('nextTick updated')
    });
  },
  // mounted: function() {
  //   console.log('mounted', this.$el);
  //   // debugger;
  // }
  // data: {
  //   value: 10,
  //   obj: obj 
  // }
})

// appData.list.push(20);
// appData.ctx.x = 200;
// Vue.set(appData.ctx, 'x', 200);

// obj.y = 300;

// Vue.set(app.obj, 'y', 200);
// добавлять в корень нельзя

// setTimeout(() => {
//   // Vue.set(app.obj, 'y', 200);
//   appData.ctx.x = 300;
//   // appData.list.push(30);
// }, 2000);

// ------------------------------


// console.log( app.$data == appData );
// console.log( app.value );
// console.log( app.$el );

// app.$watch('ctx.x', function (newValue, oldValue) {
//   console.log(newValue, oldValue);
// })


// ------------------------------


// created: function () {
//   console.log(this.value)
// }

// mounted: function () {
//   this.$nextTick(function () {
//     // Код, который будет запущен только после
//     // отображения всех представлений
//   })
// }

// updated: function () {
//   console.log('updated');
//   // this.$nextTick(function () {
   
//   // })
// }

// destroyed
// Вызывается после уничтожения экземпляра Vue.
//  К моменту вызова этого хука, все директивы экземпляра Vue 
//  уже отвязаны, все подписчики событий удалены,
//   а все дочерние экземпляры Vue уничтожены.