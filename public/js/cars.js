"use strict";

// this is the base API url
var base = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var cars = carsJSON
  var html = '<div class="row">'
  for (var i = 0; i < cars.length; i++) {
     html += '<div class="col-md-4 car"><h2>'+ cars[i].Make
     html += '</h2><p><strong>Model:</strong> ' + cars[i].Model
     html += '</p><p><strong>Year:</strong> ' + cars[i].Year
     html += '</p></div>'
   }
   html += "</div>"
   return html
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  return $("#cars").append(formatCars(carsJSON));
}


var page = 2;
function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM() 
  page += 1;
   var url = base + page + '/3';
   debugger;
   $.ajax({
     url: url,
     contentType: 'application/json',
     dataType: 'jsonp',
     success: function(data) {
       addCarsToDOM(data);
       page += 1
     }
   });

}