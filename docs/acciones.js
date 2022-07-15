/*Es llamado por el icono de menu en dispositivos mobiles y despliega el menu visible, oculta el icono menu y muestra el icono de cerrar menu */
function verMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="grid";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="none";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="block";
    let verSeccionProyectos = document.querySelector('.main__carrousel').style.display="none";
}

/*Cierra el menu, oculta el icono de cerrar menu y muestra el de ver menu.*/
function ocultarMenu(){
    var ver = document.querySelector(".nav__opciones").style.display="none";
    var abrir = document.querySelector(".nav__iconoMenu-logo1").style.display="block";
    var cerrar = document.querySelector(".nav__iconoMenu-logo2").style.display="none";
}

/*En el menu, pinta de blanco la opcion que seleccionas y pone en color a9a9a9 las demas opciones*/
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

/*El if llama la seccion de contactar en dispositivos con tamaño superior al 700px, el else en dispositivos mobiles.*/
function contactar(){
    let i=-40;
    var screenWidth = screen.width;
    if(screenWidth>700){
        let verSeccionProyectos = document.querySelector('.main__carrousel').style.display="none";
        let tamañoSeccionProyectos = document.querySelector('.main__carrousel-tamaño').style.height=0;
        var mainContactar = document.querySelector(".main__contactar");
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


/*Oculta la zona de contactar en dispositivos mobiles. Es llamada desde el main. */
function limpiarPantalla(){
    var screenWidth = screen.width;
    if(screenWidth<700){
    var footerLogos = document.querySelector(".footer__logos");
    var footerLogosAjustar = document.querySelector(".footer__logos-ajustar");
    footerLogosAjustar.style.display ="none";
    footerLogos.style.height ="0rem";
    }
}


/*El if muestra el texto que da la informacion sobre los proyectos realizados. El else oculta el texto y muestra la imagen del proyecto*/
var verInformacion=true;
function verInformacionProyectos(){
    console.log("entra");
    if(verInformacion){
        let botonCirculo = document.querySelector('.main__carrousel__informacion svg').style.stroke= "#ffffff";
        let botonFondo = document.querySelector('.main__carrousel__informacion svg').style.fill= "#ffffff";
        let puntoI = document.querySelector('.main__carrousel__informacion svg line').style.stroke= "#000000";
        let cuerpoI = document.querySelector('.main__carrousel__informacion svg polyline').style.stroke= "#000000";
        let proyectoImg = document.querySelector(".proyectos__texto").style.display="block";
        let bg=document.querySelector('.proyectos__imagen').style.opacity="0.5";
        verInformacion=false;
    }else{
        let botonCirculo = document.querySelector('.main__carrousel__informacion svg').style.stroke= "#000000";
        let botonFondo = document.querySelector('.main__carrousel__informacion svg').style.fill= "#000000";
        let puntoI = document.querySelector('.main__carrousel__informacion svg line').style.stroke= "#a9a9a9";
        let cuerpoI = document.querySelector('.main__carrousel__informacion svg polyline').style.stroke= "#a9a9a9";
        let proyectoImg = document.querySelector(".proyectos__texto").style.display="none";
        let bg=document.querySelector('.proyectos__imagen').style.opacity="1";
        verInformacion=true;
    }
}

/*Muestra el siguiente proyecto disponible. Es llamado desde el boton Cambiar en los proyectos. */

var proyectos=["url('imagenes/Freelancer.jpg')", "url('imagenes/FrontEnd - iPad.jpg')", "url('imagenes/Cripto - iPhone X.jpg')"];
var descripcionDelProyecto=["Pagina Desarrollador freelancer, Francisco Castro. <br>Curso: Udemy. <br>Tecnologias: HTML5, CSS3","Tienda virtual. <br>By: Francisco Castro. <br>Curso: Udemy. <br>Tecnologias: HTML5, CSS3, JS", "Proyecto para ocultar mensajes. <br>Incriptacion: Basica. <br>Tegnologias: HTML5, CSS3, JS"];
var indicadorDeProyecto=1;
function cambiarProyecto(){
    
    let botonCambiar = document.querySelector('.main__carrousel__cambiar svg').style.boxShadow = "none";
    //let botonCambiarFondo = document.querySelector('.main__carrousel__cambiar svg').style.fill="#2929";
    let textoCambiar = document.querySelector('.main__carrousel__cambiar p').style.textShadow = "none";

    console.log(indicadorDeProyecto);
    if(indicadorDeProyecto >= proyectos.length){
        console.log("Se reinicia y muestra la primer imagen");
        indicadorDeProyecto=0;
        let imagenFondo = document.querySelector('.proyectos__imagen').style.backgroundImage = proyectos[indicadorDeProyecto];
        let textoProyecto = document.querySelector('.proyectos__texto p').innerHTML=descripcionDelProyecto[indicadorDeProyecto];
    }else{
        let imagenFondo = document.querySelector('.proyectos__imagen').style.backgroundImage = proyectos[indicadorDeProyecto];
        let textoProyecto = document.querySelector('.proyectos__texto p').innerHTML=descripcionDelProyecto[indicadorDeProyecto];
    }

    indicadorDeProyecto+=1;

    setTimeout(
        function(){
            let botonCambiar1 = document.querySelector('.main__carrousel__cambiar svg').style.boxShadow= "1px 1px 10px #a9a9a9";
            let textoCambiar1 = document.querySelector('.main__carrousel__cambiar p').style.textShadow="1px 1px 30px #a9a9a9";
        },300);

}

function verProyectos(){
    limpiarPantalla();
    ocultarMenu();
    var contenedorContactar = document.querySelector(".main__contactar-visible").style.display="none";
    let verSeccionProyectos = document.querySelector('.main__carrousel').style.display="grid";
    let tamañoSeccionProyectos = document.querySelector('.main__carrousel-tamaño').style.height="calc(70vh - 15rem)";

    //filter: blur(5px);
}


/*
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

*/