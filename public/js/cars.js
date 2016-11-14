"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var html = '<div class="row">';

  $.each(carsJSON, function(index, car) {
    html += '<div class="col-md-4 car">';
    html += '<h2>' + car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    html += '</div>';
  });

  html += '</div>';
  return html;

  // var html = '<div class="row">';
  // for (var i = 0; i < carsJSON.length; i++) {
  //   html += '<div class="col-md-4 car">';
  //   html += '<h2>' + carsJSON[i].Make + '</h2>';
  //   html += '<p><strong>Model:</strong> ' + carsJSON[i].Model + '</p>';
  //   html += '<p><strong>Year:</strong> ' + carsJSON[i].Year + '</p>';
  //   html += '</div>';
  // }
  // html += "</div>";
  // return html;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var newHTML = formatCars(carsJSON);
  $('#cars').append(newHTML);
  // $('div#cars').append(newHTML);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + pageNumber + '/3';
  pageNumber += 1;

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    },
    error: function(response) {
      $('body').text("Error. Please try refreshing the page.")
    }
  });
}