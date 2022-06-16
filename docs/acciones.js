/*var anim=document.getElementById("preload").style.display="none";

if(anim.style.opacity<0.5){
    anim.style.display="none";
}*/



function preload(){
setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="Esto no es solo una pagina"
},2000);


setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="Es una experiencia";
},5000);

setTimeout(
function(){
    var im= document.getElementById("flecha");
    im.setAttribute("onclick","usuario()");
    im.setAttribute("src","imagenes/Flecha.png");
},6500);

}

function usuario(){
    var i= document.getElementById("preload").style.display="none";
    i= document.getElementById("header").style.display="block";
    i= document.getElementById("main").style.display="block";
    i= document.getElementById("footer").style.display="grid";
    i= document.getElementById("opciones").style.display="none";
    var im= document.getElementById("flecha").style.display="none";
}

function ocultar(){
    var i= document.getElementById("preload").style.display="none";
    i= document.getElementById("header").style.display="none";
    i= document.getElementById("main").style.display="none";
    i= document.getElementById("footer").style.display="none";
    i= document.getElementById("opciones").style.display="grid";
}

function ver(ver){

var secciones=["experiencia", "objetivo","experiencia","interes","educacion","Información_personal","idiomas",
"aptitudes","proyectos"];

var imagenes=["1","2","3"];

var nombres_certificados=[
    "imagenes/ipnFPC.jpeg","imagenes/cvCarso.png","imagenes/rCelTab.png","imagenes/fpMiriada.png","imagenes/ipMiX.png","imagenes/pbPlatzi.png","imagenes/ccbPlatzi.png","imagenes/cfeyePlatzi.png","imagenes/cdhtml-cssPlatzi.png","imagenes/cphtml-cssPlatzi.png","imagenes/cssiPlatzi.png","imagenes/cetebPlatzi.png","imagenes/tipPlatzi.png","imagenes/cipPlatzi.png","imagenes/ciba1psPlatzi.png","imagenes/cpreworkPlatzi.png","imagenes/crdmfPlatzi.png","imagenes/cssSL.jpg","imagenes/htmlSL.jpg","imagenes/jsSL.jpg","imagenes/c++SL.jpg","imagenes/sqlSL.jpg","imagenes/excel.jpg","imagenes/word.png"];


let indice=[];

for(let i=0; i<3; i++){
    indice[i] = Math.floor(Math.random()*(23));
}

console.log("los valores son: " +"\n"+indice[0]+"\n"+ indice[1] +"\n"+indice[2]);



for (let i=0; i<3; i++) {
    var valor =document.getElementById(imagenes[i]);
    valor.setAttribute("src", nombres_certificados[indice[i]]);
    
}


for(let i of secciones){
        if(ver!==i){
            var ocultar=document.getElementById(i).style.display="none";
        }else{
            var ocultar=document.getElementById(i).style.display="block";
        }
    }
}

