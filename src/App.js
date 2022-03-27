import React from 'react';
import Tareas from './componentes/Tareas';
import NavBar from './componentes/NavBar';
import {Link, BrowserRouter, Route} from 'react-router-dom'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //toDos: []
      toDos: [{id:0, name: 'Tarea1', descripcion: 'Descripcion Tarea 1 test', completed: false}, {id:1, name: 'Tarea 2', descripcion: 'Descripcion Tarea 2 test',completed: false}, {id:2, name: 'Tarea 3', descripcion: 'Descripcion Tarea 3 test', completed: true}],
      
      operations: {
        handleChangeCompleted : (i) => {
          let newtoDos = this.state.toDos;
          const index = newtoDos.findIndex(toDo => {return toDo.id === i})
          newtoDos[index].completed = !newtoDos[index].completed;
          this.setState({toDos: newtoDos})
        },
        
        addTodo : (data) => {
          let newTodos = this.state.toDos;
          newTodos.push(data);
          this.setState({toDos : newTodos})
        }, 

        deleteTodo : (id) => {
          let newTodos = this.state.toDos;
          const filteredTodos = newTodos.filter(toDo => toDo.id !== id )
          this.setState({toDos : filteredTodos})
        }

      }
    }
    
  }


  render () {
    return (
      <div class="container">
        <header>
          <NavBar />    
        </header>
        <Tareas toDos={this.state.toDos} operations={this.state.operations}/>
      </div>
    );
  }
}

export default App;
