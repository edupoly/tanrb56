import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
      <ul className='p-3 flex gap-3'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/counter"><li>Counter</li></Link>
        <Link to="/todolist"><li>Todolist</li></Link>
        <Link to="/products"><li>Products</li></Link>
      </ul>
    </>
  )
}
