"use strict";

var count = 3;

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
 
  var formatted = '<div class="row">';
  $.each(carsJSON, function(index, name) {
    formatted += '<div class="col-md-4 car"><h2>';
    formatted += name["Make"];
    formatted += '</h2><p><strong>Model:</strong> ';
    formatted += name["Model"];
    formatted += '</p><p><strong>Year:</strong> ';
    formatted += name["Year"];
    formatted += '</p></div>';
  });

  formatted += "</div>";
  return formatted;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var row = formatCars(carsJSON); 
  $('#cars').append(row);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/" + count + "/3";
  count++;

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });


}
