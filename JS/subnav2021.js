// $('#PORTFOLIO').hover(function() {
// 	var myDiv = $('.subMenuItems');
// 	console.log(this);
// 	$('.subMenuItems').velocity('transition.slideUpIn', { delay: 0, duration: 500,});
// 	$('.figureGrid >').velocity('transition.slideUpIn', { delay: 500, duration: 400, stagger: 100}); 
// 	myDiv.clearQueue();
// 	myDiv.stop();
// });


// $('.subMenuItems li').click(function() {
// 	var myDiv = $('.subMenuItems');
// 	$('.subMenuItems').velocity('transition.slideDownOut', { delay: 0, duration: 300})
// 	myDiv.clearQueue();
// 	myDiv.stop();
// })

  // Add slideDown animation to Bootstrap dropdown when expanding.
  // $('.dropdown').on('show.bs.dropdown', function() {
  // 	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  // });

  // // Add slideUp animation to Bootstrap dropdown when collapsing.
  // $('.dropdown').on('hide.bs.dropdown', function() {
  // 	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  // });

  /*DROPDOWN HOVER*/
  $('ul.navbar li a.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });