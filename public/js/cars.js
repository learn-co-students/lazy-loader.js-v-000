"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3

function formatCars(carsJSON) {
  var html = '<div class="row">'
  $.each(carsJSON, function(index, car) {
    html += '<div class="col-md-4 car">';
    html += '<h2>' + car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>'
    html += '<p><strong>Year:</strong> ' + car.Year + '</p>'
    html += '</div>'
  });
  return html + '</div>'
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var cars = formatCars(carsJSON);
  $('#cars').append(cars);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
        url: baseUrl + page + "/3",
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          // console.log(data);
          addCarsToDOM(data);
        } 
  });
  page += 1;
}