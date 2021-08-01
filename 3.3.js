// 3 => Given an array, cyclically rotate the array clockwise by one.
// 		Input: [1, 2, 3, 4, 5]
// 		Expected Output: = [5, 1, 2, 3, 4]

const myArray = [1, 2, 3, 4, 5];
myArray.unshift(myArray.pop())
console.log(myArray);