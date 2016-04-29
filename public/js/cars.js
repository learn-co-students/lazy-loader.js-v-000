"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {

var cars_html = '<div class="row">'

$.each(carsJSON, function(index, car){

  cars_html += '<div class="col-md-4 car">'
  cars_html += '<h2>'+ car.Make +'</h2>'
      cars_html += '<p><strong>Model:</strong> ' + car.Model + '</p>'
      cars_html += '<p><strong>Year:</strong> ' + car.Year + '</p>'
    cars_html += '</div>'
});
  cars_html += '</div>'

return cars_html;
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {

  $('#cars').append( formatCars(carsJSON) );


  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

var i = 3
function fetchJSON() {
  $.ajax({
    url: baseUrl + i +'/3',
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      i++;
      addCarsToDOM(data);

    },
    error: function(resp){
      $('body').text(resp);
    }
  });

  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
