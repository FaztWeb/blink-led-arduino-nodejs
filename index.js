const { Board, Led } = require('johnny-five');
let myBoard, myLed;

myBoard = new Board();

myBoard.on('ready', function() {

  myLed = new Led(13);
  myLed.strobe(2000);
  // make the led available as "myNewLed" in REPL
  this.repl.inject({
    myNewLed: myLed
  });

  // try these methods: "on()", "off()"
  // "stop()", "strobe(timeToStrobe)"

});

myBoard.on('error', function (err) {
  console.log(err);
});
