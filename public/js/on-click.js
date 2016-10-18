"use strict";

// function handlebarsSetup() {
//   //put any handlebars setup in here
//   Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
// }


$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  // handlebarsSetup();
  $('#load-cars').on('click', function() {
    fetchJSON()
  })
});
