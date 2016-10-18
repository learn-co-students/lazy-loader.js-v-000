"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var count = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var string = "<div class=\"row\">";
  $.each(carsJSON, function(i, car){
    string += "<div class=\"col-md-4 car\"><h2>";
    string += car.Make + "</h2><p><strong>Model:</strong> ";
    string += car.Model + "</p><p><strong>Year:</strong> ";
    string += car.Year + "</p></div>";
  })
  string += "</div>";
  return string;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    type: 'GET',
    url: baseUrl + count + '/3',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
      count++;
    },
    error: function() {
      alert('error loading orders');
    }
  });

}
