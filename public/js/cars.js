"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  var div = '<div class="row">';
  $.each(carsJSON, function(index, car) {
    div += '<div class="col-md-4 car">';
    div += '<h2>' + car.Make + "</h2>";
    div += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    div += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    div += '</div>';
  });
  div += '</div>';
  return div;
}

function addCarsToDOM(carsJSON) {
  var cars = formatCars(carsJSON);
  $("div#cars").append(cars);
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(carsJSON) {
      addCarsToDOM(carsJSON);
    },
    error: function(response) {
      $('body').html("Load Failure, please refresh your page!");
    }
  });
}
