import React from 'react';

class Tarea extends React.Component {

    render () {
        return (
                <div class="col-5">
                    <div class="p-3 border bg-light">
                        <div>{this.props.tareaName}</div>
                        <div>{this.props.tareaDescripcion}</div>
                        <div class="form-check form-switch mt-3">
                            <input 
                                class="form-check-input"
                                type="checkbox" role="switch" 
                                id={"checkbox_tarea" + this.props.tareaId} 
                                onChange={() => this.props.handleChange(this.props.tareaId)}
                                defaultChecked={this.props.tareaCompleted}
                            />
                            <label class={"form-check-label " + (this.props.tareaCompleted ? '' : 'text-muted')} 
                                for={"checkbox_tarea" + this.props.tareaId}>
                                {(this.props.tareaCompleted ? 'Done' : 'Pending')}
                            </label>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn btn-sm btn-outline-secondary mt-3 " onClick={() => this.props.operations.deleteTodo(this.props.tareaId)}>
                                    DELETE
                                </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
        );
    }
}


export default Tarea;