"use strict";
var pageNumber = 3;
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var htmlString = '<div class="row">';
function formatCars(carsJSON) {
  htmlString = '<div class="row">';
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  // $('div#cars').append("<div></div>");
  // $('div#cars div').last().addClass('row');
  // iterate 3 times.... to get 3 columns of cars...
  // $('div#cars div').last().append('<div></div>');
  // $('div#cars div div').last().addClass('col-md-4').addClass('car');
  // $('div#cars div div').last().append(car brand);
  // $('div#cars div div').last().append(<p><strong>Model:</strong> modelName</p>);
  // $('div#cars div div').last().append(<p><strong>Year:</strong> year</p>);
  // return $('div#cars div').last().html();
  carsJSON.forEach(function(car, index){
    htmlString = htmlString + '<div class="col-md-4 car"><h2>'+car.Make+'</h2><p><strong>Model:</strong> '+car.Model+'</p><p><strong>Year:</strong> '+car.Year+'</p></div>';
  })
  htmlString = htmlString + '</div>';
  return htmlString;
}

function addCarsToDOM(carsJSON) {
  var html = formatCars(carsJSON);
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  $('div#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: baseUrl + pageNumber + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  })
  pageNumber = (parseInt(pageNumber) + 1).toString();
}
