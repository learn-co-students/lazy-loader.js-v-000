"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3; 

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
    var div = '<div class="row">';
  $.each(carsJSON, function(index, car){
    div += '<div class="col-md-4 car">';
    div += '<h2>' + car.Make + "</h2>";
    div += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    div += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    div += '</div>';
  });
  return div + "</div>";
}

/* 
 <div class="row">
          <div class="col-md-4 car">
            <h2>Chevrolet</h2>
            <p><strong>Model:</strong> Tahoe</p>
            <p><strong>Year:</strong> 2012</p>
          </div>
          <div class="col-md-4 car">
            <h2>Toyota</h2>
            */ 



function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
    $('#cars').append(formatCars(carsJSON))
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
    $.ajax({
      url: baseUrl + page + "/3/",
      dataType: 'jsonp'
    })
    .done(function(cars){
    addCarsToDOM(cars);
    page++;
  });

}