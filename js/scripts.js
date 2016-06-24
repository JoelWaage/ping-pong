var ping = '';






$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();
    ping = parseInt($("input#ping").val());
    alert(ping);


  });
});
