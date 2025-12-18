
import { useMutation, useSuspenseQuery,useQueryClient } from '@tanstack/react-query'
import { createTodo, todosQueryOptions } from '.'
import { useState } from 'react'

function Todolist() {
  var [newTodo,setNewTodo]=useState('')

  const queryClient = useQueryClient()
  var {data:todos} = useSuspenseQuery(todosQueryOptions)

  const mutation = useMutation({
    mutationFn: createTodo, // <--- We use the imported function here
    onSuccess: () => {
      // Refresh the list immediately after adding
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
  
  return (
    <div>
      <h1 className='text-2xl text-bold'>Todolist</h1>
      <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
      <button onClick={()=>{mutation.mutate({title:newTodo,"status":'not completed'})}}>Add Todo</button>
      <ul>
        {
          todos.map((t)=>{
            return <li key={t.title}>{t.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist