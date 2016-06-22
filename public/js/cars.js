"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var current_page = 3

function formatCars(carsJSON) {
  var template = carsJSON.map(function(car){
    return '<div class="col-md-4 car"><h2>'+car["Make"]+'</h2><p><strong>Model:</strong> ' + car["Model"] + '</p><p><strong>Year:</strong> ' + car["Year"] + '</p></div>'
  }).join("");
  return '<div class="row">'+template+'</div>';

}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON))
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + current_page.toString() +"/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(result){
      addCarsToDOM(result);
      current_page ++;
    }
  });

  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
