"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
	var string;
	carsJSON.forEach(function(element) {
		string += '<div class="row"><div class="col-md-4 car"><h2>' + element.Make + '</h2><p><strong>Model: </strong>' + element.Model + '</p><p><strong>Year: </strong>' + element.Year + '</p></div>'
	});
	return string;
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
	var cars = formatCars(carsJSON);
	$("#cars").append(cars);
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
	var carsToGet = $('.car').length/3 + 1
	$.ajax({
		url: baseUrl + carsToGet + '/3',
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function(data){
			addCarsToDOM(data)
		}
	})
}