// 6.=> Reverse given string ( Without using any build in method )
// var sentence = 'Bangalore is the best Indian City'
// output = 'City Indian best the is Bangalore'

var sentence = "Bangalore is the best Indian City";
const words = [];
let store = "";
for (var i = 0; i < sentence.length; i++) {
  store += sentence[i];
  if (sentence[i] === " ") {
    words.push(store);
    store = "";
  }
}
if (store.length > 0) {
  words.push(store);
}

//Reversing array
const reversArray = words.map((item, index) => {
  return words[words.length - 1 - index];
});

//joining array
let finalSentence = "";
reversArray.forEach((item, index) => {
  finalSentence += ` ${item}`;
});
console.log(finalSentence);
