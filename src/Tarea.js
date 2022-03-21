import React from 'react';


function Tarea(props) {
    return (
    <div>
        <h3>TAREA {props.tareaId}</h3>
        <p>{props.tareaDescripcion} </p>
    </div>
    );
}


export default Tarea