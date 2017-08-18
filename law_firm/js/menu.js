
if(window.matchMedia('(max-width: 767px)').matches)
{
  // do functionality on screens smaller than 768px

$(document).ready(function() {
  $("body").on("click", "#toggle", function() {
    setTimeout(function() {
      if ($("nav ul").is(":hidden")) {
        $('nav ul').fadeIn();
      }
    }, 100);
  });

  $("body").on("click touchmove", function(e) {
    if ($(e.target).closest("nav ul").length) return;
    $("nav ul").fadeOut();
    e.stopPropagation();
  }); 
  
      $('#toggle').click(function (e) {
    e.preventDefault()
    /*dome code here*/       
  });  
      
}); 
}