$(document).ready(function() {
    
    "use strict";
    
    $('.summernote').summernote({
	  height: 350
	});
    
    $('.date-picker').datepicker({
        orientation: "top auto",
        autoclose: true
    });
    
    $('#cp1').colorpicker({
        format: 'hex'
    });
    $('#cp2').colorpicker();
    
    var input = $('#timepicker1').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
});