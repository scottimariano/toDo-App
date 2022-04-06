import React from 'react';
import Tarea from './Tarea';
import Form from './Form'

class Tareas extends React.Component {
    render () {
        return (
            <div>
                <h2>
                    Tasks    
                </h2>
                {this.props.toDos.length ? null : <div>You don't have any pending tasks. <br/> If you can think of any, just write it down here</div>}
                <br/>
                <h5>
                    Maybe a new one??
                </h5>
                <Form operations={this.props.operations}></Form>  
                <div class="row g-2 mt-2">
                        {this.props.toDos.map((toDo) => (
                            <Tarea key={toDo.id} tareaId={toDo.id} tareaName={toDo.title} tareaDescripcion={toDo.body} tareaCompleted={toDo.completed} handleChange={this.props.operations.handleChangeCompleted} operations={this.props.operations}/>
                            ))
                        }
                </div>
            
            </div>
        );
    }
}

export default Tareas;


