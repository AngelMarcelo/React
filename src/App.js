import "./App.css";
import Titulo from './components/Titulo';
import './App.css';
import Subtitulo from './components/Subtitulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTareas from "./components/FormTareas";
import ItemTarea from "./components/ItemTarea";

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision='17i'  estado={true}/>
      <FormTareas></FormTareas>
    </div>
  );
}

export default App;
