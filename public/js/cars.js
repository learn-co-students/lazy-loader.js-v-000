"use strict";

// this is the base API url
var pageNumber = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + pageNumber + "/3";
  pageNumber += 1;
  

  $.ajax({
    url: url,
    contentType: "application/json",
    dataType: "jsonp",
    success: function(data){
      addCarsToDOM(data)
    }
  });
}

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  //formatting

  var html = "<div class=\"row\">"
    $.each(carsJSON, function(index, value){
      html += "<div class=\"col-md-4 car\">";
      html += "<h2>" + value.Make + "</h2>";
      html += "<p><strong>Model:</strong> " + value.Model + "</p>";
      html += "<p><strong>Year:</strong> " + value.Year + "</p>"; 
      html += "</div>"
     })
    html += "</div>"
    return html

   //        <div class="row">
   //          <div class="col-md-4 car">
   //            <h2>Chevrolet</h2>
   //              <p><strong>Model:</strong> Tahoe</p>
   //              <p><strong>Year:</strong> 2012</p>
   //          </div>

}

function addCarsToDOM(carsJSON) {
  var formattedHTML = formatCars(carsJSON)
  $("#cars").append(formattedHTML)
}