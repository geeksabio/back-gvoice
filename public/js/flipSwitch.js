$('#ADB').click(function(event){
	if($(this).hasClass('on')){
		$('#circle').css('background-color','rgba(0, 0, 0, 0.298039)');
        $('#circle').css({'-webkit-transform':'rotateZ(0deg)','-moz-transform':'rotateZ(0deg)'});
        $('#circle').css('box-shadow','0px -2px 30px inset, rgba(75, 209, 81, 0.3) 0px 1px 50px, rgba(67, 226, 46, 0.3) 0px 0px 50px');
		 
        $('#sCircle').css('box-shadow','0 0 50px rgba(40,219,255,0.2) inset,0 0 50px rgba(0,0,0,0.1) inset');
				
						
		
        $(this).removeClass('on');
    }
	else{
		$(this).addClass('on');
		$('#circle').css('background-color','rgba(255,61,87,0.4)');
        $('#circle').css({'-webkit-transform':'rotateZ(90deg)','-moz-transform':'rotateZ(90deg)'});
        $('#circle').css('box-shadow','0 -2px 30px rgba(0,0,0,0.1) inset,0 1px 50px rgba(255,61,87,0.4),0 0px 50px rgba(255,61,87,0.8)');
        $('#sCircle').css('box-shadow','0 0 50px rgba(255,61,87,0.5) inset,0 0 50px rgba(0,0,0,0.4) inset');
				 		
	}
});