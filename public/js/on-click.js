"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  loadClick();
});

function loadClick() {
  $("#load-cars").click(fetchJSON);
}
