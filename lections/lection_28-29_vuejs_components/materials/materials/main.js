// Vue.component('test-component', {
//   // camelCase в JavaScript
//   props: ['value', 'title', 'list', 'counter'],
//   // props: {
//   //   value: Number,
//   //   title: String,
//   //   list: Array,
//   //   counter: Number
//   // },
//   data: function () {
//     return {
//     }
//   },
//   methods: {
//     onInput: function(ev){
//       this.$emit('update', ev.target.value)
//     }
//   },
//   template: `
//     <div>
//       Inner counter: {{ counter }}
//       <br />
//       <input 
//         v-bind:value="counter"
//         v-on:input="onInput($event)"
//         />
//     </div>
//   `
// });


Vue.component('header-page', {
  // props: {
  //   title: String
  // },
  props: ['title', 'list', 'isButtonShow'],
  data: function(){
    return {
      x: 200,
      fooList: this.initList(),
      titleD: this.title || 'Default string'
    }
  },
  methods: {
    initList(){
      return this.list;
    },
    changeValue(){
      console.log('click');

      this.fooList.pop();

      this.$nextTick(function(){
        this.isButtonShow = false;
      })
    }
  },
  template: `
    <div>
     title: {{ titleD }}
      
      <h3 v-for="item in fooList">
        {{ item }}
      </h3>
      <button v-if="isButtonShow" v-on:click="changeValue">Click</button>  
    </div>
  `
});



Vue.component('select-list', {
  props: ['list', 'keytitle', 'handler'],
  data: function(){
    return {
      selectedValue: ''
    }
  },
  methods: {
    onChange: function(event){
      this.handler(this.selectedValue);
    }
  },
  template: `
    <div>
      <select v-on:change="onChange($event)" v-model="selectedValue">
        <option v-for="item of list" v-bind:value="item.key">
          {{ keytitle ? item[keytitle] : item }}
        </option>
      </select>
    </div>
  `
});


Vue.component('Social', {
  data: function(){
    return {
      first: false,
      second: true,
      list: [
        1, 2, 3
      ]
    }
  },
  methods: {
    onChange(){
      console.log(this.$parent.countries)
    }
  },
  template: `
    <div class="foo">
    <button v-on:click="onChange">Click</button>  
      <slot name="selected-list"></slot>
    </div> 
  `
});

var app = new Vue({
  el: '#app',
  data: {
    message: 10.5,
    url: '',
    text: 'Hello world!',
    foo: [1, 7, 83],
    counter1: 10,
    counter2: 50,
    isButton: true,
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    obj: {
      id: 10,
      title: 'yo',
      class: "dodo"
    },
    countries: [
      {
        title: 'Ukraine',
        key: 'ua'
      },
      {
        title: 'German',
        key: 'de'
      },
      {
        title: 'England',
        key: 'uk'
      }
    ],
    cities: {
      ua: ['Kyiv', 'Kharkiv'],
      de: ['Berlin', 'Munich'],
      uk: ['London', 'Manchester']
    },
    selectedCountry: ''
  },
  methods: {
    onChange(){},
    UpdateCounter1: function(val){
      this.counter2 = val;
    },
    UpdateCounter2: function(val){
      this.counter2 = val;
    },
    clickEv: function(ev){
      ev.stopPropagation();
      console.log('click')
    },
    getSumMethod: function(){
      return parseInt(this.counter1) + parseInt(this.counter2);
    },
    countryUpd: function(val){
      this.selectedCountry = val;
    }
  },
  // computed: {
  //   getSum: function(){
  //     return parseInt(this.counter1) + parseInt(this.counter2);
  //   },
  //   getList: function(){
  //     return this.foo.concat([7, 8, 9]);
  //   }
  // }
});