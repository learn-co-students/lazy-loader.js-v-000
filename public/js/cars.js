"use strict";

// // var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars";
// // var page=1;
// //
// // function formatCars(cars) {
// //   $('#load-cars').click(function(){
// //     page +=1;
// //     var url = baseUrl + page + "/3"
// //     $.getJSON(url, function(cars){
// //       $.each(cars, function(i, car){
// //       $('#cars').append($("<div class='row'>"+`<h2>${car.make}</h2><p>${car.model}</p><p>${car.year}</p>`+"</div>"));
// //       });
// //     });
// //   });
// //
// //   console.log(page);
// // }
// //
// // function addCarsToDOM(cars) {
// //   // this function should pass carsJSON to formatCars() and then
// //   // add the resulting HTML to the div with an id of "cars"
// // }
// //
// // function fetchJSON() {
// //   // this function will make the ajax call
//   // on success of the ajax call, it will pass the returned data
//   // to addCarsToDOM()
// }
//
//
// var pageNum = 3;
// var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
//
// function formatCars(cars) {
//   var hmtl =[];
//   $.each(cars, function(i, car) {
//     // html += "<div class=\"col-md-4 car\">";
//     // html += "<h2>" + car.Make + "</h2>";
//     // html += "<p><strong>Model:</strong> " + car.Model + "</p>";
//     // html += "<p><strong>Year:</strong> " + car.Year + "</p>";
//     // html += "</div>";
//     html.push("<div class='row'>"+`<h2>${car.make}</h2><p>${car.model}</p><p>${car.year}</p>`+"</div>");
//   });
//   return html.to_string();
// }
//
// function addCarsToDOM(cars) {
//   var carsHTML = formatCars(cars);
//   $("#cars").append(carsHTML);
// }
//
// function fetchJSON() {
//   $('#load-cars').click(function(){
//
//     var url = baseUrl + pageNum + "/3";
//     pageNum += 1;
//     $.ajax({
//       url: url,
//       contentType: 'application/json',
//       dataType: 'jsonp',
//       success: function(cars) {
//         addCarsToDOM(cars);
//       },
//       error: function(response) {
//         $('body').text("Sorry, there was an error with the request. Please refresh the page.")
//       }
//     });
//
//   }
// }
var pageNumber = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(cars) {
  var html = "<div class=\"row\">";
  $.each(cars, function(index, car) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;
    // var html =[];
    // $.each(cars, function(i, car) {
    //   // html += "<div class=\"col-md-4 car\">";
    //   // html += "<h2>" + car.Make + "</h2>";
    //   // html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    //   // html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    //   // html += "</div>";
    //   // "<div class='row'>"
    //   // html.push("<div class='col-md-4 car'>\n"+`<h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p>`+"</div>\n");
    // });
    // var newHtml = html.join(' ');
    // return "<div class='row'>\n" + newHtml + "</div>";
}

function addCarsToDOM(cars) {
  var carsHTML = formatCars(cars);
  $("#cars").append(carsHTML);
}

function fetchJSON() {
  var url = baseUrl + pageNumber + "/3";
  pageNumber += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
}
