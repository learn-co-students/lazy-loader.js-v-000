"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  $("#load-cars").click(function(){
  	console.log("load cars button has been clicked");
  	fetchJSON();
  })
});