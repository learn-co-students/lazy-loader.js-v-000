"use strict";

$(document).ready(function() {
  var initialCarsIndex = 0;
  $('#load-cars').on('click', function() {
    initialCarsIndex += 6
    fetchJSON(initialCarsIndex);
  })
});