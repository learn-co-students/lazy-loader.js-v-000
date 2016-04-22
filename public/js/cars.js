"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var clickNumber = 2;
var carIndexTracker = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var html = '<div class="row">';
  $.each(carsJSON, function(index, car) {
    html += '<div class="col-md-4 car">' +
            "<h2>" + carsJSON[index]["Make"] + "</h2>" +
            "<p><strong>Model:</strong> " + carsJSON[index]["Model"] + "</p>" +
            "<p><strong>Year:</strong> " + carsJSON[index]["Year"] + "</p>" +
            "</div>";
          });
  return html + '</div>'; 
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON(step) {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/3/3";

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
  clickNumber += 1;
  carIndexTracker += 3;
}