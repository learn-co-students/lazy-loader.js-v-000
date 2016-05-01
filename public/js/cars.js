"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var carsPage = 3;

function formatCars(carsJSON) {
  var output = "";
  output += '<div class="row">';

	  for (var i = 0 ; i < 3 ; i++) {
	  	output += '<div class="col-md-4 car">';
			  output += '<h2>';
			  	output += carsJSON[i]["Make"];
			  output += '</h2>';
			  output += '<p><strong>Model:</strong> ';
			  	output += carsJSON[i]["Model"];
			  output += '</p>';
			  output += '<p><strong>Year:</strong> ';
			  	output += carsJSON[i]["Year"];
			  output += '</p>';
		  output += '</div>';

	  }

  output += '</div>';

  return output;
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
  var url = baseUrl + carsPage + "/3";
  carsPage ++;
  $.ajax({
  	url: url,
  	contentType: 'application/javascript',
  	dataType: 'jsonp',
  	success: function(data) {
  		addCarsToDOM(data);
  	}
  });
}