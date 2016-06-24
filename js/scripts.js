var ping = '';
var result = [];


var pongList = function(ping) {
  result = [];
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
  } else if (ping === 0) {
    alert("I need more than ZERO!!")
  } else  if (ping < 0){
    alert("Negative Ping-Pong Makes No Sense, Man!!")
  } else {
    alert("We're looking for a number here...a POSITIVE number")
  }
}



$(document).ready(function() {
  $("form#blank").submit(function(event) {
    $("#result").empty();
    event.preventDefault();
    ping = parseInt($("input#ping").val());
    pongList(ping);

    for (var i = 0; i <= result.length - 1; i++) {
      $("#result").append("<li>" + result[i] + "</li>");
    }

    $("#blank").trigger("reset");

  });
});
