"use strict";

$(document).ready(function() {
  $('button#load-cars').on("click", function(event) {
    fetchJSON();
    event.preventDefault();
  });
});
