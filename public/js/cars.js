"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var carLoadIndex = 3;

function formatCars(carsJSON) {
	var cars = [];
	var attributes;
	var carsString = [];
	
	carsJSON.forEach(function(car) { 
		attributes = [];
		for ( var key in car ) {
			attributes.push(car[key]);
		};
		cars.push(attributes);
	});

	for (var i = 0; i < cars.length; i++) {
		carsString.push('<div class="col-md-4 car"><h2>' + cars[i][0] + '</h2><p><strong>Model:</strong> ' +
			cars[i][1] + '</p><p><strong>Year:</strong> ' + cars[i][2] + '</p></div>');
	};

	return '<div class="row">' + carsString.join("") + '</div>';

}

function addCarsToDOM(carsJSON) {
	var formattedString = formatCars(carsJSON);
	$('div#cars').append(formattedString);
}

function fetchJSON() {
	$.ajax({
		url: baseUrl + carLoadIndex + "/3",
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function(data) {	addCarsToDOM(data); }
	});
	carLoadIndex += 1;
}

