"use strict";
var pageNumber = 3;
var url = "http://mimeocarlisting.azurewebsites.net/api/cars/";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var html = '<div class="row">'
  $.each(carsJSON, function(index, value){
    html += '<div class="col-md-4 car">';
    html += '<h2>' + value.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + value.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + value.Year + '</p>';
    html += '</div>'
  })
  html += '</div>';
  return html

  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  var new_cars = formatCars(carsJSON);
  $('#cars').append(new_cars);
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  var new_url = url + pageNumber + "/3";
  pageNumber += 1;

  $.ajax({
    contentType: "application/json",
    url: new_url,
    dataType: "jsonp",
    success: function(data){
      addCarsToDOM(data)
    }
  });
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
