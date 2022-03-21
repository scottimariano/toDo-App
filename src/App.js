import './App.css';
import Tarea from './Tarea.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TUS TAREAS</h1>
        <nav>
          <ul class='navigationBar'>
            <li>Tareas</li>
            <li>Contactos</li>
            <li>Notas</li>
          </ul>
        </nav>
        
      </header>
      <div>
        <h2>TAREAS PENDIENTES</h2>
        <Tarea tareaId='1' />
        <Tarea tareaId='2' />
        <Tarea tareaId='3' />
        <Tarea tareaId='4' />
      </div>
      <div>
        <h2>Crear nueva tarea</h2>
        <input type='text' placeholder='Ingresa el nombre de tu tarea'></input>
        <input type='text' placeholder='Ingresa la descripción de tu tarea'></input>
        <button>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;
