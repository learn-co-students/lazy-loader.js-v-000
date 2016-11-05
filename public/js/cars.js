"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
var html = '<div class="row">';
  for(var i = 0; i < carsJSON.length; i++){
    var make = carsJSON[i]['Make'];
    var model = carsJSON[i]['Model'];
    var year = carsJSON[i]['Year'];
    html += '<div class="col-md-4 car">';
    html += '<h2>' + make + '</h2>';
    html += '<p><strong>Model:</strong> ' + model + '</p>';
    html += '<p><strong>Year:</strong> ' + year + '</p>';
    html += '</div>';
  }
 html += '</div>';
 return html;
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
  var num = $('#cars .row').length + 1;
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/" + num+ "/3";
  $.ajax({
    url:url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}
