

// --------------SUBNAV ACTIVE SWITCH ----------------
$('#displayBoxes li').hide();

navBtn = $('nav#PFOsubNav li');
navBtn.on("click tap", showBoxes);


/*SHOWBOXES FUNCTION*/
function showBoxes(event) {
  /*CHANGES THE COLOR OF THE NAV ITEM ON CLICK*/
  $('nav.subNav ul li').removeClass('navActive');
  $(event.target).addClass('navActive');

  // alert(event.target.id);
  var thisItem = (event.target.id);

  var descrip = $(event.target).attr("title");
  $('#asideContent p').text(descrip);

    var selection = $(event.target).attr('id'); //gets the id selector from the nav items...
    var listItems = $('#displayBoxes li');

    listItems.hide();
    var thumbArray = $('#displayBoxes li.' + thisItem); //establishes the list items that have a class name concurrent with the nav button evoking them
    
  //   //THIS WORKS, BUT NOW IDENTIFY WHY IT WORKS! 
  //   //do a version using VELOCITY JS...
  thumbArray.css('display', 'flex');
  thumbArray
  .velocity({ opacity: 0 }, 50)
  .velocity("transition.fadeIn", { stagger: 100 })
  .delay(200);
};


/*PRELOADER SCRIPTS*/
// $('#preloader').velocity('fadeOut', { duration: 400 }),
// $('#allContent').delay(1000).velocity('fadeIn', { duration: 400 });