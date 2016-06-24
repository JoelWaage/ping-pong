var ping = '';
var result = '';


var pongList = function(ping) {
  if (ping  > 0) {
    for (var i = 01; i <= ping; i++) {
      console.log(i)
    }
  }
}



$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();
    ping = parseInt($("input#ping").val());
    result = pongList(ping);



  });
});
