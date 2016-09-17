"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNumber = 3

function formatCars(carsJSON) {
  let html = '<div class="row">'
  $.each(carsJSON, function(index, car) {
    html += '<div class="col-md-4 car">'
    html += `<h2>${car.Make}</h2>`
    html += `<p><strong>Model:</strong> ${car.Model}</p>`
    html += `<p><strong>Year:</strong> ${car.Year}</p>`
    html += '</div>'
  })
  html += '</div>'
  return html
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON))
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + pageNumber + '/3/';
  pageNumber += 1
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data)
    }
  });
}