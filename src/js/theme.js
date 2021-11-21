// simple theming engine

(function (d, CONFIG) {
  'use strict';

  var themes = CONFIG.themes;
  var themeNameSelected;
  var themeToggleButton = d.createElement('div');
  themeToggleButton.innerText = 'Theme:';
  themeToggleButton.id = 'theme-toggle'

  var setTheme = function (themeName) {
    var theme = themes.filter(function (cur) { return cur.name === themeName; })[0];
    if (!theme) throw new Error('Theme "' + themeName + '" not found');
    var themeProperties = theme.properties;
    for (var prop in themeProperties) {
      d.documentElement.style.setProperty(prop, themeProperties[prop]);
    }
    themeToggleButton.setAttribute('data-theme-selected', themeName);
    localStorage.setItem('lastTheme', themeName);
    themeNameSelected = themeName;
  };

  themeToggleButton.addEventListener('click', function (e) { // set next theme in theme list
    for (var i = 0; i < themes.length; i++) {
      if (themes[i].name === themeNameSelected) {
        setTheme(i < themes.length - 1 ? themes[i + 1].name : themes[0].name);
        break;
      }
    }
  });

  window.addEventListener('load', function () {
    d.body.appendChild(themeToggleButton);
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
        '--color-0': '255, 255, 255',
        '--color-1': '0, 0, 0'
      }
    },
    {
      name: 'dark',
      properties: {
        '--color-0': '0, 0, 0',
        '--color-1': '255, 255, 255'
      }
    }
  ]

});

// fin
