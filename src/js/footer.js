// generate page footer

(function (d) {
  'use strict';
  
  var footer = d.createElement('footer');
  footer.innerHTML =
  '<span>The Governators</span>' +
  '<span><a target="_blank" href="https://github.com/governators3361/website">source code</a></span>';
  window.addEventListener('load', function () {
    d.body.insertAdjacentElement('beforeend', footer);
  });
})(document);
