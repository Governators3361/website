// simple theming engine

(function (d, CONFIG) {
  'use strict';

  var themes = CONFIG.themes;
  var themeNameSelected;
  var themeButton = d.createElement('div');
  themeButton.innerText = 'Theme:';
  themeButton.id = 'theme-button'

  var setTheme = function (themeName) {
    var theme = themes.filter(function (cur) { return cur.name === themeName; })[0];
    if (!theme) throw new Error('Theme "' + themeName + '" not found');
    var themeProperties = theme.properties;
    for (var prop in themeProperties) {
      d.documentElement.style.setProperty(prop, themeProperties[prop]);
    }
    themeButton.setAttribute('data-theme-selected', themeName);
    localStorage.setItem('lastTheme', themeName);
    themeNameSelected = themeName;
  };

  themeButton.addEventListener('click', function (e) { // set next theme in theme list
    for (var i = 0; i < themes.length; i++) {
      if (themes[i].name === themeNameSelected) {
        setTheme(i < themes.length - 1 ? themes[i + 1].name : themes[0].name);
        break;
      }
    }
  });

  window.addEventListener('load', function () {
    d.documentElement.appendChild(themeButton);
    d.body.classList.toggle('unhide');
  });

  window.addEventListener('beforeunload', function () {
    d.body.classList.toggle('unhide');
  });

  setTheme(CONFIG.themeInitial);

  console.log('themeing engine loaded!');
})(document, {

  // configuration
  themeInitial: localStorage.getItem('lastTheme') || 'dark',
  themes: [
    {
      name: 'light',
      properties: {
        '--color-0-r': '255',
        '--color-0-g': '255',
        '--color-0-b': '255',
        '--color-1-r': '0',
        '--color-1-g': '0',
        '--color-1-b': '0',
        '--color-2-r': '223',
        '--color-2-g': '223',
        '--color-2-b': '223'
      }
    },
    {
      name: 'dark',
      properties: {
        '--color-0-r': '20',
        '--color-0-g': '20',
        '--color-0-b': '20',
        '--color-1-r': '210',
        '--color-1-g': '210',
        '--color-1-b': '210',
        '--color-2-r': '32',
        '--color-2-g': '32',
        '--color-2-b': '32'
      }
    }
  ]

});

// fin
