function verMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="grid";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="none";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="block";
    asignar();
}

function ocultarMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="none";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="block";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="none";
}