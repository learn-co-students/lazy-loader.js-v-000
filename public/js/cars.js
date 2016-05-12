"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

function formatCars(carsJSON) {
  carsJSON.forEach(function(car){
    html += '<div class="col-md-4 car">';
    html += '<h2>' + car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    html += '</div>'
  });
  html += '</div>';
  return html;
}

function addCarsToDOM(carsJSON) {
  var formatData = formatCars(carsJSON);
  $('#cars').append(formatData);
}

function fetchJSON() {
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType:'jsonp',
    success:function(data){
      addCarsToDOM(data);
    },
    error:function(error){
      alert("Sorry, something went wrong: " + error.statusText);
    }
  });
}
