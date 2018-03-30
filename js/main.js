var mouseEnter1 = false;
var mouseEnter2 = false;

$(".hover-dropdown").hover(
  function() {
    var target = $(this).attr('aria-controls');
    console.log('target: ' + target);
    $('#' + target).collapse('show');
  }, function() {
    var curElement = this;
    setTimeout(function(){
      var target = $(curElement).attr('aria-controls');
      var isUsing = $(curElement).attr('data-using');
      console.log('target: ' + target + '| isUsing: '+ isUsing);
      if(isUsing != 'true') {
        $('#' + target).collapse('hide');
      }
    }, 200);
  });


function mouseOverHandler(e) {
  console.log('mouse over');
  var id = $(e).attr('id');
  console.log('id: ' + id);
  var target = $('.hover-dropdown[aria-controls=' + id + ']');
  $(target).attr('data-using', true);
}

function mouseOutHandler(e) {
  console.log('mouse out');
  var id = $(e).attr('id');
  console.log('id: ' + id);
  var target = $('.hover-dropdown[aria-controls=' + id + ']');
  $(target).attr('data-using', false);
  $(e).collapse('hide');
}

$('.hd-sub-menu')
  .mouseover(function() {
    mouseOverHandler(this);
  })
  .mouseleave(function() {
    mouseOutHandler(this);
  });

$('li.first-level > a').click(function(e) {
  var parent = $(this).closest('li.first-level');
  var children = $(parent).find('ul.second-level');
  var isOpen = $(parent).hasClass('open');
  if(children.length > 0) {
    $(children).toggle();
    if(isOpen == true) {
      $(this).find('.fa-angle-down').toggleClass("fa-angle-down fa-angle-left");
    } else {
      $(this).find('.fa-angle-left').toggleClass(" fa-angle-down fa-angle-left");
      var closing = $(parent).siblings('li.open');
      $(closing).removeClass('open').find('ul.second-level').toggle();
      $(closing).find('.fa-angle-down').toggleClass("fa-angle-down fa-angle-left");
    }
    $(parent).toggleClass('open');
  }
});




/*$('li.first-level > a').click(function(e) {
  var parent = $(this).closest('li.first-level');
  $('li.first-level.open').removeClass('open').find('a').click();
  var isOpen = $(parent).hasClass('open');
  var target = $(parent).find('ul.second-level');
  if(target.length > 0) {
    $(target).toggle();
    if(isOpen == true) {
      $(parent).find('.fa-angle-down').toggleClass("fa-angle-down fa-angle-left");
    } else {
      $(parent).find('.fa-angle-left').toggleClass(" fa-angle-down fa-angle-left");
    }
    $(parent).toggleClass('open');
  }
});*/
