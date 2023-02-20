import React, { useState } from 'react'

const Formulario = ({agregar}) => {

    const [title,settitle] = useState();
    const [completed,setcompleted] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        agregar(title,completed)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>settitle(e.target.value)} type="text" name="title" id="title" />
            <input onChange={(e)=>setcompleted(e.target.checked)} type="checkbox" name="completed" id="completed" />
            <input type="submit" value="Agregar" />
        </form>
    )
}

export default Formulario