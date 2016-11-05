"use strict";

var nextPage = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var newCarsHtml = '<div class="row">';
  carsJSON.forEach(function(car){
  	console.log(car);
  	newCarsHtml += '<div class="col-md-4 car"><h2>' + car["Make"] + '</h2><p><strong>Model:</strong> ' + car["Model"] + '</p><p><strong>Year:</strong> ' + car["Year"] + '</p></div>';
  });
  newCarsHtml += '</div>';
  console.log(newCarsHtml);
  return newCarsHtml;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  console.log(carsJSON);
  var newCarsHtml = formatCars(carsJSON);
  $("#cars").append(newCarsHtml);
}

function fetchJSON() {
	// this is the base API url
	var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
  	url: baseUrl + nextPage + "/3",
  	contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
 		addCarsToDOM(data);
 		nextPage++;
 		console.log(nextPage)
    }
  });
}

function onLoadCarsClick() {
	$("#load-cars").on("click", function(event) {
		fetchJSON();
	});
}