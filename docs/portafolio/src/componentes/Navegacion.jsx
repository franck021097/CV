import React from "react";
import Opciones from "./Opciones";
import '../hojasDeEstilo/Navegacion.css';
import { AiFillMessage } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";

function Navegacion() {
    return (
        <div className="nav__opciones">
            <Opciones id="Contactar" texto="Contactar" />
            <Opciones id="CV" texto="Curriculum vitae"/>
            <AiOutlineFileText className="icono"/>
            <Opciones id="Proyectos" texto="Proyectos"/>
            <Opciones id="Habilidades" texto="Habilidades"/>
        </div>
    );
}


export default Navegacion;