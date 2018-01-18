"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
    
    var rowFront = '<div class="row">';
    var rowBack = '</div>';
    var carHtml;
    var finalcarHtml;
    
    $.each(carsJSON, function(index, carFacts){
      carHtml += '<div class="col-md-4 car">';
      carHtml += '<h2>' + carFacts.Make + '</h2>';
      carHtml += '<p><strong>Model: </strong>' + carFacts.Model + '</p>';
      carHtml += '<p><strong>Year: </strong>' + carFacts.Year + '</p>';
      carHtml += '</div>';
      //if((index + 1) % 3 === 0){
      finalcarHtml = rowFront + carHtml + rowBack;
      //}
      //else {
      });
    
    return finalcarHtml;
  }

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var addRow = $('#cars .row').length + 1;

  var carUrl = baseUrl + addRow + "/3";

  $.ajax({
    url: carUrl, 
    contentType: 'application/json',
    dataType: 'jsonp', 
    success: function(data){
      addCarsToDOM(data);
    }
  });

}