
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 2;

function formatCars(carsJSON) {
  var html = '<div class="row">';
  carsJSON.forEach(function(car) {
    html += '<div class="col-md-4 car">';
    html += '<h2>' + car.Make + '</h2>';
    html += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    html += '<p><strong>Year:</strong> ' + car.Year + '</p></div>';
  });

  return html += '</div>';
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON));
}

function fetchJSON() {
  counter++;
  $.ajax({
    url: baseUrl + counter + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(carsJSON) {
      addCarsToDOM(carsJSON);
    }
  });
}
