document.addEventListener('DOMContentLoaded', function() {
  var title = null
  var titlediv = null
  var appicon = null
  
  // Project Icons
  // https://icon-sets.iconify.design/mdi/
  var RESOURCES = [
    'https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  ]
  var PROJECT_ICONS = {
    '_DEFAULT': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23000' d='M32.59 41.758a2.41 2.41 0 0 1-2.77-.474L14.448 27.188l-6.695 5.109a1.62 1.62 0 0 1-2.074-.093l-2.147-1.963a1.64 1.64 0 0 1-.002-2.416L9.336 22.5L3.53 17.175a1.64 1.64 0 0 1 .002-2.416l2.147-1.963a1.62 1.62 0 0 1 2.074-.093l6.695 5.109L29.82 3.716a2.42 2.42 0 0 1 2.77-.475l8.03 3.884A2.45 2.45 0 0 1 42 9.333V24h-9.744V13.601L20.593 22.5l11.663 8.899V24H42v11.667c0 .941-.537 1.8-1.38 2.208z'/%3E%3C/svg%3E")`,
    'api-portal': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2a2 2 0 0 0 2-2V5h2V3m6 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3z'/%3E%3C/svg%3E")`,
    'conky-pkmeter': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z'/%3E%3C/svg%3E")`,
    'django-searchquery': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11 18.95c-3.23-.23-5-1.5-5-1.95v-2.23c1.13.55 2.5.92 4 1.1c0-.66.04-1.33.21-1.98c-1.71-.22-3.24-.73-4.21-1.44V9.64c1.43.81 3.5 1.33 5.82 1.36c.03-.03.05-.07.08-.1c2.2-2.19 5.6-2.49 8.1-.87V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.34 0 .68 0 1-.03c-.38-.25-.76-.53-1.1-.87c-.35-.36-.65-.74-.9-1.15M12 5c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m8.31 12.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S12 13 12 15.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L22 22.39L23.39 21zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5'/%3E%3C/svg%3E")`,
    'ntlie': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57l-2.29-3.96L14 17l-5.07-5.07l-3.75 6.5c-.11.16-.18.36-.18.57m8-9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1'/%3E%3C/svg%3E")`,
    'pipeline-dashboard': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 14h-2v2h-6v-3h2v-2h-2V6a2 2 0 0 0-2-2H4V2H2v8h2V8h6v3H8v2h2v5a2 2 0 0 0 2 2h8v2h2'/%3E%3C/svg%3E")`,
    'pushingkarma': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2'/%3E%3C/svg%3E")`,
    'pytest-automation': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm7-6l1.34-1.34L16.27 18H7.73l2.66-4.61zm-.5-4a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5'/%3E%3C/svg%3E")`,
    'python-algorithmx': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 13.5c0 1.76-1.3 3.22-3 3.46V20a2 2 0 0 1-2 2h-3.8v-.3a2.7 2.7 0 0 0-2.7-2.7c-1.5 0-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7a2 2 0 0 1 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.7.24 3 1.7 3 3.46M17 15h1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5H17V7h-5V5.5A1.5 1.5 0 0 0 10.5 4A1.5 1.5 0 0 0 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c2 0 3.7 1.25 4.38 3H17z'/%3E%3C/svg%3E")`,
    'python-plexapi': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4.56 4h3.5l3.44 6l-3.44 6h-3.5L12 12z'/%3E%3C/svg%3E")`,
    'ransomware': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2 0C.9 0 0 .9 0 2v4h2V2h4V0zm16 0v2h4v4h2V2c0-1.1-.9-2-2-2zM9.5 13c-.8 0-1.5-.7-1.5-1.5S8.7 10 9.5 10s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m1.5 2l1-2l1 2zm3.5-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M0 18v4c0 1.1.9 2 2 2h4v-2H2v-4zm22 0v4h-4v2h4c1.1 0 2-.9 2-2v-4zM12 3c-4.4 0-8 3.6-8 8c0 2 .8 3.9 2 5.3V21h12v-4.7c1.2-1.4 2-3.2 2-5.3c0-4.4-3.6-8-8-8m4 12.4V19h-2v-2h-1v2h-2v-2h-1v2H8v-3.6c-1.2-1.1-2-2.7-2-4.4c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.8-.8 3.3-2 4.4'/%3E%3C/svg%3E")`,
    'report': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 3h-4.18C14.25 1.44 12.53.64 11 1.2c-.86.3-1.5.96-1.82 1.8H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm10 4H7V9h10zm-2 4H7v-2h8z'/%3E%3C/svg%3E")`,
    'unity': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M9 7v10h2v-5l2 5h2V7h-2v5l-2-5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2'/%3E%3C/svg%3E")`,
    'vscode-pkstheme': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m2.5 19.6l1.3.6v-9L1.4 17c-.4 1.1.1 2.2 1.1 2.6M15.2 4.8l5 12l-7.3 3l-5-11.9v-.1zm.1-2c-.3 0-.5 0-.8.1L7.1 6c-.7.3-1.2 1-1.2 1.8c0 .2 0 .5.1.8l5 11.9c.3.8 1 1.2 1.8 1.2c.3 0 .5 0 .8-.1l7.4-3.1c1-.4 1.5-1.6 1.1-2.6L17.1 4c-.3-.8-1.1-1.2-1.8-1.2m-4.8 7.1c-.6 0-1-.4-1-1s.4-1 1-1s1 .5 1 1s-.4 1-1 1m-4.6 9.9c0 1.1.9 2 2 2h1.4l-3.4-8.3z'/%3E%3C/svg%3E")`,
  }

  // Inject Resources
  for (var i = 0; i < RESOURCES.length; i++) {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = RESOURCES[i]
    document.head.appendChild(link)
  }
  
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
      }
      // Update the icon
      var icon = PROJECT_ICONS['_DEFAULT'];
      for (var key in PROJECT_ICONS) {
        if (newtitle.startsWith(key)) { icon = PROJECT_ICONS[key]; break }
      }
      appicon.style.setProperty('align-items', 'center')
      appicon.style.setProperty('background-color', 'var(--accent)')
      appicon.style.setProperty('background-image', 'none', 'important')
      appicon.style.setProperty('display', 'inline-block')
      appicon.style.setProperty('height', '18px')
      appicon.style.setProperty('justify-content', 'center')
      appicon.style.setProperty('margin', '0px 5px 0px 10px')
      appicon.style.setProperty('mask-image', icon)
      appicon.style.setProperty('mask-repeat', 'no-repeat')
      appicon.style.setProperty('mask-size', '100% 100%')
      appicon.style.setProperty('width', '18px')
      titlediv.textContent = newtitle
      title = newtitle
    }
  }, 1000)
})
