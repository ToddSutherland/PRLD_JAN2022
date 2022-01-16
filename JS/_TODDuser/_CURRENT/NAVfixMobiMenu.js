
// this is an attempt to fix the 

// MOBILE MONITORS

if ($(window).width() < 768) {
	// console.log("target found");
	$(".nav-item a").click(funtcion(){
		alert("clicked");
		$(".navbar-collapse").removeClass(".show");
		$("button.navbar-toggler").addClass(".collapsed");
	})
};