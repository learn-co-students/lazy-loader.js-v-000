"use strict";


var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {

  var row = "<div class=\"row\">"
  $.each(carsJSON, function(index, car) {
    row += '<div class="col-md-4 car">'
    row += "<h2>" + car.Make + "</h2>"
    row += "<p><strong>Model:</strong> " + car.Model + "</p>"
    row += "<p><strong>Year:</strong> " + car.Year + "</p>"
    row += "</div>"
  })
  row += "</div>"
  return row
}

function addCarsToDOM(carsJSON) {

  var cars = formatCars(carsJSON)
  $('#cars').append(cars)
}

function fetchJSON() {

  var counter = $('div.row').length
  $.ajax({
    url: baseUrl + counter + '/3', 
    contentType: 'application/json',
    dataType: 'jsonp', 
    success: function(data) {
      addCarsToDOM(data);
    }
  })
}







