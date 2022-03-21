import React from 'react';
import './App.css';
import Tarea from './Tarea.js';

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    toDos: [{id:1, name: 'Tarea1', descripcion: 'Descripcion Tarea 1 test'}, {id:2, name: 'Tarea 2', descripcion: 'Descripcion Tarea 2 test'}]
  }
}

  render () {
    return (
      <div className="App">
        <header>
          <h1>TUS TAREAS</h1>
          <nav>
            <ul className='navigationBar'>
              <li>Tareas</li>
              <li>Contactos</li>
              <li>Notas</li>
            </ul>
          </nav>
          
        </header>
        <div>
          <h2>TAREAS PENDIENTES</h2>
          {this.state.toDos.length ? null : <div className='notificacion'>COMENCEMOS POR AGREGAR TAREAS</div>}
          {this.state.toDos.map(function(toDo){
            return <Tarea key={toDo.id} tareaId={toDo.id} tareaDescripcion={toDo.descripcion} />
          })
          }
        </div>
        <div>
          <br/>
          <br/>
          <h2>Crear nueva tarea</h2>
          <input type='text' placeholder='Ingresa el nombre de tu tarea'></input>
          <input type='text' placeholder='Ingresa la descripción de tu tarea'></input>
          <button>Agregar Tarea</button>
        </div>
      </div>
    );
  }
}

export default App;
