 "use strict";

 /*WINDOW VARIABLES*/
 var winWidth = $(window).width();
 var winHeight = $(window).height();



 //----------- DESKTOP SPECIFIC -------------
 if (winWidth > 1024) {

     //--------- RESIZE WINDOW FUNCTION -------*/
     // $(window).resize(resizedw);

     /*-----main nav and footer BUTTONS------*/
     $("#wrk, #bio, #friends").click(function() {
         $("#nameTag").removeClass('giddyUp'); //TRANSITION VALUE IN THE CSS FILES
         $("#pageFooter").removeClass('footerUp'); //TRANSITION VALUE IN THE CSS FILES
         $('#pageFooter .content').fadeOut(1000);
       });

     /* var thumbBoxHeight = $('section#myWork .thumbPanel').outerHeight();
     var thumbHolder = $('section#myWork .thumbPanel #displayBoxes').outerHeight();*/
     /*alert(thumbBoxHeight + ' ' + thumbHolder);*/

     // ----------EXPANDING FOOTER (NOT USED HERE) -------------
     $("#contact, #nameTag").click(function() {
         $("#nameTag").toggleClass('giddyUp'); //TRANSITION VALUE IN THE CSS FILES
         $("#pageFooter").toggleClass('footerUp'); //TRANSITION VALUE IN THE CSS FILES
         $('#pageFooter .content').fadeToggle(1000);
       });

     //------------------MORE BUTTON-------------------------
     /*if ($('ul#displayBoxes').position().top < (-($('ul#displayBoxes').outerHeight()))) {
      alert('you have reached the bottom');
    }*/
    $('#pageHead').height((winHeight * 0.14));
     // $('section').height((winHeight * 0.75));
     // $('section').css({'marginBottom': (winHeight * 0.14)});
     // $('section#myWork').offset({top:(winHeight * .14)});
     $('#wrapper').css({ 'marginTop': (winHeight * 0.14) });
     // ---------- WINDOW SCROLL FUNCTIONS ------------
     $(window).scroll(function() {
       var vertScroll = $(this).scrollTop();
       if (vertScroll > ($(window).height() / 1.2)) {}

         //----------WINDOW SCROLL FUNCTIONS---------------------
         // if(vertScroll > $('#contactForm').offset().top - ($(window).height() / 3)) {
         //   $('#contactForm #form').animate({opacity:1});
         // } 
     }); //---------END OF WINDOW SCROLL FUNCTIONS--------------

     // section scrolltop stuff
     $('#wrk').on('click', function() {
       var navClick = $('#myWork');
       navClick.velocity("scroll", { offset: -(winHeight * 0.14), mobileHA: false });
     });
     $('#bio').on('click', function() {
       var navClick = $('#myBio');
       navClick.velocity("scroll", { offset: -(winHeight * 0.14), mobileHA: false });
         // why does this offest have to be different? LOOK AT CSS!!!
       });
     $('#contact').on('click', function() {
       var navClick = $('#contactForm');
       navClick.velocity("scroll", { offset: -(winHeight * 0.14), mobileHA: false });
     });
     $('#friends').on('click', function() {
       var navClick = $('#myPeeps');
       navClick.velocity("scroll", { offset: -(winHeight * 0.14), mobileHA: false });
     });
   }


 // MOBILE AND TABLET SPECIFIC  
 //   //MAKE SURE NOT TO USE "mobileHA: false" on mobile devices!
 //   if (winWidth < 768) { //TABLET WIDTH 2020 BOOTSTRAP 4

 //     // REMOVE MOBILE OVERLAY WITH THIS SCRIPT.
 //     // remember, velocity doesn't remove the item, jut visibility, 
 //     // so you have to add jquery add/remove class...
 //     $("button.cntct").click(function(){
 //       // alert("click target");
 //       $("#mobiSplash").velocity("fadeOut", 800).removeClass('d-flex').addClass('d-none'); 
 //     });

 //   var mobileWinHeight = $(window).height();//rather than window height in this case

 //     //-------------- CLICK FOR SOCIAL ICONS ------------------
 //     $('.UIitems li#SOCIAL').on('click tap',function() {
 //       $('#socIcons').fadeToggle(400);
 //         //alert('clicked')
 //       });
 //     $('#socIcons ul li').on('click',function(){
 //       $('#socIcons').velocity('fadeOut', {duration: 200});
 //     });
 //     //-------------- END SOCIAL ICONS ------------------

 //     $('section#myWork').offset({top:(mobileWinHeight * 0.012)});  
 //     $('#pageHead').height((mobileWinHeight * 0.19));
 //     $('#nameTag').height((mobileWinHeight * 0.12));
 //     // $('#mainNav ul li:nth-child(4), #mainNav ul li:nth-child(5)').css('display', 'none');

 //  // ---------- section scrolltop stuff ----------- 
 //  $('#wrk').on('click',  function(){
 //    $('#myWork').velocity("scroll", {offset: -(mobileWinHeight * 0.19)});
 //  });
 //  $('#bio').on('click',function(){
 //    $('#myBio').velocity("scroll", {offset: -(mobileWinHeight * 0.19)});
 //  });
 //  $('#friends').on('click',function() {
 //    $('#myPeeps').velocity("scroll", {offset: -(mobileWinHeight * 0.19)});
 //  });
 // }





 //TABLET SPECIFIC 
 //MAKE SURE NOT TO USE "mobileHA: false" on mobile devices!
 // if (winWidth >= 600 && winWidth <= 1024) {

 //   //-------------- CLICK FOR SOCIAL ICONS ----------CHECKED------------
 //   $('#contactUs .UIitems li#SOCIAL a').on('click tap',function() {
 //     $('#socIcons').fadeToggle(400);
 //   });

 //   $('#socIcons ul li').on('click',function(){
 //     $('#socIcons').velocity('fadeOut', {duration: 200});
 //   });
 //   $('section#myWork').offset({top:(winHeight * 0.15)});
 //   $('#pageHead').height((winHeight * 0.15));
 //   $('#nameTag').height((winHeight * 0.09));
 //   $('section').height((winHeight * 0.75));
 //   // $('#mainNav ul li:nth-child(4), #mainNav ul li:nth-child(5)').css('display', 'none');

 // // ---------- WINDOW SCROLL FUNCTIONS ------------
 // $(window).scroll(function(){
 //   var vertScroll = $(this).scrollTop();
 //   if(vertScroll > ($(window).height() / 1.2)) {
 //   }
 // });

 // //var topOffset = $(window).height() * .12;

 //   // section scrolltop stuff
 //   $('#wrk').on('click',  function(){
 //    $('#myWork').velocity("scroll", { offset: -(winHeight * 0.15), mobileHA: true});
 //  });
 //   $('#bio').on('click',function(){
 //    $('#myBio').velocity("scroll", { offset: -(winHeight * 0.15), mobileHA: true}); /*-topOffset*/
 //  });
 //   $('#friends').on('click',function() {
 //    $('#myPeeps').velocity("scroll", { offset: -(winHeight * 0.15), mobileHA: true});
 //  });
 // }//END OF TABLET SPECIFIC



 /*///////// ALL NAVIGATION STUFF FROM toddsutherland.com ///////*/

 //--------------MAIN NAV (DIFFERENT FOR EACH DEVICE)------------
 //THIS MAY CONFLICT WITH BOOTSTRAP, and has beencommented out
 // $('#mainNav .content ul li').on('click tap',function() {
 //   $('#mainNav .content ul li').removeClass('navActive');
 //   $(this).addClass('navActive');
 // });

 // --------------SUBNAV ACTIVE SWITCH ----------------
 $('#PFOsubNav.subNav ul li').click(function() {
  alert("subnav clicked");
  $('nav.subNav ul li').removeClass('navActive');
  $(this).addClass('navActive');
});

 //----------------NAVIGATION-------------------
 var navBtn = $('nav.subNav ul li');

 navBtn.on('click', showBoxes);

 function showBoxes() {
     // var tempScrollTop = $(window).scrollTop();//captures the window scrolltop value

     var descrip = $(this).attr('title');
     $('#asideContent p.intro').html(descrip);

     var selection = $(this).attr('class'); //gets the id selector from the nav items...
     var listItems = $('#displayBoxes ul li');
     listItems.hide();
     var thumbArray = $('#displayBoxes ul li.' + selection); //establishes the list items that have a class name concurrent with the nav button evoking them

     //THIS WORKS, BUT NOW IDENTIFY WHY IT WORKS! 
     //do a version using VELOCITY JS...
     thumbArray.each(function(i) {
       var item = $(this);
       setTimeout(function() { item.fadeIn(300); }, 40 * (i + 1));
     });
   }

   /*PRELOADER SCRIPTS*/
   $('#preloader').velocity('fadeOut', { duration: 400 }),
   $('#allContent').delay(1000).velocity('fadeIn', { duration: 400 });