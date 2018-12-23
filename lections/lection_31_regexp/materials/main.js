console.log('lection_30');


var pattern = /8 8/;

// search
str = `9860 привет шаблон прШаблоноек8 8тированияшабЛон`;
// console.log(str.search(pattern));

// match
// var result = str.match(/шаблон/i);
// console.log(result);

// //match /g
// result = str.match(/шаблон/gi);
// console.log(result);

// split
// console.log('12-34-56_12:18'.split(/[:_-]/g));

// // split examples
// console.log('132sdkf123123alfknadskljfn123'.split(/-/));

//replace
// console.log('12- 34- 56'.replace( /- /g, ":" ));
// -----------------

/*
 - классы и спецсимволы
 - диапазоны
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

// var str = "Hello wor! wod! How are you! привет мир! 1988 год Как дела? Что делать?  Когда нет ничего в 18 лет."
// var result = str.match(/\b\w\w\w\b/gi);
// var result = str.match(/wo(r|d)/gi);
// var result = str.match(/(\b\w\w\w\b)|(\d\d\d\d)/gi);
// console.log(result)


// -----------------
// . ? [ ] { } & ^ \ / |
// \. \? \/ \& \|
// var str = "How are you. //99// Hello He!9o! How are"
// var result = str.match(/\/\/\d\d\/\//gi);
// console.log(result)

// ----------------------------

// var str = "Hello Pet+a! Petтa Hello Petia! Hello Petra!";
// var result = str.match(/Pet[\w+-а-яїЇА-Я]a/gi);
// var result = str.match(/Pet[^i]a/gi);
// console.log(result);

// ----------------------------

// var str = "Hello Ivan! Hello Ivan Hello Ivan?";
// var result = str.match(/Hello Ivan[!.]?/gi);
// console.log(result);

// ----------------------------

var str = "s12344236523 helo5 s s123 !hello s12.5 rhello 2018 2 rrhello 23 rrrhelllllllloooo";
// var result = str.match(/s\d*/gi);
var result = str.match(/hell?o/gi);
console.log(result);

// ----------------------------

// var str = "homahomahoma123 homa123";
// var result = str.match(/[0-9.]+/gi);
// var result = str.match(/(homa){2}[\w\d]+\b/gi);
// var result = str.replace(/(homahoma)(.+)\b/g,"$2");
// console.log(result);

// ----------------------------


// var str = `
// <br />
// <input />
// <img />
// e
// qwe
// qwe
// qw
// eqw
// <table>
//     <tr></tr>
// </table>
// <div></div>
// qwe
// qwe
// qwe
// qw
// eqw
// e
// wq

// `