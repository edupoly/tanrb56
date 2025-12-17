
import { useSuspenseQuery } from '@tanstack/react-query'
import { todosQueryOptions } from '.'

function Todolist() {
var {data:todos} = useSuspenseQuery(todosQueryOptions)
  return (
    <div>
      <h1 className='text-2xl text-bold'>Todolist</h1>
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