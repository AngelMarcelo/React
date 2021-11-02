import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Subtitulo from './Subtitulo';
import Titulo from './Titulo';

const ListaTareas = () => {
    return (
        <>
         <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
<section>
    <div>
        <Titulo></Titulo>
        <Subtitulo></Subtitulo>

    </div>
</section>
        </>
       
    );
};

export default ListaTareas;