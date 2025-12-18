import { createFileRoute } from '@tanstack/react-router'
import Todolist from './Todolist'

import { mutationOptions, queryOptions } from '@tanstack/react-query'

export const todosQueryOptions = queryOptions({
    queryKey:['todos'],
    queryFn:async ()=>{
        var res = await fetch("http://localhost:3500/todos")
        var data = await res.json()
        return data as Array<any>
    }
})

// 2. Add this NEW logic for POST (adding a todo)
export const createTodo = async (todo: any) => {
    const res = await fetch("http://localhost:3500/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    if (!res.ok) throw new Error('Failed to create todo')
    return res.json()
}

export const Route = createFileRoute('/todolist/')({
  loader: ({ context: { queryClient } }) => {
      return queryClient.ensureQueryData(todosQueryOptions)
    },
  component: Todolist,
})
