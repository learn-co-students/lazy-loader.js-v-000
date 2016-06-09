"use strict";

function formatCars(carsJSON) {
  var html = '<div class="row">'
  $.each(carsJSON, function(index, car){
    html += '<div class="col-md-4 car">';
    html += '<h2>'+ car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    html += '</div>';
  });
  html += '</div>';
  return html;

}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON));
}
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3

function fetchJSON() {
  $.ajax({
        url: baseUrl + pageNumber + '/3',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          pageNumber +=1;
          addCarsToDOM(data)
        }
      });
}
