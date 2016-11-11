"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var numberOfCars = 3;
var pageNumber = 2;


function formatCars(carsJSON) {
  var html = '<div class="row">';

  $.each(carsJSON, function(i, car){
    html += '<div class="col-md-4 car">';
    html += `<h2>${car.Make}</h2>`;
    html += `<p><strong>Model:</strong> ${car.Model}</p>`;
    html += `<p><strong>Year:</strong> ${car.Year}</p>`;
    html += '</div>';
  });

  html += '</div>';
  return html;

}

function addCarsToDOM(carsJSON) {
  var html = formatCars(carsJSON);
  $("#cars").append(html);
}

function fetchJSON() {
  var listingUrl = baseUrl + (pageNumber += 1) + "/" + numberOfCars;

  $.ajax({
    url: listingUrl,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}
