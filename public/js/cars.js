"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3

function formatCars(carsJSON) {
  var htmlTemplate = '<div class="row">'
  $.each(carsJSON, function(index, car){
    htmlTemplate += '<div class="col-md-4 car">';
    htmlTemplate += '<h2>' + car.Make + '</h2>';
    htmlTemplate += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    htmlTemplate += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    htmlTemplate += '</div>'
  });
  htmlTemplate += '</div>';
  return htmlTemplate;
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON));
}

function fetchJSON() {
  var url = baseUrl + pageNumber + '/3/'
  pageNumber ++

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}
