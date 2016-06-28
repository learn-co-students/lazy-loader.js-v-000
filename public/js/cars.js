"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  var html ='<div class="row">';
  for (var i in carsJSON) {
    html += '<div class="col-md-4 car">';
    html += '<h2>' + carsJSON[i].Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + carsJSON[i].Model + '</p>';
    html += '<p><strong>Year:</strong> ' + carsJSON[i].Year + '</p>';
    html += '</div>';
  }
    html += '</div>';
    return html;
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON));
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + pageNum + '/3',
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
  pageNum += 1;
}
