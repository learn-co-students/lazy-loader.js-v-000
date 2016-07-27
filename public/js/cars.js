"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

function formatCars(cars) {
  var html = "<div class=\"row\">";
  $.each(cars, function(index, car) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;
}

function addCarsToDOM(cars) {
  var carHTML = formatCars(cars);
  $('#cars').append(carHTML);
}

function fetchJSON() {
  var url = baseUrl + pageNumber + '/3'
  pageNumber += 1;

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars){
      addCarsToDOM(cars);
    },
    error: function(error){
      $('body').text('Error loading more cars');
    }
  });
}
