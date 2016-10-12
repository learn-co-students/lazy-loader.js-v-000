'use strict';

$(document).ready(function() {
  // add click listener here
  $("#load-cars").on('click', function() {
    fetchJSON();
  });
  // it should call on fetchJSON()
});