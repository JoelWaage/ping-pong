var ping = '';
var result = [];


var pongList = function(ping) {
  if (ping  > 0) {
    for (var i = 01; i <= ping; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        result.push("ping-pong")
      } else if (i % 3 === 0) {
        result.push("ping");
      } else if (i % 5 === 0) {
        result.push("pong");
      } else {
        result.push(i);
      }
    }
  }
}



$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();
    ping = parseInt($("input#ping").val());
    pongList(ping);

    for (var i = 0; i <= result.length; i++) {
      $("#result").append("<li>" + result[i] + "</li>")
    }



  });
});
