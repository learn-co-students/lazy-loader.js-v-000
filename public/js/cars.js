"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";

  $.each(carsJSON, function(i, item) {
    html += "<div class='col-md-4 car'>";
    html += "<h2>" + item.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + item.Model + "</p>";
    html += "<p><strong>Year:</strong> " + item.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"

  return html;
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON(url) {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  $.ajax(url, {
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}

function loadMoreCars(){
  var page = 3
  var url = `${baseUrl}${page}/3`
  page += 1;

  fetchJSON(url);
}
