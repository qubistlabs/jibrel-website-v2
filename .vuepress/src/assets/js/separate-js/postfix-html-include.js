if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('a').forEach((link) => {
  const href = link.getAttribute('href')
  console.log(href);
  if (link.getAttribute('target') !== null
    || href.indexOf('https://') !== -1
    || href.indexOf('http://') !== -1
    || href.indexOf('mailto:') !== -1
  ) {
    // continue
  } else {
    const path = href !== '/' ? href + '.html' : '/'
    console.log(path);
    link.setAttribute('href', path)
  }
})
