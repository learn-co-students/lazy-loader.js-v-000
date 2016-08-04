"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var carsTemplate;

// function handlebarsSetup() {
//   //put any handlebars setup in here
//   carsTemplate = Handlebars.compile($('#cars-template').html());
//   Handlebars.registerPartial("carDetails", $("#car-details-partial").html());
// }

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  carsTemplate = Handlebars.compile($('#cars-template').html());
  Handlebars.registerPartial("carDetails", $("#car-details-partial").html());
  var context = {cars: carsJSON};
  return carsTemplate(context);
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var set = ($('.car').length/3) + 1;
  var url = baseUrl + set + '/3';
   $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: addCarsToDOM
    });
}