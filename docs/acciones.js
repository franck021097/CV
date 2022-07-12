function verMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="grid";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="none";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="block";
}

function ocultarMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="none";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="block";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="none";
}

function pintarEnfoque(opcion){
    var obtenerOpciones = document.querySelectorAll(".nav__opciones a");
    var pintarOpcion = document.getElementById(opcion);
    for (const iterator of obtenerOpciones) {
        if(iterator== pintarOpcion){
            pintarOpcion.style.color = "#ffffff";
        }else{
            iterator.style.color="#a9a9a9";
        }
    }
}


function limpiarPantalla(){
    var screenWidth = screen.width;
    if(screenWidth<700){
    var footerLogos = document.querySelector(".footer__logos");
    var footerLogosAjustar = document.querySelector(".footer__logos-ajustar");
    footerLogosAjustar.style.display ="none";
    footerLogos.style.height ="0rem";
    }
}

function contactar(){
    let i=-40;
    var screenWidth = screen.width;
    if(screenWidth>700){
        var mainContactar = document.querySelector(".main__section");
        var margenFondo = document.querySelector(".main-ajustar");
        mainContactar.style.marginTop="40rem";
        margenFondo.style.marginTop = i+"rem";
        margenFondo.style.opacity = "0";
        setTimeout(
            function(){
                margenFondo.style.display = "none";
                var contenedorContactar = document.querySelector(".main__contactar-visible");
                contenedorContactar.style.display="grid";
                mainContactar.style.marginTop="0rem";
                mainContactar.style.opacity="1";
            },500);
    }
    else{
        var footerLogos = document.querySelector(".footer__logos");
        var footerLogosAjustar = document.querySelector(".footer__logos-ajustar");
        footerLogosAjustar.style.display ="grid";
       footerLogos.style.height ="15rem";
    }
}

function curriculum(){
    var section_main= document.querySelectorAll(".main__section");
    for (const iterator of section_main) {
        if(iterator=="curriculum"){
            iterator.style.display="grid";
            iterator.style.opacity=1;
        }else{
            iterator.style.display="none";
        }
    }
}