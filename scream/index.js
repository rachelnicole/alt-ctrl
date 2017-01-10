var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var mic = new five.Sensor("A0");
  var rgb = new five.Led.RGB([6, 5, 3]);
  var index = 0;
  var startColor = "8F00FF"
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  var level = 0;

  mic.scale(0,10).on("data", function() {
    level = Math.round(this.value);
    console.log(level);
  })

  rgb.intensity(10);

  this.loop(50, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    if (level > 4) {
      rgb.color(rainbow[index]);
    } else {
      rgb.color(startColor);
    }
    index++;
  });
});