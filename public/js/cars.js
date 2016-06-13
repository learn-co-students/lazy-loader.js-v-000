'use strict';

var baseUrl = 'http://mimeocarlisting.azurewebsites.net/api/cars/',
    pageNum = 3;

function formatCars(carsJSON) {
  var html = '<div class="row">';
  $.each(carsJSON, function (index, car) {
    html += '<div class="col-md-4 car">';
    html += '<h2>' + car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    html += '</div>';
  });
  html += '</div>';
  return html
}

function addCarsToDOM(carsJSON) {
  var carsHTML = formatCars(carsJSON);
  $('#cars').append(carsHTML);
}

function fetchJSON() {
  var url = baseUrl + pageNum + '/3';
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function (data) {
      addCarsToDOM(data);
    },
    error: function (err) {
      $('#cars').html(err.statusText);
    }
  });
  pageNum += 1;
}
