if(window.location.href == "https://franck021097.github.io/"){location.replace("https://franck021097-github-io.vercel.app/");}

const submit = document.querySelector(".formcontato__botao");
const nota = document.querySelector(".nota");
const nota_titulo = document.querySelector("#nota");

submit.addEventListener('click', (evento)=>{
    
    nota_titulo.classList.add("nota_activa");
    obtenerRegistro(evento);
})


async function obtenerRegistro(evento){

    // evento.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value;

    const fecha = new Date();

    try{
        const respuesta = await enviarFormulario(nombre,email,asunto,mensaje,fecha);
        nota.style.display = "block";

        if(!respuesta.ok){
            console.log(respuesta.ok)
            throw e;
        }
    }catch(e){
        console.log(e);
    }

    
}


async function enviarFormulario(nombre,email,asunto,mensaje,fecha){
    const conexion= await fetch("https://apiportafolio.vercel.app/registros",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje,
        fecha: fecha
    }),
    });

    return conexion;

}