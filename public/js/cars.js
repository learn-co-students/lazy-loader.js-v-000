"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;


function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;  
  // return `<div class="col-md-4 car"><h2>${carsJSON[0]['Make']}</h2><p><strong>Model:</strong> ${carsJSON[0]['Model']}</p><p><strong>Year:</strong> ${carsJSON[0]['Year']}</p></div>
  // <div class="col-md-4 car"><h2>${carsJSON[1]['Make']}</h2><p><strong>Model:</strong> ${carsJSON[1]['Model']}</p><p><strong>Year:</strong> ${carsJSON[1]['Year']}</p></div>
  // <div class="col-md-4 car"><h2>${carsJSON[2]['Make']}</h2><p><strong>Model:</strong> ${carsJSON[2]['Model']}</p><p><strong>Year:</strong> ${carsJSON[2]['Year']}</p></div>`

}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  var carsHtml = formatCars(carsJSON);
  // add the resulting HTML to the div with an id of "cars"
  $("#cars").append(carsHtml);
}

function fetchJSON() {
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
  // //   $.ajax({
//     url: `${baseUrl}${page}/3`,
//     contentType: 'application/json',
//     dataType: 'jsonp',
//     success: addCarsToDOM
//   });
//   // this function will make the ajax call
//   // on success of the ajax call, it will pass the returned data
//   // to addCarsToDOM()
// }
}