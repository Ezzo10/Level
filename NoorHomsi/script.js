// const imgMenu = document.querySelector(".img_menu");
// const navLinks = document.querySelector(".nav_links");

// imgMenu.addEventListener("click", () =>{
//     navLinks.classList.toggle('mobile-menu')
// })


$( function() {
  $( "#inputCheclin" ).datepicker();
  $( "#inputCheclout" ).datepicker();

  $('.level-slider').slick({
    dots: true,
    slidesToShow: 2,
    slideToScroll: 1,
    arrow: true,
  });

  function videoToggle(){
    video = $('.level-video').get(0)
    if(video.paused){
      video.play();
    $('.video-control-play').hide();
    $('.video-control-pause').show();
      
    }else{
      video.pause();
      $('.video-control-play').show();
      $('.video-control-pause').hide();
    }
  }

  $('.video-control-play').click(function(){
    videoToggle();
  });
  $('.video-control-pause').click(function(){
    videoToggle();
  })
  
} );

