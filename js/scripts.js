//Responsive iFrame
$('iframe[src*="youtube"]').wrap('<div class="responsiveIframe"/>');

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
$('table').wrap( "<div class='universal-table'></div>" );
// $('.universal-table .row:first .col').each(function(){
//     let title = $(this).text();
//     let idx = $(this).data('idx');
//     $('.universal-table .row:not(:first) .col[data-idx="'+idx+'"]').prepend('<span class="title">'+title+': </span>');
//     if(title){
//         $('.universal-table .row .col[data-idx="'+idx+'"]').show();
//     }
// });
//
// for(let i=0; i < $('.universal-table .row:first .col').length; i++){
//     let widest = '0';
//     $('.universal-table .row .col[data-idx="'+i+'"]').each(function(){
//         let idx = $(this).data('idx');
//         if( $(this).width() > widest){
//             widest = $(this).width();
//         }
//     });
//     $('.universal-table .row .col[data-idx="'+i+'"]').width(Math.round(widest)+10);
// }
//END--Universal Tables
