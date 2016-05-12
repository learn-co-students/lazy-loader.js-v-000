"use strict";

var page = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

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
  var carsHTML = formatCars(cars);
  $("#cars").append(carsHTML);
}

function fetchJSON() {
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    }
  });
}
