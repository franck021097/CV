function calcular(){
    limpiar();
    var contenedor = document.getElementById("Codigo");
    var entrada = document.getElementById("entrada").value;
    new QRCode(contenedor, entrada);
    
}

function limpiar(){
    var contenedor = document.getElementById("Codigo");
    var child = document.querySelectorAll("#codigo > img");
    var limpiando = contenedor.removeChild(child);
}