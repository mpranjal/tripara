var $ = require('jquery');
var moment = require('moment');

function DatePick(){
    
    $(function(){

      var start_date = null, end_date = null;
      var timestamp_start_date = null, timestamp_end_date = null;
      var input_start_date = null, input_end_date = null;

      var options_start_date = {
          numberOfMonths: 2,
          showOtherMonths: true,

          beforeShowDay: function(date) {
             date = moment(date);

             var now = moment(),
                 show = date.isAfter(now),
                 css = '';
                 
             if (input_start_date && input_end_date 
                 && date.isSameOrAfter(input_start_date)
                 && date.isSameOrBefore(input_end_date)) {
               css = 'ui-datepicker-reserved';

               if (date.isSame(input_start_date)) css += ' ui-datepicker-checkin';
               if (date.isSame(input_end_date)) css += ' ui-datepicker-checkout';
             }
              return [show, css];
           },

           onSelect: function(value) {
             var date = moment($input_start_date.datepicker('getDate'));

             if (input_start_date && !input_end_date && date.isSameOrAfter(input_start_date)) 
               input_end_date = date;
             else {
               input_start_date = date; 
               input_end_date = null;
             }
            },

             onClose: function(){
               if(start_date != null && end_date == null)
                 $input_end_date.datepicker("show");
             }
         
       };

      var options_end_date = {
          numberOfMonths: 2,
          showOtherMonths: true,
          beforeShowDay: function(date) {
             date = moment(date);

             var now = moment(),
                 show = date.isAfter(now),
                 css = '';

             if (input_start_date && input_end_date 
                 && date.isSameOrAfter(input_start_date)
                 && date.isSameOrBefore(input_end_date)) {
               css = 'ui-datepicker-reserved';

               if (date.isSame(input_start_date)) css += ' ui-datepicker-checkin';
               if (date.isSame(input_end_date)) css += ' ui-datepicker-checkout';
             }
              return [show, css];
           },

         // onSelect: function(date_string, datepicker){
         //   start_date = $input_start_date.datepicker("getDate");
         //   timestamp_start_date = start_date.getTime();
         // },
         // onClose: function(){
         //   if(start_date != null && end_date != null)
         //     input_end_date.datepicker("show");
         // },

         onSelect: function(value) {
           var date = moment($input_end_date.datepicker('getDate'));

           if (input_start_date && !input_end_date
               && date.isSameOrAfter(input_start_date)) 
             input_end_date = date;
           else {
             input_start_date = date;
             input_end_date = null;
           }
           // $('#end-date').val(input_end_date ? input_end_date.format('DD/MM/YYYY') : 'Choose a date');
         }

         
       };
      
      $input_start_date = $("#start-date");
      $input_end_date = $("#end-date");
      $input_start_date.datepicker(options_start_date);
      $input_end_date.datepicker(options_end_date);


      });

   

}

module.exports = DatePick;
 
  