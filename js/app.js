$(document).foundation();

$(function(){
    //search form
    $(".search-button[type=button]").click(function(){
        $("body").toggleClass("search-form-open");
        $(this).siblings('.s').focus();
    });
    $(".search-form .s").keyup(function(){
        var inpVal = $(this).val();
        if(inpVal !== ''){
            $(this).siblings('.search-button[type=button]').attr('type', 'submit');
        }else{
            $(this).siblings('.search-button[type=submit]').attr('type', 'button');
        }
    });
    
    // sliders
    if($(".page-heading-slider").length){
        $(".page-heading-slider").slick({
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-triangle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-triangle-right"></span></button>',
            fade:  true
        });
    }
    if($(".sl-slider").length){
          $(".sl-slider").slick({
            slidesToShow: 3,
            arrows:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots:false,
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '15%',
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
    if($(".property-slider").length){
        $(".property-slider").slick({
            slidesToShow: 3,
            arrows:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots:false,
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots:false,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots:false,
                        fade: true
                    }
                }
            ]
        });
    }

    if ($('.listing-slider').length) {
        $('.listing-slider').slick({
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        centerPadding: '15%'
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        centerPadding: '5%'
                    }
                }
            ]
        });
    }
    // animation
    $(".anim-ch-to-top").each(function(){
       $(this).children().each(function(i){
            $(this).css("transition-delay", 0.1*(i-1) + "s");
       });
    });
    var scrolled = $(window).scrollTop(),
        windowHeight = $(window).height();
    $(".anim-ch").each(function(){
        $(this).children().each(function(){
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).addClass("complete");
            }
        });
    });
    $(".show-on-load").each(function(){
        $(this).children().each(function(){
            $(this).addClass("complete");
        });
    });
    $(window).scroll(function(){
        scrolled = $(this).scrollTop();
        $(".anim-ch").each(function(){
            $(this).children().each(function(){
                var eachImgOffsetTop = $(this).offset().top,
                    eachHeight = $(this).height();
                if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                    $(this).addClass("complete");
                }
            });
        });
    });
    
    // parallax
    $("[data-parallax=scroll]").each(function(){
        var parSrc = $(this).data("image-src");
        $(this).parallax({imageSrc: parSrc});
    });



    // mobile-menu
    $(".menu-toggle").click(function(e){
        e.preventDefault();
        $("body").toggleClass("open");
    });
    // Page Scrolling
    $("a[href^='#target']").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination
        }, 600);
    });
});
