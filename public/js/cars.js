"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var count = 3;


// [{"Make":"Honda","Model":"Accord","Year":"1998"},{"Make":"Audi","Model":"A4","Year":"2012"},{"Make":"Mercedes-Benz","Model":"C-Class","Year":"2014"}]
function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var html = '<div class="row">';
  $.each(carsJSON, function(index, value){
    html+='<div class="col-md-4 car">';
    html+='<h2>';
    html+=value['Make'];
    html+='</h2>';
    html+='<p><strong>Model:</strong> ';
    html+=value['Model'];
    html+='</p>';
    html+='<p><strong>Year:</strong> ';
    html+=value['Year'];
    html+='</p>';
    html+='</div>';
  });
  html+='</div>';
  return html;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  count ++;
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  var url = baseUrl+count+"/3";

      $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data){
          addCarsToDOM(data);
        }
      });

}