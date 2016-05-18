"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  $('button#load-cars').on('click', fetchJSON);
});


//'<div class='row'><div class="col-md-4 car"><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4 car"><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class="col-md-4 car"><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>'
//'<div class="row"><div class="col-md-4 car"><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4 car"><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class="col-md-4 car"><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>'
