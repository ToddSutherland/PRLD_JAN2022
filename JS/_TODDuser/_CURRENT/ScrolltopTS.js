// alert('wintop btn');

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('#winTop').fadeIn();
	} else {
		$('#winTop').fadeOut();
	}
});
// scroll body to 0px on click
$('#winTop').click(function () {
	$('#winTop').tooltip('hide');
	$('body,html').animate({
		scrollTop: 0
	}, 1200);
	return false;
});

// $('#winTop').tooltip('show');

