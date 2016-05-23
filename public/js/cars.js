"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3; 

function formatCars(carsJSON) {
  var car = '<div class="row">'
  for(var i = 0; i < carsJSON.length; i++){
    car += '<div class="col-md-4 car">' + '<h2>' + carsJSON[i].Make + '</h2>' + 
    '<p><strong>Model:</strong> ' + carsJSON[i].Model + '</p>' + 
    '<p><strong>Year:</strong> ' + carsJSON[i].Year + '</p>' + '</div>';
  }
  car += "</div>";
  return car;
};


function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON));
}

function fetchJSON() {
  $.ajax({
        url: baseUrl + page + '/3',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data);
        }
  });
  page += 1;
}