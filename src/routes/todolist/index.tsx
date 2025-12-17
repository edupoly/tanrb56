import { createFileRoute } from '@tanstack/react-router'
import Todolist from './Todolist'

export const Route = createFileRoute('/todolist/')({
  component: Todolist,
})
