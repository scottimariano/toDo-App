import React, {useState, useEffect} from 'react';
import Tareas from './componentes/Tareas';
import NavBar from './componentes/NavBar';
import {Routes, Route} from "react-router-dom";

function App() {
  let [toDos, setTodos] = useState([]);

  const operations = {   
    handleChangeCompleted : (i) => {
      let newToDos = toDos;
      const index = newToDos.findIndex(toDo => {return toDo.id === i})
      newToDos[index].completed = !newToDos[index].completed;
      setTodos(toDos = newToDos)
    },
        
    addTodo : (data) => {
      let nuevoToDo= toDos;
      nuevoToDo.push(data)
      setTodos(nuevoToDo)
    },

    deleteTodo : (id) => {
      let newToDos = toDos;
      const filteredTodos = newToDos.filter(toDo => toDo.id !== id )
      setTodos(toDos = filteredTodos)
    }
  }
  

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     toDos: [],
  //     //toDos: [{id:0, name: 'Task 1', descripcion: 'Description Task 1 test', completed: false}, {id:1, name: 'Task 2', descripcion: 'Description Task 2 test',completed: false}, {id:2, name: 'Task 3', descripcion: 'Description Task 3 test', completed: true}],
      
  //       
  //     }
  //   }
  // }

  function cargarToDos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.slice(0,5)) // solo cargamos los primeros 5 de jsonplaceholder (que son 100!)
      });
  }

  useEffect(() => {
    cargarToDos()
  },[])
     
  return (
    <div class="container">
      <header>
        <NavBar />    
      </header>
      <Routes>
        <Route path='/tasks' element={<Tareas toDos={toDos} operations={operations}/>} />
        <Route path='/notes' element={<h1>NOTES</h1>} />
        <Route path='/contacts' element={<h1>CONTACTS</h1>} />
        <Route path='/' element={<h1>HOMEPAGE</h1>}/>
      </Routes>
    </div>
  );

}

export default App;