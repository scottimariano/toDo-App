import React from 'react';
import Tareas from './componentes/Tareas';
import NavBar from './componentes/NavBar';
import {Link, BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: [{id:0, name: 'Tarea1', descripcion: 'Descripcion Tarea 1 test', completed: false}, {id:1, name: 'Tarea 2', descripcion: 'Descripcion Tarea 2 test',completed: false}, {id:2, name: 'Tarea 3', descripcion: 'Descripcion Tarea 3 test', completed: true}],
    }
  }
  
  handleChange = (i) => {
    console.log(this.state.toDos[i].completed)
    var newtoDos = this.state.toDos;
    newtoDos[i].completed = !newtoDos[i].completed;
    this.setState({toDos: newtoDos})
  } 

  


  render () {
    return (
      <div class="container">
        <header>
          <NavBar />    
        </header>
        <Tareas toDos={this.state.toDos} handleChange={this.handleChange}/>
        
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
