"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var n = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

 var html = '<div class="row"><div class="col-md-4 car"><h2>' + carsJSON[0].Make + '</h2><p><strong>Model:</strong> '+carsJSON[0].Model+'</p><p><strong>Year:</strong> '+carsJSON[0].Year+'</p></div><div class="col-md-4 car"><h2>'+carsJSON[1].Make+'</h2><p><strong>Model:</strong> '+carsJSON[1].Model+'</p><p><strong>Year:</strong> '+carsJSON[1].Year+'</p></div><div class="col-md-4 car"><h2>'+carsJSON[2].Make+'</h2><p><strong>Model:</strong> '+carsJSON[2].Model+'</p><p><strong>Year:</strong> '+carsJSON[2].Year+'</p></div></div>';
 return html;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  $("#cars").append(formatCars(carsJSON));

}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  var newURL = baseUrl + n + '/3';
  n+=1

  $.ajax({
  	url: newURL,
  	dataType: 'jsonp',
  	success: function(results){
  		addCarsToDOM(results);
  	},
  	error: function(error){
  		$('body').text('Error!');
  	}
  });
}