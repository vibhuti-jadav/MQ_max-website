
$('.single-item').slick({
  
  autoplay:true,
  autoplaySpeed: 2000,
})



$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $(".moon").click(function(){
    $("body").addClass("theme");
    $(".moon").hide();
    $(".sun").show()
    
})

$(".sun").click(function(){
    $("body").removeClass("theme")
    $(".sun").hide();
    $(".moon").show()
})


$(".btn-nav") .click(function(){
  $(".links") .slideToggle()
})

  
  
  