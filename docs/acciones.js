function ver(ver){
var secciones=["experiencia", "objetivo","experiencia","interes","educacion","Información_personal","idiomas",
"aptitudes","proyectos"];
				  
    
    for(let i of secciones){
        if(ver!==i){
            console.log("if\n el valor de i es: "+i);
            var ocultar=document.getElementById(i).style.display="none";
        }else{
            var ocultar=document.getElementById(i).style.display="block";
            console.log("else "+i);
        }
    }
}
