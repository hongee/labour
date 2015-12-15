$(document).foundation();
$(document).ready(function() {
  var resizeIsFired = false;

  $('#fullpage').fullpage({
    autoScrolling: true,
    fitToSection: false
  });

  $('#arrow-down').click(function(){
    $.fn.fullpage.moveTo(2);
  });

  $('.feat-btn').click(function(){
    $.fn.fullpage.moveTo(2,0);
  })

  $('.album-btn').click(function(){
    $.fn.fullpage.moveTo(2,1);
  })

  $('.essay-btn').click(function(){
    $.fn.fullpage.moveTo(2,2);
  })

  $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-item'
  });

  $(window).on('k-resize', function() {
    if(!resizeIsFired) {
      resizeIsFired = true;
      setTimeout(function(){
        console.log("called rebuild");
        $.fn.fullpage.reBuild();
        resizeIsFired = false
      }, 600);
    }
  });


});
