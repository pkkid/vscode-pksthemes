document.addEventListener('DOMContentLoaded', function() {
  var title = null
  var titlediv = null
  var appicon = null
  
  // Project Icons
  // https://pictogrammers.com/library/mdi/
  var icons = {
    'api-portal': 'mdi-code-braces',
    'conky-pkmeter': 'mdi-monitor-dashboard',
    'django-searchquery': 'mdi-database-search-outline',
    'ntlie': 'mdi-flask-outline',
    'pipeline-dashboard': 'mdi-pipe',
    'pushingkarma': 'mdi-earth',
    'pytest-automation': 'mdi-flask-outline',
    'python-algorithmx': 'mdi-puzzle-outline',
    'python-plexapi': 'mdi-plex',
    'ransomware': 'mdi-skull-scan-outline',
    'report': 'mdi-clipboard-text-outline',
    'unity': 'mdi-alpha-n-box',
    'vscode-pkstheme': 'mdi-palette-swatch-outline',
  }

  // Inject the Material Design Icons
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css'
  document.head.appendChild(link)
  
  setInterval(function() {
    // Update the Window Title and icon
    var titleparts = document.title.split(' - ')
    var newtitle = titleparts[titleparts.length - 2]
    if (newtitle !== title) {
      if (titlediv === null) {
        appicon = document.querySelector('a.window-appicon')
        titlediv = document.createElement('div')
        titlediv.classList.add('window-title')
        appicon.parentNode.insertBefore(titlediv, appicon.nextSibling)
        appicon.classList.add('mdi')
      }
      // Update the icon
      var icon = 'mdi-microsoft-visual-studio-code'
      for (var key in icons) {
        if (newtitle.startsWith(key)) { icon = icons[key]; break }
      }
      appicon.className = 'window-appicon mdi'
      appicon.classList.add(icon)
      titlediv.textContent = newtitle
      title = newtitle
    }
  }, 1000)
})
