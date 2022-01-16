

 // NAVIGATION SMOOTHE SCROLL
 $('ul.navbar-nav li a[name]').click(function(event){
 	event.preventDefault();
		// var thisTag = $(this).text();
		var thisTag = '#' + $(this).attr('name');
		// alert(thisTag);
		$(thisTag).velocity("scroll", { 
			offset: -120, 
			easing: "easeOutQuad",
			duration: 800, 
			mobileHA: false 
		});
	});