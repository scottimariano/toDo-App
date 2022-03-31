import React from 'react';
import Tareas from './componentes/Tareas';
import NavBar from './componentes/NavBar';
import {Routes, Route} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //toDos: [],
      toDos: [{id:0, name: 'Task 1', descripcion: 'Description Task 1 test', completed: false}, {id:1, name: 'Task 2', descripcion: 'Description Task 2 test',completed: false}, {id:2, name: 'Task 3', descripcion: 'Description Task 3 test', completed: true}],
      
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
        <Routes>
          <Route path='/tasks' element={<Tareas toDos={this.state.toDos} operations={this.state.operations}/>} />
          <Route path='/notes' element={<h1>NOTES</h1>} />
          <Route path='/contacts' element={<h1>CONTACTS</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;