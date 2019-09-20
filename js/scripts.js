//Search Pop
$('.nav .search i').click(function(){
    var icon = $(this);
    $('.nav .search .pop_out').toggleClass('open');

    if($('.nav .search .pop_out').hasClass('open')){
            icon.attr( "class", "fal fa-times");
            $('.nav .search .pop_out input#search').focus();
        }else{
            icon.attr( "class", "fal fa-search");
    }
});

//Responsive iFrame
$('iframe[src*="youtube"]').wrap('<div class="responsiveIframe"/>');

//Nav
    //$( ".nav > .drop_trigger, .mobile_nav > .drop_trigger" ).each(function(){$( this ).children('a:first').attr( "onclick", "return false" );});

    $('.nav .drop_menu').each(function() {
       if ($(this).find(".item").length >= 8) {
           $(this).addClass('column_nav');
       }
    });

	$('.navicon').click(function() {
	    if($('.mobile_nav').is(':visible')){
    	    	$('.mobile_nav').attr('aria-expanded', 'false');
    		$('body').removeClass('menu-open');
    		$('.navicon').attr( "aria-label", "Open Mobile Menu");
	    }else{
	        $('.mobile_nav').attr('aria-expanded', 'true');
	        $('body').addClass('menu-open');
	        $('.navicon').attr( "aria-label", "Close Mobile Menu");
	    }
	});

    var hoverTimeout;
    $('.nav .trigger').hover(function() {
        clearTimeout(hoverTimeout);
        $(this).addClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false');
        $('.trigger').not(this).removeClass("open");
    }, function() {
        var $self=$(this);
        hoverTimeout = setTimeout(function() {
            $self.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false');
        }, 250);
    });

    $('.nav .trigger > a').focusin(function() {
        var parent = $(this).parent();
        parent.addClass('open').find('.drop').attr('aria-hidden','false').attr('aria-expanded', 'true');
        $('.trigger').not(parent).removeClass("open");
    });

    $('.nav .drop a:last,.nav .drop input').focusout(function() {
        var parent = $(this).parents().find('.trigger');
        parent.removeClass('open').find('.drop').attr('aria-hidden','true').attr('aria-expanded', 'false');
    });

    $('.mobile-nav .trigger > *').click(function(){
        var parent = $(this).closest('.trigger');
        var icon = parent.find('.trigger-icon');
        var aonclick = parent.find('a:first').is('[onclick]');
        if($(this).is('a')){
            if(aonclick === true){
            	$('.trigger').not(parent).removeClass("open").find('i').attr( "class", "fal fa-plus");
            	parent.toggleClass("open");
                if(parent.hasClass('open')){
                    $(icon).find('i').attr( "class", "fal fa-minus");
                }else{
                    $(icon).find('i').attr( "class", "fal fa-plus");
                }
            }
        }
        if($(this).hasClass('trigger-icon')){
            parent.toggleClass("open");
    		$('.mobile-nav > .trigger').not(parent).removeClass("open").find('i').attr( "class", "fal fa-plus");
            if(parent.hasClass('open')){
                $(icon).find('i').attr( "class", "fal fa-minus");
                $('.open > .drop').attr('aria-hidden','false');
            }else{
                $(icon).find('i').attr( "class", "fal fa-plus");
                $('.drop').attr('aria-hidden','true');
            }
        }
    });

    $('button.mobile-closer').click(function(){
        $('.mobile-nav').fadeOut(100).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
    	$('body,html').css({'overflow':'auto','height':'auto'});
    	$('.header').css({'position':'relative','z-index':'0'});
    	$('.navicon').find('i').attr( "class", "fal fa-bars");
    	$('.navicon').attr( "aria-label", "Open Mobile Menu");
    });

//Slideshow
$('.slideshow .container').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  fade: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button class="prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
  nextArrow:'<button class="next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
});

//Universal Slideshow
$('.universal-slideshow .container').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  fade: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button class="navBtn prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
  nextArrow:'<button class="navBtn next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
});

$('.slide').each(function(){
    $(this).removeAttr("aria-describedby");
});

//Universal Tables
$('.universal-table .row:first .col').each(function(){
    let title = $(this).text();
    let idx = $(this).data('idx');
    $('.universal-table .row:not(:first) .col[data-idx="'+idx+'"]').prepend('<span class="title">'+title+': </span>');
    if(title){
        $('.universal-table .row .col[data-idx="'+idx+'"]').show();
    }
});

for(let i=0; i < $('.universal-table .row:first .col').length; i++){
    let widest = '0';
    $('.universal-table .row .col[data-idx="'+i+'"]').each(function(){
        let idx = $(this).data('idx');
        if( $(this).width() > widest){
            widest = $(this).width();
        }
    });
    $('.universal-table .row .col[data-idx="'+i+'"]').width(Math.round(widest)+10);
}
//END--Universal Tables
