import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import ItemTarea from "./ItemTarea";

const FormTareas = () => {
  // crear los state que se necesiten
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState([]);
  //const altaTarea = (e) => {
    //console.log(e.target.value);
    // como guardamos dentro del state
   // setTareaIndividual(e.target.value);
   // };
   const handlSubmit = (e) =>{
     e.preventDefault();
     // guardar una tarea en el arreglo de tareas
     setTareas([...tareas, tareaIndividual])
     // limpiar input
     setTareaIndividual('');
   }
 
   const borrarTarea = (nombre)=>{
     let arregloModificado = tareas.filter((item)=> != nombre );
     //console.log(arregloModificado);
     setTareas(arregloModificado);
   }


  return (
    <>
      <Form className="container my-5" onSubmit={handlSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => {
              setTareaIndividual(e.target.value);
            }}
              value ={tareaIndividual}
          
          />

          <Button variant="secondary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <ListaTareas arregloTareas ={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
