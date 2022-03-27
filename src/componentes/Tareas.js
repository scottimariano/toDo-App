import React from 'react';
import Tarea from './Tarea';
import shortid from 'shortid';

let newTaskTitlePreview = ''
let newTaskDescPreview = ''
let  emptyTodo = {
    id:'', 
    name: '', 
    descripcion: '', 
    completed: '',
    }


class Tareas extends React.Component {
    previewDesc (e) {
        newTaskDescPreview = e.target.value
    }

    previewTitle (e) {
        newTaskTitlePreview = e.target.value     
    }

    sendTodo (){
        let newTodo = {}
        newTodo.id = shortid.generate();
        newTodo.name = newTaskTitlePreview;
        newTodo.descripcion = newTaskDescPreview;
        newTodo.completed = false;
        this.props.operations.addTodo(newTodo);
    }
  

    render () {
        return (
            <div>
                <h3>
                    Tasks
                    <small class="text-muted"> - Let us help you - </small>
                </h3>
                {this.props.toDos.length ? null : <div>You don't have any pending tasks. <br/> If you can think of any, just write it down here</div>}
                <div class="row g-2">
                    {this.props.toDos.map((toDo) => (
                        <Tarea key={toDo.id} tareaId={toDo.id} tareaName={toDo.name} tareaDescripcion={toDo.descripcion} tareaCompleted={toDo.completed} handleChange={this.props.operations.handleChangeCompleted} operations={this.props.operations}/>
                        ))
                    }
                </div>
                <div>
                    <br/>
                    <br/>
                    <h3>
                        Maybe a new one??
                        <small class="text-muted"> - write it down - </small>
                    </h3>

                    <div class="col-5">
                        <div class="p-3 border bg-light">
                            <input class="form-control form-control-sm" type="text" placeholder="Task title" aria-label=".form-control-sm example" onChange={this.previewTitle}/>
                            <input class="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example" onChange={this.previewDesc}/>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end"> 
                                <button type="button" class="btn btn-outline-primary mt-3" onClick={() => this.sendTodo()}>
                                    SAVE
                                </button>  
                                <button type="button" class="btn btn-outline-secondary mt-3">
                                    CLEAR
                                </button>
                            </div>
                        </div>
                    </div>
                        
           
                </div>
            </div>
        );
    }
}

export default Tareas;


