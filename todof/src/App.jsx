import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {

  const [todolist, settodolist] = useState([]);
  const [todo, settodo] = useState({});

  const traerData = async() => {
    const res = await fetch('http://localhost:3000/api/todo');
    const data = await res.json();
    settodolist(data);
  }
  const actualizarData = async() => {
    const res = await fetch('http://localhost:3000/api/todo');
    const data = await res.json();
  }

  useEffect(() => {
    traerData()
  }, []);

  useEffect(() => {
    traerData()
  }, [])

  const agregar = (title,completed) => {
    settodo({title,completed});
  }

  return (
    <main>
      <Formulario agregar={agregar}></Formulario>
      <Lista todolist={todolist} ></Lista>
    </main>
  )
}

export default App
