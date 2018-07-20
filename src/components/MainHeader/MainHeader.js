const header = document.querySelector('.main-header ');
const headerModClass = '-on-scrolled';

window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
        header.classList.add(headerModClass);
        return
    }
    header.classList.remove(headerModClass);
});
