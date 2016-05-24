"use strict";

// this is the starting page number given 6 existing cars with 3 per page
var pageNumber = 3;
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var formattedCars = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
    formattedCars += "<div class=\"col-md-4 car\">";
    formattedCars += "<h2>" + car.Make + "</h2>";
    formattedCars += "<p><strong>Model:</strong> " + car.Model + "</p>";
    formattedCars += "<p><strong>Year:</strong> " + car.Year + "</p>";
    formattedCars += "</div>";
  });
  formattedCars += "</div>";
  return formattedCars
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var formattedCarsToDOM = formatCars(carsJSON);
  $('#cars').append(formattedCarsToDOM);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + pageNumber + "/3";
  pageNumber += 1;
  $.ajax( {
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