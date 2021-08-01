// 7.=> Reverse given string ( Without using any build in method )
// 		var sentence = 'Bangalore is the best Indian City'
// 		output = 'City Indian best the is Bangalore'

var sentence = "Bangalore is the best Indian City";
console.log(sentence.split(/\s/).reverse().join(" "));
// console.log(str.split(/\s/).reverse().join(" "));
