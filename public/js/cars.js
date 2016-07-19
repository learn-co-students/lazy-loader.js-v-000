"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"

  var row = "<div class=\"row\">";
  $.each(carsJSON, function(index,car) {
    row += "<div class=\"col-md-4 car\">";
      row += "<h2>"+car["Make"]+"</h2>";
      row += "<p><strong>Model:</strong> "+car["Model"]+"</p>";
      row += "<p><strong>Year:</strong> "+car["Year"]+"</p>";
    row += "</div>";
  });
  row += "</div>";
  return row;

}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  var url = baseUrl + counter + "/3/";
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
      counter++;
    }

  });
}
