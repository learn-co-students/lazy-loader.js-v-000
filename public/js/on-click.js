"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  function clickListener(){
    $('#load-cars').on("click", fetchJSON);
  }

  clickListener();
});