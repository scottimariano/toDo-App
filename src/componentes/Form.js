import React from 'react';
import shortid from 'shortid';

let newTaskTitlePreview = '';
let newTaskDescPreview = '';

class Form extends React.Component {
    previewDesc (e) {
        newTaskDescPreview = e.target.value
    }

    previewTitle (e) {
        newTaskTitlePreview = e.target.value     
    }

    sendTodo (){
        let newTodo = {}
        newTodo.id = shortid.generate();
        newTodo.title = newTaskTitlePreview;
        newTodo.body = newTaskDescPreview;
        newTodo.completed = false;
        this.props.operations.addTodo(newTodo);
        document.getElementById("myForm").reset();
    }
  
    render () {
        return (
            <div class="col-7">
                    <div class="p-3 border bg-light">
                    <form id='myForm' onSubmit={() => this.sendTodo()}>
                        <input class="form-control form-control-sm" type="text" placeholder="Task title" aria-label=".form-control-sm example" onChange={this.previewTitle} required/>
                        <input class="form-control form-control-sm mt-2" type="text" placeholder="Description" aria-label=".form-control-sm example" onChange={this.previewDesc} required/>
                        <div class="d-flex justify-content-end">
                            <input type="submit" class="btn btn-sm btn-outline-primary mt-2 me-2" value='SAVE'/>
                            <input type="reset" class="btn btn-sm btn-outline-secondary mt-2" value='CLEAR' />
                        </div>
                    </form>
                    </div>
            </div>            

        );
    }
}

export default Form;


