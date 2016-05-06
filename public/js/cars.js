"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var rowCount = 3; //starting with rows 1-2 already present

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 32 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"


  var htmlCars = '<div class="row">';

  $.each(carsJSON, function(index){
    htmlCars += ('<div class="col-md-4 car">');
    htmlCars += ('<h2>' + this.Make + '</h2>');
    htmlCars += ('<p><strong>Model:</strong> ' + this.Model + '</p>');
    htmlCars += ('<p><strong>Year:</strong> ' + this.Year + '</p>');
    htmlCars += ('</div>');
  });

  htmlCars += ('</div>');

  return htmlCars;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var carsHTML = formatCars(carsJSON);
  $('#cars').append(carsHTML);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var requestURL = baseUrl + rowCount + '/3';
  $.ajax({
    url:requestURL,
    dataType:'JSONP',
  })
  .done(function(carsJSON){
    addCarsToDOM(carsJSON)
  })
  .fail(function(e){
    console.log(e.statusText, rowCount);
  });
  rowCount++;
}
