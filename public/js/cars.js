"use strict";

var page = 3;

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var newCarsString = '<div class="row">';
  $.each(carsJSON, function(index, car) {
    newCarsString += '<div class="col-md-4 car"><h2>' + car.Make + '</h2><p><strong>Model:</strong> ' + car.Model + '</p><p><strong>Year:</strong> ' + car.Year + '</p></div>'
  });
  newCarsString += '</div>';
  return newCarsString;
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
  $.ajax({
    url: baseUrl + page + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      page++;
      addCarsToDOM(data);
    },
    error: function(error) {
      $('#errors').html("I'm sorry, there's been an error. Please try again.");
    }
  })
}

// '<div class="row"><div class='col-md-4 car'><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class='col-md-4 car'><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class='col-md-4 car'><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>'
// '<div class="row"><div class="col-md-4 car"><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4 car"><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class="col-md-4 car"><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>'.
