"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var div = '<div class="row">';
  $.each(carsJSON, function(index, carModel) {
    div += '<div class="col-md-4 car">';
    div += '<h2>' + carModel.Make + '</h2>';
    div += '<p><strong>Model:</strong> ' + carModel.Model + '</p>';
    div += '<p><strong>Year:</strong> ' + carModel.Year + '</p>';
    div += '</div>';
  });
  div += '</div>';
  return div;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var formatted = formatCars(carsJSON);
  $("div#cars").append(formatted);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + pageNum + '/3';
  pageNum += 1;

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}