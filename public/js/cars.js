"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var formattedCars = '<div class="row">';
  $.each(carsJSON, function(index, car){
    formattedCars += '<div class="col-md-4 car"><h2>' + car.Make + "</h2><p><strong>Model: </strong>" + car.Model + "</p>" + "<p><strong>Year: </strong>" + car.Year + "</p>"+"</div>";
  });
    formattedCars += '</div>';
    return formattedCars;
  }

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON));
}

var currentPage = 3;

function fetchJSON() {
  $.ajax({
      url: `${baseUrl}${currentPage}/3`,
      contentType: 'application/json',
      dataType: 'jsonp',
      success: function(data) {
      currentPage++;
      addCarsToDOM(data);
    },
      error: function(error) {
        $('#errors').html("I'm sorry, there's been an error. Please try again.");
      }
    })
}
