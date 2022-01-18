
// from "rick" at codepen 2022

$("navbarResponsive ul li a").on("hover", function() {
	if ($("nav#main-nav").hasClass("nav-fade")) {
		$("nav#main-nav").removeClass("nav-fade");
	} else {
		$("nav#main-nav").addClass("nav-fade");
	}
});

$(".navbar-nav li a").on("click", function() {
	if (!$(this).hasClass("dropdown-toggle")) {
		$(".navbar-collapse").collapse("hide");
		if ($("#main-nav").hasClass("nav-fade")) {
			$("#main-nav").removeClass("nav-fade");
		}
	}
});

$(document).click(function(e) {
	if ($("nav#main-nav").hasClass("nav-fade")) {
		if ($(e.target).closest("nav#main-nav").length === 0) {
			$("nav#main-nav").removeClass("nav-fade");
			$(".collapse").collapse("hide");
		} else {
			return;
		}
	}
});

// original
/*$("button#mainMenu").on("click", function() {
	if ($("nav#main-nav").hasClass("nav-fade")) {
		$("nav#main-nav").removeClass("nav-fade");
	} else {
		$("nav#main-nav").addClass("nav-fade");
	}
});

$(".navbar-nav li a").on("click", function() {
	if (!$(this).hasClass("dropdown-toggle")) {
		$(".navbar-collapse").collapse("hide");
		if ($("#main-nav").hasClass("nav-fade")) {
			$("#main-nav").removeClass("nav-fade");
		}
	}
});

$(document).click(function(e) {
	if ($("nav#main-nav").hasClass("nav-fade")) {
		if ($(e.target).closest("nav#main-nav").length === 0) {
			$("nav#main-nav").removeClass("nav-fade");
			$(".collapse").collapse("hide");
		} else {
			return;
		}
	}
});*/