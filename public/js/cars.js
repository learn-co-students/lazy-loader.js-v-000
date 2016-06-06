"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
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
  var carsForm = formatCars(carsJSON);
  $("#cars").append(carsForm);

}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var compoundUrl = baseUrl + page + "/3";
  page += 1;
  $.ajax({
  url: compoundUrl,
  contentType: 'application/json',
  dataType: 'jsonp',
  success: function(cars) {
     addCarsToDOM(cars);
  },
  error: function(response) {
     $('body').text("Sorry, there was an error with the request.")
   }
 });
 
}
