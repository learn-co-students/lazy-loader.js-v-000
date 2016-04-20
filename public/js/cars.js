"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
// already showing 6 cars.
var count = 2;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var carsHTML = '<div class="row">';
  for (var i = 0; i < carsJSON.length; i++) {
    carsHTML += '<div class="col-md-4 car">';
    carsHTML += '<h2>' + carsJSON[i]["Make"] + '</h2>';
    carsHTML += '<p><strong>Model:</strong> ' + carsJSON[i]["Model"] + '</p>';
    carsHTML += '<p><strong>Year:</strong> ' + carsJSON[i]["Year"] + '</p>';
    carsHTML += '</div>';
  }
  carsHTML += '</div>';
  return carsHTML;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of 'cars"
  var carsHTML = formatCars(carsJSON);
  $("#cars").append(carsHTML);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  count++;
  var url = baseUrl + count.toString() + "/3";
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}
