"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

function formatCars(carsJSON) {

  var html = '<div class="row">';
  for (var i=0; i < carsJSON.length;i++){
    html += '<div class="col-md-4 car"><h2>' + carsJSON[i]["Make"] + '</h2><p><strong>Model:</strong> ' + carsJSON[i]["Model"] + '</p><p><strong>Year:</strong> ' + carsJSON[i]["Year"] + '</p></div>';
  }
  return html + '</div>';
}


function addCarsToDOM(carsJSON) {
   $('div#cars').append(formatCars(carsJSON));

}

function fetchJSON() {
   $.ajax({
    url: baseUrl + pageNumber + "/3",
     contentType: 'application/json',
     dataType: 'jsonp',
     success: function(data) {
       addCarsToDOM(data);
     }
   });
        pageNumber = pageNumber + 1;

}