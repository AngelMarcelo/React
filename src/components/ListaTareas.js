import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import Subtitulo from "./Subtitulo";
import Titulo from "./Titulo";

const ListaTareas = (props) => {
  return (
    <>
      <ListGroup className="my-5">
        {props.arregloTareas.map((item, posicion) => (
          <ItemTarea key={posicion} tarea={item}></ItemTarea>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaTareas;
