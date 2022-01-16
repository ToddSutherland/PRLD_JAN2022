
/*MOBILE SPLASH BUTTONS*/
$("#mobiSplash .cntct").click(function(){
	// alert("click target");
	$("#mobiSplash").velocity("fadeOut", "normal")
	.removeClass('d-flex').addClass('d-none'); 
});