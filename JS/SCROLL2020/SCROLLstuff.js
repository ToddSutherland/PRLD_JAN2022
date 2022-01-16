

	// alert('loaded');

	// if (jQuery.ui) {
		 //UI loaded
		 //alert('jquery UI loaded');
	// }

	// ADD A ROW AROUND THE LOGO ON TABLET
	// if ($('window').width() > 768 && < 1199) {
	// 	$('#logoBlock').addClass('row');
	// }

	// SCROLLBUTTON ACTIONS UNIVERSAL
	$(window).scroll(function() {
		// alert('scrolling...')
		var winScroll = $(this).scrollTop();
		var navOffset = $('#pgNavbar').offset().top;

		if (winScroll > (navOffset -40)) {
			$('#navContain').addClass('fixTop'); 
		} else {
			$('#navContain').removeClass('fixTop');
		};
	});


	// NAVIGATION SMOOTHE SCROLL 
	$('nav ul li a[name]').click(function(event){
		event.preventDefault();
		// var thisTag = $(this).text();
		var thisTag = '#' + $(this).attr('name');
		// alert(thisTag);
		$(thisTag).velocity("scroll", { offset: -100, mobileHA: false });
	});


	// MOBILE PHONE ONLY LESS THAN 768px
	if ($(window).width() < 768) {
		$('.nav li a').click(function(){
			console.log('clicked');
			$('.side-collapse').toggleClass('in');
		});

		$(window).scroll(function() {

			// alert('scrolling...')
			var winScroll = $(this).scrollTop();
			var navOffset = $('#pgNavbar').offset().top;

			if (winScroll > navOffset) {
				$('#navContain').addClass('fixTop'); 
			} else {
				$('#navContain').removeClass('fixTop');
			};
		});
	}


	// LARGE-VIEW MONITORS
	if ($(window).width() >= 768) {

		$(window).scroll(function() {
		// various SCROLLING EVENTS AND FUNCTIONS:
		var winScroll = $(this).scrollTop();
		if (winScroll > 50){
					// alert ('do something now');
					$('#winTop').fadeIn();
				} else {
					// alert ('back to top');
					$('#winTop').fadeOut();
				};
			}); 
		// END OF SCROLL FADE

		// SHOW/HIDE APP ICON
		$('#appBtn').click(function(){
			// alert('this connects ok')
			$('#appTile').slideToggle()
		});
	}
	// END OF LARGE-VIEW SCRITPS


	// UNIVERSAL ANIMATION (SEE FADE-IN/OUT SCRIPT ABOVE)
	$('#winTop').click(function(){
		// alert('wintop clicked');
		$('body').animate({scrollTop:0}, '500', 'swing'/*, function() { 
			alert("Finished animating");}*/);
	});





// --------------NOTHING BELOW THIS BRACKET ---------------\\
