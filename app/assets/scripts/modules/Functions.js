var $ = require('jquery');



function Functions() {

	$(function(){
		var viewportHeight = $("body").innerHeight();
		$('.large-hero__image').css("height",  viewportHeight+ 'px');
    });

	$(function(){
		$('.check').datepicker({
			dateFormat: ' d MM yy'
		});
		
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

   $(function(){

	   $("#advSearchBtn").click(function(){
	       if($(this).html() == "-"){
	           $(this).html("+");
	           $(".showBox").hide();
	          }
	       else{
	           $(this).html("-");
	           $(".showBox").show();
	       }
	      

	   });

   })

}

module.exports = Functions;