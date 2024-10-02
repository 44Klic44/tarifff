

function stickMenu() {
    var windowTop = $(window).scrollTop();
    var sectionStarts = $('#sectionStarts').offset().top;
    var sectionEnds = $('#sectionEnds').offset().top;
    if (windowTop > sectionEnds) {
      $('.tarif__top').removeClass('tarif__heading_mobile');


         $('.tarif__cards-containerMin').addClass('tarif__cards-containerMin');
   
              
        $('.tarif__card').addClass('tarif__card_min');
  
      $('.tarif-name').addClass('tarif-name_min');
      $('.light-text').addClass('card_none');
      
      
      $('.tarif-price').addClass('tarif-price_min');
      $('.tarif-price_span').addClass('tarif-price_spanMin');
      $('.tarif-short-info').addClass('card_none');
      $('.tarif-btn').addClass('tarif-btn_min');
     
 
  
   
    
    } else if (windowTop > sectionStarts) {
      $('.tarif__top ').addClass('tarif__heading_mobile');


    $('.tarif__cards-containerMin').addClass('tarif__cards-containerMin');
        $('.tarif__card').addClass('tarif__card_min');
        $('.tarif-name').addClass('tarif-name_min');
        $('.light-text').addClass('card_none');
        
        
        $('.tarif-price').addClass('tarif-price_min');
        $('.tarif-price_span').addClass('tarif-price_spanMin');
        $('.tarif-short-info').addClass('card_none');
        $('.tarif-btn').addClass('tarif-btn_min');

   
    } else {
      $('.tarif__top ').removeClass('tarif__heading_mobile');
        $('.tarif__cards-containerMin').removeClass('tarif__cards-containerMin');
       $('.tarif__card').removeClass('tarif__card_min');
      $('.tarif-name').removeClass('tarif-name_min');
      $('.light-text').removeClass('card_none');
      
      
      $('.tarif-price').removeClass('tarif-price_min');
      $('.tarif-price_span').removeClass('tarif-price_spanMin');
      $('.tarif-short-info').removeClass('card_none');
      $('.tarif-btn').removeClass('tarif-btn_min');
  
    }
  }
  
  $(window).scroll(function() {
    stickMenu();
  });






// Fixedmobile
  
  function stickMenumobile() {
    var windowmobile = $(window).scrollTop();
    var tartsmobile = $('#starts_mobile').offset().top;
    var ends_mobile = $('#ends_mobile').offset().top;
    if (windowmobile > ends_mobile) {
      $('.scroll-tip_mobile').removeClass('scroll-tip_min');

      $('.tarif__cards--desctop').removeClass('tarif__cards_mob');
  
    } else if (windowmobile > tartsmobile ) {
      $('.scroll-tip_mobile ').addClass('scroll-tip_min');

      $('.tarif__cards--desctop').addClass('tarif__cards_mob');
   
    } else {
      $('.scroll-tip_mobile ').removeClass('scroll-tip_min');

      $('.tarif__cards--desctop').removeClass('tarif__cards_mob');
     
    }  
  }
  
  $(window).scroll(function() {
    stickMenumobile();
  });



