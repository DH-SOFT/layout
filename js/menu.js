$(".hover-dropdown").hover(
  function() {
    var target = $(this).attr('aria-controls');
    $('#' + target).collapse('show');
    $('#' + target).siblings('div.hd-sub-menu').collapse('hide');
  }, function() {
    var curElement = this;
    setTimeout(function(){
      var target = $(curElement).attr('aria-controls');
      var isUsing = $(curElement).attr('data-using');
      if(isUsing != 'true') {
        $('#' + target).collapse('hide');
        $(curElement).removeClass('bg-yellow bg-orange');
      }
    }, 50);
  });

$('.hd-sub-menu')
  .mouseover(function() {
    mouseOverHandler(this);
  })
  .mouseleave(function() {
    mouseLeaveHandler(this);
  });

function mouseOverHandler(e) {
  var id = $(e).attr('id');
  var target = $('.hover-dropdown[aria-controls=' + id + ']');
  $(target).attr('data-using', true);
}

function mouseLeaveHandler(e) {
  var id = $(e).attr('id');
  var target = $('.hover-dropdown[aria-controls=' + id + ']');
  $(target).attr('data-using', false);
  $(e).collapse('hide');
  $(target).removeClass('bg-yellow bg-orange');
}