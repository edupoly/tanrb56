import { createFileRoute } from '@tanstack/react-router'
import Counter from './Counter'

export const Route = createFileRoute('/counter/')({
  component: Counter,
})
