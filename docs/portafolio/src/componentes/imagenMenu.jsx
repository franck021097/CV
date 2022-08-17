import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";


function ImagenMenu({ verIcono, icono }) {
    if(verIcono){
        return (
            <div>
                <AiOutlineMenu className="icono"/>
            </div>
        );
    }else{
        return (
            <div>
                <AiFillCloseCircle className="icono"/>
            </div>
        );
    }
}

export default ImagenMenu;
