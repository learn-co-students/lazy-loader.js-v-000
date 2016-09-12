"use strict";

$(document).ready(function() {
  $.ajax({
       url: url,
       contentType: 'application/json',
       dataType: 'jsonp',
       success: function(data) {
         var price = data["LastPrice"];
         $("#netflix-price").html("$" + price);
       }
     });
  // add click listener here
  // it should call on fetchJSON()
});
