var $ = require("jquery");

function GLV()
{
	var grid = $('#grid');
	var list = $('#list');

	grid.click( function() {
		  // console.log('ok');
		  $('main > div').removeClass('col-lg-12');
		  $('main > div').addClass('col-lg-6');
		  $('main').removeClass('list');
		  $('main').addClass('grid');
	});

	list.click( function() {
	  // console.log('ok');
	  $('main > div').removeClass('col-lg-6');
	  $('main > div').addClass('col-lg-12');
	  $('main').removeClass('grid');
	  $('main').addClass('list');

	});
}

module.exports = GLV ;