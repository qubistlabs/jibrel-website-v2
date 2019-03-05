var tigger = false;
window.addEventListener('touchstart', function() {
    tigger = 'true';
});
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera Mini/.test(navigator.userAgent)) {
    tigger = true;
}
if (tigger) {
  document.body.classList.add('_is-touch')
} else {
  document.body.classList.add('_no-touch')
}
