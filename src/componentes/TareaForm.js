import React, { useState } from 'react';
import '../App.css';

const TareaForm = (props) => {

    const [inputText, setImputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manjarFormulario = (event) => {
        setImputText(event.target.value);
    }


    const submit = (event) => {

        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setImputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    }

    return (

        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir Tarea</span>
                <input value={inputText} onChange={manjarFormulario} />
                <button>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Añada una tarea, por favor.</div>
            }
        </div>
    )
}


export default TareaForm;