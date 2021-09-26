
$(function (){
  $(window).on('scroll',function(){

    var scroolpostion=$(window).scrollTop();
    if(scroolpostion > 0){
        $('#menu').addClass('stickynav');
    }else{
        $('#menu').removeClass('stickynav');
    }
  //back to top
    if(scroolpostion > 600){
      $('#back').fadeIn(1000);
  }else{
      $('#back').fadeOut(1000);
  }
  })
    //SMOTH SCROLL
  $('a').on('click',function(e){
  e.preventDefault();

  if(this.hash !=""){
      var hash=$(this.hash)
      $("html,body").animate({
          scrollTop:$(hash).offset().top - 68
      })
  
  }
  // venobox js
  
  })
  //slick js
     $('#banner').slick({
      speed:500,
      autoplay:true,
      autoplaySpeed:3000,
      prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
      nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",
    })
  })
  // back to top
  $('#back').on('click',function(){
  $("html,body").animate({
      scrollTop:0
  },1000)

  $('.venobox').venobox({
    framewidth : '400px',
    frameheight: '300px', 
    border     : '10px', 
    spinner :'wave',
  }); 

})