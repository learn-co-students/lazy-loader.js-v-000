"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var load = 2;

function formatCars(carsJSON) {
  var data = '<div class="row">';
  for (var i = 0; i < carsJSON.length; i++){
    data += '<div class="col-md-4 car"><h2>' + carsJSON[i]['Make'] + "</h2>"
    data += "<p><strong>Model:</strong> " + carsJSON[i]['Model'] + "</p>"
    data += "<p><strong>Year:</strong> " + carsJSON[i]['Year'] + "</p></div>"
  }
  data += "</div>";
  return data;
}

function addCarsToDOM(carsJSON) {
  var change = formatCars(carsJSON);
  $('#cars').append(change); 
}


function fetchJSON() {
  load += 1;
  $.ajax({
    url: baseUrl + load + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}