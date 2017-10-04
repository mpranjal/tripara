var $ = require('jquery');


function FilterList(){

	$(function(){

	   	$('#passengertype').on('focus', function() {
	   	    $('#passenger').show();
	   	})
	   	.on('blur', function() {
	   	    $('#passenger').hide();
	   	});

	   	$('.passenger-count').on('mousedown', function(event) {
	   	    event.preventDefault();
	   	    $('.passenger-count ').on('click', 'div.radios label', function(){
	   	    	// console.log($(this).text());
	   	     $('#passengertype').val(this.textContent + ' passenger');
	   	     // $('#passengertype').val(this.textContent + ' passenger').blur();

	   	    });
	   	    // console.log(a);	


	   	})
	   	.on('click', '.passenger-count ', function() {
	   	   $('#passengertype').val(this.textContent);
	   	});

	   	$('#reset').on('mousedown', function(){
	   		event.preventDefault();
			   $('#passengertype').val('');
			//    $('input[type=radio]').attr('checked','false');

	   	})

   })


}

module.exports = FilterList;
 
  