// alert("SERVICES LOADED");

// ----------------
$('p:contains(Peter Raarup Landscape Design)')



servBTN = $('.OVERLAY button');

$('#servBlockTxt .copyStuff.DESIGN').removeClass('hidden');

servBTN.click(servCopy); 

function servCopy(event){
	// event.preventDefault();

	var servID = this.id;//$(event.target).attr("id");
	// alert(servID);
	
	var textHolder = $('#servBlockTxt');
	
	var copyStuff = $('.copyStuff');//.html();
	// copyStuff.addClass('hidden');

	var descrip = $('.copyStuff.' + servID)//.html();

	// copyStuff.velocity("fadeOut", { duration: 500 });

	copyStuff.hide();

	descrip.velocity("fadeIn", { duration: 1000 });

}; 

