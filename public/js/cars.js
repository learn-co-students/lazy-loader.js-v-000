"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 2

function formatCars(carsJSON) {
  var html = '<div class="row">';
  for (var i = 0; i < carsJSON.length; i++){
    html += '<div class="col-md-4 car"><h2>' + carsJSON[i]['Make'] + "</h2>"
    html += "<p><strong>Model:</strong> " + carsJSON[i]['Model'] + "</p>"
    html += "<p><strong>Year:</strong> " + carsJSON[i]['Year'] + "</p></div>"
  }
  html += "</div>";
  return html;
}

function addCarsToDOM(carsJSON) {
  var html = formatCars(carsJSON);
  $('#cars').append(html); 
}

function fetchJSON() {
  page += 1;
  $.ajax({
    url: baseUrl + page + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    },
    error: function(response){
      $('body').text('Error!');
    }
  });
}
