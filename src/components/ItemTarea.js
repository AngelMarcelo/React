import React from 'react';
import {ListGroup } from "react-bootstrap";


const ItemTarea = (props) => {
    return (
        <ListGroup.Item className="my-5">{props.tarea}</ListGroup.Item>
        
    );
};

export default ItemTarea;