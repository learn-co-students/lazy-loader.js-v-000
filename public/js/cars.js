"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 3

function formatCars(carsJSON) {


  var data = carsJSON;
  var html = ""
  html += '<div class="row">'
  for (var i = 0; i < data.length; i ++) {
    html += '<div class="col-md-4 car"><h2>'
    html += data[i].Make
    html += '</h2><p><strong>Model:</strong> '
    html += data[i].Model
    html += '</p><p><strong>Year:</strong> '
    html += data[i].Year
    html += '</p></div>'
  }
  html += '</div>'
  debugger
  return html

        
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  var format = formatCars(carsJSON)
  $('#cars').append(format)
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
 
  var newUrl = baseUrl + counter + "/3"
  $.ajax({
        url: newUrl,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          
          addCarsToDOM(data);
          counter += 1
        }
       
      });
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()


 //'<div class='row'><div class="col-md-4 car"><h2>Dodge</h2><p><strong>Model:</strong> Avenger</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4 car"><h2>Nissan</h2><p><strong>Model:</strong> Maxima</p><p><strong>Year:</strong> 2009</p></div><div class="col-md-4 car"><h2>Subaru</h2><p><strong>Model:</strong> Impreza WRX</p><p><strong>Year:</strong> 2013</p></div></div>'
 //'<div class="row"><div class="col-md-4 car"><h2>Dodge</h2><p><strong>Model:</strong> Avenger</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4 car"><h2>Nissan</h2><p><strong>Model:</strong> Maxima</p><p><strong>Year:</strong> 2009</p></div><div class="col-md-4 car"><h2>Subaru</h2><p><strong>Model:</strong> Impreza WRX</p><p><strong>Year:</strong> 2013</p></div></div>'.
}







