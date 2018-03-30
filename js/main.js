function goToPage(url) {
  window.location.replace(url);
}

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