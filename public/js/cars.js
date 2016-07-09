"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var html = '<div class="row">';
  $.each(carsJSON, function(index, name) {
    html += '<div class="col-md-4 car">'
    html += '<h2>' + name.Make + '</h2>'
    html += '<p><strong>Model:</strong> ' + name.Model + '</p>'
    html += '<p><strong>Year:</strong> ' + name.Year + '</p>'
    html += '</div>'
  })
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
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
    url: url,
    success: function(result) {
      addCarsToDOM(result);
    },
    dataType: 'jsonp'
  })
}

// A very gross way of making things work
// var car1 = carsJSON[0];
// var car2 = carsJSON[1];
// var car3 = carsJSON[2];
// $('#cars').append('<div class="row">\n<div class="col-md-4 car">\n<h2>' + car1.Make + '</h2>\n<p><strong>Model:</strong> ' + car1.Model + '</p>\n<p><strong>Year:</strong> ' + car1.Year + '</p></div>\n<div class="col-md-4 car">\n<h2>' + car2.Make + '</h2>\n<p><strong>Model:</strong> ' + car2.Model + '</p>\n<p><strong>Year:</strong> ' + car2.Year + '</p>\n</div>\n<div class="col-md-4 car">\n<h2>' + car3.Make + '</h2>\n<p><strong>Model:</strong> ' + car3.Model + '</p>\n<p><strong>Year:</strong> ' + car3.Year + '</p>\n</div>\n</div>');
