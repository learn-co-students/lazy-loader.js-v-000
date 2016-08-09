"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var number = 3;

function formatCars(carsJSON) {
  var carsArray = [];
  carsArray.push('<div class="row">')

  for (var i = 0; i < carsJSON.length; i++) {

      carsArray.push('<div class="col-md-4 car">')
      var make = carsJSON[i]["Make"]
      var model = carsJSON[i]["Model"]
      var year = carsJSON[i]["Year"]
      carsArray.push("<h2>" + make + "</h2><p><strong>Model:</strong> " + model + "</p>" + "<p><strong>Year:</strong> " + year + "</p>")
      carsArray.push("</div>")
  }
  carsArray.push("</div>")
  return carsArray.join("");
}


function addCarsToDOM(carsJSON) {
  var result = formatCars(carsJSON)

  $('#cars').append(result)
}

function fetchJSON() {
  var url = baseUrl + number + "/3";
  number += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
        addCarsToDOM(data)
    }
  });
}
