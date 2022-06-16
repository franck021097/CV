function Incriptar() {
    var entrada = document.getElementById("Entrada").value;
    var indiceEntrada;
    var D1 = "aeiou hlmn";
    var salida ="";
    var tamanioEntrada = 0;
    
    if(entrada==""){
        var Resultado= document.getElementById("final");
    Resultado.innerHTML="Ingresa algun valor";
    }else{
    do{
        for(var i = 0; i < D1.length; i++) {
            if(entrada[tamanioEntrada] == D1[i]) {
               salida+= i;
                i = D1.length;
                console.log("entra al if");
               }else if(i==D1.length-1){
                   salida+= entrada[tamanioEntrada];
               }
        }
        tamanioEntrada++;
    }while(tamanioEntrada<entrada.length);
    console.log("el tamaño de la salida es: " + salida.length + "\nel tamaño de la entrada es: " + entrada.length);
    console.log("la entrada es: " + entrada + "\nla salida es: " + salida + "\nel valor de tamanio entrada queda en: "+ tamanioEntrada);
    
    var Resultado= document.getElementById("final");
    Resultado.innerHTML=salida;
    }
}

function Desincriptar(){
    var entrada = document.getElementById("Entrada").value;
    var indiceEntrada;
    var D1 = "aeiou hlmn";
    var salida ="";
    var tamanioEntrada = 0;
    if(entrada==""){
        var Resultado= document.getElementById("final");
    Resultado.innerHTML="Ingresa algun valor";
    }else{
    do{
        for(var i = 0; i < D1.length; i++) {
            if(entrada[tamanioEntrada] == i) {
               salida+= D1[i];
                i = D1.length;
                console.log("entra al if");
               }else if(i==D1.length-1){
                   salida+=entrada[tamanioEntrada];
               }
        }
        tamanioEntrada++;
    }while(tamanioEntrada<entrada.length);
    console.log("el tamaño de la salida es: " + salida.length + "\nel tamaño de la entrada es: " + entrada.length);
    console.log("la entrada es: " + entrada + "\nla salida es: " + salida + "\nel valor de tamanio entrada queda en: "+ tamanioEntrada);
    
    var Resultado= document.getElementById("final");
    Resultado.innerHTML=salida;
    }
}