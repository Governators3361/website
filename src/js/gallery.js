// gallery viewer

(function (d) {
  'use strict';

  var galleryDir = '/gallery/';
  var listing;
  var r = new XMLHttpRequest();

  var load = function () {
    listing = r.responseText.replace(/\r/gm, '').split('\n').map(function (cur) { return { name: cur.split('/').pop().split('.')[0], src: cur }; });

    var containers = Array.prototype.slice.call(d.getElementsByClassName('gallery'));
    containers.forEach(setupContainer);
  };

  var setupContainer = function (container) {
    listing.forEach(function (curImage) {
      var card = document.createElement('div');
      card.classList.add('panel');
      card.innerHTML = `<img src="${galleryDir + curImage.src}"></img><div>${curImage.name}</div>`;
      container.appendChild(card);
    });
  };

  r.open('GET', '/gallery/listing.txt');
  r.onload = load;

  window.addEventListener('load', function () { r.send(); });
})(document);
