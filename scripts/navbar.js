$(document).ready(function() {
  var activity = window.location.pathname.match(/activity-(.*)-/)
  if (activity) {
    var module = activity[1]
    $('#moduleNav ul li:first-child() a').each(function(index, el){
      if (index === 0) {
        $(el).text('Modules')
      } else {
        $(el).text(index)
        if (Number(module) === index) $(el).addClass('active-module')
      }
    })
  }
})
