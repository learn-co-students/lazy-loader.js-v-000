"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

function formatCars(carsJSON) {
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

function addCarsToDOM(carsJSON) {
  var carsHTML = formatCars(cars);
  $("#cars").append(carsHTML);
}

function fetchJSON() {
    var url = baseUrl + pageNumber + "/3";
    pageNumber += 1;
    $.ajax({
      url: url,
      contentType: 'application/json',
      dataType: 'jsonp',
      success: function(cars) {
        addCarsToDOM(cars);
      },
      error: function(response) {
        $('body').text("Sorry, there was an error with the request. Please refresh the page.")
      }
    });
}