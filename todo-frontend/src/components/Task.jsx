import { useState } from "react";
import "../assets/task.css";
export default function Task(props) {
    return (
        <div>
            <h4>{props.id} - {props.name}</h4>
            <span>Descripcion: {props.description}</span>
            <br />
            <span>Fecha: {props.date}</span>
            <br />
            <span>Duracion: {props.duration} Minutos</span>
            <br />
            <span>Servicio: {props.type} </span>
            <br />
            {/* <button id="boton-naranja" onClick={putTask(props.id)}>Editar</button>
      <button id="boton-rojo">Eliminar</button>
      <button id="boton-verde">{props.boton}</button> */}
        </div>
    );
}