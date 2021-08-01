// 3 => Given an Array, Replace non-working days with 'Holiday'. Consider Saturday, Sunday as non working days
// 		var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday']

var workingDays = ["Sunday", "Monday", "Tuesday", "Saturday"];

workingDays.forEach((item, index) => {
  if (item === "Sunday" || item === "Saturday") {
    workingDays.splice(index, 1, "Holiday");
  }
});
console.log(workingDays);

