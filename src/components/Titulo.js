import React, { Component } from 'react';
// si escribo rcc se crea el cassComponent
class Titulo extends Component {
    render() {
        return (
            <h1 className= 'text-center display-3 text-light'>Lista de Tareas</h1>
        );
    }
}

export default Titulo;