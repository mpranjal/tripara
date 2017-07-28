var Person = require("./modules/Person");
// var jquery-cycle = require("./modules/JqueryCycle");
var GLV = require("./modules/gridlistview");
var Functions = require("./modules/Functions");
var jqueryUI = require("./vendors/jqueryUI");
var Bootstrap = require("./vendors/Bootstrap");

// var jqueryCycle = new JqueryCycle();
var bs = new Bootstrap();
var jui = new jqueryUI();
var functions = new Functions();
var glv = new GLV();
var john = new Person("john");
john.greet();

