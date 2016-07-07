"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var html = '<div class="row">';

  for (let i in carsJSON) {
    html += '<div class="col-md-4 car"><h2>';
    html += carsJSON[i].Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + carsJSON[i].Model + '</p>';
    html += '<p><strong>Year:</strong> ' + carsJSON[i].Year + '</p>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function addCarsToDOM(carsJSON) {

  var formatted = formatCars(carsJSON);

  $('#cars').append(formatted);
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + page + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
      page ++;
    }
  });
}
