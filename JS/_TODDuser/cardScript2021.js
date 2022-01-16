//MAKE ABSOLUTELY SURE YOU HAVE 
// VELOCITY
// LOADED IN 
// YOUR DOC!!!


/*WINDOW VARIABLES*/
// var winWidth = $(window).width();
// var winHeight = $(window).height();


// if (winWidth < 768) {

	// $('.imgCap').hover(function(){
	// 	// alert('hovered');
	// 	$('this img.picBig').velocity('fadeIn', {duration: 500}
	// 		);
	// });


	$('.card-body').hide();

	var cardBtn = $('.OVERLAY button');
	cardBtn.on('click tap', toggleDown);

	function toggleDown(event) {

		var thisCard = $('.card-body');
		var thisId = this.id;
		var thisClass = $(thisCard).hasClass(thisId);
		var thisDropdown = $('.card-body.' + thisId)
	// alert(thisId);

	// THE FIRST makessure all "card-body" are slideUp
	
	thisCard.velocity("slideUp", { duration: 200, easing: 'easeIn'});
	// THE SECOND drops down the specific one you want to show.
	thisDropdown.velocity("slideDown", { duration: 200, easing: 'easeOut'});
};

$('.closer').on('click tap', function(){
	$('.card-body').velocity("slideUp", { duration: 200, easing: 'easeIn'});
});


// }

