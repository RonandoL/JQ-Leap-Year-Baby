// we will write the least amount of code to make the spec pass:

var leapYear = function(year) {
  return false;
}

var leapYear = function(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
