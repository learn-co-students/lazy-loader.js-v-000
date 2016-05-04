"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  var html = "<div class=\"row\">"
  $.each(carsJSON, function(index, car){
    html = html + "<div class=\"col-md-4 car\">";
    html = html + "<h2>" + car.Make + "</h2>";
    html = html + "<p><strong>Model:</strong> " + car.Model + "</p>";
    html = html + "<p><strong>Year:</strong> " + car.Year + "</p>";
    html = html + "</div>";
    });
  html = html + "</div>";
  return html;
}


function addCarsToDOM(carsJSON) {
  var carsHTML = formatCars(carsJSON);
  $("#cars").append(carsHTML);
}



function fetchJSON() {
  $.ajax({
    url: baseUrl + pageNum + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      pageNum += 1;
      addCarsToDOM(cars);
      debugger;
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
}

