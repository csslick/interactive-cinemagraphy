
$(function(){
  $('.cine').mouseover(function(){
    $(this).attr('src','images/play.gif');
  });

  $('.bg').mouseover(function(){
    $(this).stop().animate({
      transform: 'scale(1.5, 1.5)'
    }, 500);
  });

  $('.bg').click(function(){
    $(this).stop().animate({
      transform: 'scale(1, 1)'
    }, 500);
  });

});
