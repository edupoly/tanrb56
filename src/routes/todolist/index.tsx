import { createFileRoute } from '@tanstack/react-router'
import Todolist from './Todolist'

import { queryOptions } from '@tanstack/react-query'

export const todosQueryOptions = queryOptions({
    queryKey:['todos'],
    queryFn:async ()=>{
        var res = await fetch("http://localhost:3500/todos")
        var data = await res.json()
        return data as Array<any>
    }
})


export const Route = createFileRoute('/todolist/')({
  loader: ({ context: { queryClient } }) => {
      return queryClient.ensureQueryData(todosQueryOptions)
    },
  component: Todolist,
})
