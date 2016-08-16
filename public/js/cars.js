"use strict";
function print(words){
  console.log(words)
}

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  var carsHtml = "";
$.each(carsJSON, function(index, car){
  carsHtml += `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`
  });
  return "<div class=\"row\">" + carsHtml + "</div>";
}

function addCarsToDOM(carsJSON) {
  var carsHtml = formatCars(carsJSON);
  $('#cars').append(carsHtml);
}

function fetchJSON() {
  var url = baseUrl + "/" + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(message) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.");
    }
  });

}
