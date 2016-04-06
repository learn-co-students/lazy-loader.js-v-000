"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  // fetchJSON();
  counter = counter || 2
  $("#load-cars").click(function(callback) {
    fetchJSON(counter);
    counter = counter + 1
  })
});