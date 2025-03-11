#!/usr/bin/env node
// build.js - Iterates through the theme/syntax-*.json files and appends the
// window-specific settings to the beginning of the file. It places all the
// resulting files in the dist folder.
const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')

if (require.main === module) {
  const window = JSON5.parse(fs.readFileSync('src/window.json', 'utf8'))
  fs.readdirSync('src').forEach((filename) => {
    if (filename.startsWith('syntax-') && filename.endsWith('.json')) {
      const syntax = JSON5.parse(fs.readFileSync(path.join('src', filename), 'utf8'))
      const theme = { ...window, ...syntax }
      const themename = filename.replace('syntax-', 'theme-')
      console.log(`Saving themes/${themename}`)
      fs.writeFileSync(`themes/${themename}`, JSON.stringify(theme, null, 2))
    }
  });
  console.log('Done!')
}