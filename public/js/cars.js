"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var addPage = 3;
function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var html = "<div class=\"row\">"
  $.each(carsJSON, function(index, car){
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
    html +="</div>"
    return html;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var formattedCars = formatCars(carsJSON)
  $("#cars").append(formattedCars)
};

function fetchJSON() {
  var url = baseUrl + addPage + "/3";
  addPage += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
}
