"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var html = '<div class="row">'
  $.each(carsJSON, function(index, car){
    html += '<div class="col-md-4 car">';
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> "  + car.Year + "</p>";
    html += "</div>";
  });
    html += "</div>";
    return html;
}

function addCarsToDOM(carsJSON) {
  var formattedHtml = formatCars(carsJSON)
  $("#cars").append(formattedHtml);
}

var page = 3;

function fetchJSON() {
  $.ajax({
    url: baseUrl + page + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
      page += 1;
    }
  });
}