var pagina = document.querySelector('main')
var botonMenuHamburguesa = document.getElementById('botonMenuHamburguesa')
var menuHamburguesa = document.getElementById('menuHamburguesa')
var contadorImagen = 0;

botonMenuHamburguesa.addEventListener('click', function () {
    menuHamburguesa.classList.toggle("menuHamburguesaAbierto");
    if (contadorImagen == 0) {
        botonMenuHamburguesa.classList.toggle('botonInvertido');
        contadorImagen = 1;
        pagina.style.paddingLeft = '60px'
    }
    else {
        botonMenuHamburguesa.classList.toggle('botonInvertido');
        contadorImagen = 0;
        pagina.style.paddingLeft = '0'
    }
})

var perfilHamburguesa = document.getElementById('perfilHamburguesa')
var botonPerfilHamburguesa = document.getElementById('botonPerfilHamburguesa')

botonPerfilHamburguesa.addEventListener('click', function () {
    perfilHamburguesa.classList.toggle('perfilHamburguesaAbierto');
})

