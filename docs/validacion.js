const submit = document.querySelector(".formcontato__botao");

submit.addEventListener('click', (evento)=>{
    
    nota.classList.add("nota_activa");
    obtenerRegistro(evento);
})


async function obtenerRegistro(evento){

    evento.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value;

    const fecha = new Date();

    try{
        const respuesta = await enviarFormulario(nombre,email,asunto,mensaje,fecha);

        if(respuesta.ok) console.log(respuesta.ok)
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