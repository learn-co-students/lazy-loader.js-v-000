"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
//number of cars
var cars = 0;
$.ajax({
  url: baseUrl,
  contentType: 'application/json',
  dataType: 'jsonp',
  success: function(data) {
    cars = data.length;
  }
});
var rows = cars / 3;
var rowsCurrent = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var htmlOne = '<div class="row">';
  for(var i = 0; i < 3; i ++){
    htmlOne += '<div class="col-md-4 car">';
    htmlOne += "<h2>" + carsJSON[i]["Make"] + "</h2>";
    htmlOne += "<p><strong>" + "Model:</strong> " + carsJSON[i]["Model"] + "</p>";
    htmlOne += "<p><strong>Year:</strong> " + carsJSON[i]["Year"] + "</p>";
    htmlOne += "</div>";
  }
  htmlOne += "</div>";
  return htmlOne;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var currentUrl = baseUrl + rowsCurrent + "/3";
  rowsCurrent++;

  $.ajax({
    url: currentUrl,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    },
    error: function(response){
      $('body').text("Sorry, there was an error.");
    }
  });
}
