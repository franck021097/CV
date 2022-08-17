import React, { useState } from "react";
import "../hojasDeEstilo/BotonMenu.css";
import ImagenMenu from "./imagenMenu";


function BotonMenu(icono) {

    const [valor, setValor] = useState(true);

    const CambiarIconoMenu = () => {
        if (valor){
            setValor( false );
        }else{
            setValor( true );
        }
    } 

    return (
        // <!-- Botones de ver y ocultar menu -->
        <div className="nav__iconoMenu">
            <div
                className="nav__iconoMenu-logo1"
                onClick={CambiarIconoMenu}
            >
            <ImagenMenu
                verIcono={valor}
            />

            </div>
        </div>
    );
}

export default BotonMenu;
