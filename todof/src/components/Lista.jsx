import React from 'react'

const Lista = ({todolist}) => {
  return (
    <div>
        <ul>
            {todolist.map(todo=>(
                <li>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lista