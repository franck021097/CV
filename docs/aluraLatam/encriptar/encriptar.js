function encriptar() {
  let entrada = document.getElementById("entrada");
  let mensajeOculto = "";
  let titulo = document.getElementById("titulo");
  let salida = document.getElementById("salida");
  let contador = 0;

  if(entrada.value != "") {
    for(i = 0; i<entrada.value.length; i++){
      if(entrada.value.charCodeAt(i) != 32 && entrada.value.charCodeAt(i) != 10 ){
        i=entrada.value.length;
        let avanzar = caracteresPermitidos(entrada.value);
        if(avanzar) {
          contador=0;
          while (contador < entrada.value.length) {
            mensajeOculto +=
              entrada.value[contador] == "a"
                ? //valor si "a" se encuentra
                  (entrada.value[contador] = "ai")
                : //si no encuentra a "a" busca "e"
                entrada.value[contador] == "e"
                ? //valor si "e" se encuentra
                  (entrada.value[contador] = "enter")
                : //si no encuentra a "e" busca "i"
                entrada.value[contador] == "i"
                ? //valor si "i" se encuentra
                  (entrada.value[contador] = "imes")
                : //si no encuentra a "i" busca "o"
                entrada.value[contador] == "o"
                ? //valor si "o" se encuentra
                  (entrada.value[contador] = "ober")
                : //si no encuentra a "o" busca "u"
                entrada.value[contador] == "u"
                ? //valor si "u" se encuentra
                  (entrada.value[contador] = "ufat")
                : //valor no final devuelve la letra inicial
                  entrada.value[contador];
    
            contador++;
          }
          titulo.innerHTML = "Tu mensaje oculto es:";
          salida.innerHTML = mensajeOculto;
        } else {
          alert("Solo letras minúsculas y sin acentos");
          break;
        }
      }else{
        if(i==entrada.value.length-1){
          alert("No puedo encriptar mensajes sin texto");
        }else{
          continue;
        }
      }
    }
  }else{
    alert("No puedo encriptar mensajes sin texto");
  }
}

function caracteresPermitidos(mensaje) {
  contador = 0;
  while(contador < mensaje.length) {
    if ( ( mensaje.charCodeAt(contador) >= 97 && mensaje.charCodeAt(contador) <= 122) || mensaje.charCodeAt(contador) == 32 || mensaje.charCodeAt(contador) == 10 ) {
      contador++;
    } else {
      return 0;
    }
  }
  return 1;
}

function desencriptar() {
  let mensajeOriginal;
  titulo.innerHTML = "Tu mensaje original es:";
  salida.innerHTML = mensajeOriginal;
}
