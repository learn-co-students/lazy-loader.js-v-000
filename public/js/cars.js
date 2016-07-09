"use strict";

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;
}

function addCarsToDOM(carsJSON) {
  var carsHTML = formatCars(carsJSON);
  $("#cars").append(carsHTML);
}

function createURL(){
  var rows = $('#cars .row').length + 1;
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/" + rows + "/" + 3;
  return url;
}
function fetchJSON() {
  $.ajax({
    url: createURL(),
    contentType: "applicaton/JSON",
    dataType: "jsonp",
    success: function(data){
      addCarsToDOM(data)
    }

  });
}