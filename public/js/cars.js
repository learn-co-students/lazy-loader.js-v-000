'use strict';

// this is the base API url
var baseUrl = 'http://mimeocarlisting.azurewebsites.net/api/cars/';
var numCars = 3;
var carsPage = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class 'col-md-4', in a 
  // div with a class 'row'

	function makeCar(car) {
		var colStart = '<div class="col-md-4 car">';
		var carMake = '<h2>' + car.Make + '</h2>';
		var carModel = '<p><strong>Model:</strong> ' + car.Model + '</p>';
		var carYear = '<p><strong>Year:</strong> ' + car.Year + '</p>';
		return colStart + carMake + carModel + carYear +'</div>';
	}
	var car0 = makeCar(carsJSON[0]);
	var car1 = makeCar(carsJSON[1]);
	var car2 = makeCar(carsJSON[2]);

	var rowStart = '<div class="row">';
	return rowStart + car0 + car1 + car2 + '</div>';
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of 'cars'
  var newCars = formatCars(carsJSON);
  $('div#cars').append(newCars);
}

function fetchJSON() {
	
	var url = baseUrl + carsPage + '/' + numCars;
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  	$.ajax({
  		url: url,
  		contentType: 'application/JSON',
  		dataType: 'jsonp',
  		success: function(data) {
  			carsPage += 3;
  			addCarsToDOM(data);
  		}
  	});
}