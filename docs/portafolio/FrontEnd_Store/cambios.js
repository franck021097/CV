var unidades = document.querySelectorAll('.unidades');
var decimales = document.querySelectorAll('.decimales'); 


for(let i of unidades){
    i.innerHTML=Math.floor(Math.random()*(10-5)+5);
    } 


for(let i of decimales){
    i.innerHTML=Math.floor(Math.random()*99);
    } 