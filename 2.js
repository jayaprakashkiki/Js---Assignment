// 2 => Given an Array, Find number of working days. Consider Saturday, Sunday as non-working days
// 		var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday']

var workingDays = ["Sunday", "Monday", "Tuesday", "Saturday", "Saturday"];

const workingDayResult = workingDays.filter((item) => {
  if (item !== "Sunday" && item !== "Saturday") {
    return item;
  }
});
console.log(workingDayResult.length);