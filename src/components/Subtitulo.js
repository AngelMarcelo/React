import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
// para crear un componente funcional uso rsc
const Subtitulo = (props) => {
    // aqui va la logica
    return (
        // aca va el maquetado y un poquito de logica
        
            <h3 className=  'text-center display-3 text-light'>Tareas de la comision {props.comision}</h3>
    
    );
};

export default Subtitulo;