"use strict";


var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {

  var cars = carsJSON
  var carStrings = $.map(cars, function(car, index) {
    return  "<h2>" + car["Make"] + "</h2>" + "<p><strong>" + "Model:" + "</strong>" + " " + car["Model"] + "</p>" + "<p><strong>" + "Year:" + "</strong>" + " " + car["Year"] + "</p>"
  })

  var carDivs = $.map(carStrings, function(car, index) {
    return '<div class="col-md-4 car">' + car + "</div>"
  })

  var wrappedCars = '<div class="row">' + (carDivs.join("")) + "</div>"
  return wrappedCars
}

function addCarsToDOM(carsJSON) {

  var cars = formatCars(carsJSON)
  $('div#cars .row').last().after(cars)

}

function fetchJSON() {

  var counter = $('div.row').length
  $.ajax({
    url: baseUrl + counter + '/3', 
    contentType: 'application/json',
    dataType: 'jsonp', 
    success: function(data) {
      var carsJSON = data;
      addCarsToDOM(carsJSON);
    }
  })
}







