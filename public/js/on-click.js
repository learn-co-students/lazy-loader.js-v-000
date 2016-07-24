"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  var button = document.getElementById('load-cars');
  
  button.addEventListener('click', function() {
    fetchJSON();
  });
});