$(document).ready(function() {
  var address = window.location.pathname
  if (address.match(/activity/) || address.match(/module/)) {
    $('#activityNav').show()
  }
})
