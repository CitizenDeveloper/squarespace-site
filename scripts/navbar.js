$(document).ready(function() {
  var address = window.location.pathname
  if (address.match(/activity/) || address.match(/module/)) {
    $('#activityNav').css('display', 'inline-block');
  }
  if (address.match(/module/)) {
    var module = address.match(/module-(.*)\/content/)[1]
    $('a[href="/module-' + module + '/content"] label').css('color', 'black')
  }
})
