var jQuery = require("./vendors/jquery");
var Person = require("./modules/Person");
var GLV = require("./modules/gridlistview");
var Functions = require("./modules/Functions");
var jqueryUI = require("./vendors/jqueryUI");
var Bootstrap = require("./vendors/Bootstrap");
// var HTML2CANVAS = require("./vendors/HTML2CANVAS");
var test = require("./test");
var DatePick = require("./modules/DatePick");
var FilterList = require("./modules/FilterList");
var BS_Function = require("./modules/BS_Function");


// var HTML2CANVAS = new HTML2CANVAS();
var jQuery = new jQuery();
var bsf = new BS_Function();
var filterList = new FilterList();
var datepick = new DatePick();
var test = new test();
var bs = new Bootstrap();
var jui = new jqueryUI();
var functions = new Functions();
var glv = new GLV();
var john = new Person("john");
john.greet();

