var $ = require('jquery');
// var autocomplete = require( "jquery-ui/ui/widgets/slider" );

function Functions() {

	$(function(){
		$('.check').datepicker();	
	});

	$(function() {
			$('.range-slider').slider({
				range:true,
				min:0,
				max:1500,
				values:[0,1200],
				slide: function( event, ui ) {
	                  $( ".min" ).html( "$" + ui.values[ 0 ]);
	                  $(".max").html("$" + ui.values[ 1 ]);
	               }
			});

		$(".min").html("$" + $(".range-slider").slider("values", 0)  );
		$(".max").html("$" + $(".range-slider").slider("values", 1)  );
	});	

	$(function(){
		$('.slider').slider({
			min:0,
			max:10,
			value:6.5
			// animate: false;
		});
	});
}

module.exports = Functions;