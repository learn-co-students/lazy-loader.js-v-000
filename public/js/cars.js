"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  var div = '<div class="row">';
  $.each(carsJSON, function(index, car){
    div += '<div class="col-md-4 car">';
    div += '<h2>' + car.Make + "</h2>";
    div += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    div += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    div += '</div>';
  });
  return div + "</div>";
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON))
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + page + "/3/",
    dataType: 'jsonp'
  })
  .done(function(cars){
    addCarsToDOM(cars);
    page++;
  });

}
