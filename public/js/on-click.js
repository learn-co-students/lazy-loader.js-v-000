"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
  // var carsTemplate;
  // handlebarsSetup();
  $('#load-cars').on('click', fetchJSON);
});