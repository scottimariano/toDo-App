import React from 'react';
import Tarea from './Tarea';

class Tareas extends React.Component {
    constructor(props) {
        super(props)
    };

    render () {
        return (
            <div>
                <h3>
                    Tasks
                    <small class="text-muted"> - Let us help you - </small>
                </h3>
                {this.props.toDos.length ? null : <div>COMENCEMOS POR AGREGAR TAREAS</div>}
                <div class="row g-2">
                    {this.props.toDos.map((toDo) => (
                        <Tarea key={toDo.id} tareaId={toDo.id} tareaDescripcion={toDo.descripcion} tareaCompleted={toDo.completed} handleChange={this.props.handleChange}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Tareas;


