
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 2;

function formatCars(carsJSON) {
  var bootstrappedCars = '<div class="row">';
  carsJSON.forEach(function(car) {
    bootstrappedCars += `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`;
  });

  return bootstrappedCars += '</div>';
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
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}
