import React from "react";

function Opciones({ id, texto, }) {
    return (
        <label for={id}>
        <a
            id={id}
          href="/"
          >
            {texto}
        </a>
        </label>
    );
}

export default Opciones;
