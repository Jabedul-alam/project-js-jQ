$(function (){
    $(window).on('scroll',function(){
        //script for sticy menu;
        var scroolpostion=$(window).scrollTop();
        if(scroolpostion > 0){
            $('#manu').addClass('stickynav');
        }else{
            $('#manu').removeClass('stickynav');
        }
    
        //back to top
        if(scroolpostion > 600){
            $('#back').fadeIn(1000);
        }else{
            $('#back').fadeOut(1000);
        }
        
        
    })
    $('#back').on('click',function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    
    })
    //preloader
    
    $(window).on('load',function(){
        $('#preloader').fadeOut(1000);
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
            
    
        })
        //slick.js
    
        $('#banner').slick({
            speed:500,
            autoplay:true,
            autoplaySpeed:3000,
            prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
            nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",
    
        })
        //venobox js
        $('.venobox').venobox({
            framewidth : '400px',
            frameheight: '300px', 
            border     : '10px', 
            spinner :'wave',
        }); 
        // typed js
        var typed = new Typed('#typed', {
            strings: ['trust','jabedulalam'],
            loop: true,
            loopCount: Infinity,
            typeSpeed: 200,

          });
          //counterUp js
          $('counter_test').counterUp({
            delay: 100,
            time: 1000
        });
    })
    //calculator
    function getvalue(value){
       var x, y ;
       x=60464.52* value;
     document.getElementById("result").value = x ;
    }