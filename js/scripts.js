var ping = '';
var result = '';


var pongList = function(ping) {
  if (ping  > 0) {
    for (var i = 01; i <= ping; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("ping-pong")
      } else if (i % 3 === 0) {
        console.log("ping");
      } else if (i % 5 === 0) {
        console.log("pong");
      } else {
        console.log(i);
      }
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
