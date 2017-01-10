var five = require("johnny-five");
var board = new five.Board();
var robot = require("robotjs");

board.on("ready", function() {
  var buttons = new five.Buttons({
    pins: [2, 3, 4, 5, 6],
    invert: true,
  });

  buttons.on("press", function(button) {
    console.log("Pressed: ", button.pin);

    if (button.pin === 2) {
      robot.keyToggle("x", "down");
    }
    if (button.pin === 3) {
      robot.keyToggle("z", "down");
    }
    if (button.pin === 4) {
      robot.keyToggle("right", "down");
    }
    if (button.pin === 5) {
      robot.keyToggle("down", "down");
    }
    if (button.pin === 6) {
      robot.keyToggle("left", "down");
    }
  });

  buttons.on("release", function(button) {
    console.log("Released: ", button.pin);

    if (button.pin === 2) {
      robot.keyToggle("x", "up");
    }
    if (button.pin === 3) {
      robot.keyToggle("z", "up");
    }
    if (button.pin === 4) {
      robot.keyToggle("right", "up");
    }
    if (button.pin === 5) {
      robot.keyToggle("down", "up");
    }
    if (button.pin === 6) {
      robot.keyToggle("left", "up");
    }
  });
});