"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  //var carsArray = carsJSON["ArrayOfCarModel"];
  var htmlString = '<div class="row">';

  $.each(carsJSON,function(index, carInfo) {
    htmlString += '<div class="col-md-4 car">'
    //debugger;
    htmlString += '<h2>' + carInfo["Make"] + '</h2>';
    htmlString += '<p><strong>Model:</strong> ' + carInfo["Model"] + '</p>';
    htmlString += '<p><strong>Year:</strong> ' + carInfo["Year"] + '</p>';
    htmlString += '</div>'
  })

  htmlString += '</div>'
  return htmlString;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var htmlString = formatCars(carsJSON)
  $('#cars').append(htmlString);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  var nextRow = $('#cars .row').length + 1;
  var url = baseUrl + nextRow + "/3";

  $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data);
        }
      });
}
