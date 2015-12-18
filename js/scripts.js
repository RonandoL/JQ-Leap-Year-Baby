// leapYear function
var leapYear = function(year) {
    return (year % 4 === 0) && ((year % 100 != 0) || year % 400 === 0);
};

// Notice how the leapYear function and specs doesn't do anything that involves user interaction; all of the JavaScript logic for the user interface will be grouped together in the $(document).ready() callback.

// User interaction
$(document).ready(function() {
    $("form#leap-year").submit(function(event) { // form and action
        event.preventDefault();

        var year = parseInt($("input#year").val()); // grab value of input
        var result = leapYear(year); // pump year into the function get true or false

        $(".year").text(year); // add year to results
        if (!result) {  // if the result of the function(year) is not true, then...
          $(".not").text("not");  // then add 'not' to <span> tag
        }

        $("#show-result").show();
    });

});

// This:
// var leapYear = function(year) {
//  return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))
// }

// Was refactored from this:
  // var leapYear = function(year) {
  //   return false;
  // }

  // var leapYear = function(year) {
  //   if ( (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
