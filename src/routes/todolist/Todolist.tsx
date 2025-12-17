
import React from 'react'

function Todolist() {
  const [todos,setTodos] = React.useState(['goto goa','play cricket','buy books'])
  return (
    <div>
      <h1>Todolist</h1>
      <ul>
        {
          todos.map((t)=>{
            return <li>{t}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist