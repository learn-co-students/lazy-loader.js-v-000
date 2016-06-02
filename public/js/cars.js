"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 2;

function formatCars(carsJSON) {
  var html ="<div class=\"row\">";
  
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
  console.log(carsJSON, formatCars(carsJSON));
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  page++;
  $.ajax({
    url: baseUrl + page + "/3",
    contentType: 'application/json',
    dataType: 'jsonP',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}