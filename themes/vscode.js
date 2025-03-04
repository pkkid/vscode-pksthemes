document.addEventListener('DOMContentLoaded', function() {
  var title = null
  var titlediv = null
  
  // Update the Window Title
  setInterval(function() {
    var newtitle = document.title.split(' - ')[1]
    if (newtitle !== title) {
      if (titlediv === null) {
        var appicon = document.querySelector('a.window-appicon')
        titlediv = document.createElement('div')
        titlediv.id = 'window-title'
        appicon.parentNode.insertBefore(titlediv, appicon.nextSibling)
        appicon.setAttribute('data-project', newtitle)
      }
      titlediv.textContent = newtitle
      title = newtitle
      console.log(`[PK] ${title}`)
    }
  }, 1000)
})