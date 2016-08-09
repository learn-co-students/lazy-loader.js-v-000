"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
	//var carsJSON = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];
    //console.log(carsOneJSON[0]["Make"]);
    //var htmlOne = '<div class="row"><div class="col-md-4 car"><h2>Dodge</h2><p><strong>Model:</strong> Avenger</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4 car"><h2>Nissan</h2><p><strong>Model:</strong> Maxima</p><p><strong>Year:</strong> 2009</p></div><div class="col-md-4 car"><h2>Subaru</h2><p><strong>Model:</strong> Impreza WRX</p><p><strong>Year:</strong> 2013</p></div></div>';
   	var htmlOutput = "<div class=\"row\">";
    for(var i = 0; i < carsJSON.length; i++){
    	htmlOutput += "<div class=\"col-md-4 car\"><h2>"+carsJSON[i]["Make"]+"</h2><p><strong>Model:</strong> "+carsJSON[i]["Model"]+"</p><p><strong>Year:</strong> "+carsJSON[i]["Year"]+"</p></div>";
    }
    return htmlOutput+"</div>";
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  $("div #cars").append(formatCars(carsJSON));
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  console.log(baseUrl+"3/3");
  var url = baseUrl+"3/3";

      $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          console.log(data);
          addCarsToDOM(data);
        }
      });
}




