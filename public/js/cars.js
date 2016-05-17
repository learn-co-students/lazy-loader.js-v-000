"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars( carsJSON ) {
  var row = [];

  row.push( '<div class="row">' );
  for (var i = 0; i < carsJSON.length; i++) {
    row.push( '<div class="col-md-4 car">' );
    row.push( '<h2>' + carsJSON[i]["Make"] + '</h2>' );
    row.push( '<p><strong>Model:</strong> ' + carsJSON[i]['Model'] + '</p>' );
    row.push( '<p><strong>Year:</strong> ' + carsJSON[i]['Year'] + '</p>' );
    row.push( '</div>' );
  }
  row.push( '</div>' );

  return row.join('');

}

function addCarsToDOM( carsJSON ) {
  $( '#cars' ).append( formatCars( carsJSON ) );
}

function fetchJSON() {
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/3/3";

  $.ajax( {
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function ( carsJSON ) {
      addCarsToDOM( carsJSON );
    }
  } );
}
