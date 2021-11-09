import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import ItemTarea from './ItemTarea';


const FormTareas = () => {

  // crear los state que se necesiten
  const [tareaIndividual, setTareaIndividual] = useState('');
  
    return (
       <>
            <Form className="container my-5">
             <Form.Group className="mb-3 d-flex">
               <Form.Control type="text" placeholder="Ingrese una tarea" />
              
               <Button variant="secondary" type= "submit">Agregar</Button>
             
             </Form.Group>
            </Form>
            <section className="container">
                <ListaTareas>

                </ListaTareas>
            </section>
       </>
    );
};

export default FormTareas;