"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var count = 3

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var cars = carsJSON
  var html = '<div class="row">'
  for (var i = 0; i < carsJSON.length; i++) {
    html += '<div class="col-md-4 car"><h2>'
    html += cars[i].Make
    html += '</h2><p><strong>Model:</strong> '
    html += cars[i].Model
    html += '</p><p><strong>Year:</strong> '
    html += cars[i].Year + '</p></div>'
  }
  html += "</div>"
  return html
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var cars = formatCars(carsJSON);
  $("#cars").append(cars)
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  $.ajax({
    url: baseUrl + count + "/3",
    contentType: "application/json",
    dataType: "jsonp",
    success: function(data) {
      addCarsToDOM(data);
      count += 1;
    }
  })
}
