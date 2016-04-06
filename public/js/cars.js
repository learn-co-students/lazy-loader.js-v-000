"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
// var arr
var arr2
var counter = counter || 2

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var arr = carsJSON.map(function(item) {
    
         return  "<div class='col-md-4 car'>" +
            "<h2>" + item["Make"] + "</h2>" +
            "<p><strong>Model: </strong>" + item["Model"] + "</p>" +
            "<p><strong>Year: </strong>" + item["Year"] + "</p>" +
            "</div>"
  })
  return "<div class='row'>" + arr.join(",")
}

function addCarsToDOM(carsJSON) {
  // formatCars(carsJSON);
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  $("#cars .row:last").after(formatCars(carsJSON))
  // problem is each time i click, it returns the same ones.  fetch JSON problem
}


function fetchJSON(counter) {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
          // url: "http://mimeocarlisting.azurewebsites.net/api/cars/2/6",
          url: "http://mimeocarlisting.azurewebsites.net/api/cars/" + counter + "/6",

          contentType: 'application/json',
          dataType: 'jsonp',
          success: function(data) {
          addCarsToDOM(data);
          }
        });
}