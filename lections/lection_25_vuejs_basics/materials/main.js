// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 10.5,
//     foo: [1, 7, 83],
//     str: "Hello world"
//   }
// })

// console.log(app);

// setTimeout(() => {
//   console.log(app.message);
//   app.message += 200;
// }, 3000)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// setInterval(() => {
//   app2.message = 'Вы загрузили эту страницу в: ' + new Date().toLocaleString();
// }, 500)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     list: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ' '
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })

// console.log(app4.todos)




// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!',
//     counter: 3
//   },
//   methods: {
//     clickMeEvent(event) {
//       // console.log(arguments, this);
//       this.message += ' click';
//       this.counter--;
//     },
//     foo(){
//       console.log('FOO CALLED')
//     },
//     bar(){
//      return 'return'; 
//     },
//     NeedHide(){
//       return this.counter > 0;
//     }
//   }
// })

// // // ---------------------------------------

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
    result: 'RESULT',
    x: 10
  }
})


// -----------------------------
