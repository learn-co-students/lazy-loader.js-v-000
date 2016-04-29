"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var numUrl = 3;

function formatCars(carsJSON) {
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

  var carDetails = $.map(carsJSON, function(element, index){
    return '<div class="col-md-4 car">' +
      '<h2>' + element["Make"] + '</h2>' +
      '<p><strong>Model:</strong> ' + element["Model"] + '</p>' +
      '<p><strong>Year:</strong> ' + element["Year"] + '</p>' +
    '</div>';
  });
  
  return '<div class="row">' + 
    carDetails[0] + 
    carDetails[1] + 
    carDetails[2] +
  '</div>';
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  $('div#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: baseUrl + numUrl + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(response){
      addCarsToDOM(response);
    }
  });
  numUrl++;
}

