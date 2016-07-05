"use strict";


var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 3;

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, val) {
    html+= "<div class=\"col-md-4 car\">";
    html+= "<h2>" + val.Make + "</h2>";
    html+= "<p><strong>Model:</strong> " + val.Model + "</p>";
    html+= "<p><strong>Year:</strong> " + val.Year + "</p>";
    html+= "</div>";
  });
  html+= "</div>";
  return html;
}

function addCarsToDOM(carsJSON) {
  var string = formatCars(carsJSON);
  $("div#cars").append(string);
}

function fetchJSON() {
var url = baseUrl + pageNum + "/3";
  $.ajax({
    url: url,
    contentType: "application/json",
    dataType: "jsonp",
    success: function(data) {
        pageNum+=1;
        addCarsToDOM(data);
    }
  });

}
