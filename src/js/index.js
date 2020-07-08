let pincet = {
    init() {
        for (let key in this) {
          if (key !== 'init') this[key]();
        }
      },

    PulsBtnOnHover() {
        let text = $('.head__client-card-lorem');
        let btn = $('.pulsation-btn');
        btn.on('mouseover', function () {
            text.addClass('visible');
        })
        btn.on('mouseout', function () {
          text.removeClass('visible');
      })
    },

      PopupButtonHandler() {
        $('.popup-form_btn').on('click', () => {
          $('.popup-form_list').slideToggle().toggleClass('open');
        });
  
        $('.popup-form_list-item').on('click', () => {
          let self = $(this),
              text = self.children('span').text();
  
          $('.popup-form_btn > span').text(text);
        });
      },
      HamburgerHandler() {
        let hamburger = $('.hamburger'),
            list      = $('.head__menu-list'),
            item      = $('.head__menu-item');
        hamburger.on('click', () => {
          hamburger.toggleClass('is-active');
          list.slideDown();
          if(hamburger.hasClass('is-active')){
            list.slideUp();
          }
        })
        item.on('click', () => {
          hamburger.removeClass('is-active');
          list.slideUp();
        })
      },
      MenuHandler() {
        if ($(window).width() <= '1200') {
          let list = $('.head__menu-list'),
              item = $('.head__menu-item');
          item.on('click', () => {
            let self = $(this),
              text = self.children('a').text();
              $('.head__menu > .container ul > li > a').text(text);
          })
          
        }
      }
    
}.init();

$(function() {
  $('a, button').on('click', () => {
    event.preventDefault();
  });

  var rellax = new Rellax('.rellax');

  $("#phone").inputmask("+7 (999) 99-99-999");
  $(".popup-form").validate();
   $.validator.addClassRules({
     'input-name': {
       required: true,
       minlength: 2
     },
     'input-phone': {
       required: true,

       minlength: 9,
       maxlength: 18
     }
   });

  $(".input-phone").on("blur", () => {
    if($('.popup-form').valid()){
        $(".popup-btn").removeAttr("disabled");
   }
  });

  $('.popup-close').on('click', () => {
    $('.popup').fadeOut();
    $('.popup_wrap').fadeOut();
  })
  $('.open-popup').on('click', () => {
    $('.popup_wrap').fadeIn();
    $('.popup_get-program').fadeIn();
  })
  $('.popup-btn').on('click', () => {
    $('.popup_get-program').fadeOut();
    $('.popup_done').fadeIn();
  })
});
