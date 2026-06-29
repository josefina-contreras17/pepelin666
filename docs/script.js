window.addEventListener('scroll', function() {
    const flecha = document.querySelector('.scroll-indicator')
    if (window.scrollY > 100) {
        flecha.style.opacity = '0'
    } else {
        flecha.style.opacity = '1'
    }
})