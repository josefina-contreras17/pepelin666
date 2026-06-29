// =============================================
//  ADN DEL ROCK CHILENO — script.js
// =============================================
 
 
// 1. SCROLL INDICATOR: desaparece al bajar
// =============================================
window.addEventListener('scroll', function() {
    const flecha = document.querySelector('.scroll-indicator')
    if (flecha) {
        flecha.style.opacity = window.scrollY > 100 ? '0' : '1'
    }
})
 
 
// 2. HEADER: se achica al hacer scroll
// =============================================
const header = document.querySelector('.site-header')
 
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        header.classList.add('header-small')
    } else {
        header.classList.remove('header-small')
    }
})
 
 
// 3. BARRA DE PROGRESO DE LECTURA
// =============================================
// Primero creamos la barra en el HTML desde JS
const barra = document.createElement('div')
barra.classList.add('barra-progreso')
document.body.prepend(barra)
 
window.addEventListener('scroll', function() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight
    const progreso = (window.scrollY / scrollTotal) * 100
    barra.style.width = progreso + '%'
})
 
 
// 4. GLOSARIO: expandir y colapsar al hacer clic
// =============================================
const terminos = document.querySelectorAll('.termino-glosario')
 
terminos.forEach(function(termino) {
    const dd = termino.querySelector('dd')
    const dt = termino.querySelector('dt')
 
    // Empieza colapsado
    dd.style.display = 'none'
    dt.style.cursor = 'pointer'
 
    // Agrega ícono
    dt.innerHTML = dt.innerHTML + ' <span class="icono-glosario">＋</span>'
 
    dt.addEventListener('click', function() {
        const estaAbierto = dd.style.display === 'block'
        dd.style.display = estaAbierto ? 'none' : 'block'
        termino.querySelector('.icono-glosario').textContent = estaAbierto ? '＋' : '－'
    })
})
 
 
// 5. NAVEGACIÓN: marcar link activo según sección
// =============================================
const secciones = document.querySelectorAll('section[id]')
const linksNav = document.querySelectorAll('.nav-links a')
 
window.addEventListener('scroll', function() {
    let seccionActual = ''
 
    secciones.forEach(function(seccion) {
        const offsetTop = seccion.offsetTop - 120
        if (window.scrollY >= offsetTop) {
            seccionActual = seccion.getAttribute('id')
        }
    })
 
    linksNav.forEach(function(link) {
        link.classList.remove('nav-activo')
        if (link.getAttribute('href') === '#' + seccionActual) {
            link.classList.add('nav-activo')
        }
    })
})