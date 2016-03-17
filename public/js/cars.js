"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var nextPage = 2;
function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  //var obj = carsJSON;
  var html = '';
  $.each(carsJSON, function( key, car ) {
    html += '<div class="col-md-4 car">';
    html += '<h2>'+car.Make+'</h2>';
    html += '<p><strong>Model:</strong> '+ car.Model+'</p>';
    html += '<p><strong>Year:</strong> '+ car.Year+'</p>';
    html += '</div>';
  });
  return '<div class="row">'+html+'</div>';
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  //alert("inside addCarsToDOM");
  var cars = formatCars(carsJSON);
  $("#cars").append(cars)
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var numberOfCars = 6;
  nextPage += 1;
  var url = baseUrl+nextPage+"/"+3;
      $.ajax(url, {
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data)
        }
      });
}
