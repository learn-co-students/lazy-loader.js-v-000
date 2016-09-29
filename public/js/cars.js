"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var count = 3;

function formatCars(carsJSON) {
  var string = '<div class="row">';
  for (var count = 0; count < carsJSON.length; count++) {
    var make = carsJSON[count].Make;
    var model = carsJSON[count].Model;
    var year = carsJSON[count].Year;
    var addition = '<div class="col-md-4 car"><h2>' + make + '</h2><p><strong>Model:</strong> ' + model + '</p><p><strong>Year:</strong> ' + year + '</p></div>';
    string += addition;
  }
  return string + '</div>';
}

function addCarsToDOM(carsJSON) {
  var new_html = formatCars(carsJSON);
  $('#cars').append(new_html);
}

function fetchJSON() {
  var new_url = baseUrl + count + "/3/";
  count ++;
  $.ajax({url: new_url, 
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}