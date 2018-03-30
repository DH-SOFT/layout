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