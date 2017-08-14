var $ = require('jquery');


function FilterList(){
 
   // $(function(){

   // 		$('#destination').on('focus', function() {
   // 		    $('#location').show();
   // 		}).on('blur', function() {
   // 		    $('#location').hide();
   // 		});

   // 		$('.filterBoxList-item').on('mousedown', function(event) {
   // 		    event.preventDefault();
   // 		}).on('click', '.filterBoxList-label', function() {
   // 		    $('#destination').val(this.textContent).blur();
   // 		});

   // });

   $(function(){

	   	$('#passengertype').on('focus', function() {
	   	    $('#passenger').show();
	   	})
	   	.on('blur', function() {
	   	    $('#passenger').hide();
	   	});

	   	$('.passenger-count').on('mousedown', function(event) {
	   	    event.preventDefault();
	   	    $('.passenger-count ').on('click', 'li', function(){
	   	    	console.log($(this).text());
	   	     $('#passengertype').val(this.textContent + ' passenger');
	   	    });
	   	    // console.log(a);	


	   	})
	   	.on('click', '.passenger-count ', function() {
	   	   $('#passengertype').val(this.textContent).blur();
	   	    
	   	    // $('#passengertype').val(this.textContent).blur();
	   	});

	   	$('#reset').on('mousedown', function(){
	   		event.preventDefault();
	   		$('#passengertype').val('');;
	   	})

   })


}

module.exports = FilterList;
 
  