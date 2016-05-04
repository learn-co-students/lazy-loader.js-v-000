"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  var formated = '<div class="row">';
  for (var i = 0; i < carsJSON.length; i++){
    formated += '<div class="col-md-4 car"><h2>' +
    carsJSON[i]['Make'] + "</h2><p><strong>Model:</strong> " +
    carsJSON[i]['Model'] + "</p><p><strong>Year:</strong> " +
    carsJSON[i]['Year'] + "</p></div>";
  }
  return formated + "</div>";
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + pageNum + "/" + 3,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars){
      pageNum++;
      addCarsToDOM(cars);
    },
    error: function(response){
      $('body').text("Sorry, there was an error.");
    }
  });
}
