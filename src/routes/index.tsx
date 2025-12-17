import Counter from '@/routes/counter/Counter'
import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  
  return (
    <div className="min-h-screen m-3 border p-3">
      <h1>Hello Edupoly</h1>
    </div>
  )
}
