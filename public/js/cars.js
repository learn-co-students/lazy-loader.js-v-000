"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var newCarsArray = [];    

  $.each(carsJSON, function(index, car) { 
    newCarsArray.push(`
            <div class="col-md-4 car">
            <h2>${car['Make']}</h2>
            <p><strong>Model: </strong>${car['Model']}</p>
            <p><strong>Year: </strong>${car['Year']}</p>
            </div>
           `)
  });
  return newCarsArray.join("");
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"  
  $('#cars').append(`<div class="row">${formatCars(carsJSON)}</div>`);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: `${baseUrl}${pageNum}/3/`,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });    
  pageNum++;
}

$(document).ready(function() {
  
})